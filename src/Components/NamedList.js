import React, { useState, useEffect } from "react";
import "./NamedList.css";

import { Timer, ColorHeading, Colornnm } from "./StyledComponents/Timer";


export default function NamedList() {
  const [name, setNameFunc] = useState("NxtWave");
  const [timer, setTimerFunc] = useState(0);
  const [Color, setColorFunc] = useState("red");


  const colors = ["red","orange","green"]

  const onChangeFunc = (event) => {
    setNameFunc(event.target.value);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimerFunc((prevState) => 
        prevState + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array to run the effect only once when the component mounts

  let indexId=0;

  useEffect(() => {
    setInterval(() => {
      if (Color === "red") {
        setColorFunc("orange");
      }
      if (Color === "orange") {
        setColorFunc("green");
      }
      if (Color === "green") {
        setColorFunc("red");
      }
    }, 5000);
  }, [Color]);

  return (
    
    <div className="main-container">
      <div className="input-container">
        <input onChange={onChangeFunc} type="text" />
      </div>
      <div className="hello">Hello {name}</div>
      <div className="timer-text">Timer</div>
      <Timer>{timer}</Timer>
      <ColorHeading>Color Change</ColorHeading>
      <Colornnm ></Colornnm>
    </div>
  );
}
