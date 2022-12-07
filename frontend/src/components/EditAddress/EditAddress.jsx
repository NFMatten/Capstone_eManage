import React, { useState, useEffect } from "react";
import "../EditEmployee/EditEmployee.css";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const EditAddress = (props) => {
  const { address, handleClose, show } = props;
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [street, setStreet] = useState(address.street_address);
  const [city, setCity] = useState(address.city);
  const [state, setState] = useState(address.state);
  const [zip, setZip] = useState(address.zip);
  const [userObj, setUserObj] = useState(address.user);
  const [user, token] = useAuth();

  useEffect(() => {
    setStreet(address.street_address);
    setCity(address.city);
    setState(address.state);
    setZip(address.zip);
    setUserObj(address.user);
  }, [address]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedAddress = {
      street_address: street,
      city: city,
      state: state,
      zip: zip,
      user_id: userObj.id,
    };
    console.log("Updated Address", updatedAddress);
    await axios
      .put(`http://localhost:8000/address/${address.id}/`, updatedAddress, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(alert("Address Updated!"));
    handleClose();
    window.location.reload();
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <form onSubmit={handleSubmit}>
          <h1>Edit Address</h1>
          <label>Street Address</label>
          <input
            name="street_address"
            onChange={(e) => setStreet(e.target.value)}
            defaultValue={address.street_address}
          />
          <label>City</label>
          <input
            name="city"
            onChange={(e) => setCity(e.target.value)}
            defaultValue={address.city}
          />
          <label>State</label>
          <input
            name="state"
            onChange={(e) => setState(e.target.value)}
            defaultValue={address.state}
          />
          <label>Zip Code</label>
          <input
            name="zip"
            onChange={(e) => setZip(e.target.value)}
            defaultValue={address.zip}
          />
          <button type="submit">Update Address</button>
        </form>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default EditAddress;
