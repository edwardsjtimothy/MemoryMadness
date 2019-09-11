import React from 'react';
import "./gamepiece.css";
import image from "../../images.json"

function Gamepiece(props) {
    console.log(props);
return (
    <div className="gamepiece">
        <div className="img-container">
            <img className="game-img" alt="" src={props.image} data-id={props.id} />
        </div>
    </div>
    )
}

export default Gamepiece;

// my-app\src\components\assets\images\benches.jpg