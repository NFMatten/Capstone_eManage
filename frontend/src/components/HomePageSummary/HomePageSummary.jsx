import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const HomePageSummary = (props) => {
  return (
    <Grid item xs={6} md={5}>
      <Paper elevation={4} sx={{ justifyContent: "center", padding: 5 }}>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{
            textDecoration: "underline",
            textDecorationColor: "orange",
          }}
        >
          Stress-Free Employee Management
        </Typography>
        <br />
        <ul>
          <li>
            <p>
              <b>Save Time</b> with tasks like payroll, annoucements & updating
              employee information
            </p>
          </li>
          <li>
            <p>
              <b>Simplify </b> with one single application for all employee data
            </p>
          </li>
          <li>
            <p>
              <b>Stay up to date</b> with employee information, scheduling and
              payroll
            </p>
          </li>
        </ul>
      </Paper>
    </Grid>
  );
};

export default HomePageSummary;
