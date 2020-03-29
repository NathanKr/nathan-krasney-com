import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Courses from "./Courses";
import Testimonials from "./Testimonials";
import Events from "./Events";
import About from "./About";
import Mentoring from "./Mentoring";
import { Switch, Route, Link } from "react-router-dom";
import "./Top.css";

const Top = () => {
  return (
    <div className="Top">
      <header>
        <div>
          <h2>Nathan Krasney</h2>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Courses">Courses</Link>
          <Link to="/Mentoring">Mentoring</Link>
          <Link to="/Testimonials">Testimonials</Link>
          <Link to="/Events">Events</Link>
        </div>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Courses" component={Courses} />
        <Route exact path="/Mentoring" component={Mentoring} />
        <Route exact path="/Testimonials" component={Testimonials} />
        <Route exact path="/Events" component={Events} />
      </Switch>
    </div>
  );
};

export default Top;
