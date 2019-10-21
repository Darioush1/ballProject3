import React from 'react';
import './App.css';
import HomePage from './homepage/homepage';
// import { render } from "react-dom";
import Autocomplete from "./components/Autocomplete";
import AutoCompletText from "./components/AutoCompleteText/AutoCompleteText.js";
import Players from "./components/Players/Players";
import Teams from "./components/Teams/Teams";


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3 style={{ fontSize: '75px' }}>Swish-Stats</h3>
          <HomePage />
        </div>
        <div className="App-Component">
        {/* <AutoCompletText items={ Players }/>
        <br /><br />
        <AutoCompletText items={ Teams }/> */}
        </div>
        {/* <h1>React Autocomplete Demo</h1>
        <h2>Start typing and experience the autocomplete wizardry!</h2>
        <Autocomplete
          suggestions={[
            "LeBron James",
            "Stephen Curry",
            "Damien Lillard",
            "James Harden",
            "Klay Thompson",
            "Kevin Durant",
            "Kawhi Leonard",
            "Giannis Antetokounmpo",
            "Anthony Davis",
            "C. J. McCollum"
          ]}
        /> */}
      </div>
    );
  }
}

export default App;
