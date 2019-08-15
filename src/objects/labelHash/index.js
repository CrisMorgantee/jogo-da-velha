import React from "react";

const LabelHash = ({ htmlfor = "", content = "", className = "", onClick }) => (
  <label htmlFor={htmlfor} className={className} onClick={onClick}>
    {content}
  </label>
);

export default LabelHash;
