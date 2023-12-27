import React, { useState, useEffect } from "react";
import "./Game.css";
import { fnWinner } from "./State";

const Game = () => {
  const [move, setMove] = useState(true);
  const [winner, setWinner] = useState("");

  const state = {
    content: "",
    array: [],
    arrayX: [],
    arrayO: [],
    winArrayX: [],
    winArrayO: [],
    correctAnswers: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ],
  };

  move ? (state.content = "X") : (state.content = "O");

  for (let i = 0; i < 9; i++) {
    state.array.push(i);
  }
  //   const renders = () => {
  //     setMove(true);
  //     setWinner("");
  //     state.content = "";
  //     state.array = [];
  //     state.arrayX = [];
  //     state.arrayO = [];
  //     state.winArrayX = [];
  //     state.winArrayO = [];
  //   };

  const handelClick = (e) => {
    let elem = document.getElementById(e);
    if (elem.textContent !== "X" && elem.textContent !== "O") {
      elem.textContent = state.content;
      setMove(!move);
    }
  };

  useEffect(() => {
    state.array.forEach((el, index) => {
      let item = document.getElementById(index);
      if (item.textContent === "X") {
        state.arrayX.push(index);
      } else if (item.textContent === "O") {
        state.arrayO.push(index);
      }
    });
    fnWinner(state.arrayX, state.winArrayX, "X", setWinner);
    fnWinner(state.arrayO, state.winArrayO, "O", setWinner);
  });

  return (
    <div className="wrap-app">
      <div>
        {/* <button onClick={() => renders()}>Replay</button> */}
        <h1>
          {winner === ""
            ? move
              ? "Move : x"
              : "Move : o"
            : `--- Winner : ${winner} --- `}
        </h1>
      </div>

      <div className="wrap-content">
        <div className="wrap-game">
          {state.array.map((element, index) => {
            return (
              <div
                id={index}
                key={index}
                onClick={(e) => {
                  handelClick(index);
                }}
                className="square"></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Game;
