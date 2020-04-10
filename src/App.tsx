import React from "react";
import "./App.css";
import Dropdown from "./components/dropdown/dropdown.components";

import store from "./store/index";
import { observer } from "mobx-react";

function App() {
  return (
    <div className="App">
      <Dropdown />
    </div>
  );
}

export default observer(App);
