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

const DisplayEmployeeAddresses = (props) => {
  const { addresses } = props;
  return (
    <div>
      {addresses.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Employee</TableCell>
                <TableCell>Street</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Zip Code</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {addresses.map((a) => {
                return (
                  <TableRow
                    key={a.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      {a.user.first_name} {a.user.last_name}
                    </TableCell>
                    <TableCell>{a.street_address}</TableCell>
                    <TableCell>{a.city}</TableCell>
                    <TableCell>{a.state}</TableCell>
                    <TableCell>{a.zip}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div>
          <p>test</p>
        </div>
      )}
    </div>
  );
};

export default DisplayEmployeeAddresses;
