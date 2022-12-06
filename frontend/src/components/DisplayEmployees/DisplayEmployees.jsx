import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  Paper,
} from "@mui/material";

const DisplayEmployees = (props) => {
  const { allUsers } = props;
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
              {allUsers.slice(1).map((user) => {
                return (
                  <TableRow
                    key={user.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      {user.first_name} {user.last_name}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone_number}</TableCell>
                    <TableCell>{user.salary}</TableCell>
                    <TableCell>{user.hire_date}</TableCell>
                    <TableCell>{user.employee_role}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DisplayEmployees;
