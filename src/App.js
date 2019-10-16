import React from 'react';
import './App.css';
import HomePage from './homepage/homepage';

class App extends React.Component {

  constructor(props) {
    super(props);
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
