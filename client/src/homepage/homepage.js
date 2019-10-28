import React from 'react';
import './homepage.css';
import Stats from '../stats/stats';
import News from '../news/news';
import AutoCompleteText from "../components/AutoCompleteText/AutoCompleteText";
import api from '../utils/API'
import Players from "../components/Players/Players";
import Teams from "../components/Teams/Teams";


class HomePage extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         statsData:{}
    //     }
    // }
    state = {
        data: []
    };

    // const playerName = state.filter(function (state) {
    //   return pilot.name;
    // });

    componentDidMount() {
        //orignal api call that puts everything into state, not that it is not multiple arrays, its just how chrome shows. If you dont know what im talking about then dont worry about
        api.getPlayers().then(res => {
            this.setState({ data: res.data })
            console.log(res.data)
        })
    };


    // selectPlayer() {

    //   }
    // }



    addPlayer = event => {
        let players = this.state.data;
        let playerName = players.map(players => players.name);
        console.log(playerName)
        //  console.log(playerName)
        //const name = {text};


    };

        constructor(props) {
            super(props);
            this.submitPlayers = this.submitPlayers.bind(this);
            this.submitTeams = this.submitTeams.bind(this);
            this.updatePlayer1 = this.updatePlayer1.bind(this);
            this.updatePlayer2 = this.updatePlayer2.bind(this);
            this.updateTeam1 = this.updateTeam1.bind(this);
            this.updateTeam2 = this.updateTeam2.bind(this);
            this.state = {
                statsData: {}
            }
            // this.state = {
            //     player1: '',
            //     player2: '',
            //     team1: '',
            //     team2: '',
            //     submitted: false,
            //     data: {}
        };

        componentWillMount() {
            this.getStatsData();
        }

        getStatsData(){
            // Ajax call goes here, fill the state with the data that comes in
            this.setState({
                statsData: {
                    // The data below is hard coded. Need to change it so it dynamically pulls data depending on which teams the user selects
                    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9',
                        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
                        '20', '22', '22', '23', '24', '25', '26', '27', '28', '29',
                        '30', '33', '32', '33', '34', '35', '36', '37', '38', '39',
                        '40', '44', '42', '43', '44', '45', '46', '47', '48', '49',
                        '50', '55', '52', '53', '54', '55', '56', '57', '58', '59',
                        '60', '66', '62', '63', '64', '65', '66', '67', '68', '69',
                        '70', '77', '72', '73', '74', '75', '76', '77', '78', '79',
                        '80', '81', '82'],
                    datasets: [
                        {
                            label: 'Houston Rockets Pts Per Game',
                            data: [112, 124, 112, 89, 113, 85, 119, 96, 98,
                                80, 89, 115, 109, 107, 132, 126, 111, 108, 131,
                                108, 136, 121, 91, 91, 104, 111, 126, 105, 102,
                                136, 99, 108, 113, 127, 108, 113, 135, 101, 125,
                                109, 141, 109, 112, 142, 138, 93, 114, 121, 103,
                                116, 122, 125, 118, 127, 112, 120, 111, 106, 118,
                                119, 118, 121, 115, 107, 107, 94, 118, 104, 108,
                                117, 121, 125, 111, 113, 94, 112, 119, 130, 135,
                                120, 149, 111],
                            borderColor: '#c91b2b',
                            borderWidth: 1.5,
                            // hoverBackgroundColor: '#51FF0D',
                            // hoverBorderColor: 'azure',
                        },
                        {
                            label: 'Washingon Wizards Pts Per Game',
                            data: [112, 113, 125, 122, 112, 104, 95, 111, 108,
                                100, 108, 116, 117, 119, 104, 109, 125, 107, 124,
                                135, 104, 98, 102, 110, 131, 101, 101, 125, 118,
                                128, 110, 118, 149, 89, 95, 92, 130, 114, 109,
                                116, 115, 123, 113, 138, 101, 101, 118, 95, 119,
                                113, 107, 115, 129, 129, 119, 134, 112, 120, 110,
                                112, 125, 96, 135, 132, 111, 130, 121, 100, 110,
                                135, 95, 120, 108, 108, 106, 124, 124, 95, 114,
                                112, 110, 110,],
                            borderColor: '#007FFF ',
                            borderWidth: 1.5,
                            // hoverBackgroundColor: '#51FF0D',
                            // hoverBorderColor: 'azure',
                        }
                    ]
                }
            }
            )
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
                                            <label htmlFor="playerName1">PLAYER NAME 1</label>
                                            <AutoCompleteText items={Players} />
                                            {/* <input type="text" value={this.state.player1} onChange={this.updatePlayer1} className="form-control" id="playerName1" aria-describedby="playerName1" placeholder="Enter Player Name 1" /> */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="playerName2">PLAYER NAME 2</label>
                                            <AutoCompleteText items={Players} />
                                            {/* <PlayerSearch /> */}
                                            {/* <input type="text" value={this.state.player2} onChange={this.updatePlayer2} className="form-control" id="playerName2" aria-describedby="playerName2" placeholder="Enter Player Name 2" /> */}
                                        </div>

                                        <button type="submit" className="btn btn-primary" onClick={this.addPlayer} >SUBMIT</button>
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
                                        <button type="submit" className="btn btn-primary" onClick={this.addPlayer} >SUBMIT</button>
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
