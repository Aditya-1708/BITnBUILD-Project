import { format, getDay, parse, startOfWeek } from "date-fns";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

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
  const navigate = useNavigate();

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

  const handleCardClick = (card) => {
    navigate(`/registerpage/`, { state: { card: card } });
  };

  return (
    <>
      <div className="flex flex-row">
        <div style={{ marginLeft: "20px", width: "35vw" }}>
          <div style={{ marginTop: "4px" }} className="flex flex-col">
            <input
              type="text"
              placeholder="Add Title"
              style={{ marginRight: "10px", padding: "5px", border: "none", borderBottom: "1px solid black" }}
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
                style={{ marginRight: "10px", padding: "5px", border: "none", borderBottom: "1px solid black" }}
                selected={newEvent.start}
                onChange={(start) => setNewEvent({ ...newEvent, start })}
              />
            </div>
            <div style={{ marginLeft: "2px" }} className="flex flex-col">
              <DatePicker
                placeholderText="End Date"
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
              />
            </div>
          </div>
          <div style={{ marginTop: "12px" }} className="flex flex-col">
            <button
              style={{ backgroundColor: "#F0E68C", padding: "10px", border: "none", cursor: "pointer" }}
              onClick={handleAddEvent}
            >
              Add Event
            </button>
          </div>
          <h2 style={{ marginTop: "40px", color: "#4682B4" }} className="flex justify-start">
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
                onClick={() => handleCardClick(card)}
              >
                <p style={{ color: "#008080", fontWeight: "bold" }}>{card.content}</p>
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
            onSelectEvent={handleDeleteEvent}
          />
        </div>
      </div>
    </>
  );
};

export default MyCalendar;
