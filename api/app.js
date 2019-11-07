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
var statsStats = require('./routes/api/statsRoutes')
var apiRoutes = require('./routes/api/apiRoutesSQL')
const teamA = require('./routes/api/teamA')
const teamB = require('./routes/api/teamB')
const bodyParser = require('body-parser');
var app = express();
let PORT = 5000;

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
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'bone1472',
		database : 'nba_stats'
	});
	res.locals.connection.connect(
		function(err) {
			if (err) throw err;
			console.log("connection successful!");
			//makeTable();
		  }
		  
	);
	next();
});

app.use('/api/stats', indexStats);
app.use('/api/data', statsStats);
app.use('/api/player1', apiRoutes);
app.use('/api/teamA', teamA);
app.use('/api/teamB', teamB);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', err);
});

app.listen(process.env.PORT || PORT, function() {
	console.log("Server started on port", PORT)
})

module.exports = app;
