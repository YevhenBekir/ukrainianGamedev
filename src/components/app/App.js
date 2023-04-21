import React from "react";
import RunLine from "../runLine/RunLine";
import AppHeader from "../appHeader/AppHeader";
import AppBasement from "../appBasement/AppBasement";
import SelectRegion from "../selectRegion/SelectRegion";

import "../../styles/style.scss";

function App() {
  return (
    <div className="App">
      <RunLine />
      <AppHeader />
      <div className="app-body">
        <SelectRegion />
      </div>
      <AppBasement />
    </div>
  );
}

export default App;
