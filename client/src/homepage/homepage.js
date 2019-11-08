import React from 'react';
import './homepage.css';
import Stats from '../stats/stats';
import News from '../news/news';
import AutoCompleteText from "../components/AutoCompleteText/AutoCompleteText";
import AutoCompleteText2 from "../components/AutoCompleteText2/AutoCompleteText2";
import api from '../utils/API';
import NAMES from "../components/Players/Players";
import Teams from "../components/Teams/Teams";
import Container from 'react-bootstrap/Container';

import {
  Route,
  NavLink,
} from "react-router-dom";



import ScatterChart from "./scatter & bubble charts/Scatter Chart";






class HomePage extends React.Component {

    state = {
        allPlayers: [],
        userInput: '',
        player1: '',
        player2: '',
        teamA: [],
        teamB:[]
        //There is not cap to the number of players you can add to a team yet, I am also working on clearing TEAMA and TEAMB when the component mounts. 
    };



    componentDidMount() {
        this.apiState();
        this.teamA();
        this.teamB();
    }

    apiState = () => {
        api.getPlayers().then(stats => {
            this.setState({
                allPlayers: stats.data
                
            });
        }).catch(err => console.log("error in getPLayers api.js", err));

    };

    //this function will get teamA from localhost/api/teamA
    teamA = () => {
        api.getPlayerA().then(stats => {
        
            this.setState({
                teamA:stats.data
                })
            }).catch(err => console.log("error in getPLayers api.js", err));
    };

//this function will get teamA from localhost/api/teamB
    teamB = () => {
        api.getPlayerB().then(stats => {
            this.setState({
                teamB:stats.data
                })
            }).catch(err => console.log("error in getPLayers api.js", err));
    };

    playerNamesOnly = () => {
        const players = this.state.data;
        const PlayerName = players.map(players => players.name);
        console.log("playerNamesOnly, ", PlayerName)
        return PlayerName;
    }

    //ideally this will clear the team's based on their ideas
    // clearTeams = (team) => {
    //     if (this.state.teamA.id === undefined && this.state.teamB.id === undefined) {
    //         console.log("Teams Empty")
    //     } else { 
    //         const teamA = this.state.player2;
    //         // const emptyA = teamA.map(teamA =>
    //         //     teamA.id)
    //         // this.clearTeam1
    //     }
    // }




    //api post route for player info
    addPlayer1 = (name) => {
        let userInput = this.state.player1;
        let players = this.state.allPlayers;
        const choice = players.filter(players => players.Players === userInput);
        const choice1 = choice[0];
        console.log(choice1.Players);
        api.savePlayer1({
            name: choice1
        })
            .then(res => {
                console.log(choice1);

            })
    };

    addPlayer2 = (name) => {
        console.log("name goes here ", this.state.player2)
        let userInput = this.state.player2;
        console.log("user input is", userInput)
        let players = this.state.allPlayers;
        const choice = players.filter(players => players.Players === userInput);
        const choice1 = choice[0];
        console.log(choice1);
        api.savePlayer2({
            name: choice1
        })
            .then(res => {
                console.log(choice1);

            })
    };


    myCallBack = (userInput) => {
        this.setState({ userInput: this.state.userInput })
        console.log("Inside myCallBack ", this.state.userInput)
    }

    //getting data from the autocomplete functions
    updatePlayer1Name = (userInput) => {
        this.setState({
            player1: userInput
        });
    }
    updatePlayer2Name = (userInput) => {
        this.setState({
            player2: userInput
        });
    }


   



 

    render() {
        console.log(this.state)
        return (
            <div style={{ marginTop: '30px' }} className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="text-white">COMPARE PLAYERS</h2>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">ONE V ONE</h5>
                                <form onSubmit={this.addPlayer}>
                                    <div className="form-group">
                                        <label htmlFor="playerName1">PLAYER A</label>
                                        <AutoCompleteText
                                            items={NAMES}
                                            updatePlayer1 = {this.updatePlayer1Name.bind(this)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="playerName2">PLAYER B</label>
                                        <AutoCompleteText2 
                                        items={NAMES}
                                        updatePlayer2 = {this.updatePlayer2Name.bind(this)}
                                        />
                                    </div> 

                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={this.addPlayer1}
                                    >TEAM A</button>
                                    <button type="button" className="btn btn-primary"
                                        onClick={this.addPlayer2}>TEAM B</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h2 className="text-white">COMPARE TEAMS</h2>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">TEAMS</h5>
                                <form onSubmit={this.submitTeams}>
                                    <div className="form-group">
                                        <label htmlFor="teamName1">TEAM A</label>
                                        <AutoCompleteText items={Teams} />
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="teamName2">TEAM B</label>
                                        <AutoCompleteText items={Teams} />
                                        {/* this is where the input is */}
                                        {/* <input type="text" defaultValue={this.state.team2} onChange={() => { }} onBlur={this.updateTeam2} className="form-control" id="teamName2" aria-describedby="teamName2" placeholder="Enter Team Name 2" /> */}
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={this.get1} >SWISH</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {this.state.submitted &&
                        <div className="card w-100 ml-3 mr-3 mt-4">
                            <div className="col">
                                <div className="card-body">
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Stats</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">News</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Photos</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent" style={{ minHeight: '400px' }}>
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" style={{ minHeight: '400px' }}>
                                            <Stats statsData={this.state.statsData} graphTitle="Team Comparisons"
                                            // team1={this.state.team1}
                                            // team2={this.state.team2}
                                            />
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" style={{ height: '500px' }}>
                                            <News
                    
                                            />
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div>
			  
			  <>		  
				
							<NavLink to="/scatter-chart">Scatter Chart</NavLink>
							
							
						
						
							<Container>
								<div className="content">
									
									
									<Route path="/scatter-chart" component={ScatterChart}/>
								
									
						
									
								</div>
							</Container>
										
							
			  </>	
			</div>
            </div>
            

            // <div 
            // newsCall={this.state.player1} 
            // player1News={this.player1News.bind(this)}
            // ></div>
        );
    }
}



export default HomePage;
