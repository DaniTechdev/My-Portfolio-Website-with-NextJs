import React from "react";

//Internal  import
import "./MyWork.css";
import { mywork_data } from "@/app/Asset/mywork_data";

//Internal import
import { FaArrowRight } from "react-icons/fa";

const MyWork = () => {
  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My Lastest Work</h1>
        {/* <img
          className="theme-patternimg"
          src="/natochi-logo.svg"
          alt="theme pattern"
        /> */}
        <img
          src="/natochi-logo.svg"
          alt="theme pattern"
          className="themepattermImg"
        />
      </div>
      <div className="mywork-container">
        {mywork_data.map((mywork, index) => {
          return (
            <img className="mywork-img" src={mywork.w_img} alt={mywork.alt} />
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default MyWork;
