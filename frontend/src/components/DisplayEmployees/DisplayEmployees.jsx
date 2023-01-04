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
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditEmployee from "../EditEmployee/EditEmployee";

const DisplayEmployees = (props) => {
  const { allUsers, fetchUsers, payroll } = props;
  const [token] = useAuth();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle, props.toggle]);

  const handleEdit = (employee) => {
    setEmployee(employee);
    showModal();
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(
        `http://52.87.162.151:8000/api/auth/employees/${userId}/`,
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
          <Typography
            variant="h5"
            color="white"
            sx={{
              textAlign: "center",
              py: "10px",
              backgroundColor: "#ffc163",
              boxShadow: 3,
            }}
          >
            Employees
          </Typography>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Email
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Phone Number
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Salary
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Hire Date
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Job Title
                  </Typography>
                </TableCell>
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
                      <Typography variant="subtitle1">
                        {employee.first_name} {employee.last_name}
                      </Typography>
                    </TableCell>
                    {payroll === false ? (
                      <>
                        <TableCell>
                          <Typography variant="subtitle1">
                            {employee.email}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle1">
                            {employee.phone_number}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle1">
                            {employee.salary}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle1">
                            {employee.hire_date}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle1">
                            {employee.employee_role}
                          </Typography>
                        </TableCell>
                        <TableCell padding="none">
                          <IconButton
                            variant="contained"
                            onClick={() => handleEdit(employee)}
                            type="button"
                            size="small"
                            title="Edit Employee"
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
                            title="Remove Employee"
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
