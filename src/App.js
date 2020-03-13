import React, { Component } from "react";
import "./App.css";
import Message from "./Message";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
class App extends Component {
  render() {
    return (
      <Container>
        <p>bienvenue dans cette app</p>
        <Message
          mine={true}
          username="theo"
          messageContent="Ceci est le premier message mais je peux aussi decider d'ecrire beaucoup plus mais ca"
        />
      </Container>
    );
  }
}

export default App;
