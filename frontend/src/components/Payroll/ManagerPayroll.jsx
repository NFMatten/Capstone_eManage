import React, { useState, useEffect } from "react";
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
import PayrollTableRow from "../PayrollTableRow/PayrollTableRow";

const ManagerPayroll = (props) => {
  const { employees, token } = props;

  // create component for individual row with handlesubmit and pass in mapped employee
  return (
    <div>
      <p>Manager Payroll</p>
      {employees.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ mindWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Employee</TableCell>
                <TableCell>Pay Period Start</TableCell>
                <TableCell>Pay Period End</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Hours Worked</TableCell>
                <TableCell>Tips Received</TableCell>
                <TableCell>Total (Before Taxes)</TableCell>
                <TableCell>Save</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((emp) => {
                return <PayrollTableRow emp={emp} key={emp.id} token={token} />;
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

export default ManagerPayroll;
