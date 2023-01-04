import React, { useState, useEffect } from "react";
import { Paper, TextField, Button, Typography, Grid } from "@mui/material";
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
        `http://52.87.162.151:8000/api/auth/employees/${employee.id}/`,
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
              <Grid item xs={4}>
                <TextField
                  name="first_name"
                  variant="outlined"
                  size="small"
                  label="First Name"
                  defaultValue={employee.first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  sx={{ ml: 2 }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="last_name"
                  variant="outlined"
                  size="small"
                  label="Last Name"
                  defaultValue={employee.last_name}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="email"
                  variant="outlined"
                  size="small"
                  label="Email"
                  defaultValue={employee.email}
                  onChange={(e) => setEmail(e.target.value)}
                  // sx={{ ml: 2 }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="phone_number"
                  variant="outlined"
                  size="small"
                  label="Phone Number"
                  defaultValue={employee.phone_number}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  sx={{ ml: 2 }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="Salary"
                  variant="outlined"
                  size="small"
                  label="Salary"
                  defaultValue={employee.salary}
                  onChange={(e) => setSalary(e.target.value)}
                  // sx={{ ml: 2 }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="hire_date"
                  variant="outlined"
                  size="small"
                  type="date"
                  defaultValue={employee.hire_date}
                  onChange={(e) => setHireDate(e.target.value)}
                  sx={{ width: "54%" }}
                />
                <Typography variant="caption">
                  <br />
                  Hire Date
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <TextField
                  name="employee_role"
                  variant="outlined"
                  size="small"
                  label="Job Title"
                  defaultValue={employee.employee_role}
                  onChange={(e) => setEmployeeRole(e.target.value)}
                  sx={{ ml: 2 }}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#ffc163",
                    "&:hover": { backgroundColor: "#ffb74a" },
                  }}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleClose}
                  sx={{
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

export default EditEmployee;

// update
// close
