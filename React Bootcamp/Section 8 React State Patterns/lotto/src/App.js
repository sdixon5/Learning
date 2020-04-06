import React from 'react';
import Lottery from './Lottery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title='MiniDaily' maxNum={10} numBalls={4} />
      <Lottery title='' maxNum={1000} numBalls={10} />
    </div>
  );
}

export default App;
