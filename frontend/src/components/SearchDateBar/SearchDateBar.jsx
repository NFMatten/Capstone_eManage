import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import IconButton from "@mui/material/IconButton";
import { CSVLink } from "react-csv";

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
          <Typography variant="caption" style={{ textAlign: "center" }}>
            End Date
          </Typography>
        </Grid>
        <Grid item xs={1.1}>
          <CSVLink
            data={props.payroll}
            filename={"eManage-payroll.csv"}
            className="btn btn-primary"
            target="-blank"
          >
            <IconButton title="Download Table to CSV File">
              <DownloadForOfflineIcon style={{ color: "orange" }} />
            </IconButton>
          </CSVLink>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchDateBar;
