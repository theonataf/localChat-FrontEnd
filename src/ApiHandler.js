import socketIOClient from "socket.io-client";
import React, { Component } from "react";

class ApiHandler extends Component {
  state = {
    endpoint: "http://localhost:8080"
  };

  socket = socketIOClient(this.state.endpoint);
  constructor(showMessages) {
    super();
    this.displayMessages = showMessages;
  }
  connect() {
    let username = "";
    this.socket.on("refreshMessage", messages => {
      this.displayMessages(messages);
    });
    this.socket.on("User", exists => {
      if (!exists) {
        username = prompt("Username");
        this.socket.emit("newUser", {
          username: username
        });
      } else {
        username = exists.username;
      }
    });
    return username;
  }

  sendingNewMessage(message) {
    this.socket.emit("sendNewMessage", message);
  }

  componentDidMount() {}

  render() {
    return null;
  }
}

export default ApiHandler;
