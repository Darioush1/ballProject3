import React from 'react';
import './homepage.css';
import Stats from '../stats/stats';
import News from '../news/news';
import AutoCompleteText from "../components/AutoCompleteText/AutoCompleteText";
import Players from "../components/Players/Players";
import Teams from "../components/Teams/Teams";
import PlayerSearch from '../components/playerSearch/playerSearch'

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.submitPlayers = this.submitPlayers.bind(this);
        this.submitTeams = this.submitTeams.bind(this);
        this.updatePlayer1 = this.updatePlayer1.bind(this);
        this.updatePlayer2 = this.updatePlayer2.bind(this);
        this.updateTeam1 = this.updateTeam1.bind(this);
        this.updateTeam2 = this.updateTeam2.bind(this);
        this.state = {
            player1: '',
            player2: '',
            team1: '',
            team2: '',
            submitted: false,
            data: {}
        };
    }

    submitPlayers(e) {
        e.preventDefault();
        // console.log(this.state.player1, this.state.player2);
    }

    submitTeams(e) {
        e.preventDefault();
        fetch("http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news")
            .then(res => res.json())
            .then(data => {
                this.setState({ data: data, submitted: true });
            });
        // console.log(this.state.team1, this.state.team2);
    }

    updatePlayer1(e) {
        this.setState({ player1: e.target.value });
    }

    updatePlayer2(e) {
        this.setState({ player2: e.target.value });
    }

    updateTeam1(e) {
        this.setState({ team1: e.target.value });
    }

    updateTeam2(e) {
        this.setState({ team2: e.target.value });
    }

    render() {
        return (
            <div style={{ marginTop: '30px' }} className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="text-white">COMPARE PLAYERS</h2>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">ENTER PLAYER NAMES</h5>
                                <form onSubmit={this.submitPlayers}>
                                    <div className="form-group">
                                        <label htmlFor="playerName1">PLAYER NAME 1</label>                      <AutoCompleteText items={Players}  />
                                        {/* <PlayerSearch /> */}
                                        {/* <input type="text" value={this.state.player1} onChange={this.updatePlayer1} className="form-control" id="playerName1" aria-describedby="playerName1" placeholder="Enter Player Name 1" /> */}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="playerName2">PLAYER NAME 2</label>
                                        <AutoCompleteText items={Players}  />
                                        {/* <PlayerSearch /> */}
                                        {/* <input type="text" value={this.state.player2} onChange={this.updatePlayer2} className="form-control" id="playerName2" aria-describedby="playerName2" placeholder="Enter Player Name 2" /> */}
                                    </div>
                                    <button type="submit" className="btn btn-primary">SUBMIT</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h2 className="text-white">COMPARE TEAMS</h2>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">ENTER TEAM NAMES</h5>
                                <form onSubmit={this.submitTeams}>
                                    <div className="form-group">
                                        <label htmlFor="teamName1">TEAM NAME 1</label>
                                        <AutoCompleteText items={Teams} />
                                        {/* <input type="text" defaultValue={this.state.team1} onChange={() => { }} onBlur={this.updateTeam1} className="form-control" id="teamName1" aria-describedby="teamName1" placeholder="Enter Team Name 1" /> */}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="teamName2">TEAM NAME 2</label>
                                        <AutoCompleteText items={Teams} />
                                        {/* this is where the input is */}
                                        {/* <input type="text" defaultValue={this.state.team2} onChange={() => { }} onBlur={this.updateTeam2} className="form-control" id="teamName2" aria-describedby="teamName2" placeholder="Enter Team Name 2" /> */}
                                    </div>
                                    <button type="submit" className="btn btn-primary">SUBMIT</button>
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
                                            <Stats
                                                team1={this.state.team1}
                                                team2={this.state.team2}
                                            />
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" style={{ height: '500px' }}>
                                            <News
                                                data={this.state.data}
                                            />
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default HomePage;
