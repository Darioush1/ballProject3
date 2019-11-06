var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require("mysql");
var db = require("./models/Nbastat");
const cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var indexStats = require('./routes/api/expressRoutes');
var statsStats = require('./routes/api/statsRoutes');
var getPlayers = require('./routes/api/getPlayers');
var apiRoutesSQL = require('./routes/api/apiRoutesSQL');
var apiRoutes = require('./routes/api/apiRoutes');
const teamA = require('./routes/api/teamA');
const teamB = require('./routes/api/teamB');
const bodyParser = require('body-parser');

var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors())



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);



//Database connection
app.use(function (req, res, next) {
	res.locals.connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'RajuC1220',
		database: 'nba_stats'
	});
	res.locals.connection.connect(
		function (err) {
			if (err) throw err;
			console.log("connection successful!");
			//makeTable();
		}

	);
	next();
});
// db.sequelize(function() {
// 	let PORT = 3001;
// 	app.listen(PORT, () => {
// 	  console.log(
// 		"App lisenting on PORT",
// 		PORT
// 	  );
// 	});
//   });

app.listen(PORT, function() {
	console.log("Listening on port:%s", PORT);
  });

app.post('/api/apiRoutes', function(req, res) {
	console.log(req, res)
});
app.use('/api/getPlayers', getPlayers);
app.use('/api/stats', indexStats);
app.use('/api/data', statsStats);
app.use('/api/player1', apiRoutesSQL);
app.use('/api/teamA', teamA);
app.use('/api/teamB', teamB);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error', err);
});

module.exports = app;