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
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditEmergencyContact from "../EditEmergencyContact/EditEmergencyContact";

const DisplayEmergencyContacts = (props) => {
  const { emergContacts, fetchEmergencyContacts } = props;
  const [user, token] = useAuth();
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState();
  const [emergencyContact, setEmergencyContact] = useState([]);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const handleEdit = (emergencyContact) => {
    setEmergencyContact(emergencyContact);
    showModal();
  };

  const deleteEmergencyContact = async (eContactId) => {
    try {
      await axios.delete(
        `http://localhost:8000/emergencyContact/${eContactId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchEmergencyContacts();
      setToggle(!toggle);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {emergContacts.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Employee</TableCell>
                <TableCell>Contact Name</TableCell>
                <TableCell>Contact Phone Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {emergContacts.map((emergencyContact) => {
                return (
                  <TableRow
                    key={emergencyContact.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      {emergencyContact.user.first_name +
                        " " +
                        emergencyContact.user.last_name}
                    </TableCell>
                    <TableCell>
                      {emergencyContact.first_name} {emergencyContact.last_name}
                    </TableCell>
                    <TableCell>{emergencyContact.phone_number}</TableCell>
                    <TableCell padding="none">
                      <IconButton
                        variant="contained"
                        onClick={() => handleEdit(emergencyContact)}
                        type="button"
                        size="small"
                      >
                        <EditIcon style={{ color: "orange" }} />
                      </IconButton>
                    </TableCell>
                    <TableCell padding="none">
                      <IconButton
                        variant="contained"
                        onClick={() =>
                          deleteEmergencyContact(emergencyContact.id)
                        }
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
          <EditEmergencyContact
            show={show}
            handleClose={hideModal}
            emergencyContact={emergencyContact}
          >
            <p>Edit Emergency Contact</p>
          </EditEmergencyContact>
        </TableContainer>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DisplayEmergencyContacts;
