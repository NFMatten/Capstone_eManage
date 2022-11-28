import React, { useState, useEffect } from "react";
import EmergencyContactForm from "../../components/EmergencyContactForm/EmergencyContactForm";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const ProfilePage = (props) => {
  const [user, token] = useAuth();
  const [emergencyContact, setEmergencyContact] = useState("");

  const getEmergencyContact = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/emergencyContact/${user.id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEmergencyContact();
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
  return (
    <div>
      <EmergencyContactForm addEmergencyContact={addEmergencyContact} />
    </div>
  );
};

export default ProfilePage;
