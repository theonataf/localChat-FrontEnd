class ApiHandler {
  state = {};

  constructor(socket, displayMessages) {
    this.socket = socket;
    const username = prompt("Username ?");
    this.state.user = { username: username };
    this.socket.emit("newUser", this.state.user);
    this.displayMessages = displayMessages;
    fetch("http://localhost:8080/getMessages")
      .then(blob => blob.json())
      .then(data => {
        console.log(data);
        this.displayMessages(data);
      });
    this.socket.on("newMessage", messages => {
      console.log("hey");
      this.displayMessages(messages);
    });
  }

  sendNewMessage = message => {
    message.user = this.state.user;
    this.socket.emit("sendNewMessage", message);
  };
}

export default ApiHandler;
