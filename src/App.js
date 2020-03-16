import React, { Component } from "react";
import "./App.css";
import Message, { saveNewEntry, initialiseMessages } from "./Message";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Form, Row, Button } from "react-bootstrap";

class App extends Component {
  state = {
    textBox: "",
    messages: []
  };

  constructor(props) {
    super(props);
    this.user = initialiseUsername();
  }

  componentDidMount() {
    initialiseMessages(this.displayMessages);
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
      messageContent: this.state.textBox,
      mine: true,
      username: this.user.username
    };
    saveNewEntry(newEntry, this.diplayNewMessage);

    // const { textBox, messages } = this.state;
    // if (textBox.length > 0) {
    //   messages.push({
    //     mine: false,
    //     username: "Anaelle",
    //     messageContent: textBox
    //   });
    // }
    // this.setState({ messages: messages, textBox: "" });
  };

  render() {
    const { messages } = this.state;
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
              mine={message.mine}
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

const USER_KEY = "::Messenger::User";

function initialiseUsername() {
  let user = JSON.parse(localStorage.getItem(USER_KEY));
  if (user === null) {
    user = { username: prompt("Choose a Username") };
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  return user;
}
