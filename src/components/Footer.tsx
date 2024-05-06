import React from "react";
import icons from "./Icons";

const Footer = () => {
  const date = new Date();
  return (
    <div className="app-footer">
      <footer>
        <div className="app-footer_col">
          {" "}
          <button> Start </button>{" "}
        </div>
        <div className="app-footer_col">
          <div className="app-footer_contact">
            <img src={icons.insta} />
            <img src={icons.linkedin} />
            <img src={icons.youtube} />
            <img src={icons.github} />
          </div>
          <div className="app-footer_date">
            {" "}
            {date.getHours()}:{date.getMinutes()}
            <span>{date.toDateString()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
