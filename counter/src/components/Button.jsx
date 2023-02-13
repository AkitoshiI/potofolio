import React from "react";
import "./button.css";

export const Button = (props) => {
  const status = props.status;
  return (
    <div className="container">
      <button className="button" onClick={props.frag}>
        {status}
      </button>
    </div>
  );
};
