import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import action1 from "./actions";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>App.js Page</h1>
    </div>
  );
}

export default App;
