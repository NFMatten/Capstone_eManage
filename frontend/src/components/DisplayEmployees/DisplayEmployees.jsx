import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  Paper,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditEmployee from "../EditEmployee/EditEmployee";

const DisplayEmployees = (props) => {
  const { allUsers, fetchUsers, payroll } = props;
  const [user, token] = useAuth();
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState();
  const [employee, setEmployee] = useState([]);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [toggle, props.toggle]);

  const handleEdit = (employee) => {
    setEmployee(employee);
    showModal();
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(
        `http://localhost:8000/api/auth/employees/${userId}/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchUsers();
      setToggle(!toggle);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {allUsers.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Hire Date</TableCell>
                <TableCell>Job Title</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUsers.map((employee) => {
                return (
                  <TableRow
                    key={employee.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      {employee.first_name} {employee.last_name}
                    </TableCell>
                    {payroll === false ? (
                      <>
                        <TableCell>{employee.email}</TableCell>
                        <TableCell>{employee.phone_number}</TableCell>
                        <TableCell>{employee.salary}</TableCell>
                        <TableCell>{employee.hire_date}</TableCell>
                        <TableCell>{employee.employee_role}</TableCell>
                        <TableCell padding="none">
                          <IconButton
                            variant="contained"
                            onClick={() => handleEdit(employee)}
                            type="button"
                            size="small"
                          >
                            <EditIcon style={{ color: "orange" }} />
                          </IconButton>
                        </TableCell>
                        <TableCell padding="none">
                          <IconButton
                            variant="contained"
                            onClick={() => deleteUser(employee.id)}
                            type="submit"
                            size="small"
                          >
                            <DeleteIcon style={{ color: "orange" }} />
                          </IconButton>
                        </TableCell>
                      </>
                    ) : (
                      <p>test</p>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <EditEmployee show={show} handleClose={hideModal} employee={employee}>
            <p>Edit Employee</p>
          </EditEmployee>
        </TableContainer>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DisplayEmployees;
