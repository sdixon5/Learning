import React, { Component } from 'react';
// import Game from './Game';
// import Game2 from './Game2';
// import Demo from './Demo';
// import Rando from './Rando';
// import Button from './Button';
import BrokenClick from './BrokenClick';
import BrokenClick2 from './BrokenClick2';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Game /> */}
        {/* <Game2 /> */}
        {/* <Demo animal="Tiger" food="Pizza" /> */}
        {/* <Rando maxNum={7}/> */}
        {/* <Button /> */}
        <BrokenClick />
        {/* <BrokenClick2 /> */}
      </div>
    )
  }
}

export default App;
