var express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const NBA = require("./routes/api/apiRoutes");

var app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


app.use(bodyParser.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Nbastat",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
).then(console.log("connected mongoose"));

// anything that has "app." all the following apps will have to /api/NBA
app.use('/api/NBA', NBA)
// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server statrted on ${port}`))

