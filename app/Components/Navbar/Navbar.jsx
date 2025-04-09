import React from "react";

//Internal import
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        className="brand-nameimg"
        src="/Natochi-logo1.svg"
        alt=" natochi logo"
      />
      <ul className="nav-menu">
        <li> Home</li>
        <li>About Me</li>
        <li>Service</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>

      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
