import React, { useState, useEffect } from "react";
// import { Paper, TextField, Button, Typography, Container } from "@mui/material";
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
      <section className="modal-main">
        <form onSubmit={handleSubmit}>
          <h1>Edit Employee</h1>
          <label>First Name</label>
          <input
            name="first_name"
            onChange={(e) => setFirstName(e.target.value)}
            defaultValue={employee.first_name}
          />
          <label>Last Name</label>
          <input
            name="last_name"
            onChange={(e) => setLastName(e.target.value)}
            defaultValue={employee.last_name}
          />
          <label>Email</label>
          <input
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            defaultValue={employee.email}
          />
          <label>Phone Number</label>
          <input
            name="phone_number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            defaultValue={employee.phone_number}
          />
          <label>Salary</label>
          <input
            name="salary"
            onChange={(e) => setSalary(e.target.value)}
            defaultValue={employee.salary}
          />
          <label>Hire Date</label>
          <input
            name="hire_date"
            onChange={(e) => setHireDate(e.target.value)}
            defaultValue={employee.hire_date}
          />
          <label>Job Title</label>
          <input
            name="employee_role"
            onChange={(e) => setEmployeeRole(e.target.value)}
            defaultValue={employee.employee_role}
          />
          <button type="submit">Update Employee</button>
        </form>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default EditEmployee;
