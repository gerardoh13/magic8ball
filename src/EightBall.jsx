import React, { useState, createElement } from "react";
function choice(arr) {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}

function EightBall(props) {
  const [msg, setMsg] = useState("Think of a/Question.");
  const [color, setColor] = useState("blue");

  async function handleClick() {
    const { msg, color } = choice(props.answers);
    setMsg(msg);
    setColor(color);
    formatElements();
  }
  function formatElements() {
    let arr = msg.split("/");
    if (arr.length === 1) {
      return arr[0];
    }
    let span1 = createElement("span", null, arr[0]);
    let br = createElement("br");
    let span2 = createElement("span", null, arr[1]);
    let parentSpan = createElement("span", null, [span1, br, span2]);
    return parentSpan;
  }

  function reset () {
    setMsg("Think of a/Question.");
    setColor("blue");
  }
  return (
    <section className="stage">
      <figure onClick={handleClick} className="ball">
        <div className="circle"></div>
        <div
          className="triangle-down"
          style={{ borderTop: `120px solid ${color}` }}
        ></div>
        <div className="text" style={{ color: "white" }}>
          {formatElements()}
        </div>
      </figure>
      <button className="btn btn-primary mt-2" onClick={reset}>Reset</button>
    </section>
  );
}
EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly/so.", color: "green" },
    { msg: "Without a/doubt.", color: "green" },
    { msg: "Yes/definitely.", color: "green" },
    { msg: "You may/rely on it.", color: "green" },
    { msg: "As I see it,/ yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook/good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point/to yes.", color: "goldenrod" },
    { msg: "Reply hazy,/try again.", color: "goldenrod" },
    { msg: "Ask again/later.", color: "goldenrod" },
    { msg: "Better not/tell you now.", color: "goldenrod" },
    { msg: "Cannot predict/now.", color: "goldenrod" },
    { msg: "Concentrate and/ask again.", color: "goldenrod" },
    { msg: "Don't count/on it.", color: "red" },
    { msg: "My reply/is no.", color: "red" },
    { msg: "My sources/say no.", color: "red" },
    { msg: "Outlook not/so good.", color: "red" },
    { msg: "Very/doubtful.", color: "red" },
  ],
};

export default EightBall;
