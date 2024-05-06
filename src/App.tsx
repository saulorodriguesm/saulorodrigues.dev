import "./App.css";
import icons from "./components/Icons";
import Footer from "./components/Footer"

function App() {
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
      <Footer />
    </div>
  );
}

export default App;
