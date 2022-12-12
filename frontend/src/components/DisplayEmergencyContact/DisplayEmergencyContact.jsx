import React, { useState } from "react";
import { Paper, Typography, Container, Grid } from "@mui/material";
import EmergencyContactForm from "../EmergencyContactForm/EmergencyContactForm";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const DisplayEmergencyContact = (props) => {
  const [showForm, setShowForm] = useState(false);
  const { first_name, last_name, phone_number, updateEmergencyContact, user } =
    props;

  const toggleForm = () => setShowForm(!showForm);

  return (
    <Container>
      <Paper elevation={4} sx={{ my: 3, minHeight: 200 }}>
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
          {user.first_name}'s Emergency Contact
        </Typography>
        <Grid container sx={{ marginTop: 2 }}>
          <Grid item xs={7}>
            <Typography variant="h6" sx={{ textAlign: "right" }}>
              {first_name} {last_name}
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "right" }}>
              {phone_number}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Grid container sx={{ paddingTop: 3 }}>
              <IconButton variant="contained" onClick={toggleForm}>
                <EditIcon style={{ color: "orange" }} />
              </IconButton>
            </Grid>
          </Grid>

          {showForm && (
            <EmergencyContactForm callBack={updateEmergencyContact} />
          )}
        </Grid>
      </Paper>
    </Container>
  );
};

export default DisplayEmergencyContact;
