import React, { useState } from "react";
import { Container, List, Paper } from "@mui/material";
import AnnouncementSingle from "../AnnoucementSingle/AnnoucementSingle";

const AnnouncementList = (props) => {
  const { announcements, getAnnouncements } = props;
  return (
    <Container>
      <Paper elevation={4}>
        <List>
          {announcements.map((announcement) => (
            <AnnouncementSingle
              {...announcement}
              key={announcement.id}
              getAnnouncements={getAnnouncements}
            />
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default AnnouncementList;
