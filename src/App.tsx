import React from "react";
import "./App.css";

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
    </div>
  );
}

export default App;
