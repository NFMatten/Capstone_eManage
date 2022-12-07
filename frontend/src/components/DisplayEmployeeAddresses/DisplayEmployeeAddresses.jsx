import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import EditAddress from "../EditAddress/EditAddress";

const DisplayEmployeeAddresses = (props) => {
  const { addresses, fetchAddresses } = props;
  const [user, token] = useAuth();
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState();
  const [address, setAddress] = useState([]);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const handleEdit = (address) => {
    setAddress(address);
    showModal();
  };

  const deleteAddress = async (addressId) => {
    try {
      await axios.delete(`http://localhost:8000/address/${addressId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchAddresses();
      setToggle(!toggle);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {addresses.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Employee</TableCell>
                <TableCell>Street</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Zip Code</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {addresses.map((address) => {
                return (
                  <TableRow
                    key={address.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      {address.user.first_name} {address.user.last_name}
                    </TableCell>
                    <TableCell>{address.street_address}</TableCell>
                    <TableCell>{address.city}</TableCell>
                    <TableCell>{address.state}</TableCell>
                    <TableCell>{address.zip}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        onClick={() => handleEdit(address)}
                        type="button"
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        onClick={() => deleteAddress(address.id)}
                        type="submit"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <EditAddress show={show} handleClose={hideModal} address={address}>
            <p>Edit Address</p>
          </EditAddress>
        </TableContainer>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DisplayEmployeeAddresses;
