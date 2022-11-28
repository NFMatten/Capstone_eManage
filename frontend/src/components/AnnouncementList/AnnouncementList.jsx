import React, { useState } from "react";
import { Container, List, Paper } from "@mui/material";
import AnnouncementSingle from "../AnnouncementSingle/AnnouncementSingle";

const AnnouncementList = (props) => {
  const { announcements, getAnnouncements } = props;
  return (
    <Container>
      <Paper elevation={4} sx={{ my: 5 }}>
        <List>
          {announcements
            .slice(0)
            .reverse()
            .map((announcement) => (
              <AnnouncementSingle {...announcement} key={announcement.id} />
            ))}
        </List>
      </Paper>
    </Container>
  );
};

export default AnnouncementList;
