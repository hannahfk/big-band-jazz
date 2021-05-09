import saxaphone from "./saxaphone.png";
import "./App.css";
import { Link } from "react-router-dom";
import Routes from "./Routes";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";

const Music= () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={saxaphone} className="App-logo" alt="logo" />
        <p>
          Robert Kemp
          <hr></hr>
          Musician
        </p>
        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/about"
        >
          YouTube
        </NavLink>
      </header>
    </div>
  );
};

export default Music;