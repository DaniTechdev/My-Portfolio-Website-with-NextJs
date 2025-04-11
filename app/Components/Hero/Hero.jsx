"use client";

import React from "react";
import { Typewriter, useTypewriter } from "react-simple-typewriter";

//Internal import
import "./Hero.css";

const Hero = () => {
  const [text, helper] = useTypewriter({
    words: [
      "Blockchain Developer",
      "Web3 Developer",
      "Smart Contract Developer",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <div id="home" className="hero">
      <img className="profilePic" src="/myprofile.jpg" alt=" profile" />
      <h1>
        <span>I'm Nneji Tochi, Natochi, </span>Blockchain developer from Nigeria{" "}
      </h1>
      <h2>
        <span>A {""}</span>
        {text}
      </h2>
      <p data-aos="fade-up" data-aos-duration="2000">
        I am a blockchain developer, with over 7 years blockchain knowlegdge and
        over 3 years technical experience in blockchain development, who is
        passionation in building scalable blockchain applications.
      </p>
      <div
        className="hero-action"
        data-aos="flip-left"
        data-aos-duration="2000"
      >
        <div className="hero-connect">
          <a href="#contact">Connect with me</a>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
