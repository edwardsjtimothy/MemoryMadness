import React from "react";
import "./header.css"

function Header() {

    return (
        <div className="jumbotron-back jumbotron-fluid">
            <div className="container">
                    <h1 className="display-4 buffer">Memory Madness</h1>
                    <p className="lead">Only click on the images once each. If you click on an image twice, the game will restart. Good luck!</p>
            </div>
        </div>
    );
}

export default Header;