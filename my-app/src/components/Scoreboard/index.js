import React, { Component } from 'react'

export default class Scoreboard extends Component {

    state = {
        wins: "",
        loses: ""
    }
    
    render() {
        return (
            <div>
                <h4>Wins: {this.state.wins} Loses: {this.state.loses}</h4>
            </div>
        )
    }
}



