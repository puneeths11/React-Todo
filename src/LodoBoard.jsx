import { useState } from "react";

export default function LudoBoard() {
  const [move, setMove] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  let updateBlue = () => {
    setMove((prevVal) => {
      return { ...prevVal, blue: prevVal.blue + 1 };
      //to ensure that you're updating the state based on the most recent state value. This is particularly important when you're updating state based on the previous state.
    });
  };

  let updateYellow = () => {
    setMove((preVal) => {
      return { ...preVal, yellow: preVal.yellow + 1 };
    });
  };

  const [arr, setArr] = useState(["default"]);

  let updateArr = () => {
    setArr((preArr) => {
      return [...preArr, " ", "added"];
    });
  };

  return (
    <div>
      <h2>Game Begins</h2>
      <p>Array Method = {arr}</p>
      <button onClick={updateArr}>Update</button>
      <p>Blue moves = {move.blue} </p>
      <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
        +1
      </button>
      <p>Yellow moves = {move.yellow} </p>
      <button
        style={{ backgroundColor: "yellow", color: "black" }}
        onClick={updateYellow}
      >
        +1
      </button>
      <p>Green moves = </p>
      <button style={{ backgroundColor: "green" }}>+1</button>
      <p>Red moves = </p>
      <button style={{ backgroundColor: "red" }}>+1</button>
    </div>
  );
}
