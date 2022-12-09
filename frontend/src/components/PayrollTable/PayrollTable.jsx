import React from "react";
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
} from "@mui/material";
import PayrollTableRow from "../PayrollTableRow/PayrollTableRow";

const PayrollTable = (props) => {
  const { employees, token } = props;
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          {employees.length > 0 ? (
            <TableContainer component={Paper}>
              <Typography
                variant="h5"
                color="white"
                sx={{
                  textAlign: "center",
                  py: "10px",
                  marginBottom: 1,
                  backgroundColor: "#ffc163",
                  boxShadow: 3,
                }}
              >
                Payroll
              </Typography>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, textAlign: "center" }}
                      >
                        Employee
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, textAlign: "center" }}
                      >
                        Pay Period Start
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, textAlign: "center" }}
                      >
                        Pay Period End
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, textAlign: "center" }}
                      >
                        Salary
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, textAlign: "center" }}
                      >
                        Hours Worked
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, textAlign: "center" }}
                      >
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
                    <TableCell>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, textAlign: "center" }}
                      >
                        Save
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employees.map((emp) => {
                    return (
                      <PayrollTableRow emp={emp} key={emp.id} token={token} />
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default PayrollTable;
