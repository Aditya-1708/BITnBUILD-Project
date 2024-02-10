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
<div class="bg-[##DCF2F1]">
    <div class="flex justify-between items-end">
    <h1 class="text-4xl font-bold mx-3 mt-2 font-serif underline">
        Calendar
    </h1>

    <h2 class="text-2xl font-semibold border border-gray-700 border-xl rounded-xl -translate-x-10 ">
        Add a new Event
    </h2>
    </div>

    <div
    style={{
        textAlign: "right",
        width: "70%",
        height: "auto",
        marginLeft: "auto",
        marginRight: "0",
    }}
    >
    <div class="-translate-x-40 ">
        <input
        class="text-xl placeholder-black"
        type="text"
        placeholder="Add Title"
        style={{ width: "20%", marginRight: "10px" }}
        value={newEvent.title}
        onChange={(e) =>
            setNewEvent({ ...newEvent, title: e.target.value })
        }
        />

        <DatePicker
        class="text-xl"
        placeholderText="Start Date"
        style={{ marginRight: "10px" }}
        selected={newEvent.start}
        onChange={(start) => setNewEvent({ ...newEvent, start })}
        />

        <DatePicker
        class="text-xl"
        placeholderText="End Date"
        selected={newEvent.end}
        onChange={(end) => setNewEvent({ ...newEvent, end })}
        />

        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
        Add Event
        </button>
    </div>

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
);
};

export default MyCalendar;
