import React from "react";
import "./EventsSlide.css";

const EventsSlide = () => {
  const EventsSildeArray = [
    { eventName: "Web Development Bootcamp", date: "10/5/20" },
    { eventName: "Q&A Sessions", date: "14/6/20" },
    { eventName: "Interview Q&A", date: "9/7/20" },
    { eventName: "Interview Q&A", date: "9/7/20" },
    { eventName: "Interview Q&A", date: "9/7/20" },
    { eventName: "Interview Q&A", date: "9/7/20" },
  ];

  const eventsSlide = EventsSildeArray.map((eventS, index) => (
    <div key={index} className="EventsSlide-text">
      <h4 className="EventsSlide-name">{eventS.eventName}</h4>
      <p className="EventsSlide-date">{eventS.date}</p>
    </div>
  ));

  return (
    <div className="EventsSlide">
      <div className="EventsSlide-container">{eventsSlide}</div>
    </div>
  );
};

export default EventsSlide;

// <h3 className="EventsSlide-text-1 EventsSlide-text">First Event</h3>
// <h3 className="EventsSlide-text-2 EventsSlide-text">Second Event</h3>
// <h3 className="EventsSlide-text-3 EventsSlide-text">Third Event</h3>
