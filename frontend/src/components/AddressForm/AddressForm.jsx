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

const AddressForm = (props) => {
  const { callBack } = props;
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [user, token] = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    callBack({
      street_address: streetAddress,
      city: city,
      state: state,
      zip: zip,
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
          <b>Add or Update your Address</b>
        </Typography>
        <Grid container>
          <Grid item xs={12} sx={{ px: 1 }}>
            <TextField
              id="street_address"
              label="Street Address"
              placeholder="Enter Street Address"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              fullWidth
              sx={{ my: 1, backgroundColor: "white" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="city"
              label="City"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              sx={{ marginBottom: 1, mx: 1, backgroundColor: "white" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="state"
              label="State"
              placeholder="Enter Two Letter State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              sx={{ marginBottom: 1, mx: 1, backgroundColor: "white" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="zip"
              label="Zip Code"
              placeholder="Enter Zip Code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
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

export default AddressForm;
