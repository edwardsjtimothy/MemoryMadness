import React from 'react';
import "./gamepiece.css";

function Gamepiece(props) {
return (
    <div className="gamepiece">
            <img src={props.image} data-id={props.id} />
    </div>
    )
}

export default Gamepiece;
