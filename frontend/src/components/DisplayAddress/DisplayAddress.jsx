import React, { useState } from "react";
import { Paper, Typography, Container, Grid } from "@mui/material";
import AddressForm from "../AddressForm/AddressForm";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const DisplayAddress = (props) => {
  const [showForm, setShowForm] = useState(false);
  const { street_address, city, state, zip, updateUserAddress, user } = props;

  const toggleForm = () => setShowForm(!showForm);
  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={2}>
          <Typography variant="h6" sx={{ minWidth: "185px" }}>
            {street_address}
            <br />
            {city}, {state}
            <br />
            {zip}
            <IconButton variant="contained" onClick={toggleForm} sx={{ ml: 7 }}>
              <EditIcon style={{ color: "orange" }} />
            </IconButton>
          </Typography>
        </Grid>
        {showForm && <AddressForm callBack={updateUserAddress} />}
      </Grid>
    </Container>
  );
};

export default DisplayAddress;
