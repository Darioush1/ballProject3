import React from "react";

export default class playerSearch extends React.Component{
    addPlayer = event => {
        const {player, value} = event.target;
        console.log(this.state)
        console.log(event.target)
        this.setState({
          [player]: value
        })
      }
}
