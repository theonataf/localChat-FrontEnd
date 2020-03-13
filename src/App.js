import React, { Component } from "react";
import "./App.css";
import Message from "./Message";

class App extends Component {
  render() {
    return (
      <div>
        <p>bienvenue dans cette app</p>
        <Message />
      </div>
    );
  }
}

export default App;
