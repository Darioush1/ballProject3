import React from 'react';

export default class Names extends React.Component {

playerNamesOnly() {
    let players = this.state.data;
    const PlayerName = players.map( players => players.name);
  console.log(PlayerName)
  }
  
}