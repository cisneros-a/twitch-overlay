import React from "react";
import Matter from "matter-js";
import KEKW from "../images/newKEKW.png";

class EmotesDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  testFucntion() {
    console.log("testing dependencies");
  }
  Engine = Matter.Engine;
  Render = Matter.Render;
  World = Matter.World;
  Bodies = Matter.Bodies;

  createBall = (emoteId) => {
    const ball = this.Bodies.circle(Math.round(Math.random() * 1280), -30, 25, {
      angle: Math.PI * (Math.random() * 2 - 1),
      friction: 0.001,
      frictionAir: 0.01,
      restitution: 1,
      render: {
        sprite: {
          texture: `https://static-cdn.jtvnw.net/emoticons/v1/${emoteId}/2.0`,
        },
      },
    });

    setTimeout(() => {
      this.World.remove(this.engine.world, ball);
    }, 15000);

    return ball;
  };

  createKekwBall = () => {
    const ball = this.Bodies.circle(Math.round(Math.random() * 1280), -30, 25, {
      angle: Math.PI * (Math.random() * 2 - 1),
      friction: 0.001,
      frictionAir: 0.01,
      restitution: 1,
      render: {
        sprite: {
          texture: KEKW,
        },
      },
    });

    setTimeout(() => {
      this.World.remove(this.engine.world, ball);
    }, 15000);

    return ball;
  };
  engine = this.Engine.create({
    // positionIterations: 20
  });

  componentDidMount() {
    var render = this.Render.create({
      element: this.refs.scene,
      engine: this.engine,
      options: {
        width: 1900,
        height: 1080,
        background: "transparent",
        wireframes: false,
      },
    });

    const boundaryOptions = {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        strokeStyle: "transparent",
      },
    };

    this.World.add(this.engine.world, [
      // walls
      this.Bodies.rectangle(900, 1070, 1800, 7, boundaryOptions),
      this.Bodies.rectangle(1, 1200, 4, 740, boundaryOptions),
      this.Bodies.rectangle(1800, 1800, 4, 800, boundaryOptions),
    ]);

    this.Engine.run(this.engine);

    this.Render.run(render);
  }

  renderEmotes = () => {
    console.log("render emotes");
    let emotesToRender = [];
    const msg = this.props.message[0];
    if (this.checkForKEKWReward(msg)) return 1;
    msg.tags.get("emotes") !== "" &&
      msg.message.value.split(" ").map((word) => {
        const gunchEmotes = ["gunchfPPunch", "gunchfMouse", "gunchfRage"];
        const emoteCodes = {
          gunchfPPunch: 302277522,
          gunchfMouse: 302070630,
          gunchfRage: 302070618,
        };
        if (gunchEmotes.includes(word)) {
          emotesToRender.push(emoteCodes[word]);
        }
        return 1;
      });
    let timer = 0;
    for (let i = 0; i < emotesToRender.length; i++) {
      timer += 250;
      setTimeout(() => {
        let emoteBall = this.createBall(emotesToRender[i]);
        this.World.add(this.engine.world, [emoteBall]);
      }, timer);
    }
    return 1;
  };

  checkForKEKWReward = (msg) => {
    if (
      msg.tags.get("custom-reward-id") ===
      "d6800c3c-0fda-4dbf-a044-f90e181ca3cc"
    ) {
      let kekwBall = this.createKekwBall();
      this.World.add(this.engine.world, [kekwBall]);
      return true;
    }
    return false;
  };

  render() {
    this.props.message.length > 0 && this.renderEmotes();

    return <div ref="scene" />;
  }
}

export default EmotesDropdown;
