import React, { Component } from "react";
import "./App.css";
import Message from "./Message";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Form, Row, Button } from "react-bootstrap";
import ApiHandler from "./ApiHandler";

class App extends Component {
  state = {
    textBox: "",
    messages: [],
    user: { username: "" }
  };

  componentDidMount() {
    this.dbHanlder = new ApiHandler(this.displayMessages);
    const username = this.dbHanlder.connect();
    this.setState({ user: { username: username } });
  }

  //arrow fx for binding
  displayMessages = messages => {
    this.setState({ messages: messages });
  };

  //arrow fx for binding
  handleWriteMessage = event => {
    const message = event.target.value;
    this.setState({ textBox: message });
  };

  diplayNewMessage = message => {
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages: messages });
  };

  //arrow fx for binding
  HandleSendMessage = event => {
    event.preventDefault();
    const newEntry = {
      messageContent: this.state.textBox
    };
    this.dbHanlder.sendingNewMessage(newEntry);
    this.setState({ textBox: "" });
  };

  render() {
    const { messages, user } = this.state;
    return (
      <>
        <Navbar className="mb-4" expand="lg" variant="light" bg="dark">
          <Container>
            <Navbar.Brand href="#">Messenger</Navbar.Brand>
          </Container>
        </Navbar>
        <Container className="messages p-4">
          {messages.map(message => (
            <Message
              key={message.id}
              mine={message.username === user.username ? true : false}
              username={message.username}
              messageContent={message.messageContent}
            />
          ))}
        </Container>

        <Container className="p-0">
          <Form className="mt-5 " onSubmit={this.HandleSendMessage}>
            <Row>
              <Form.Group className="col-10">
                <Form.Control
                  onChange={this.handleWriteMessage}
                  value={this.state.textBox}
                  type="text"
                  placeholder="Write Here..."
                />
              </Form.Group>
              <Button className="btn-send col-2 pt-0 pb-0" type="submit">
                Send
              </Button>
            </Row>
          </Form>
        </Container>
      </>
    );
  }
}

export default App;

//

// const MOCKMESSAGES = [
//   {
//     mine: true,
//     username: "theo",
//     messageContent:
//       "Ceci est le premier message mais je peux aussi decider d'ecrire beaucoup plus mais ca"
//   },
//   {
//     mine: false,
//     username: "Maman",
//     messageContent: "Ceci est un petit message"
//   },
// ];
