import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import "./Message.css";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";

class Message extends Component {
  constructor(props) {
    super(props);
    this.color = props.mine ? "success" : "light";
  }

  style = {
    display: "inline-block",
    maxWidth: "20rem",
    marginBottom: "0.5rem"
  };

  render() {
    return (
      <Row className={`justify-content-${this.props.mine ? "end" : "start"}`}>
        <Card
          bg={this.color}
          text={this.color === "light" ? "dark" : "white"}
          style={this.style}
        >
          {!this.props.mine && (
            <Card.Header style={{ padding: 0, paddingRight: "30px" }}>
              <span className="username">@{this.props.username}</span>
            </Card.Header>
          )}
          <Card.Body style={{ padding: "0.5rem" }}>
            <Card.Text>{this.props.messageContent}</Card.Text>
          </Card.Body>
        </Card>
        <br />
      </Row>
    );
  }
}

Message.propTypes = {
  mine: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  messageContent: PropTypes.string.isRequired
};

export default Message;

const MESSAGES_KEY = "::Messenger::Messages";

export function saveNewEntry(entry, onStored) {
  entry.date = new Date().toLocaleDateString();
  entry.id = Date.now();

  const entries = JSON.parse(localStorage.getItem(MESSAGES_KEY) || "[]");
  entries.push(entry);

  localStorage.setItem(MESSAGES_KEY, JSON.stringify(entries));
  onStored(entry);
}

export function initialiseMessages(showContent) {
  const messages = JSON.parse(localStorage.getItem(MESSAGES_KEY) || "[]");
  showContent(messages);
}
