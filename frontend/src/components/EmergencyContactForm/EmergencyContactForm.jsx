import React, { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import useAuth from "../../hooks/useAuth";

const EmergencyContactForm = (props) => {
  const { callBack } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user, token] = useAuth();

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
    <Container sx={{ ml: "27%" }}>
      <Paper
        elevation={4}
        sx={{
          backgroundColor: "#fff0d8",
          my: 2,
          maxWidth: "450px",
          minWidth: "450px",
        }}
      >
        <Typography align="center">
          <b>Emergency Contact Information</b>
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <TextField
              id="first_name"
              label="First Name"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              sx={{ my: 1, mx: 1, backgroundColor: "white" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="last_name"
              label="Last Name"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              sx={{ my: 1, mx: 1, backgroundColor: "white" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="phone_number"
              label="Phone Number"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              sx={{ marginBottom: 1, mx: 1, backgroundColor: "white" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Grid container justifyContent="center">
              <Button
                variant="contained"
                type="submit"
                onClick={handleSubmit}
                sx={{
                  backgroundColor: "#ffc163",
                  "&:hover": { backgroundColor: "#ffb74a" },
                  my: 1,
                  minWidth: "200px",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default EmergencyContactForm;
