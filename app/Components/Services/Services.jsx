import React from "react";

//Internal import
import "./Service.css";
import { Services_Data } from "../../Asset/Service_data";

//React iconss
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="servicess-title">
        <h1>My Services</h1>
        <img
          src="/natochi-logo.svg"
          alt="theme patterm image"
          className="theme-patternimg"
        />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="service-format">
              <h3>{service.S_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_description}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <FaArrowRight className="services-icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
