import React from "react";
import { Paper, Typography, TextField, Grid } from "@mui/material";

const SearchBar = (props) => {
  return (
    <div>
      <Paper>
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
          Filter Tables
        </Typography>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sx={{ pt: 1.5 }}>
            <Typography variant="body1" textAlign="center">
              To filter all tables, please enter an Employee Name
            </Typography>
            <Typography variant="body1" textAlign="center">
              Or, filter the Employees Table by Name, Email, Phone Number,
              Salary, Hire Date or Job Title
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <TextField
              type="text"
              placeholder="Search"
              label="Filter Tables"
              variant="filled"
              size="small"
              fullWidth
              onChange={(e) => {
                props.filterEmployees(e);
                props.filterAddresses(e);
                props.filterEmergencyContacts(e);
              }}
              sx={{ my: 3 }}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default SearchBar;
