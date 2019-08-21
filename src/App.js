import React, { useState } from "react";
import "./App.css";

import HeaderHash from "./components/header-hash";
import GameTable from "./components/Game-Table";
import AboutDeveloper from "./components/about-developer";
import AboutLayer from "./objects/about-layer";
import HeaderAboutLayer from "./objects/header-AboutLayer";

import ShowEvents from "./objects/show-events";

function App() {
  const [aboutShow, setAboutShow] = useState("");

  const handleClickAbout = () => setAboutShow(old => (old === "" ? "-show" : ""));

  return (
    <main className="app">
      <HeaderHash onClick={handleClickAbout} />
      <GameTable />
      <ShowEvents />

      <AboutLayer className={aboutShow}>
        <HeaderAboutLayer onClick={handleClickAbout} />
        <AboutDeveloper />
      </AboutLayer>
    </main>
  );
}
export default App;
