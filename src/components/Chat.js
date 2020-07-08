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

  let ifEmotes = (msg) => {
    // console.log(msg.tags.get('emotes'))
    if (msg.tags.get("emotes") === "") {
      return true;
    }
    return false;
    // return checkForGunchEmotes(msg.message.value);
  };

  // let checkForGunchEmotes = (msg) => {
  //   const gunchEmotes = ["gunchfPPunch", "gunchfMouse", "gunchfRage"];
  //   const emoteCodes = {
  //     gunchfPPunch: 302277522,
  //     gunchfMouse: 302070630,
  //     gunchfRage: 302070618,
  //   };
  //   let wordsArray = msg.split(" ");
  //   let contents;
  //   for (let i = 0; i < wordsArray.length; i++) {
  //     if (gunchEmotes.includes(word)) {
  //        return <img
  //           src={`https://static-cdn.jtvnw.net/emoticons/v1/${
  //             emoteCodes[wordsArray[i]]
  //           }/2.0`}
  //           alt={wordsArray[i]}
  //         />

  //     } else {
  //       contents += wordsArray[i];
  //     }
  //   }
  //   console.log(contents);
  //   return <div>contents</div>;
  // };

  console.log(messages[messages.length - 1]);
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
              <img src={assignImg(msg)} alt="gun" />
              {ifEmotes(msg)
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
              {/* {msg.message.value} */}
            </p>
            <div className></div>
          </li>
        );
      })}
    </ol>
  );
}

// https://static-cdn.jtvnw.net/emoticons/v1/${emoteCodes[wordsArray[i]]}/2.0
