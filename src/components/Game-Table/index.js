import React from "react";
import "./style.css";
import Player from "../../objects/player-character";
import SectionHash from "../../objects/section-hash";

const GameTable = () => (
  <SectionHash>
    <ul className="game-table">
      <li className="items">
        <Player player="X" />
      </li>
      <li className="items">
        <Player player="O" />
      </li>
      <li className="items">
        <Player player="O" />
      </li>
      <li className="items">
        <Player player="X" />
      </li>
      <li className="items">
        <Player player="X" />
      </li>
      <li className="items">
        <Player player="O" />
      </li>
      <li className="items">
        <Player player="O" />
      </li>
      <li className="items">
        <Player player="O" />
      </li>
      <li className="items">
        <Player player="X" />
      </li>
    </ul>
  </SectionHash>
);

export default GameTable;
