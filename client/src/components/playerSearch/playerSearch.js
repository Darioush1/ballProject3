import React from "react";
import Array from "./playerArray";


addPlayer = event => {

    const userInput = "LeBron James";
    let players = this.state.data;
    const choice = players.filter(players => players.name === userInput);
    const choice1 = choice[0];
    console.log(choice1);
    api.savePlayer1({
        name: choice1.name
    }).then(res => {
        console.log(choice1);
        
    })
};

export default userInput