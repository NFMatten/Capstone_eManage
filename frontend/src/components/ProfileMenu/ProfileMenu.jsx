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
      <Grid item xs={4}>
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
      <Grid item xs={4}>
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
  );
};

export default ProfileMenu;
