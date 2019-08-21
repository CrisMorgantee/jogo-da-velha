import React from "react";
import "./style.css";
const OutputPlayer = ({ content, className = "" }) => (
  <output className={`output-player ${className}`}>{content}</output>
);
export default OutputPlayer;
