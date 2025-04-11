import React from "react";

//internal import
import "./Footer.css";

//React icon
import { MdOutlineUnsubscribe } from "react-icons/md";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img
            src="/natochi-logo.svg"
            alt="footer logo"
            className="footerlogo"
          />
          <p>
            I am a blockchain developer, with over 7 years blockchain knowlegdge
            and over 3 years technical experience in blockchain development, who
            is passionation in building scalable blockchain applications.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <MdOutlineUnsubscribe style={{ width: "24px", height: "24px" }} />
            <input type="email" placeholder="Enter your emaail" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2025 Nneji Tochi,Natochi. All Right Reserved
        </p>
        <div className="footer-bottm-right">
          <p>Term of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
