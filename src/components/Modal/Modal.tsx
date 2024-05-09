import React, { useState, useRef, useEffect } from "react";
import Blog from "./components/Blog";
import Career from "./components/Career";
import Stack from "./components/Stack";
import About from "./components/About";

interface Props {
  closeModal: () => void;
  category: string;
  width: string;
  height: string;
}

const Modal: React.FC<Props> = ({ closeModal, category, width, height }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 150, y: 100 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState<string>("pt");
  const modalRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setInitialPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const parentElement = modalRef.current?.parentElement;
    if (!parentElement) return;

    const maxX =
      modalRef.current.parentElement.offsetWidth - modalRef.current.offsetWidth;
    const maxY =
      modalRef.current.parentElement.offsetHeight -
      modalRef.current.offsetHeight;

    let newX = e.clientX - initialPosition.x;
    let newY = e.clientY - initialPosition.y;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const getLanguage = () => {
    const selectedLanguage = sessionStorage.getItem("language");
    if (selectedLanguage) setLanguage(selectedLanguage);
  };

  useEffect(() => {
    getLanguage();
  }, [language]);

  console.log(width);
  return (
    <div
      className="app-modal"
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        cursor: isDragging ? "grabbing" : "default",
        width: width,
        height: height,
      }}
      ref={modalRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="app-modal_header">
        <div className="app-modal_header__close">
          <button onClick={closeModal}>X</button>
        </div>
        <div className="app-modal_header__title"> {category} </div>
      </div>
      <div className="app-modal_content">
        {category === "blog" ? (
          <Blog language={language} />
        ) : category === "stack" ? (
          <Stack language={language} />
        ) : category === "career" || category === "carreira" ? (
          <Career language={language} />
        ) : category === "about" || category === "sobre" ? (
          <About language={language} />
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
