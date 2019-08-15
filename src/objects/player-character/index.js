import React from "react";
import PlayerX from "../../img/X.png";
import PlayerCircle from "../../img/Circle.png";

const playerCharacter = ({ player }) => {
  const players = [];
  players["X"] = PlayerX;
  players["O"] = PlayerCircle;

  return (
    <button className="player-character">
      <img src={players[player]} alt={`Imagem do jogador ${player}`} />
    </button>
  );
};

export default playerCharacter;
