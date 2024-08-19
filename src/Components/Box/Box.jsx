import React from "react";
import "./Box.css";

const Box = ({value,onClick}) => {
  return (
    <div>
      <button className={value === "X" ? "box x" : "box o"} onClick={onClick}>{value}</button>
    </div>
      
  );
};

export default Box;


