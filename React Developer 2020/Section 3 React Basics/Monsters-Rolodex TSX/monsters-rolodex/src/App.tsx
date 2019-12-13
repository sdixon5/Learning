import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  // constructor(props: any){
  //   super(props);

  //   this.state = {
  //     string: "Hello Shawn Dixon"
  //   }

  state = {
    monsters: [
      {
        name: "Frankenstein",
        id: "asc1"
      },
      {
        name: "Dracula",
        id: "asr2"
      },
      {
        name: "Zombie",
        id: "as1w"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
