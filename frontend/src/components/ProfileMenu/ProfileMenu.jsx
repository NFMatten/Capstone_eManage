import { Paper, Typography, List, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import AddressForm from "../AddressForm/AddressForm";
import DisplayAddress from "../DisplayAddress/DisplayAddress";
import DisplayEmergencyContact from "../DisplayEmergencyContact/DisplayEmergencyContact";
import EmergencyContactForm from "../EmergencyContactForm/EmergencyContactForm";

const ProfileMenu = (props) => {
  const {
    emergencyContact,
    addEmergencyContact,
    updateEmergencyContact,
    userAddress,
    addUserAddress,
    updateUserAddress,
    user,
  } = props;

  return (
    <Grid container justifyContent="center">
      <Paper elevation={4} sx={{ my: 3, minWidth: "50%" }}>
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
          Personal Information
        </Typography>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            textAlign="center"
            sx={{ textDecoration: "underline", textDecorationColor: "orange" }}
          >
            Address
          </Typography>
          <Grid item xs={12}>
            {userAddress.length > 0 ? (
              <List>
                {userAddress.map((address) => (
                  <DisplayAddress
                    {...address}
                    key={address.id}
                    updateUserAddress={updateUserAddress}
                    user={user}
                  />
                ))}
              </List>
            ) : (
              <AddressForm callBack={addUserAddress} />
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ my: 3 }}>
          <Typography
            variant="h5"
            textAlign="center"
            sx={{ textDecoration: "underline", textDecorationColor: "orange" }}
          >
            Emergency Contact
          </Typography>
          <Grid item xs={12}>
            {emergencyContact.length > 0 ? (
              <List>
                {emergencyContact.map((contact) => (
                  <DisplayEmergencyContact
                    {...contact}
                    key={contact.id}
                    updateEmergencyContact={updateEmergencyContact}
                    user={user}
                  />
                ))}
              </List>
            ) : (
              <EmergencyContactForm callBack={addEmergencyContact} />
            )}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ProfileMenu;
