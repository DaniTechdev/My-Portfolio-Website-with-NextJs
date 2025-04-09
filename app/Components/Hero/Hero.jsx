import React from "react";

//Internal import
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img className="profilePic" src="/myprofile.jpg" alt=" profile" />
      <h1>
        <span>I'm Nneji Tochi, Natochi, </span>Blockchain developer from Nigeria{" "}
      </h1>
      <p>
        I am a blockchain developer, with over 7 years blockchain knowlegdge and
        over 3 years technical experience in blockchain development, who is
        passionation in building scalable blockchain applications.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
