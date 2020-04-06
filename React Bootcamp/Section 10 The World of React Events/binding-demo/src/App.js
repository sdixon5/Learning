import React from 'react';
import logo from './logo.svg';
import './App.css';
import WiseSquare from './WiseSquare';
import AnnoyingForm from './AnnoyingForm';
import CopyDemo from './CopyDemo';
import WiseSquareWithProps from './WiseSquareWithProps';

function App() {
  return (
    <div className="App">
      <h1>React Events!</h1>
      <WiseSquare />
      {/* <AnnoyingForm /> */}
      {/* <CopyDemo /> */}
      <WiseSquareWithProps />
    </div>
  );
}

export default App;
