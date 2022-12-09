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

const DisplayPayroll = (props) => {
  const { payroll } = props;
  return (
    <div>
      <Grid container justifyContent="center" sx={{ my: 5 }}>
        <Grid item xs={8}>
          {payroll.length > 0 ? (
            <TableContainer component={Paper}>
              <Typography
                variant="h5"
                color="white"
                sx={{
                  textAlign: "center",
                  py: "10px",
                  marginBottom: "10px",
                  backgroundColor: "#ffc163",
                  boxShadow: 3,
                }}
              >
                Past Payroll
              </Typography>
              <Table sx={{ minWidth: 650 }}>
                <caption align="bottom">
                  *Totals do not calculate for any taxes
                </caption>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, textAlign: "center" }}
                      >
                        Start Date
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, textAlign: "center" }}
                      >
                        End Date
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, textAlign: "center" }}
                      >
                        Name
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {payroll.map((row) => {
                    return (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>
                          <Typography textAlign="center">
                            {row.period_start}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography textAlign="center">
                            {row.period_end}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography textAlign="center">
                            {row.user.first_name} {row.user.last_name}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography textAlign="center">
                            {row.salary}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography textAlign="center">
                            {row.hours_worked}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography textAlign="center">
                            {row.tips_received}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography textAlign="center">
                            ${row.total_before_taxes}*
                          </Typography>
                        </TableCell>
                      </TableRow>
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

export default DisplayPayroll;
