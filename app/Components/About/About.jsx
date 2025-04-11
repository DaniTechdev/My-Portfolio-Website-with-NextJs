import React from "react";

//Internal import
import "./About.css";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img
          className="theme-patternimg"
          src="/natochi-logo.svg"
          alt="theme pattern"
        />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            className="about-profileimg"
            src="/myprofile.jpg"
            alt="profile imaga"
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              As a blockchain developer with over 7 years of blockchain
              knowledge and 3+ years of hands-on technical experience, I've
              dedicated my career to building scalable blockchain applications
              that solve real-world problems.
            </p>
            <p>
              When I'm not coding, I stay at the forefront of blockchain
              innovation through continuous learning, participating in
              hackathons, and contributing to open-source projects in the
              blockchain community.
            </p>
          </div>{" "}
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React & NextJs</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript </p>
              <hr style={{ width: "60%" }} />
            </div>

            <div className="about-skill">
              <p>Solidity</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>
                Hardhat & <br />
                Ether.js{" "}
              </p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Tokenomics Design </p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>
                Nodej & Express & <br />
                Mongoose{" "}
              </p>
              <hr style={{ width: "57%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-ahcievement">
          <h1> 7+</h1>
          <p> YEARS OF BLOCHCHAIN KNOWLEDGE EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-ahcievement">
          <h1> 3+</h1>
          <p> YEARS OF BLOCHCHAIN DEVELOPEMENT</p>
        </div>
        <hr />
        <div className="about-ahcievement">
          <h1> 15+</h1>
          <p> PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-ahcievement">
          <h1> 5+</h1>
          <p>Happy Client</p>
        </div>
      </div>
    </div>
  );
};

export default About;
