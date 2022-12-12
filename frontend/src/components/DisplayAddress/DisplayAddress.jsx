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
          {user.first_name}'s Address
        </Typography>
        <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
          <Grid item xs={4}>
            <Typography variant="h6">
              {street_address}
              <br />
              {city}, {state}
              <br />
              {zip}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Grid container sx={{ paddingTop: 3 }}>
              <IconButton variant="contained" onClick={toggleForm}>
                <EditIcon style={{ color: "orange" }} />
              </IconButton>
            </Grid>
          </Grid>
          {showForm && <AddressForm callBack={updateUserAddress} />}
        </Grid>
      </Paper>
    </Container>
  );
};

export default DisplayAddress;
