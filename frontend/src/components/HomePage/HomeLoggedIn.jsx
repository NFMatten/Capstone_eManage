import React, { useEffect, useState } from "react";
import { Container, Paper, Typography } from "@mui/material";
import AnnouncementList from "../AnnouncementList/AnnouncementList";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import AnnouncementForm from "../AnnouncementForm/AnnouncementForm";

const HomeLoggedIn = (props) => {
  const [announcements, setAnnouncements] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    getAnnouncements();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAnnouncements = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/announcements/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAnnouncements(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addAnnouncement = async (announcementObj) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/announcements/",
        announcementObj,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 201) getAnnouncements();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Container>
        <Paper sx={{ mx: "50px" }}>
          <Typography variant="h5" color="#ffa317" align="center">
            Welcome to eManage, {user.first_name}!
          </Typography>
          <Typography variant="body1" align="center">
            {" "}
            Through eManage, you will be able to check our <b>Calendar</b> for
            scheduling, estimating <b>Payroll</b> and more!
          </Typography>
        </Paper>
        <Container>
          {user.is_manager ? (
            <AnnouncementForm addAnnouncement={addAnnouncement} />
          ) : (
            <></>
          )}
          <AnnouncementList announcements={announcements} />
        </Container>
      </Container>
    </Container>
  );
};

export default HomeLoggedIn;
