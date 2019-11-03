import React from "react";
import "./AutoCompleteText.css";

export default class AutoCompleteText extends React.Component {
    constructor(props) {
        super(props);
        this.items = [];
        this.state = {
            suggestions: [],
            text: "",
            id: this.props.id,
        };
    }

    onTextChanged = (e) => {
        const { items } = this.props;
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, "i");
            suggestions = items.sort().filter(v => regex.test(v));
        }
        
        this.setState(() => ({ suggestions, text: value }));
        this.props.callBackFromParent(
            this.state.text
        );
    }

    suggestionSelected (value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item, index) => <li 
                key = {index}
                onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }

    addPlayer = event => {

        let userInput = this.props;
        let players = this.state.data;
        const choice = players.filter(players => players.name === userInput);
        const choice1 = choice[0];
        //console.log(choice1);
        // api.savePlayer1({
        //     name: choice1.name
        // })
        //.then(res => {
        //    console.log(choice1);
            
       // })
    };


    Input = event => {

        const value = this.props.myCallback;
        this.setState(() => ({userInput: value }))
        event.preventDefault();
        console.log("user input" + value)
    }

  

    render() {
        const { text } = this.state;
        return (
            <div className="AutoCompleteText">
                <input 
                value={ text } 
                onChange={this.onTextChanged} 
                onSubmit={this.Input} 
                type="text"
                placeholder="Enter search criteria here" className= "userInput"/>
                {this.renderSuggestions()}
            </div>
            
        )

    }

   
}

