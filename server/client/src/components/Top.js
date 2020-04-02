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

import { Navbar, Nav } from "react-bootstrap";

const Top = () => {
  return (
    <div className="Top">
      <header className="header">
        {
          /* <div className="Top-inner-container">
          <h2><span className="nameColor">Nathan</span> Krasney</h2>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Courses">Courses</Link>
          <Link to="/Mentoring">Mentoring</Link>
          <Link to="/Testimonials">Testimonials</Link>
          <Link to="/Events">Events</Link>
        </div> */
          <Navbar collapseOnSelect expand="xl"  variant="dark">
            <Navbar.Brand>
              <h2>
                <span className="nameColor">Nathan</span> Krasney
              </h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Link className="navigationLink" to="/">Home</Link>
                <Link className="navigationLink" to="/About">About</Link>
                <Link className="navigationLink" to="/Contact">Contact</Link>
                <Link className="navigationLink" to="/Courses">Courses</Link>
                <Link className="navigationLink" to="/Mentoring">Mentoring</Link>
                <Link className="navigationLink" to="/Testimonials">Testimonials</Link>
                <Link className="navigationLink" to="/Events">Events</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        }
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
