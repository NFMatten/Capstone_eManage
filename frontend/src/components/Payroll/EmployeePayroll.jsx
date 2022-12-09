import React, { useState } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  Paper,
  Grid,
  Typography,
  TextField,
} from "@mui/material";

const EmployeePayroll = (props) => {
  const [salary, setSalary] = useState(0);
  const [hours, setHours] = useState(0);
  const [tips, setTips] = useState(0);
  let totalPay;

  function total(salary, hours, tips) {
    if (hours > 80) {
      const extraHours = hours - 80;
      const overTimeRate = salary * 1.5;
      const overTimeTotal = extraHours * overTimeRate;
      totalPay = salary * 80 + overTimeTotal + parseFloat(tips);
      return "$" + totalPay.toFixed(2);
    } else {
      totalPay = salary * hours + parseFloat(tips);
      return "$" + totalPay.toFixed(2);
    }
  }

  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <Paper sx={{ my: 3 }}>
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
              Instructions
            </Typography>
            <Grid container justifyContent="center" sx={{ py: 3 }}>
              <Grid item xs={3}>
                <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                  Instructions
                </Typography>

                <ul>
                  <li>Enter your salary</li>
                  <li>Enter hours you worked</li>
                  <li>Enter your tips received</li>
                  <li>Total will be automatically calculated</li>
                </ul>
              </Grid>
              <Grid item xs={6}>
                <Grid container justifyContent="center">
                  <Grid item xs={8}>
                    <Typography
                      textAlign="center"
                      variant="h6"
                      sx={{ textDecoration: "underline" }}
                    >
                      Calculating Total
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography>
                      Calculating the total is automatically done for you! If
                      you work more than 80 hours during your pay period, the
                      Pay Estimator will determine your over-time pay by making
                      the correct adjustments for the time you worked over the
                      normal 80 hours!
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <TableContainer component={Paper}>
            <Typography
              variant="h5"
              color="white"
              sx={{
                textAlign: "center",
                py: "10px",
                mb: 1,
                backgroundColor: "#ffc163",
                boxShadow: 3,
              }}
            >
              Estimate Pay
            </Typography>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Salary
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Hours Worked
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Tips Received
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, textAlign: "center" }}
                    >
                      Total
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <TextField
                      id="salary"
                      placeholder="Enter Your Salary..."
                      label="Salary"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="hours"
                      placeholder="Enter Hours Worked..."
                      label="Hours Worked"
                      value={hours}
                      onChange={(e) => setHours(e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="tips"
                      placeholder="Enter Tips Received..."
                      label="Tips Received"
                      value={tips}
                      onChange={(e) => setTips(e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography textAlign="center">
                      {total(salary, hours, tips)}*
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Grid item xs={12}>
            <Typography variant="caption">
              *Totals do not calculate any taxes
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default EmployeePayroll;
