import React, { useState } from "react";
import Blog from "./components/Blog";
import Career from "./components/Career";
import Stack from "./components/Stack";

interface Props {
  closeModal: () => void;
  category: string;
}

const Modal: React.FC<Props> = ({ closeModal, category }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setInitialPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - initialPosition.x,
      y: e.clientY - initialPosition.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="app-modal"
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        border: "1px solid black",
        padding: "10px",
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="app-modal_header">
        <div className="app-modal_header__close">
          {" "}
          <button onClick={closeModal}>X</button>{" "}
        </div>
        <div className="app-modal_header__title"> Modal </div>
      </div>
      <div className="app-modal_content">
        {category === "blog" ? (
          <Blog />
        ) : category === "stack" ? (
          <Stack />
        ) : category === "career" ? (
          <Career />
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
