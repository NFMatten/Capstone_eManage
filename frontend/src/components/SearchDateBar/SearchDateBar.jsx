import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";

const SearchDateBar = (props) => {
  return (
    <div>
      <Grid container justifyContent="center" sx={{ mt: 0.5, mb: 1 }}>
        <Grid item xs={12}>
          <Typography variant="subtitle2" textAlign="center" sx={{ pt: 2 }}>
            Filter Table by Date
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Grid item xs={12}>
            <TextField
              id="start_date"
              type="date"
              onChange={(e) => {
                props.filterStartDates(e);
              }}
              sx={{ backgroundColor: "white" }}
              size="small"
            />
          </Grid>

          <Typography variant="caption">Start Date</Typography>
        </Grid>
        <Grid item xs={2}>
          <Grid item xs={12}>
            <TextField
              id="end_date"
              type="date"
              onChange={(e) => props.filterEndDates(e)}
              size="small"
              sx={{ backgroundColor: "white" }}
            />
          </Grid>
          <Typography variant="caption">End Date</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchDateBar;
