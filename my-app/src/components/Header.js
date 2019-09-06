import React from "react";

function Header() {

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Memory Madness</h1>
                <p className="lead">Only click on the images once each. If you click on an image twice, the game will restart. Good luck!</p>
            </div>
        </div>
    );
}

export default Header;