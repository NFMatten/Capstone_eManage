import React, { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "../../utils/event-utils";
import { Paper, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import "./Calendar.css";

const Calendar = (props) => {
  const { allEvents, addNewEvent, deleteEvent, user } = props;
  const [currentEvents, setCurrentEvents] = useState([]);
  const [showEvents, setShowEvents] = useState(false);

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter an Employee Name");
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
      const newEvent = {
        employee_name: title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      };
      addNewEvent(newEvent);
    }
  };

  const handleEventClick = (clickInfo) => {
    if (user.is_manager) {
      if (
        window.confirm(
          `Are you sure you want to delete the event '${clickInfo.event.title}'`
        )
      ) {
        clickInfo.event.remove();
        deleteEvent(clickInfo.event.id);
      }
    }
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  return (
    <div className="calendar">
      {renderSidebar()}
      <div className="calendar-main">
        <Paper elevation={4}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="timeGridDay"
            editable={user.is_manager}
            selectable={user.is_manager}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            initialEvents={allEvents}
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          />
        </Paper>
      </div>
    </div>
  );

  function renderSidebar() {
    return (
      <div className="calendar-sidebar">
        <div className="calendar-sidebar-section">
          <h2 className="calendar-sidebar-title">Instructions</h2>
          <ul className="sidebar-ul">
            <li className="sidebar-li">
              Select dates and you will be prompted to create a new event
            </li>
            <li className="sidebar-li">Drag, drop, and resize events</li>
            <li className="sidebar-li">Click an event to delete it</li>
          </ul>
        </div>
        <div className="calendar-sidebar-section">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Show All Scheduled"
              onChange={() => setShowEvents(!showEvents)}
            />
          </FormGroup>
          {showEvents ? (
            <div>
              <h2>Scheduled ({currentEvents.length})</h2>
              <ul>
                {currentEvents.slice(0).reverse().map(renderSidebarEvent)}
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  function renderSidebarEvent(event) {
    return (
      <li key={event.id} style={{ marginBottom: "5px" }}>
        <b>
          {formatDate(event.start, {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
          })}
        </b>{" "}
        <br />
        <i>{event.title}</i>
      </li>
    );
  }
};

export default Calendar;
