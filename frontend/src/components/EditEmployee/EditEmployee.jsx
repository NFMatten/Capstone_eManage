import React, { useState, useEffect } from "react";
import {
  Paper,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import "./EditEmployee.css";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const EditEmployee = (props) => {
  const { employee, handleClose, show } = props;
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [firstName, setFirstName] = useState(employee.first_name);
  const [lastName, setLastName] = useState(employee.last_name);
  const [email, setEmail] = useState(employee.email);
  const [phoneNumber, setPhoneNumber] = useState(employee.phone_number);
  const [salary, setSalary] = useState(employee.salary);
  const [hireDate, setHireDate] = useState(employee.hire_date);
  const [employeeRole, setEmployeeRole] = useState(employee.employee_role);
  const [user, token] = useAuth();

  useEffect(() => {
    setFirstName(employee.first_name);
    setLastName(employee.last_name);
    setEmail(employee.email);
    setPhoneNumber(employee.phone_number);
    setSalary(employee.salary);
    setHireDate(employee.hire_date);
    setEmployeeRole(employee.employee_role);
  }, [employee]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumber,
      salary: salary,
      hire_date: hireDate,
      employee_role: employeeRole,
    };
    console.log("update user", updatedUser);
    await axios
      .put(
        `http://localhost:8000/api/auth/employees/${employee.id}/`,
        updatedUser,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(alert("Employee Updated!"));
    handleClose();
    window.location.reload();
  };
  return (
    <div className={showHideClassName}>
      <Paper elevation={4}>
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
            Edit Employee
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
                  name="first_name"
                  variant="outlined"
                  size="small"
                  label="First Name"
                  value={employee.first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  sx={{ ml: 2 }}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  name="last_name"
                  variant="outlined"
                  size="small"
                  label="Last Name"
                  value={employee.last_name}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  name="email"
                  variant="outlined"
                  size="small"
                  label="Email"
                  value={employee.email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ ml: 2 }}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  name="phone_number"
                  variant="outlined"
                  size="small"
                  label="Phone Number"
                  value={employee.phone_number}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  name="Salary"
                  variant="outlined"
                  size="small"
                  label="Salary"
                  value={employee.salary}
                  onChange={(e) => setSalary(e.target.value)}
                  sx={{ ml: 2 }}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  name="hire_date"
                  variant="outlined"
                  size="small"
                  label="Hire Date"
                  type="date"
                  value={employee.hire_date}
                  onChange={(e) => setHireDate(e.target.value)}
                  sx={{ width: "72%" }}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  name="employee_role"
                  variant="outlined"
                  size="small"
                  label="Job Title"
                  value={employee.employee_role}
                  onChange={(e) => setEmployeeRole(e.target.value)}
                  sx={{ ml: 2 }}
                />
              </Grid>
              <Grid item xs={2}>
                <Button type="submit" variant="contained" sx={{ ml: -8 }}>
                  Update
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleClose}
                  sx={{ ml: -6 }}
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

export default EditEmployee;
