import React from 'react';
import './App.css';
import HomePage from './homepage/homepage';
// import { BrowserRouter as Router, Route} from "react-route-dom";
import api from "./utils/API";

class App extends React.Component {

componentDidMount(){
  api.getPlayer().then(res => {
    console.log(res);
  })
}

  constructor(props) {
    super(props);
    this.state = {
      players: [],
      isLoaded: false
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3 style={{fontSize: '50px', color: 'white'}}>GOAT</h3>
          <HomePage/>
        </div>
      </div>
    );
  }
}

export default App;
