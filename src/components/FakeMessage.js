import React, { useState } from "react";

export default function PracticeStyle({ addToMessages }) {
  let testMap = new Map();
  testMap.set("id", `${Math.random()}`);
  testMap.set("display-name", "Adrian");
  testMap.set("subscriber", "1");
  testMap.set("mod", "0");

  let msg = {
    prefix: {
      user: "gunchfps",
    },
    message: {
      value: `count is blah`,
    },
    totalBits: Math.floor(Math.random() * 1000),
    tags: testMap,
  };

  return <button onClick={() => addToMessages(msg)}>Add msg</button>;
}
