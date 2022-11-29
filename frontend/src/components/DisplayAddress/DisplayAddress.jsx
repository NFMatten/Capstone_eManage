import React, { useState } from "react";
import { Paper, Typography, Container, Button } from "@mui/material";
import AddressForm from "../AddressForm/AddressForm";
import useAuth from "../../hooks/useAuth";

const DisplayAddress = (props) => {
  const [showForm, setShowForm] = useState(false);
  const { street_address, city, state, zip, updateUserAddress } = props;
  const [user, token] = useAuth();

  const toggleForm = () => setShowForm(!showForm);
  return (
    <Container>
      <Paper elevation={4} sx={{ my: 3 }}>
        <Typography variant="h6">{user.first_name}'s Address</Typography>
        <Typography>
          {street_address}
          <br />
          {city}, {state}
          <br />
          {zip}
        </Typography>
        <Button variant="contained" onClick={toggleForm}>
          Edit Address
        </Button>
        {showForm && <AddressForm callBack={updateUserAddress} />}
      </Paper>
    </Container>
  );
};

export default DisplayAddress;
