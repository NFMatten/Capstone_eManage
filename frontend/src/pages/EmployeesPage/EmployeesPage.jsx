import axios from "axios";
import React, { useState, useEffect } from "react";
import DisplayEmployeeAddresses from "../../components/DisplayEmployeeAddresses/DisplayEmployeeAddresses";
import DisplayEmployees from "../../components/DisplayEmployees/DisplayEmployees";
import useAuth from "../../hooks/useAuth";
import { Grid, Container } from "@mui/material/";
import DisplayEmergencyContacts from "../../components/DisplayEmergencyContacts/DisplayEmergencyContacts";

const EmployeesPage = (props) => {
  const [allUsers, setAllUsers] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [emergContacts, setEmergContacts] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    fetchUsers();
    fetchAddresses();
    fetchEmergencyContacts();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/auth/employees/",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setAllUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAddresses = async () => {
    try {
      const response = await axios.get("http://localhost:8000/address/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAddresses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEmergencyContacts = async () => {
    try {
      let response = await axios.get(
        "http://localhost:8000/emergencyContact/",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEmergContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="xl">
      <p>ToDo: Emergency Contact Table, Filter tables</p>
      Styling: Sidebar? Button to display Addresses and Emergency Contacts with
      default table not shown
      <br />
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid item xs={9}>
          <DisplayEmployees allUsers={allUsers} fetchUsers={fetchUsers} />
        </Grid>
        <Grid item xs={9}>
          <DisplayEmployeeAddresses
            addresses={addresses}
            fetchAddresses={fetchAddresses}
          />
        </Grid>
        <Grid item xs={9}>
          <DisplayEmergencyContacts
            emergContacts={emergContacts}
            fetchEmergencyContacts={fetchEmergencyContacts}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default EmployeesPage;
