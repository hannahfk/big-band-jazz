import saxaphone from "./saxaphone.png";
import "./App.css";
import { Link } from "react-router-dom";
import Routes from "./Routes";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

const Hire = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={saxaphone} className="App-logo" alt="logo" />
        <p>
          Contact
          <hr></hr>
          <AiOutlinePhone/> 850-803-7985
          <hr></hr>
          <AiOutlineMail /> bbopsax@cox.net
          <hr></hr>
          <ImLocation /> Flexible
        </p>
        {/* <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/about"
        >
          About
        </NavLink> */}
      </header>
    </div>
  );
};

export default Hire;
