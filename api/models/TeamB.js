const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamBSchema = new Schema({
  name: { type: String },
  team_acronym: { type: String },
  team_name: { type: String},
  games_played: { type: String },
  minutes_per_game: { type: String },
  field_goals_attempted_per_game: { type: String },
  field_goals_made_per_game: { type: String},
  field_goal_percentage: { type: String},
  free_throw_percentage: { type: String },
  three_points_attempted_per_game: { type: String },
  three_point_made_per_game: { type: String },
  three_point_percentage: { type: String},
  points_per_game: { type: String },
  offensive_rebounds_per_game: { type: String },
  defensive_rebounds_per_game: { type: String },
  rebounds_per_game: { type: String},
  assists_per_game: { type: String },
  steals_per_game: { type: String },
  blocks_per_game: { type: String },
  turnovers_per_game: { type: String},
  player_efficiency_rating: { type: String}
});

const teamBSchema = mongoose.model("Stats", teamBSchema);

module.exports = teamBSchema;