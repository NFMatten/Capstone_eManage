import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";

// Material
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const defaultValues = {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    phone_number: "",
    dob: "",
    employee_role: "",
    salary: "",
    hire_date: "",
    is_manager: 0,
  };

  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <Container maxWidth="sm">
      <form className="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <h2>Register with eManage</h2>
          <TextField
            placeholder="Enter Username..."
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />

          <TextField
            placeholder="Enter First Name..."
            label="First Name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />

          <TextField
            placeholder="Enter Last Name..."
            label="Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />

          <TextField
            placeholder="Enter Email..."
            label="Email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <TextField
            placeholder="Enter Password..."
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={toggleShowPassword} />}
              label="Show Password"
            />
          </FormGroup>
          <TextField
            placeholder="Enter Phone Number..."
            label="Phone Number"
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleInputChange}
          />
          <p>DOB</p>
          <TextField
            placeholder="Enter Date of Birth..."
            // label="Date of Birth"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />

          <TextField
            placeholder="Enter Job Position"
            label="Job Position"
            type="text"
            name="employee_role"
            value={formData.employee_role}
            onChange={handleInputChange}
          />

          <TextField
            placeholder="Enter Salary..."
            label="Salary"
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
          />

          <p>Hire Date</p>
          <TextField
            placeholder="Enter Hire Date"
            type="date"
            name="hire_date"
            value={formData.hire_date}
            onChange={handleInputChange}
          />

          <p style={{ fontSize: "12px" }}>
            NOTE: Make this an uncommon password with characters, numbers, and
            special characters!
          </p>
          <Button variant="contained" type="submit">
            Register!
          </Button>
          <Button href="/login">Already Registered? Login</Button>
        </Stack>
      </form>
    </Container>
  );
};

export default RegisterPage;
