import { useState } from "react";
import "./App.css";
import icons from "./components/Icons";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <div className="app-wrapper">
        <div className="app-wrapper_col">
          <div className="app-wrapper_item">
            <button onClick={() => setIsModalOpen(true)}>
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
            <button>
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
            <button>
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
          <div className="app-wrapper_item">
            <button>
              {" "}
              <div className="app-wrapper_item__icon">
                <img
                  src={icons.music}
                  alt="Icone pixelado de uma caixa de som colorida."
                />
              </div>
              <div>My Music </div>{" "}
            </button>{" "}
          </div>
        </div>

        {isModalOpen && <Modal closeModal={closeModal} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
