import React, { useState, useEffect } from "react";
import { Paper, TextField, Button, Typography, Grid } from "@mui/material";
import "../EditEmployee/EditEmployee.css";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const EditEmergencyContact = (props) => {
  const { emergencyContact, handleClose, show } = props;
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [firstName, setFirstName] = useState(emergencyContact.first_name);
  const [lastName, setLastName] = useState(emergencyContact.last_name);
  const [phoneNumber, setPhoneNumber] = useState(emergencyContact.phone_number);
  const [userObj, setUserObj] = useState(emergencyContact.user);
  const [user, token] = useAuth();

  useEffect(() => {
    setFirstName(emergencyContact.first_name);
    setLastName(emergencyContact.last_name);
    setPhoneNumber(emergencyContact.phone_number);
    setUserObj(emergencyContact.user);
  }, [emergencyContact]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedContact = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      user_id: userObj.id,
    };
    console.log("Updated Emergency Contact", updatedContact);
    await axios
      .put(
        `http://localhost:8000/emergencyContact/${emergencyContact.id}/`,
        updatedContact,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(alert("Emergency Contact Updated!"));
    handleClose();
    window.location.reload();
  };

  return (
    <div className={showHideClassName}>
      <Paper>
        <section className="modal-main">
          <Typography
            variant="h5"
            color="white"
            sx={{
              textAlign: "center",
              py: "10px",
              backgroundColor: "#ffc163",
              boxShadow: 3,
              mx: "-15px",
              mt: "-15px",
            }}
          >
            Edit Emergency Contact
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid
              container
              justifyContent="center"
              rowSpacing={2}
              sx={{ mt: 2 }}
            >
              <Grid item xs={4}>
                <TextField
                  name="first_name"
                  variant="outlined"
                  size="small"
                  label="First Name"
                  value={emergencyContact.first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  sx={{ ml: 2, width: "75%" }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="last_name"
                  variant="outlined"
                  size="small"
                  label="Last Name"
                  value={emergencyContact.last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  sx={{ width: "75%" }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="phone_number"
                  variant="outlined"
                  size="small"
                  label="Phone Number"
                  value={emergencyContact.phone_number}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  sx={{ width: "75%" }}
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#ffc163",
                    "&:hover": { backgroundColor: "#ffb74a" },
                  }}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleClose}
                  sx={{
                    backgroundColor: "#ffc163",
                    "&:hover": { backgroundColor: "#ffb74a" },
                  }}
                >
                  Close
                </Button>
              </Grid>
            </Grid>
          </form>
        </section>
      </Paper>
    </div>
  );
};

export default EditEmergencyContact;
