import "./App.css";
import icons from "./components/Icons"

function App() {
  const date = new Date();
  return (
    <div className="app-container">
      <div className="app-wrapper">
        <div className="app-wrapper_col">
          <div className="app-wrapper_item">
            <button>
              {" "}
              <div className="app-wrapper_item__icon">
                <img src={icons.blog} />
              </div>
              <div>My Blog </div>{" "}
            </button>{" "}
          </div>
          <div className="app-wrapper_item">
            <button>
              {" "}
              <div className="app-wrapper_item__icon">
                <img src={icons.career} />
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
                <img src={icons.stack} />
              </div>
              <div>My Stack </div>{" "}
            </button>{" "}
          </div>
          <div className="app-wrapper_item">
            <button>
              {" "}
              <div className="app-wrapper_item__icon">
                <img src={icons.music} />
              </div>
              <div>My Music </div>{" "}
            </button>{" "}
          </div>
        </div>
      </div>
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
