import React, { useState } from "react";

export default function PracticeStyle({ messages }) {
  const [count, setCount] = useState(0);

  let addMessage = () => {
    this.setState({
      count: this.state.count + 1,
    });
    let testMap = new Map();
    testMap.set("id", "12345");
    testMap.set("display-name", "Adrian");
    testMap.set("subscriber", "1");
    testMap.set("mod", "0");

    let msg = {
      prefix: {
        user: "",
      },
      message: {
        value: `count is ${count}`,
      },
      tags: testMap,
    };
    let last20Messages = messages;
    if (last20Messages.length > 19) {
      last20Messages.unshift();
    }
    this.setState({
      messages: [...last20Messages, msg],
    });
  };
  return <button onClick={() => addMessage()}>Add msg</button>;
}
