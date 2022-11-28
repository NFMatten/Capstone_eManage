import React, { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";
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
    <div>
      <Paper elevation={4} sx={{ my: 5 }}>
        <TextField
          id="outlined-multiline-flexible"
          label="Announcement"
          placeholder="Create a new Announcement"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          sx={{ backgroundColor: "#ffc163" }}
        >
          Submit
        </Button>
      </Paper>
    </div>
  );
};

export default AnnouncementForm;
