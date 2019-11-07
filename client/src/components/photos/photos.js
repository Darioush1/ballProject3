import React from "react";


export default class Photo extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            player1: props.player1,
            player2: props.player2,
            id: this.props.id,
        };
    }

   componentDidMount () {
    let playerName = this.state.player1;
    let splitPlayerName = playerName.split(' ');
    let firstName = splitPlayerName[0];
    let lastName = splitPlayerName[1];
    let firstNamea = '/' + firstName;
    let lastNamea = '/' + lastName;
    console.log(firstNamea);
    console.log(lastNamea);
    var completeName = lastNamea + firstNamea;
    console.log(completeName);

    let photoURL = 'https://nba-players.herokuapp.com/players' + completeName;


    fetch(photoURL)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isloaded: true,
                        news: result.news
                    });
                },
                (error) => {
                    this.setState({
                        isloaded: true,
                        error
                    });
                


    render(); {
        let { text } = this.state;
        return (
            <div className="AutoCompleteText">
                <input
                    value={text}
                    onChange={
                        this.onTextChanged
                    }
                    type="text"
                    placeholder="Enter search criteria here" className="userInput"
                />
                {this.renderSuggestions()}
                <button
                    onClick= {this.updatePlayer2.bind(this)}
                    type="button"
                    className="btn btn-primary"
                >SUBMIT</button>
            </div>

        )

    }


});



   }}