import React, { Component } from "react";
import "./App.css";
import Message from "./Message";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Form, Row, Button } from "react-bootstrap";

class App extends Component {
  state = {
    textBox: "",
    messages: []
  };

  constructor(props) {
    super(props);
    this.state.messages = MOCKMESSAGES;
  }

  //arrow fx for binding
  handleWriteMessage = event => {
    const message = event.target.value;
    this.setState({ textBox: message });
  };

  //arrow fx for binding
  HandleSendMessage = () => {
    const { textBox, messages } = this.state;
    if (textBox.length > 0) {
      messages.push({
        mine: false,
        username: "Anaelle",
        messageContent: textBox
      });
    }
    this.setState({ messages: messages, textBox: "" });
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
          {messages.map((message, index) => (
            <Message
              key={index}
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

const MOCKMESSAGES = [
  {
    mine: true,
    username: "theo",
    messageContent:
      "Ceci est le premier message mais je peux aussi decider d'ecrire beaucoup plus mais ca"
  },
  {
    mine: false,
    username: "Maman",
    messageContent: "Ceci est un petit message"
  },
  { mine: true, username: "theo", messageContent: "ah ouai ?" },
  { mine: false, username: "JeSuisTheoNatsf", messageContent: "Okay" },
  {
    mine: true,
    username: "theo",
    messageContent:
      "Ceci est le premier message mais je peux aussi decider d'ecrire beaucoup plus mais ca"
  },
  {
    mine: true,
    username: "theo",
    messageContent:
      "Ceci est le premier message mais je peux aussi decider d'ecrire beaucoup plus mais ca"
  },
  {
    mine: true,
    username: "theo",
    messageContent:
      "Ceci est le premier message mais je peux aussi decider d'ecrire beaucoup plus mais ca"
  },
  {
    mine: true,
    username: "theo",
    messageContent:
      "Ceci est le premier message mais je peux aussi decider d'ecrire beaucoup plus mais ca"
  }
];
