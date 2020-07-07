import React, { Component } from "react";
import "./App.css";
import ChatClient from "twitch-chat-client";
import Chat from "./components/Chat";
import PracticeStyle from "./components/PracticeStyle";

export default class App extends Component {
  state = {
    messages: [],
  };
  ChatClient;

  componentDidMount() {
    this.ChatClient = ChatClient.anonymous({
      webSocket: true,
    });
    this.ChatClient.connect()
      .then(() => this.ChatClient.waitForRegistration())
      .then(() => this.ChatClient.join("gunchfps"))
      .then(() => {
        this.ChatClient.onPrivmsg((channel, user, message, msg) => {
          this.setState({
            messages: [...this.state.messages, msg],
          });
        });
      });
  }
  render() {
    return (
      <div className="App">
        <Chat messages={this.state.messages}></Chat>
        <PracticeStyle></PracticeStyle>
      </div>
    );
  }
}
