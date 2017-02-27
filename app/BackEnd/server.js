// Wiring up modules and DB and setting up the router ------
var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

var port = process.env.PORT || 8080;

var mongoose = require("mongoose");
mongoose.createConnection('mongodb://localhost:27017/groupd');

var User = require('./models/User');

var router = express.Router();
// ------ Wiring up modules and DB and setting up the router


// Use of middleware to recieve each request one at a time
router.use(function(request, response, next) {
    console.log('Request made');

    next(); 
});

// Default route with a welcome message.
router.get('/', function(request, response) {
    response.json({ message: 'Welcome to Groupd API'});   
});

// API ROUTES------------------------------------------------------

// /api/users
router.route('/users')
.post(function(request, response){
    console.log("Trying to add a new user!");
})
.get(function(request, response){
    console.log("Trying to show all users");
});

// /api/users/:username
router.route('/users/:username')
.get(function(request, response){
    console.log("Showing user with username: "+ request.body.username);
});
//------------------------------------------------------- API ROUTES

//Will prefix '/api' to all requests: used for convention.
app.use('/api', router);

//Server will listen on port 8080 for requests
app.listen(port);
console.log('Server started and listening on port ' + port);
