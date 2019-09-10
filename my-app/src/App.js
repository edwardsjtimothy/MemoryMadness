import React from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
// import Wrapper from "./components/Wrapper";
import Gamepiece from "./components/Gamepiece";
import image from "./images.json";
import "./App.css"


function App() {
  return (

    <div className="background">
      <Header />
      <Gameboard>
        <Gamepiece id={image[0].id } image={image[0].image}/>
        <Gamepiece/>
        <Gamepiece/>
        <Gamepiece/>
        <Gamepiece/>
        <Gamepiece/>
        <Gamepiece/>
        <Gamepiece/>
        <Gamepiece/>
        <Gamepiece/>
        <Gamepiece/>
        <Gamepiece/>
      </Gameboard>
    </div>

  );
}

export default App;
