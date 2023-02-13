import React, { useState } from "react";
import "./counter.css";
import { Button } from "../components/Button";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [multFrag, setmultFrag] = useState(false);
  const [num, setNum] = useState(1);
  const plus = () => {
    //カウンタを1増やす動作
    setCount(count + 1);
  };
  const minus = () => {
    //カウンタを1減らす動作
    setCount(count - 1);
  };
  const reset = () => {
    //カウンタを初期値に戻す動作
    setCount(0);
  };
  const multiplication = () => {
    //カウンタと自分が指定した文字を掛け算させる動作
    setmultFrag(true);
  };
  const enter = () => {
    //値入力が終わった後、enterボタンを押した時の動作
    setCount(count * num);
    setNum(1);
    setmultFrag(false);
  };
  const changeNum = (index) => {
    //入力された値が変更された場合の動作
    setNum(index.target.value);
    console.log(index.target.value);
  };
  if (!multFrag) {
    return (
      <div className="dContainer">
        <p id="display">{count}</p>
        <div className="cContainer">
          <Button status="+" frag={(event) => plus()} />
          <Button status="-" frag={(event) => minus()} />
          <Button status="RST" frag={(event) => reset()} />
          <Button status="×" frag={(event) => multiplication()} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="dContainer">
        <div id="displayBox">
          <p id="display">{count}×</p>
          <input
            type={"text"}
            id="textBox"
            pattern="^[0-9]+$"
            onChange={(event) => {
              event.target.value = event.target.value.replace(/[a-zA-Z]/, "");
              console.log(event.target.value);
              changeNum(event);
            }}
          />
        </div>
        <div className="cContainer">
          <Button status="enter" frag={(event) => enter()} />
        </div>
      </div>
    );
  }
};
