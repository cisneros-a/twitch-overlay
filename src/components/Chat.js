import React, { useRef, useEffect } from "react";

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
              </span>
              {`:  ${msg.message.value}`}
            </p>
            <div className></div>
          </li>
        );
      })}
    </ol>
  );
}
