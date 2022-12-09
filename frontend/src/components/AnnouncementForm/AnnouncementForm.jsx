import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import useAuth from "../../hooks/useAuth";

const AnnouncementForm = (props) => {
  const { addAnnouncement } = props;
  const [value, setValue] = useState("");
  const [user] = useAuth();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAnnouncement({ user_id: user.id, announcement: value });
    setValue("");
  };
  return (
    <Container>
      <Paper elevation={4} sx={{ my: 2 }}>
        <Typography
          variant="h5"
          color="white"
          sx={{
            textAlign: "center",
            py: "10px",
            marginBottom: 2,
            backgroundColor: "#ffc163",
            boxShadow: 3,
          }}
        >
          Post an Announcement
        </Typography>
        <Grid container alignItems="end" sx={{ paddingBottom: 3 }}>
          <Grid item xs={10.8} sx={{ paddingLeft: 2 }}>
            <TextField
              id="outlined-multiline-flexible"
              label="Announcement"
              placeholder="Create a new Announcement"
              multiline
              maxRows={4}
              value={value}
              onChange={handleChange}
              margin="normal"
              sx={{ width: "90%" }}
            />
          </Grid>
          <Grid item xs={1} sx={{ marginLeft: "-40px", marginBottom: "10px" }}>
            <Button
              variant="contained"
              type="submit"
              onClick={handleSubmit}
              sx={{
                backgroundColor: "#ffc163",
                "&:hover": { backgroundColor: "#ffb74a" },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AnnouncementForm;
