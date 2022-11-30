import React, { useEffect, useState } from "react";
import { Container, Paper, Link } from "@mui/material";
import AnnouncementList from "../AnnouncementList/AnnouncementList";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import AnnouncementForm from "../AnnouncementForm/AnnouncementForm";

const HomeLoggedIn = (props) => {
  const [announcements, setAnnouncements] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    getAnnouncements();
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
    <div>
      <p>Logged in</p>
      <Container>
        <Paper>Welcome {user.first_name}</Paper>
        <Paper elevation={4}>
          <Link href="/calendar">View Calendar</Link> - Payroll - Update
          Personal Information
        </Paper>
        <Container>
          {user.is_manager ? (
            <AnnouncementForm addAnnouncement={addAnnouncement} />
          ) : (
            <></>
          )}
          <AnnouncementList
            announcements={announcements}
            getAnnouncements={getAnnouncements}
          />
        </Container>
      </Container>
    </div>
  );
};

export default HomeLoggedIn;
