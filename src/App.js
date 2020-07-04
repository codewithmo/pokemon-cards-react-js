import React, { Component } from "react";
import Pokegame from "./Pokegame";
import Refresh from "./Refresh";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokegame />
        <Refresh />
      </div>
    );
  }
}

export default App;
