import React, { Component } from "react";
import "./App.css";
import ChatClient from "twitch-chat-client";
import Chat from "./components/Chat";
import BitsContainer from "./components/BitsContainer";
import CameraBorder from "./components/CameraBorder";

export default class App extends Component {
  state = {
    messages: [],
    bitDonations: [],
    theme: "green",
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
          this.checkForThemeChange(msg);
        });
      });
  }

  addBits = (msg) => {
    console.log("adding bits");
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
    this.checkForThemeChange(msg);
  };

  checkForThemeChange = (msg) => {
    if (msg.prefix.user === "gunchfps" || msg.tags.get("mod") === "1") {
      if (msg.message.value[0] === "!") {
        switch (msg.message.value) {
          case "!green":
            this.setState({
              theme: "green",
            });
            break;
          case "!purple":
            this.setState({
              theme: "purple",
            });
            break;
          case "!red":
            this.setState({
              theme: "red",
            });
            break;
          default:
            this.setState({
              theme: this.state.theme,
            });
            break;
        }
      }
    }
  };

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
        <div>
          <CameraBorder theme={this.state.theme} />
        </div>
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
