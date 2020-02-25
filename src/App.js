/*-------React Imports -----------*/

import React from 'react';
import logo1 from './blackPantherPurple.png';
import logo2 from './blackPantherGold.png';
import logo3 from './blackPantherBlack.png'
import ReactDOM from 'react-dom' //needed for final page render taken from https://reactjs.org/docs/react-dom.html
//import { Button, StyleSheet, View } from 'react-native'; //taken from documentation https://reactnative.dev/docs/handling-touches.html
import './App.css';


/*-------Site States -----------*/
let state = {page : 0}
let page = 0


function App() {
  switch (state.page){
    case 0 :
    return (
      <div className="App">
        <header className="App-header1">
          <img src={logo1} className="App-logo1" alt="See the Site Change" />
          <StateButton>
            Click to see the Site Update
          </StateButton>
          <p>
            My name is Karimu Mohammed <br>
            </br>I've edited <code>src/App.js</code> and reloaded.
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
      <div className="App">
        <header className="App-header2">
          <img src={logo2} className="App-logo2" alt="logo" />
          <StateButton>
            Once more now!
          </StateButton>
          <p>
            Check for the origins of the Black Panther comic or follow the modern series
          </p>
          <a
            className="App-link"
            href="https://en.wikipedia.org/wiki/Black_Panther_(Marvel_Comics)"
            target="_blank"
            rel="noopener noreferrer"
          >
            See the start:
          </a>
          <a
            className="App-link"
            href="https://readcomicsonline.ru/comic/black-panther-2018/1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Or follow the modern series:
          </a>
        </header>
      </div>
    );
  
  default :
    return (
      <div className="App">
        <header className="App-header3">
          <img src={logo3} className="App-logo3" alt="logo" />
           <p>
            Before Black History month ends download a collection of black works from the Black History Month Library.
          </p>
          <a
            className="App-link"
            href="https://drive.google.com/drive/folders/0Bz011IF2Pu9TUWIxVWxybGJ1Ync"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Drive Link Here.
          </a>
        </header>
      </div>
    );
  }
}
/*
Toggle Button Feature taken from React event handling doc changed it to an iterative Site Change
https://reactjs.org/docs/handling-events.html
*/
class StateButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page : 0};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(page += 1);
  }


  render() {
    return (
      <button onClick={this.handleClick}>
        See the Site Change
      </button>
    );
  }
}

ReactDOM.render(
  <StateButton />,
  document.getElementById('root')
);

export default App;