import React, { useState } from "react";
import "./App.css";

import HeaderHash from "./components/header-hash";
import GameTable from "./components/Game-Table";
import ShowEvents from "./objects/show-events";
import AboutLayer from "./objects/about-layer";
import HeaderAboutLayer from "./objects/header-AboutLayer";
import AboutDeveloper from "./components/about-developer";

import Player from "./objects/player-character";
import InputHash from "./objects/input-hash";

function App() {
  const [aboutShow, setaboutShow] = useState("");
  const [eventsShow, seteventsShow] = useState("");

  const playerX = <Player player="X" />.props.player;
  const playerO = <Player player="O" />.props.player;

  const handleClick = () => (eventsShow === "" ? seteventsShow("-show") : seteventsShow(""));

  const handleclickAdd = () => setaboutShow("-show");
  const handleclickRemove = () => setaboutShow("");

  return (
    <main className="app">
      <HeaderHash onClick={handleclickAdd} />
      <GameTable />
      <ShowEvents onClick={handleClick} />
      <InputHash
        className={`events-hash ${eventsShow}`}
        value={`Adicionou ${playerX}`}
        type="text"
        readonly
      />
      <InputHash
        className={`events-hash ${eventsShow}`}
        value={`Adicionou ${playerO}`}
        type="text"
        readonly
      />
      <AboutLayer className={aboutShow}>
        <HeaderAboutLayer onClick={handleclickRemove} />

        <AboutDeveloper />
      </AboutLayer>
    </main>
  );
}
export default App;
