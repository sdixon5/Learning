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
    string: "Hello Shawn Dixon"
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: "Hello IronMan" })}>
            Change Text
          </button>
        </header>
      </div>
    );
  }
}

export default App;
