import React from 'react';
import logo1 from './blackPantherGold.png';
import logo2 from './blackPantherPurple.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
        <p>
          My name is Karimu Mohammed <br>
          </br>I've edited <code>src/App.js</code> and reloaded.
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
  );
}

export default App;
