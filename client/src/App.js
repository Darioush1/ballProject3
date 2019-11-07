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
import Template from './views/Template';




export default class App extends Component {

//   // we might not need lines 21 through 50 here since I am calling them in the HomePage
//   state = {
//     data: []
//   };

//   componentDidMount() {
//     //orignal api call that puts everything into state, not that it is not multiple arrays, its just how chrome shows. If you dont know what im talking about then dont worry about

    
//     api.getPlayers().then(res => {
//         this.setState({ data: res.data });
//     })

//     // api.postAll({
//     //     name: this.state.data[0].name
//     // }).catch(err => console.log(err))

//     api.testPlayer1().then(res =>{
//         console.log("hello")
//     })
// };



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
        {}
      </div>
      {}
      <HomePage />
      
    </div>
  );
}
}


