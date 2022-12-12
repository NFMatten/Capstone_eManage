import React, { useState, useEffect } from "react";
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
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditAddress from "../EditAddress/EditAddress";

const DisplayEmployeeAddresses = (props) => {
  const { addresses, fetchAddresses, fetchUsers } = props;
  const [token] = useAuth();
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState();
  const [address, setAddress] = useState([]);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [toggle, props.toggle]);

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
          <Typography
            variant="h5"
            color="white"
            sx={{
              textAlign: "center",
              py: "10px",
              backgroundColor: "#ffc163",
              boxShadow: 3,
            }}
          >
            Employee Addresses
          </Typography>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Employee
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Street
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    City
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    State
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Zip Code
                  </Typography>
                </TableCell>
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
                    <TableCell padding="none">
                      <IconButton
                        variant="contained"
                        onClick={() => handleEdit(address)}
                        type="button"
                        size="small"
                      >
                        <EditIcon style={{ color: "orange" }} />
                      </IconButton>
                    </TableCell>
                    <TableCell padding="none">
                      <IconButton
                        variant="contained"
                        onClick={() => deleteAddress(address.id)}
                        type="submit"
                        size="small"
                      >
                        <DeleteIcon style={{ color: "orange" }} />
                      </IconButton>
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
