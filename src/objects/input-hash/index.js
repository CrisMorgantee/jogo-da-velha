import React from "react";

const inputHash = ({ id = "", type = "", value = "", className = "" }) => (
  <input id={id} type={type} value={value} className={className} />
);

export default inputHash;
