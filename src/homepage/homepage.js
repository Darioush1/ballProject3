import React from 'react';
import './homepage.css';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.submitPlayers = this.submitPlayers.bind(this);
        this.updatePlayer1 = this.updatePlayer1.bind(this);
        this.updatePlayer2 = this.updatePlayer2.bind(this);
        this.updateTeam1 = this.updateTeam1.bind(this);
        this.updateTeam2 = this.updateTeam2.bind(this);
        this.state = { player1: '', player2: '', team1: '', team2: '' };
    }

    submitPlayers(e) {
        e.preventDefault();
        // console.log(this.state.player1, this.state.player2);
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
            <div style={{ marginTop: '10px' }} className="container">
                <div className="row">
                    <div className="col">
                        <h2>Compare Players</h2>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Enter Player Names</h5>
                                <form onSubmit={this.submitPlayers}>
                                    <div className="form-group">
                                        <label htmlFor="playerName1">Player Name 1</label>
                                        <input type="text" value={this.state.player1} onChange={this.updatePlayer1} className="form-control" id="playerName1" aria-describedby="playerName1" placeholder="Enter Player Name 1" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="playerName2">Player Name 2</label>
                                        <input type="text" value={this.state.player2} onChange={this.updatePlayer2} className="form-control" id="playerName2" aria-describedby="playerName2" placeholder="Enter Player Name 2" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h2>Compare Teams</h2>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Enter Team Names</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card w-100 ml-3 mr-3 mt-4">
                        <div className="col">
                            <div className="card-body">
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;