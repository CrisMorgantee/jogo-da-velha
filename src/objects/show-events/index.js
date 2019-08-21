import React from "react";
import "./style.css";

import InputHash from "../input-hash";
import LabelHash from "../label-hash";
import HistoryGame from "../../components/history-game";

const ShowEvents = ({ id, type, content, htmlfor, className }) => {
  return (
    <div className="show-events">
      <InputHash id="inputCheck" type="checkbox" value="" className="input-hash" />
      <LabelHash htmlfor="inputCheck" content="Mostrar eventos" className="label-hash" />

      <HistoryGame />
    </div>
  );
};

export default ShowEvents;
