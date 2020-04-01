import React from "react";
import Event from "./Event";
import {
  service_category_bootcamp,
  service_category_qa
} from "../logic/serviceCategories";

const Events = () => {
  const events = [
    {
      // --- year , month 0-11 , day 1-..
      startDt: new Date(2020, 4, 30),
      showTime: false,
      type: service_category_bootcamp,
      title: "Web development MERN fullstack bootcamp",
      desc: (
        <span>
          Location : Lod , Israel{" "}
          <span style={{ color: "red" }}>need call for action e.g. get more info</span>
        </span>
      )
    },
    {
      startDt: new Date(2020, 3, 1, 17),
      showTime: true,
      title: "Q&A session for junior web developers",
      type: service_category_qa,
      desc: (
        <span>
          Free and public 1 hour zoom session, i will meet you{" "}
          <a href="https://zoom.us/j/5927060004">here</a>
        </span>
      )
    }
  ];
  const elements = events.map((item, index) => (
    <Event
      key={index}
      startDt={item.startDt}
      showTime={item.showTime}
      type={item.type}
      title={item.title}
      desc={item.desc}
    />
  ));

  return <div>{elements}</div>;
};

export default Events;
