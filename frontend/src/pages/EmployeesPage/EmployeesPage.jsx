import axios from "axios";
import React, { useState, useEffect } from "react";
import DisplayEmployeeAddresses from "../../components/DisplayEmployeeAddresses/DisplayEmployeeAddresses";
import DisplayEmployees from "../../components/DisplayEmployees/DisplayEmployees";
import useAuth from "../../hooks/useAuth";
import { Grid, Paper } from "@mui/material/";
import DisplayEmergencyContacts from "../../components/DisplayEmergencyContacts/DisplayEmergencyContacts";
import SearchBar from "../../components/SearchBar/SearchBar";

const EmployeesPage = (props) => {
  const [allUsers, setAllUsers] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [emergContacts, setEmergContacts] = useState([]);
  const [toggle, setToggle] = useState();
  const [user, token] = useAuth();

  useEffect(() => {
    fetchUsers();
    fetchAddresses();
    fetchEmergencyContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const filterEmployees = (e) => {
    let filterValue = e.target.value;
    if (filterValue === "") {
      fetchUsers();
    } else {
      let filteredUsers = allUsers.filter(
        (u) =>
          u.first_name.toLowerCase().includes(filterValue.toLowerCase()) ||
          u.last_name.toLowerCase().includes(filterValue.toLowerCase()) ||
          u.email.toLowerCase().includes(filterValue.toLowerCase()) ||
          u.phone_number.includes(filterValue) ||
          u.salary.includes(filterValue) ||
          u.hire_date.includes(filterValue) ||
          u.employee_role.toLowerCase().includes(filterValue.toLowerCase())
      );
      setAllUsers(filteredUsers);
    }
  };

  const filterAddresses = (e) => {
    let filterValue = e.target.value;
    if (filterValue === "") {
      fetchAddresses();
    } else {
      let filteredAddresses = addresses.filter(
        (a) =>
          a.user.first_name.toLowerCase().includes(filterValue.toLowerCase()) ||
          a.user.last_name.toLowerCase().includes(filterValue.toLowerCase())
      );
      if (filteredAddresses.length > 0) {
        setAddresses(filteredAddresses);
      }
    }
  };

  const filterEmergencyContacts = (e) => {
    let filterValue = e.target.value;
    if (filterValue === "") {
      fetchEmergencyContacts();
    } else {
      let filteredEmergencyContacts = emergContacts.filter(
        (ec) =>
          ec.user.first_name
            .toLowerCase()
            .includes(filterValue.toLowerCase()) ||
          ec.user.last_name.toLowerCase().includes(filterValue.toLowerCase())
      );
      if (filteredEmergencyContacts.length > 0) {
        setEmergContacts(filteredEmergencyContacts);
      }
    }
  };

  return (
    <div>
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        <Grid item xs={9}>
          <SearchBar
            filterEmployees={filterEmployees}
            filterAddresses={filterAddresses}
            filterEmergencyContacts={filterEmergencyContacts}
          />
        </Grid>
        <Grid item xs={9}>
          <DisplayEmployees
            allUsers={allUsers}
            fetchUsers={fetchUsers}
            toggle={toggle}
            filterEmployees={filterEmployees}
            payroll={false}
          />
        </Grid>
        <Grid item xs={9}>
          <DisplayEmployeeAddresses
            addresses={addresses}
            fetchAddresses={fetchAddresses}
            fetchUsers={fetchUsers}
            filterEmployees={filterEmployees}
          />
        </Grid>
        <Grid item xs={9} sx={{ mb: 15 }}>
          <DisplayEmergencyContacts
            emergContacts={emergContacts}
            fetchEmergencyContacts={fetchEmergencyContacts}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default EmployeesPage;
