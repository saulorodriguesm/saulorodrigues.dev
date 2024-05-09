import React, { useEffect, useState } from "react";
import icons from "./Icons";

const Footer = () => {
  const [isButtonClicked, setButtonClicked] = useState<boolean>(false);
  const [isOpenSettings, setIsOpenSettings] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("pt");
  const date = new Date();

  const setLanguageAtSession = (language: string) => {
    sessionStorage.setItem("language", language);
    window.location.reload();
  };

  const getLanguage = () => {
    const selectedLanguage = sessionStorage.getItem("language");
    if (selectedLanguage) setLanguage(selectedLanguage);
  };

  useEffect(() => {
    getLanguage();
  }, [language]);

  return (
    <div className="app-footer">
      <footer>
        <div className="app-footer_col">
          <button
            onClick={() => {
              isButtonClicked
                ? setButtonClicked(false)
                : setButtonClicked(true);
            }}
          >
            {language === "pt" ? "Iniciar" : language === "en" ? "Start" : null}
          </button>
          {isButtonClicked ? (
            <div
              onClick={() => setIsOpenSettings(true)}
              className="app-footer_start"
            >
              <img
                alt="Ícone de uma engrenagem amarela em formato pixelado"
                src={icons.settings}
              />
              {language === "pt"
                ? "Configurações"
                : language === "en"
                ? "Settings"
                : null}
            </div>
          ) : null}
        </div>
        <div className="app-footer_col">
          <div className="app-footer_contact">
            <a
              href="https://www.instagram.com/sauloagain/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={icons.insta}
                alt="Ícone da rede social Instagram em formato pixelado"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/saulorodriguesm/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={icons.linkedin}
                alt="Ícone da rede social Linkedin em formato pixelado"
              />
            </a>
            <a
              href="https://www.youtube.com/@saulorodm"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={icons.youtube}
                alt="Ícone da rede social Youtube em formato pixelado"
              />
            </a>
            <a
              href="https://github.com/saulorodriguesm"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={icons.github}
                alt="Ícone da rede social Github em formato pixelado"
              />
            </a>
          </div>
          <div className="app-footer_date">
            {date.getHours()}:{date.getMinutes()}
            <span>{date.toDateString()}</span>
          </div>
        </div>
      </footer>
      {isOpenSettings ? (
        <div className="app-settings">
          <div className="app-settings_header">
            <button onClick={() => setIsOpenSettings(false)}>X</button>
            {language === "pt"
              ? "configurações"
              : language === "en"
              ? "settings"
              : null}
          </div>
          <div className="app-settings_wrapper">
            <div className="app-settings_language">
              <div className="app-settings_language__label">
                {language === "pt"
                  ? "Selecione o seu idioma:"
                  : language === "en"
                  ? "Select your language:"
                  : null}
              </div>
              <div className="app-settings_language__options">
                <div className="app-settings_language__option">
                  <img
                    alt="Ícone da bandeira do Brasil em formato pixelado"
                    className="app-settings_language__icon"
                    src={icons.pt}
                  />
                  <button onClick={() => setLanguageAtSession("pt")}>
                    {language === "pt"
                      ? "português"
                      : language === "en"
                      ? "portuguese"
                      : null}
                  </button>
                </div>
                <div className="app-settings_language__option">
                  <img
                    alt="Ícone da bandeira do Reino Unido em formato pixelado"
                    className="app-settings_language__icon"
                    src={icons.eng}
                  />
                  <button onClick={() => setLanguageAtSession("en")}>
                    {language === "pt"
                      ? "inglês"
                      : language === "en"
                      ? "english"
                      : null}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Footer;
