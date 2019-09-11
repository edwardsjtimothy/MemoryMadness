import React from "react";
import "./gameboard.css"
import Gamepiece from "../Gamepiece"
import image from "../../images.json"

function Gameboard() {
    console.log(image)
    return (

        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 center board">
                    <Gamepiece id={image[0].id} image={image[0].image} />
                    <Gamepiece id={image[1].id} image={image[1].image} />
                    <Gamepiece id={image[2].id} image={image[2].image} />
                    <Gamepiece id={image[3].id} image={image[3].image} />
                    <Gamepiece id={image[4].id} image={image[4].image} />
                    <Gamepiece id={image[5].id} image={image[5].image} />
                    <Gamepiece id={image[6].id} image={image[6].image} />
                    <Gamepiece id={image[7].id} image={image[7].image} />
                    <Gamepiece id={image[8].id} image={image[8].image} />
                    <Gamepiece id={image[9].id} image={image[9].image} />
                    <Gamepiece id={image[10].id} image={image[10].image} />
                    <Gamepiece id={image[11].id} image={image[11].image} />
                </div>
            </div>
        </div>
    )
}

export default Gameboard;  