import React from 'react';
import "./gamepiece.css";

 

function Gamepiece(props) {;
    return (
    <div className="gamepiece"onClick={()=>props.imgClicked(props.id)}>
        <div className="img-container">
            <img className="game-img" alt="" src={props.image} data-id={props.id} />
        </div>
    </div>
    )
}

export default Gamepiece;

