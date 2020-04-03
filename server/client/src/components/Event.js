import React from "react";
import moment from "moment";
import "./Event.css";
import eventPagePic from "../images/eventPage-pic-1.jpg";

const Event = ({ startDt, showTime, type, title, desc }) => {
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
        <small className="Event-cost">Cost: Free</small>
      </div>
    </div>
  );
};

export default Event;

{
  /* <p>Due data : {dateTimeFormated}</p>
<p>Subject : {title}</p>
<p>Description : {desc}</p> */
}

{
  /* <h4 className="Event-name">{title}</h4>
      <p className="Event-time">Date : {dateTimeFormated}</p>
      <p className="Event-desc">{ desc }</p> */
}
