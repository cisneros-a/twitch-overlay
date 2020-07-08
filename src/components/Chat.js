import React, { useRef, useEffect } from "react";
import Kraber from "../images/Kraber-1.png";
// import Wingman from "../images/Wingman-1.png";
import Peacekeeper from "../images/Peacekeeper-1.png";
import R99 from "../images/R99-1.png";
import P2020 from "../images/P2020-1.png";

export default function Chat({ messages }) {
  let chatContainer = useRef();

  function assignClass(msg) {
    if (msg.prefix.user === "gunchfps") {
      return "host";
    }
    if (msg.tags.get("subscriber") === "1") {
      return "sub";
    }
    if (msg.tags.get("mod") === "1") {
      return "mod";
    }
    return "none";
  }

  function assignImg(msg) {
    if (msg.prefix.user === "gunchfps") {
      return Kraber;
    }
    if (msg.tags.get("subscriber") === "1") {
      return Peacekeeper;
    }
    if (msg.tags.get("mod") === "1") {
      return R99;
    }
    return P2020;
  }

  let scrollToMyRef = () => {
    const scroll =
      chatContainer.current.scrollHeight - chatContainer.current.clientHeight;
    chatContainer.current.scrollTo(0, scroll);
  };

  //   console.log(messages[messages.length - 1]);
  useEffect(() => {
    scrollToMyRef();
  }, [messages]);

  return (
    <ol ref={chatContainer} className="chat-container">
      {messages.map((msg) => {
        return (
          <li className="chat-entry" key={msg.tags.get("id")}>
            <p className="chat-message">
              <span className={assignClass(msg)}>
                {msg.tags.get("display-name")}
              </span>{" "}
              <img src={assignImg(msg)} alt="wingman" />
              {` ${msg.message.value}`}
            </p>
            <div className></div>
          </li>
        );
      })}
    </ol>
  );
}
