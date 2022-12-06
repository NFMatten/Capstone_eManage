import axios from "axios";
import React, { useState, useEffect } from "react";
import DisplayEmployeeAddresses from "../../components/DisplayEmployeeAddresses/DisplayEmployeeAddresses";
import DisplayEmployees from "../../components/DisplayEmployees/DisplayEmployees";
import useAuth from "../../hooks/useAuth";
import Grid from "@mui/material/Grid";
import MenuItems from "../../components/MenuItems/MenuItems";

const EmployeesPage = (props) => {
  const [allUsers, setAllUsers] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    fetchUsers();
    fetchAddresses();
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

  return (
    <div>
      <MenuItems />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DisplayEmployees allUsers={allUsers} />
        </Grid>
        <Grid item xs={12}>
          <DisplayEmployeeAddresses addresses={addresses} />
        </Grid>
      </Grid>
    </div>
  );
};

export default EmployeesPage;
