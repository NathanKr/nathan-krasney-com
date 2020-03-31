import React from "react";
import moment from "moment";

const Event = ({ startDt, showTime, type,title, desc }) => {
  const dateTime = moment(startDt);
  const dateTimeFormated = showTime
    ? dateTime.format("DD/MMM/YYYY - hh:mm A")
    : dateTime.format("DD/MMM/YYYY");

  return (
    <div>
      <p>Due data : {dateTimeFormated}</p>

      <p>Subject : {title}</p>
      <p>Description : {desc}</p>
    </div>
  );
};

export default Event;
