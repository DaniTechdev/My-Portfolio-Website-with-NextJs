"use client";

import React, { useRef, useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";

//Internal import
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0px";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-400px";
  };

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
  };

  return (
    <div className="navbar">
      <img
        className="brand-nameimg"
        src="/Natochi-logo1.svg"
        alt=" natochi logo"
      />
      <MdOutlineMenuOpen className="menu-openmob" onClick={openMenu} />
      <ul ref={menuRef} className="nav-menu">
        <FaWindowClose className="menu-closemob" onClick={closeMenu} />
        <li onClick={() => handleMenuClick("home")}>
          <a href="#home">
            <p> Home</p>
          </a>
          {menu == "home" ? (
            <img
              src="/horizontl.svg"
              className="horizontalline"
              alt="underlineimg"
            />
          ) : (
            <></>
          )}
        </li>
        <li onClick={() => handleMenuClick("about")}>
          <a href="#about">
            {" "}
            <p>About Me</p>
          </a>
          {menu == "about" ? (
            <img
              src="/horizontl.svg"
              className="horizontalline"
              alt="underlineimg"
            />
          ) : (
            <></>
          )}
        </li>
        <li onClick={() => handleMenuClick("services")}>
          <a href="#services">
            <p>Service</p>
          </a>
          {menu == "services" ? (
            <img
              src="/horizontl.svg"
              className="horizontalline"
              alt="underlineimg"
            />
          ) : (
            <></>
          )}
        </li>
        <li onClick={() => handleMenuClick("work")}>
          <a href="#mywork">
            <p>Portfolio</p>
          </a>
          {menu == "work" ? (
            <img
              src="/horizontl.svg"
              className="horizontalline"
              alt="underlineimg"
            />
          ) : (
            <></>
          )}
        </li>
        <li onClick={() => handleMenuClick("contact")}>
          <a href="#contact">
            {" "}
            <p>Contact</p>
          </a>
          {menu == "contact" ? (
            <img
              src="/horizontl.svg"
              className="horizontalline"
              alt="underlineimg"
            />
          ) : (
            <></>
          )}
        </li>
      </ul>

      <div className="nav-connect">
        <a href="#contact">Connect With Me</a>
      </div>
    </div>
  );
};

export default Navbar;
