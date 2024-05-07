import React from "react";
import "./App.css";
<<<<<<< Updated upstream

function App() {
  const date = new Date();
  return (
    <div className="app-container">
      <div className="app-wrapper">working in progress...</div>
      <footer className="app-footer">
        <button> Start </button>
        <div className="app-footer_date">
          {" "}
          {date.getHours()}:{date.getMinutes()}
          <span>{date.toDateString()}</span>
        </div>
      </footer>
=======
import icons from "./components/Icons";
import Footer from "./components/Footer";
import Modal from "./components/Modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalCategory, setModalCategory] = useState<string>("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function openModal(category: string) {
    setIsModalOpen(true);
    setModalCategory(category);
  }

  return (
    <div className="app-container">
      <div className="app-wrapper">
        <div className="app-wrapper_col">
          <div className="app-wrapper_item">
            <button onClick={() => openModal("blog")}>
              {" "}
              <div className="app-wrapper_item__icon">
                <img
                  src={icons.blog}
                  alt="Icone pixelado de um globo terrestre, frequentemente utilizado para representar navegadores web."
                />
              </div>
              <div>My Blog </div>{" "}
            </button>{" "}
          </div>
          <div className="app-wrapper_item">
            <button onClick={() => openModal("career")}>
              {" "}
              <div className="app-wrapper_item__icon">
                <img src={icons.career} alt="Icone pixelado de troféu." />
              </div>
              <div>My Career </div>{" "}
            </button>{" "}
          </div>{" "}
        </div>
        <div className="app-wrapper_col">
          <div className="app-wrapper_item">
            <button onClick={() => openModal("stack")}>
              {" "}
              <div className="app-wrapper_item__icon">
                <img
                  src={icons.stack}
                  alt="Icone pixelado de duas setas opostas, frequentemente usadas para representar códigos de aplicativos e sistemas."
                />
              </div>
              <div>My Stack </div>{" "}
            </button>{" "}
          </div>
        </div>

        {isModalOpen && (
          <Modal closeModal={closeModal} category={modalCategory} />
        )}
      </div>
      <Footer />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
