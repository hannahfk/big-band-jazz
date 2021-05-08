import saxaphone from "./saxaphone.png";
import "./App.css";
import { Link } from "react-router-dom";
import Routes from "./Routes";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";

const About = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={saxaphone} className="App-logo" alt="logo" />
        <h1>
          Robert Kemp
          <hr></hr>
        </h1>
        <div className="message">
        <p className="message-body">
          Hailing from Fort Walton Beach, Florida, Robert has been playing
          saxaphone in bands since the 6th grade. He plays a variety of music
          including polka and jazz, but loves playing in Big Bands. He
          has played with bands and in solo gigs all over the South, including
          in New Orleans, Destin, St. Petersburg, Mississipi, and Alabama. In
          his free time, he created a church band and was the band director for
          over 6 years.
        </p>
        </div>
      </header>
    </div>
  );
};

export default About;
