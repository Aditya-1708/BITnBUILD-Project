import { format, getDay, parse, startOfWeek } from "date-fns";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const MyCalendar = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);
  const history = useNavigate();

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  const handleDeleteEvent = (eventToDelete) => {
    const updatedEvents = allEvents.filter((event) => event !== eventToDelete);
    setAllEvents(updatedEvents);
  };

  const cardData = [
    {
      id: 1,
      title: "Card 1",
      content: "Content for card 1",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Card 2",
      content: "Content for card 2",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Card 3",
      content: "Content for card 3",
      imageUrl: "https://via.placeholder.com/300",
    },
  ];

  const handleCardClick = () => {
    history("/staticpage"); // Replace "/new-page" with the desired path
  };

  return (
    <>
      <div className="flex flex-row">
        <div style={{ marginLeft: "20px", width: "35vw" }}>
          <div style={{ marginTop: "4px" }} className="flex flex-col">
            <input
              type="text"
              placeholder="Add Title"
              style={{ marginRight: "10px" }}
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />
          </div>
          <div style={{ marginTop: "4px" }} className="flex flex-row">
            <div className="flex flex-col">
              <DatePicker
                placeholderText="Start Date"
                style={{ marginRight: "10px" }}
                selected={newEvent.start}
                onChange={(start) => setNewEvent({ ...newEvent, start })}
              ></DatePicker>
            </div>
            <div style={{ marginLeft: "2px" }} className="flex flex-col">
              <DatePicker
                placeholderText="End Date"
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
              ></DatePicker>
            </div>
          </div>
          <div style={{ marginTop: "12px" }} className="flex flex-col">
            <button
              style={{ backgroundColor: "beige" }}
              onClick={handleAddEvent}
            >
              Add Event
            </button>
          </div>
          <h2 style={{ marginTop: "40px" }} className="flex justify-start">
            Today's Events
          </h2>
          <div
            className="flex flex-col"
            style={{ marginTop: "20px", marginLeft: "20px" }}
          >
            {cardData.map((card) => (
              <div
                className="flex justify-start"
                key={card.id}
                style={{ marginBottom: "20px", cursor: "pointer" }}
                onClick={handleCardClick}
              >
                <p>{card.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: "65vw" }}>
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "85vh", margin: "10px" }}
          ></Calendar>
        </div>
      </div>
      {/* Mapping cardData and rendering each card */}
    </>
  );
};

export default MyCalendar;
