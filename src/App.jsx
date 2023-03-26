import React from "react";
import Thrower from "./Thrower";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Thrower />
        </p>
        <h3>Sentry logging!</h3>
        <h3>with Vite!</h3>
      </header>
    </div>
  );
}

export default App;
