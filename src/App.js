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
          let last20Messages = this.state.messages;
          if (last20Messages.length > 19) {
            last20Messages.length = 19;
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
        <Chat messages={this.state.messages}></Chat>
        <PracticeStyle></PracticeStyle>
      </div>
    );
  }
}

// 0: {"badge-info" => "founder/3"}
// 1: {"badges" => "moderator/1,founder/0,bits-leader/1"}
// 2: {"client-nonce" => "308368536d75990a1bcdb43cfc545b4c"}
// 3: {"color" => ""}
// 4: {"display-name" => "Xvolcomxx"}
// 5: {"emotes" => ""}
// 6: {"flags" => ""}
// 7: {"id" => "1e51565c-79f5-44bc-a455-14b9bd166e2b"}
// 8: {"mod" => "1"}
// 9: {"room-id" => "199434949"}
// 10: {"subscriber" => "0"}
// 11: {"tmi-sent-ts" => "1594222103848"}
// 12: {"turbo" => "0"}
// 13: {"user-id" => "103022830"}
// 14: {"user-type" => "mod"}

// 0: {"badge-info" => "founder/3"}
// 1: {"badges" => "moderator/1,founder/0,bits-leader/1"}
// 2: {"color" => ""}
// 3: {"display-name" => "Xvolcomxx"}
// 4: {"emotes" => ""}
// 5: {"flags" => ""}
// 6: {"id" => "9a5347f5-e2c3-4caf-8d8d-22fed9427c4f"}
// 7: {"mod" => "1"}
// 8: {"msg-id" => "highlighted-message"}
// 9: {"room-id" => "199434949"}
// 10: {"subscriber" => "0"}
// 11: {"tmi-sent-ts" => "1594224754254"}
// 12: {"turbo" => "0"}
// 13: {"user-id" => "103022830"}
// 14: {"user-type" => "mod"}
