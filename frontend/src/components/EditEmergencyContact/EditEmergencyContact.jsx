import React, { useState, useEffect } from "react";
import "../EditEmployee/EditEmployee.css";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const EditEmergencyContact = (props) => {
  const { emergencyContact, handleClose, show } = props;
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [firstName, setFirstName] = useState(emergencyContact.first_name);
  const [lastName, setLastName] = useState(emergencyContact.last_name);
  const [phoneNumber, setPhoneNumber] = useState(emergencyContact.phone_number);
  const [userObj, setUserObj] = useState(emergencyContact.user);
  const [user, token] = useAuth();

  useEffect(() => {
    setFirstName(emergencyContact.first_name);
    setLastName(emergencyContact.last_name);
    setPhoneNumber(emergencyContact.phone_number);
    setUserObj(emergencyContact.user);
  }, [emergencyContact]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedContact = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      user_id: userObj.id,
    };
    console.log("Updated Emergency Contact", updatedContact);
    await axios
      .put(
        `http://localhost:8000/emergencyContact/${emergencyContact.id}/`,
        updatedContact,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(alert("Emergency Contact Updated!"));
    handleClose();
    window.location.reload();
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <form onSubmit={handleSubmit}>
          <h1>Edit Emergency Contact</h1>
          <label>First Name</label>
          <input
            name="first_name"
            onChange={(e) => setFirstName(e.target.value)}
            defaultValue={emergencyContact.first_name}
          />
          <label>Last Name</label>
          <input
            name="last_name"
            onChange={(e) => setLastName(e.target.value)}
            defaultValue={emergencyContact.last_name}
          />
          <label>Phone Number</label>
          <input
            name="phone_number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            defaultValue={emergencyContact.phone_number}
          />
          <button type="submit">Update Contact</button>
        </form>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default EditEmergencyContact;
