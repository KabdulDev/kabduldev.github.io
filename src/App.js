import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routing from "./Components/Routing";

function App() {
  return (
    <div>
      <div className="NavHeader">
        <Routing />
      </div>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Test <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
