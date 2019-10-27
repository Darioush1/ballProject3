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
import Players from "./components/Players/Players";
import Teams from "./components/Teams/Teams";



export default class App extends Component {

  state = {
    data: []
  };

  componentDidMount(){
    api.getPlayer().then(res => {
      console.log(res.data[0]);
      this.setState({
        players: res.data
      })
    })
  };

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


