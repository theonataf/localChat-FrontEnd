import socketIOClient from "socket.io-client";
import { Component } from "react";

class ApiHandler extends Component {
  state = {
    endpoint: "http://localhost:8080"
  };

  socket = socketIOClient(this.state.endpoint);
  constructor(displayMessages, addNewMessage) {
    super();
    const username = prompt("Username ?");
    this.state.user = { username: username };
    this.socket.emit("newUser", this.state.user);
    this.displayMessages = displayMessages;
    this.addNewMessage = addNewMessage;
    fetch("http://localhost:8080/getMessages")
      .then(blob => blob.json())
      .then(data => {
        console.log(data);
        this.displayMessages(data);
      });
  }

  listenToNewMessages = () => {
    this.socket.on("newMessage", messages => {
      console.log("hey");
      this.displayMessages(messages);
    });
  };

  sendNewMessage = message => {
    message.user = this.state.user;
    this.socket.emit("sendNewMessage", message);
    this.addNewMessage(message);
  };

  render() {
    return null;
  }
}

export default ApiHandler;
