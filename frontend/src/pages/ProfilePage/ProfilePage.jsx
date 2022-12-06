import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import Container from "@mui/material/Container";

const ProfilePage = (props) => {
  const [user, token] = useAuth();
  const [emergencyContact, setEmergencyContact] = useState("");
  const [userAddress, setUserAddress] = useState([]);

  useEffect(() => {
    getEmergencyContact();
    getUserAddress();
  }, []);

  const getEmergencyContact = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/emergencyContact/${user.id}/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEmergencyContact(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addEmergencyContact = async (infoToBeAdded) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/emergencyContact/",
        infoToBeAdded,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 201) getEmergencyContact();
    } catch (error) {
      console.log(error);
    }
  };

  const updateEmergencyContact = async (updatedInfo) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/emergencyContact/${user.id}/`,
        updatedInfo,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 200) getEmergencyContact();
    } catch (error) {
      console.log(error);
    }
  };

  const getUserAddress = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/address/${user.id}/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUserAddress(response.data);
    } catch (error) {
      console.log("address not found", error);
    }
  };

  const addUserAddress = async (addressObj) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/address/",
        addressObj,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 201) getUserAddress();
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserAddress = async (updatedAddress) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/address/${user.id}/`,
        updatedAddress,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 200) getUserAddress();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Container>
        <ProfileMenu
          emergencyContact={emergencyContact}
          addEmergencyContact={addEmergencyContact}
          updateEmergencyContact={updateEmergencyContact}
          userAddress={userAddress}
          addUserAddress={addUserAddress}
          updateUserAddress={updateUserAddress}
        />
      </Container>
    </div>
  );
};

export default ProfilePage;
