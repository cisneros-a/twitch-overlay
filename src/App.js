import React, { Component } from "react";
import "./App.css";
import ChatClient from "twitch-chat-client";
import Chat from "./components/Chat";
import BitsContainer from "./components/BitsContainer";
import FakeMessage from "./components/FakeMessage";

export default class App extends Component {
  state = {
    messages: [],
    bitDonations: [],
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
          this.addBits(msg);
          this.addMessages(msg);
        });
      });
  }

  addBits = (msg) => {
    if (msg.totalBits > 0) {
      let last15BitDonations = this.state.bitDonations;
      if (last15BitDonations.length > 14) {
        last15BitDonations.shift();
        last15BitDonations.shift();
      }
      let bits = msg.totalBits;
      let displayName = msg.prefix.user;
      this.setState({
        bitDonations: [...last15BitDonations, { displayName, bits }],
      });
    }
  };

  addMessages = (msg) => {
    let last20Messages = this.state.messages;
    if (last20Messages.length > 19) {
      last20Messages.unshift();
    }
    this.setState({
      messages: [...last20Messages, msg],
    });
    if (msg.totalBits > 0) {
      console.log(true);
    }
  };

  addToMessages = (msg) => {
    this.addBits(msg);
    this.addMessages(msg);
  };

  render() {
    return (
      <div className="App">
        <div className="section1"></div>
        <div className="section2"></div>
        <div className="section3"></div>
        <div className="section4"></div>
        <div></div>
        <div>{/* <FakeMessage addToMessages={this.addToMessages} /> */}</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="section12">
          <BitsContainer bitDonations={this.state.bitDonations} />
        </div>
        <div></div>
        <div></div>
        <div>
          <Chat messages={this.state.messages}></Chat>
        </div>
        <div></div>
      </div>
    );
  }
}
