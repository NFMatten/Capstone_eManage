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
      <Grid container justifyContent="center">
        <Grid item xs={3}>
          <Typography variant="h6" textAlign="center">
            {first_name} {last_name} <br />
            {phone_number}{" "}
            <IconButton variant="contained" onClick={toggleForm}>
              <EditIcon style={{ color: "orange" }} />
            </IconButton>
          </Typography>
        </Grid>

        {showForm && <EmergencyContactForm callBack={updateEmergencyContact} />}
      </Grid>
    </Container>
  );
};

export default DisplayEmergencyContact;
