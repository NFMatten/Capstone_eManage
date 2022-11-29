import { Paper, Typography, List } from "@mui/material";
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
  } = props;

  return (
    <Container>
      <Paper elevation={4}>
        <Typography sx={{ textAlign: "center" }}>Update Profile</Typography>
        {emergencyContact.length > 0 ? (
          <List>
            {emergencyContact.map((contact) => (
              <DisplayEmergencyContact
                {...contact}
                key={contact.id}
                updateEmergencyContact={updateEmergencyContact}
              />
            ))}
          </List>
        ) : (
          <EmergencyContactForm callBack={addEmergencyContact} />
        )}
        {userAddress.length > 0 ? (
          <List>
            {userAddress.map((address) => (
              <DisplayAddress
                {...address}
                key={address.id}
                updateUserAddress={updateUserAddress}
              />
            ))}
          </List>
        ) : (
          <AddressForm callBack={addUserAddress} />
        )}
      </Paper>
    </Container>
  );
};

export default ProfileMenu;
