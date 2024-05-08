import { useState, useEffect } from "react";
import "./App.css";
import icons from "./components/Icons";
import Footer from "./components/Footer";
import Modal from "./components/Modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalCategory, setModalCategory] = useState<string>("");
  const [modalWidth, setModalWidth] = useState<string>("");
  const [modalHeight, setModalHeight] = useState<string>("");

  const [language, setLanguage] = useState<string>("pt");
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getLanguage = () => {
    const selectedLanguage = sessionStorage.getItem("language");
    if (selectedLanguage) setLanguage(selectedLanguage);
  };

  useEffect(() => {
    getLanguage();
  });

  function openModal(category: string, width: string, height: string) {
    setIsModalOpen(true);
    setModalCategory(category);
    setModalWidth(width);
    setModalHeight(height);
  }

  return (
    <div className="app-container">
      <div className="app-wrapper">
        <div className="app-wrapper_col">
          <div className="app-wrapper_item">
            <button onClick={() => openModal("blog", "1000px", "70vh")}>
              {" "}
              <div className="app-wrapper_item__icon">
                <img
                  src={icons.blog}
                  alt="Icone pixelado de um globo terrestre, frequentemente utilizado para representar navegadores web."
                />
              </div>
              <div>
                {language === "pt"
                  ? "Meu Blog"
                  : language === "en"
                  ? "My Blog"
                  : null}{" "}
              </div>{" "}
            </button>{" "}
          </div>
          <div className="app-wrapper_item">
            <button onClick={() => openModal("career", "1000px", "50vh")}>
              {" "}
              <div className="app-wrapper_item__icon">
                <img src={icons.career} alt="Icone pixelado de troféu." />
              </div>
              <div>
                {language === "pt"
                  ? "Minha Carreira"
                  : language === "en"
                  ? "My Career"
                  : null}
              </div>{" "}
            </button>{" "}
          </div>{" "}
        </div>
        <div className="app-wrapper_center">
          <img
            src={icons.avatar}
            alt="Avatar do desenvolvedor deste site em formato pixelado e com um fundo roxo."
          ></img>
          <div className="app-wrapper_greetings">
            {" "}
            <h1 className="app-wrapper_greetings__title">
              {" "}
              saulorodrigues.dev
            </h1>
            &gt;{" "}
            {language === "pt"
              ? "desenvolvedor full stack"
              : language === "en"
              ? "full stack developer"
              : null}
            <br />
            <div className="app-wrapper_greetings__mail">
              {" "}
              <img alt="Icone pixelado de uma carta, frequentemente utilizado para representar email." src={icons.mail} /> saulorodm@gmail.com
            </div>
          </div>
        </div>
        <div className="app-wrapper_col">
          <div className="app-wrapper_item">
            <button onClick={() => openModal("stack", "600px", "50vh")}>
              <div className="app-wrapper_item__icon">
                <img
                  src={icons.stack}
                  alt="Icone pixelado de duas setas opostas, frequentemente usadas para representar códigos de aplicativos e sistemas."
                />
              </div>
              <div>
                {language === "pt"
                  ? "Minha Stack"
                  : language === "en"
                  ? "My Stack"
                  : null}{" "}
              </div>{" "}
            </button>{" "}
          </div>
          <div className="app-wrapper_item">
            <button onClick={() => openModal("about", "400px", "400px")}>
              <div className="app-wrapper_item__icon">
                <img
                  src={icons.about}
                  alt="Icone pixelado de um monitor de computador na cor azul."
                />
              </div>
              <div>
                {language === "pt"
                  ? "Sobre o app"
                  : language === "en"
                  ? "About app"
                  : null}{" "}
              </div>{" "}
            </button>{" "}
          </div>
        </div>

        {isModalOpen && (
          <Modal
            closeModal={closeModal}
            category={modalCategory}
            width={modalWidth}
            height={modalHeight}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
