import React, { Component } from 'react'
import "./gameboard.css"
import Gamepiece from "../Gamepiece"
import image from "../../images.json"

class Gameboard extends Component {

    state = {
        clickedArr: [],
        wins: 0,
        loses: 0
    }

    // findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)

    imgClicked = (id) => {
        let newClick = this.state.clickedArr;
        this.setState({ clickedArr: [...newClick, id] });
        console.log(this.state);

        //push id of clicked piece to array

        //searches array for repeated ids
    }

    componentDidUpdate() {
        let newClick = this.state.clickedArr;

        let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
        let dupes = findDuplicates(newClick); // All duplicates
        console.log(dupes);

        if (dupes[0]) {
            let newLoses = this.state.loses + 1;
            this.setState({ clickedArr: [], loses: newLoses });
            console.log(dupes);
        } else if (newClick.length === 2) {
            let newWin = this.state.wins + 1;
            this.setState({ clickedArr: [], wins: newWin });
        }

    }

    render() {
        function shuffle(array) {
            let currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }
        let newImgArr = shuffle(image);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 center">
                        <div>
                            <h4>Wins: {this.state.wins} Loses: {this.state.loses}</h4>
                        </div>
                        <div>
                            <Gamepiece id={newImgArr[0].id} image={newImgArr[0].image} imgClicked={this.imgClicked} />
                            <Gamepiece id={newImgArr[1].id} image={newImgArr[1].image} imgClicked={this.imgClicked} />
                            <Gamepiece id={newImgArr[2].id} image={newImgArr[2].image} imgClicked={this.imgClicked} />
                            <Gamepiece id={newImgArr[3].id} image={newImgArr[3].image} imgClicked={this.imgClicked} />
                        </div>
                        <div>
                            <Gamepiece id={newImgArr[4].id} image={newImgArr[4].image} imgClicked={this.imgClicked} />
                            <Gamepiece id={newImgArr[5].id} image={newImgArr[5].image} imgClicked={this.imgClicked} />
                            <Gamepiece id={newImgArr[6].id} image={newImgArr[6].image} imgClicked={this.imgClicked} />
                            <Gamepiece id={newImgArr[7].id} image={newImgArr[7].image} imgClicked={this.imgClicked} />
                        </div>
                        <div>
                            <Gamepiece id={newImgArr[8].id} image={newImgArr[8].image} imgClicked={this.imgClicked} />
                            <Gamepiece id={newImgArr[9].id} image={newImgArr[9].image} imgClicked={this.imgClicked} />
                            <Gamepiece id={newImgArr[10].id} image={newImgArr[10].image} imgClicked={this.imgClicked} />
                            <Gamepiece id={newImgArr[11].id} image={newImgArr[11].image} imgClicked={this.imgClicked} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gameboard;
