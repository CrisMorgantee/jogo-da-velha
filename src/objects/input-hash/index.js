import React from "react";

const InputHash = ({ id = "", type = "", value = "", className = "" }) => (
  <input id={id} type={type} value={value} className={className} />
);

export default InputHash;
