import React, { useState, useEffect } from "react";
import { Paper, TextField, Button, Typography, Grid } from "@mui/material";
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
      <Paper>
        <section className="modal-main">
          <Typography
            variant="h5"
            color="white"
            sx={{
              textAlign: "center",
              py: "10px",
              backgroundColor: "#ffc163",
              boxShadow: 3,
              mx: "-15px",
              mt: "-15px",
            }}
          >
            Edit Address
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid
              container
              justifyContent="center"
              rowSpacing={2}
              sx={{ mt: 2 }}
            >
              <Grid item xs={5}>
                <TextField
                  name="street_address"
                  variant="outlined"
                  size="small"
                  label="Street Address"
                  value={address.street_address}
                  onChange={(e) => setStreet(e.target.value)}
                  sx={{ ml: 2, width: "75%" }}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  name="city"
                  variant="outlined"
                  size="small"
                  label="City"
                  value={address.city}
                  onChange={(e) => setCity(e.target.value)}
                  sx={{ width: "75%" }}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  name="state"
                  variant="outlined"
                  size="small"
                  label="State"
                  value={address.state}
                  onChange={(e) => setState(e.target.value)}
                  sx={{ ml: 2, width: "75%" }}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  name="zip"
                  variant="outlined"
                  size="small"
                  label="Zip Code"
                  value={address.zip}
                  onChange={(e) => setZip(e.target.value)}
                  sx={{ width: "75%" }}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    ml: -8,
                    backgroundColor: "#ffc163",
                    "&:hover": { backgroundColor: "#ffb74a" },
                  }}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleClose}
                  sx={{
                    ml: -6,
                    backgroundColor: "#ffc163",
                    "&:hover": { backgroundColor: "#ffb74a" },
                  }}
                >
                  Close
                </Button>
              </Grid>
            </Grid>
          </form>
        </section>
      </Paper>
    </div>
  );
};

export default EditAddress;
