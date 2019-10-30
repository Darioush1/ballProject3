import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import './App.css';
import HomePage from './homepage/homepage';
import Navigation from './components/shared/Navigation';
import RegistrationForm from './components/auth/RegistrationForm';
import config from './app.config';
import LoginPage from './components/auth/LoginPage';
import ProfilePage from './components/auth/ProfilePage';
import api from './utils/API'
// import { render } from "react-dom";
import Autocomplete from "./components/Autocomplete";
import AutoCompletText from "./components/AutoCompleteText/AutoCompleteText.js";

// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
//const Express = require('express')
// var app = express();

// app.use(bodyParser.json());

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/Nbastat",
//   {
//     useCreateIndex: true,
//     useNewUrlParser: true
//   }
// );

export default class App extends Component {

  // we might not need lines 21 through 50 here since I am calling them in the HomePage
  state = {
    data: []
  };

  // playerNamesOnly() {
  //   let players = this.state.data;
  //   const PlayerName = players.map( players => players.name);
  // console.log(PlayerName)
  // }



constructor(props) {
  super(props);
}

render() {
  return (
    <div className="App">

      <Navigation />
      <main>

        <Route
          path="/login"
          render={() => <LoginPage baseUrl={config.url} />}
        />
        <Route path="/implicit/callback" component={ImplicitCallback} />
        <Route path="/register" component={RegistrationForm} />
        <SecureRoute path="/profile" component={ProfilePage} />
      </main>

      <div className="App-header">
        <h3 style={{ fontSize: '75px' }}>Swish-Stats</h3>

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
      <HomePage />
    </div>
  );
}
}


