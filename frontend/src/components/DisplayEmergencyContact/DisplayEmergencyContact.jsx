import React, { useState } from "react";
import { Paper, Typography, Container, Button } from "@mui/material";
import EmergencyContactForm from "../EmergencyContactForm/EmergencyContactForm";

const DisplayEmergencyContact = (props) => {
  const [showForm, setShowForm] = useState(false);
  const { first_name, last_name, phone_number, updateEmergencyContact } = props;

  const toggleForm = () => setShowForm(!showForm);

  return (
    <Container>
      <Paper elevation={4} sx={{ my: 3 }}>
        <Typography variant="h6">Emergency Contact</Typography>
        <Typography sx={{ marginLeft: "20px" }}>
          {first_name} {last_name}
        </Typography>
        <Typography sx={{ marginLeft: "20px" }}>{phone_number}</Typography>
        <Button variant="contained" onClick={toggleForm}>
          Edit Emergency Contact
        </Button>
        {showForm && <EmergencyContactForm callBack={updateEmergencyContact} />}
      </Paper>
    </Container>
  );
};

export default DisplayEmergencyContact;
