import React from "react";
import moment from "moment";
import "./Event.css";
import eventPagePic from "../images/eventPage-pic.jpg";

const Event = ({ startDt, showTime, type, title, desc, location }) => {
  const dateTime = moment(startDt);
  const dateTimeFormated = showTime
    ? dateTime.format("DD/MMM/YYYY - hh:mm A")
    : dateTime.format("DD/MMM/YYYY");

  return (
    <div className="Event">
      <div className="Event-img-container">
        <img src={eventPagePic} alt="event" className="Event-img" />
        <div className="Event-img-inner-container">
          <h5 className="Event-date">{ dateTimeFormated }</h5>
        </div>
      </div>

      <div className="Event-desc-container">
        <h4 className="Event-name">{title}</h4>
        <p className="Event-desc">{desc}</p>
        <small>Location : {location}</small>
      </div>
    </div>
  );
};

export default Event;

