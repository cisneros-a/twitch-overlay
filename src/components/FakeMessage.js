import React from "react";

export default function PracticeStyle({ addToMessages }) {
  let testMap = new Map();
  testMap.set("id", `${Math.random()}`);
  testMap.set("display-name", "Adrian");
  testMap.set("subscriber", "0");
  testMap.set("mod", "0");
  testMap.set("emotes", "1");
  testMap.set("custom-reward-id", "78a86a3d-4397-480f-87f6-1b1cdcc73a3b");
  // "9a138780-08bd-4f1e-ae98-9b90d661e11c"
  // "78a86a3d-4397-480f-87f6-1b1cdcc73a3b" theme change

  let msg = {
    prefix: {
      user: "aCodesTX",
    },
    message: {
      value: ` you's a bitch gunchfPPunch gunchfPPunch gunchfMouse gunchfMouse gunchfRage gunchfRage`,
    },
    // totalBits: Math.floor(Math.random() * 100),
    tags: testMap,
  };

  return <button onClick={() => addToMessages(msg)}>Add msg</button>;
}

// channelId: "199434949"
// command: "PRIVMSG"
// emoteOffsets: Map(0)
// isCheer: false
// message: {value: "blah", trailing: true}
// params: Object
// prefix: Object
// rawLine: "@badge-info=founder/3;badges=moderator/1,founder/0,bits-leader/1;color=;custom-reward-id=78a86a3d-4397-480f-87f6-1b1cdcc73a3b;display-name=Xvolcomxx;emotes=;flags=;id=a92040ce-0b12-43f4-b349-3d85c0c76531;mod=1;room-id=199434949;subscriber=0;tmi-sent-ts=1595950720320;turbo=0;user-id=103022830;user-type=mod :xvolcomxx!xvolcomxx@xvolcomxx.tmi.twitch.tv PRIVMSG #gunchfps :blah"
// tags: Map(15)
// [[Entries]]
// 0: {"badge-info" => "founder/3"}
// 1: {"badges" => "moderator/1,founder/0,bits-leader/1"}
// 2: {"color" => ""}
// 3: {"custom-reward-id" => "78a86a3d-4397-480f-87f6-1b1cdcc73a3b"}
// 4: {"display-name" => "Xvolcomxx"}
// 5: {"emotes" => ""}
// 6: {"flags" => ""}
// 7: {"id" => "a92040ce-0b12-43f4-b349-3d85c0c76531"}
// 8: {"mod" => "1"}
// 9: {"room-id" => "199434949"}
// 10: {"subscriber" => "0"}
// 11: {"tmi-sent-ts" => "1595950720320"}
// 12: {"turbo" => "0"}
// 13: {"user-id" => "103022830"}
// 14: {"user-type" => "mod"}
// size: (...)
// __proto__: Map
// target: {value: "#gunchfps", trailing: false}
// totalBits: NaN
// userInfo: ChatUser
// badges: Map(3)
// color: ""
// displayName: "Xvolcomxx"
// isFounder: true
// isMod: true
// isSubscriber: true
// isVip: false
// userId: "103022830"
// userName: "xvolcomxx"
// userType: "mod"
// _userData: Map(15) {"badge-info" => "founder/3", "badges" => "moderator/1,founder/0,bits-leader/1", "color" => "", "custom-reward-id" => "78a86a3d-4397-480f-87f6-1b1cdcc73a3b", "display-name" => "Xvolcomxx", …}
// _userName: "xvolcomxx"
