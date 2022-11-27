import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const FeaturesList = (props) => {
  return (
    <Grid item xs={6} md={5} sx={{ justifyContent: "center" }}>
      <Paper elevation={4} sx={{ justifyContent: "center", padding: 5 }}>
        <Typography
          variant="h5"
          sx={{
            textDecoration: "underline",
            textDecorationColor: "orange",
          }}
        >
          Features
        </Typography>
        <br />
        <ul>
          <li>
            <p>
              <b>Payroll</b>
            </p>
          </li>
          <li>
            <p>
              <b>Scheduling</b>
            </p>
          </li>
          <li>
            <p>
              <b>Announcements</b>
            </p>
          </li>
          <li>
            <p>
              <b>Employee Data</b>
            </p>
            <ul style={{ marginLeft: "20px" }}>
              <li>Personal Information</li>
              <li>Emergency Contact Information</li>
            </ul>
          </li>
        </ul>
      </Paper>
    </Grid>
  );
};

export default FeaturesList;
