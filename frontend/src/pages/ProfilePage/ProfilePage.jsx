import React, { useState, useEffect } from "react";
import EmergencyContactForm from "../../components/EmergencyContactForm/EmergencyContactForm";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import DisplayEmergencyContact from "../../components/DisplayEmergencyContact/DisplayEmergencyContact";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";

const ProfilePage = (props) => {
  const [user, token] = useAuth();
  const [emergencyContact, setEmergencyContact] = useState("");

  useEffect(() => {
    getEmergencyContact();
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
      // console.log(response.data);
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

  return (
    <div>
      <ProfileMenu
        emergencyContact={emergencyContact}
        addEmergencyContact={addEmergencyContact}
        updateEmergencyContact={updateEmergencyContact}
      />
    </div>
  );
};

export default ProfilePage;
