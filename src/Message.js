import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./Message.css";

class Message extends Component {
  constructor(props) {
    super(props);
    this.color = props.mine ? "success" : "light";
  }

  style = {
    display: "inline-block",
    maxWidth: "20rem"
  };

  render() {
    return (
      <>
        <Card
          bg={this.color}
          text={this.color === "light" ? "dark" : "white"}
          style={this.style}
        >
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </>
    );
  }
}

export default Message;
