import React, { useState, useSyncExternalStore } from "react";
import { Paper, TextField, Button, Typography, Container } from "@mui/material";
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
    <Container>
      <Paper elevation={4}>
        <Typography>Add or Update your Address</Typography>
        <TextField
          id="street_address"
          label="Street Address"
          placeholder="Enter Street Address"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
        <TextField
          id="city"
          label="City"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          id="state"
          label="State"
          placeholder="Enter Two Letter State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <TextField
          id="zip"
          label="Zip Code"
          placeholder="Enter Zip Code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
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

export default AddressForm;
