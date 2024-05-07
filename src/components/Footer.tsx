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
            <a href="https://www.instagram.com/sauloagain/">
              {" "}
              <img
                src={icons.insta}
                alt="Ícone da rede social Instagram em formato pixelado"
              />{" "}
            </a>
            <a href="https://www.linkedin.com/in/saulorodriguesm/">
              {" "}
              <img
                src={icons.linkedin}
                alt="Ícone da rede social Linkedin em formato pixelado"
              />
            </a>
            <a href="https://www.youtube.com/@saulorodm">
              {" "}
              <img
                src={icons.youtube}
                alt="Ícone da rede social Youtube em formato pixelado"
              />
            </a>
            <a href="https://github.com/saulorodriguesm">
              {" "}
              <img
                src={icons.github}
                alt="Ícone da rede social Github em formato pixelado"
              />
            </a>
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
