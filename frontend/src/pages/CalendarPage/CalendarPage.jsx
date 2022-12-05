import React, { useState, useEffect } from "react";
import Calendar from "../../components/Calendar/Calendar";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const CalendarPage = (props) => {
  const [events, setEvents] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/calendar/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addNewEvent = async (newEvent) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/calendar/",
        newEvent,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 201) getEvents();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEvent = async (eventToDelete) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/calendar/${eventToDelete}/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 204) getEvents();
    } catch (error) {
      console.log(error);
    }
  };

  const allEvents = events.map((e) => {
    return {
      id: e.id,
      title: e.employee_name,
      start: e.start.slice(0, -1),
      end: e.end.slice(0, -1),
    };
  });

  return (
    <div>
      {allEvents.length > 0 ? (
        <Calendar
          allEvents={allEvents}
          getEvents={getEvents}
          addNewEvent={addNewEvent}
          deleteEvent={deleteEvent}
          user={user}
          token={token}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default CalendarPage;
