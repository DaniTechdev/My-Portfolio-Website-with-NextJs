"use client";

import React, { useState, useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
//React Icons
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlineLocationCity } from "react-icons/md";
//Internaal  import
import "./Contact.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const form = useRef();

  useEffect(() => {
    let timer;
    if (status === "success") {
      timer = setTimeout(() => {
        setStatus(null);
        setIsSubmitting(false);
      }, 5000); // 5 seconds timeout
    }

    // Cleanup timer when component unmounts or status changes
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [status]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_c09vip6", // From EmailJS dashboard
        "template_dhk4xho", // From EmailJS dashboard
        form.current,
        "aV2c0wvZJdDWx1FvC" // From EmailJS dashboard
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          // Reset form or show success message
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src="/natochi-logo.svg" alt=" theme pattern logo" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently available to take on new projects, so feel free to
            get in touch as soon as possible anytime!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <BiLogoGmail style={{ width: "50px", height: "50px" }} />{" "}
              <p>tochidan11@gmail.com</p>
            </div>

            <div className="contact-detail">
              <FaPhoneAlt style={{ width: "50px", height: "50px" }} />{" "}
              <p>+2347033541712</p>
            </div>

            <div className="contact-detail">
              <MdOutlineLocationCity
                style={{ width: "50px", height: "50px" }}
              />{" "}
              <p>Enugu State, Nigeria, Lagos State Nigeria</p>
            </div>
          </div>
        </div>

        {status === "success" && (
          <div className="success-message">
            Message sent successfully! Thank you for contacting us.
          </div>
        )}

        {status === "error" && (
          <div className="error-message">
            Something went wrong. Please try again later.
          </div>
        )}

        <form className="contact-right" ref={form} onSubmit={sendEmail}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="contact-submit"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
