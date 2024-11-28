import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <>
      <div>
        <button className="btn">{props.title} {props.quantity}</button>
      </div>
    </>
  );
};

export default Button;
