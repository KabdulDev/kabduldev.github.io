/*-------React Imports -----------*/

import React from 'react';
import logo1 from './blackPantherPurple.png';
import logo2 from './blackPantherGold.png';
import logo3 from './blackPantherBlack.png'
import './App.css';

/*----- React event listeners -----*/

/*------- main App function -------*/
function App() {

  
  switch (state){
    case '0':
      return (
        <button onClick = {this.handleClick}>
          Watch the Site Change
        </button>
        <div className="App">
          <header className="App-header1">
            <img src={logo1} className="App-logo" alt="logo" />
          <p>
            My name is Karimu Mohammed <br>
            </br>I've edited <code>src/App.js</code> to create a new experience.
          </p>
          <a
            className="App-link"
            href="https://github.com/Kabduldev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Me Out! You can follow my Github page here
          </a>
        </header>
      </div>
      );
    

    case 1 :
      return (
        <button onClick = {this.handleClick}>
          Watch the Site Change More!
        </button>
        <div className="App">
          <header className="App-header2">
            <img src={logo2} className="App-logo" alt="logo" />
            <p>
              My name is Karimu Mohammed <br>
              </br>I've edited <code>src/App.js</code> to create a new experience.
            </p>
            <a
              className="App-link"
              href="https://github.com/Kabduldev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Me Out! You can follow my Github page here
            </a>
          </header>
        </div>
      );
    
    case 2: 
      return (
        <div className="App">
          <header className="App-header3">
            <img src={logo3} className="App-logo" alt="logo" />
            <p>
              My name is Karimu Mohammed <br>
              </br>I've edited <code>src/App.js</code> to create a new experience.
            </p>
            <a
              className="App-link"
              href="https://github.com/Kabduldev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Me Out! You can follow my Github page here
            </a>
          </header>
        </div>
      );
  
}

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = 0;

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state += 1 );
  }
 

export default App;
