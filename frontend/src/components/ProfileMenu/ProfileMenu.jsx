import { Paper, Typography, List } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import DisplayEmergencyContact from "../DisplayEmergencyContact/DisplayEmergencyContact";
import EmergencyContactForm from "../EmergencyContactForm/EmergencyContactForm";

const ProfileMenu = (props) => {
  const { emergencyContact, addEmergencyContact, updateEmergencyContact } =
    props;

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
      </Paper>
    </Container>
  );
};

export default ProfileMenu;
