import React, { useRef, useEffect } from "react";
import Kraber from "../images/Kraber-1.png";
import Wingman from "../images/Wingman-1.png";
// import Peacekeeper from "../images/Peacekeeper-1.png";
import R99 from "../images/R99-1.png";
import P2020 from "../images/P2020-1.png";

export default function Chat({ messages }) {
  let chatContainer = useRef();

  function assignClass(msg, img) {
    if (msg.prefix.user === "gunchfps") {
      return img ? Kraber : "host";
    }
    if (msg.tags.get("subscriber") === "1") {
      return img ? Wingman : "sub";
    }
    if (msg.tags.get("mod") === "1") {
      return img ? R99 : "mod";
    }
    return img ? P2020 : "none";
  }

  let scrollToBottomOfChat = () => {
    const scroll =
      chatContainer.current.scrollHeight - chatContainer.current.clientHeight;
    chatContainer.current.scrollTo(0, scroll);
  };

  useEffect(() => {
    scrollToBottomOfChat();
  }, [messages]);
  // console.log(messages[messages.length - 1]);
  return (
    <ol ref={chatContainer} className="chat-container">
      {messages.map((msg) => {
        return (
          <li className="chat-entry" key={msg.tags.get("id")}>
            <p
              className={
                msg.tags.get("msg-id") === "highlighted-message"
                  ? "highlighted-message"
                  : "chat-message"
              }
            >
              <span className={assignClass(msg, false)}>
                {msg.tags.get("display-name")}
              </span>{" "}
              <img className="gun-img" src={assignClass(msg, true)} alt="gun" />{" "}
              {msg.tags.get("emotes") === ""
                ? msg.message.value
                : msg.message.value.split(" ").map((word) => {
                    const gunchEmotes = [
                      "gunchfPPunch",
                      "gunchfMouse",
                      "gunchfRage",
                    ];
                    const emoteCodes = {
                      gunchfPPunch: 302277522,
                      gunchfMouse: 302070630,
                      gunchfRage: 302070618,
                    };
                    if (gunchEmotes.includes(word)) {
                      return (
                        <img
                          className={"emote"}
                          src={`https://static-cdn.jtvnw.net/emoticons/v1/${emoteCodes[word]}/1.0`}
                          alt={word}
                        />
                      );
                    } else {
                      return `${word} `;
                    }
                  })}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
