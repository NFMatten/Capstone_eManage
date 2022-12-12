import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import IconButton from "@mui/material/IconButton";
import { CSVLink } from "react-csv";
import ClearIcon from "@mui/icons-material/Clear";

const SearchDateBar = (props) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleClick = () => {
    setStartDate("");
    setEndDate("");
    props.fetchPayroll();
  };

  return (
    <div>
      <Grid container justifyContent="center" sx={{ mt: 0.5, mb: 1 }}>
        <Grid item xs={12}>
          <Typography variant="subtitle2" textAlign="center" sx={{ pt: 2 }}>
            Filter Table by Date
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <Grid item xs={12}>
            <TextField
              id="start_date"
              type="date"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
                props.filterStartDates(e);
              }}
              sx={{ backgroundColor: "white", width: "250px" }}
              size="small"
            />
          </Grid>

          <Typography variant="caption">Start Date</Typography>
        </Grid>
        <Grid item xs={3}>
          <Grid item xs={12}>
            <TextField
              id="end_date"
              type="date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
                props.filterEndDates(e);
              }}
              size="small"
              sx={{ backgroundColor: "white", width: "250px" }}
            />
          </Grid>
          <Typography variant="caption" style={{ textAlign: "center" }}>
            End Date
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            title="Clear Filter"
            onClick={handleClick}
            sx={{ mr: "-10px" }}
          >
            <ClearIcon style={{ color: "orange" }} />
          </IconButton>
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
