import { format, getDay, parse, startOfWeek } from "date-fns";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
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

const handleAddEvent = () => {
setAllEvents([...allEvents, newEvent]);
};

const handleDeleteEvent = (eventToDelete) => {
const updatedEvents = allEvents.filter((event) => event !== eventToDelete);
setAllEvents(updatedEvents);
};

return (
<div class="bg-[#7FC7D9]">
    <div class="flex justify-end items-end">
    

    <h2 class="text-2xl font-semibold underline font-serif border bg-slate-800 text-white border-gray-700 border-xl px-1 py-1 -translate-x-10 ">
        Add new Event
    </h2>
    </div>

    <div
    style={{padding:"20px",
        textAlign: "right",
        width: "60%",
        height: "auto",
        marginLeft: "auto",
        marginRight: "0",
    }}
    >
    <div class="-translate-x-40 space-x-4 py-4 ">
        <input
        class=" placeholder-black"
        type="text"
        placeholder="Add Title"
        style={{ width: "20%", marginRight: "10px" }}
        value={newEvent.title}
        onChange={(e) =>
            setNewEvent({ ...newEvent, title: e.target.value })
        }
        />

        <DatePicker
        
        placeholderText="Start Date"
        style={{ marginRight: "10px" }}
        selected={newEvent.start}
        onChange={(start) => setNewEvent({ ...newEvent, start })}
        />

        <DatePicker
        class=""
        placeholderText="End Date"
        selected={newEvent.end}
        onChange={(end) => setNewEvent({ ...newEvent, end })}
        />

        <button style={{ marginTop: "10px" }} onClick={handleAddEvent} class="border bg-blue-600 text-white border-black px-2 py-1 border-2xl rounded hover:bg-blue-800">
        Add Event
        </button>
    </div>

    <div class="bg-[#DCF2F1] font-bold" style={{padding:"2px",}}  >
    <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        onSelectEvent={handleDeleteEvent}
    />
    </div>
    </div>
    <div>
        
    </div>
</div>
);
};

export default MyCalendar;
