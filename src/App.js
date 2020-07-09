import React, { Component } from "react";
import "./App.css";
import ChatClient from "twitch-chat-client";
import Chat from "./components/Chat";

export default class App extends Component {
  state = {
    messages: [],
    count: 0,
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
          let last20Messages = this.state.messages;
          if (last20Messages.length > 19) {
            last20Messages.unshift();
          }
          this.setState({
            messages: [...last20Messages, msg],
          });
        });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="section1"></div>
        <div className="section2"></div>
        <div className="section3"></div>
        <div className="section4"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

{
  /* <div ></div>
<div></div>
<Chat messages={this.state.messages}></Chat>
<div></div> */
}
