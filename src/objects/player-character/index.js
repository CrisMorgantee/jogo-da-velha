import React, { useState } from "react";
import PlayerX from "../../img/X.png";
import PlayerCircle from "../../img/Circle.png";

const PlayerCharacter = ({ player = false }) => {
  const [statePlayer, setStatePlayer] = useState(player);
  const players = [];
  players["x"] = PlayerX;
  players["o"] = PlayerCircle;

  const handleClick = () => setStatePlayer("x");

  return (
    <button onClick={handleClick} className="player-character">
      {statePlayer && (
        <img src={players[statePlayer]} alt={`Imagem do jogador ${statePlayer.toUpperCase()}`} />
      )}
    </button>
  );
};

export default PlayerCharacter;
