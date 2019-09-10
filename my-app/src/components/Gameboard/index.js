import React from "react";
import "./gameboard.css"
import Gamepiece from "../Gamepiece";

function Gameboard() {
    return (

        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 center board">
                    <Gamepiece></Gamepiece>

                </div>
            </div>
        </div>
    )
}

export default Gameboard;