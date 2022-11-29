import React, { useState } from "react";
import { Paper, TextField, Button, Typography, Container } from "@mui/material";
import useAuth from "../../hooks/useAuth";

const EmergencyContactForm = (props) => {
  const { addEmergencyContact, callBack } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user, token] = useAuth();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addEmergencyContact({
  //     first_name: firstName,
  //     last_name: lastName,
  //     phone_number: phoneNumber,
  //     user_id: user.id,
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    callBack({
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      user_id: user.id,
    });
  };

  return (
    <Container>
      <Paper elevation={4}>
        <Typography>Emergency Contact Information</Typography>
        <TextField
          id="first_name"
          label="First Name"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          id="last_name"
          label="Last Name"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          id="phone_number"
          label="Phone Number"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          sx={{ backgroundColor: "#ffc163" }}
        >
          Submit
        </Button>
      </Paper>
    </Container>
  );
};

export default EmergencyContactForm;
