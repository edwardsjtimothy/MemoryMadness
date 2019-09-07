import React from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";

const style = {
  backgroundImage: "url('./assets/images/memphis-mini-dark.png')",
}

function App() {
  return (

    <div style={style}>
      <Header />
      <Gameboard />
    </div>

  );
}

export default App;
