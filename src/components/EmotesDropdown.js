import React from "react";
import ReactDOM from "react-dom";
import Matter from "matter-js";
import Kewk from "../images/kekw.png";

class EmotesDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  testFucntion() {
    console.log("testing dependencies");
  }

  componentDidMount() {
    const { props } = this.props;
    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    var engine = Engine.create({
      // positionIterations: 20
    });

    var render = Render.create({
      element: this.refs.scene,
      engine: engine,
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

    World.add(engine.world, [
      // walls
      Bodies.rectangle(900, 1070, 1800, 7, boundaryOptions),
      Bodies.rectangle(1, 1200, 4, 740, boundaryOptions),
      Bodies.rectangle(1800, 1800, 4, 800, boundaryOptions),
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    let emoteIds = [302277522, 302070630, 302070618];

    function createBall() {
      const ball = Bodies.circle(Math.round(Math.random() * 1280), -30, 25, {
        angle: Math.PI * (Math.random() * 2 - 1),
        friction: 0.001,
        frictionAir: 0.01,
        restitution: 0.5,
        render: {
          sprite: {
            texture: Kewk,
            texture: `https://static-cdn.jtvnw.net/emoticons/v1/${
              emoteIds[Math.floor(Math.random() * Math.floor(3))]
            }/2.0`,
          },
        },
      });

      setTimeout(() => {
        World.remove(engine.world, ball);
      }, 15000);

      return ball;
    }

    World.add(engine.world, mouseConstraint);
    World.add(engine.world, this.testFucntion);

    Matter.Events.on(mouseConstraint, "mousedown", function (event) {
      const ball2 = createBall();
      World.add(engine.world, [ball2]);
    });

    Engine.run(engine);

    Render.run(render);
  }

  render() {
    {
      console.log(this.props);
    }
    return <div ref="scene" />;
  }
}

export default EmotesDropdown;
