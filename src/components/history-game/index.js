import React from "react";
import "./style.css";
import OutputPlayer from "../../objects/output-player";

const HistoryGame = () => (
  <ol className="history-game">
    <li className="action">
      <OutputPlayer content={`Adicionou `} />
    </li>
    <li className="action">
      <OutputPlayer content={`Adicionou `} />
    </li>
    <li className="action">
      <OutputPlayer content={`Adicionou `} />
    </li>
    <li className="action">
      <OutputPlayer content={`Adicionou `} />
    </li>
    <li className="action">
      <OutputPlayer content={`Adicionou `} />
    </li>
    <li className="action">
      <OutputPlayer content={`Adicionou `} />
    </li>
    <li className="action">
      <OutputPlayer content={`Adicionou `} />
    </li>
    <li className="action">
      <OutputPlayer content={`Adicionou `} />
    </li>
    <li className="action">
      <OutputPlayer content={`Adicionou `} />
    </li>
    <li className="action">
      <OutputPlayer className="-end" content={`Empate! `} />
    </li>
  </ol>
);

export default HistoryGame;
