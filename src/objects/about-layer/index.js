import React from "react";
import "./style.css";

const AboutLayer = ({ children, className }) => (
  <article className={`about-layer  ${className}`}>{children}</article>
);

export default AboutLayer;
