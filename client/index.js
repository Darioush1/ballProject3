// var express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const NBA = require("./routes/api/apiRoutes");

// var app = express();

// // Middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.static("public"));


// app.use(bodyParser.json());

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/Nbastat",
//   {
//     useCreateIndex: true,
//     useNewUrlParser: true,
    
//   }
// ).then(console.log("connected mongoose"));

// // anything that has "app." all the following apps will have to /api/NBA
// app.use('/api/NBA', NBA)
// // app.get('/express_backend', (req, res) => {
// //   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// // });
// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server statrted on ${port}`))

var React = require('react');
var App = React.createClass({
  getInitialState: function() {
    return {
      stats: []
    };
  },
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(stats => this.setState({ stats: stats }));
  },
  render: function() {
    return (
        <div className="Users">
          <h1>Users</h1>
          {this.state.stats.map(stats =>
            <div key={''}>{stats.assits_per_game} {stats.blocks_per_game} - {stats.defensive_rebounds_per_game} {stats.field_goal_percentage} {stats.field_goals_attempted_per_game} {stats.field_goals_made_per_game} {stats.free_throw_percentage} {stats.games_played} {stats.minutes_per_game} {stats.offensive_rebounds_per_game} {stats.player_efficiency_rating} </div>
          )}
        </div>
    );
  }
});

module.exports = App;