import React from "react";
import "./style.css";

import SectionHash from "../../objects/section-hash";
import Player from "../../objects/player-character";

const GameTable = () => (
  <SectionHash>
    <ul className="game-table">
      <li className="items">
        <Player />
      </li>
      <li className="items">
        <Player />
      </li>
      <li className="items">
        <Player />
      </li>
      <li className="items">
        <Player />
      </li>
      <li className="items">
        <Player />
      </li>
      <li className="items">
        <Player />
      </li>
      <li className="items">
        <Player />
      </li>
      <li className="items">
        <Player />
      </li>
      <li className="items">
        <Player />
      </li>
    </ul>
  </SectionHash>
);

export default GameTable;
