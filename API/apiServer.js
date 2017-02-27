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

//mongoose.createConnection('mongodb://localhost:27017/testDb');

// Ran into a problem above.. mongo queries left hanging because I used the createConnection function
// rather than the connect function. Adapated from : http://stackoverflow.com/questions/27331447/mongoose-find-method-causes-requests-to-hang
mongoose.connect('mongodb://localhost/testDb', function(error) {
    if (error) {
        console.err(error);
    } else {
        console.log('Connected');
    }    
});

var User = require('./models/User');
var Project = require('./models/Project');


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
    console.log("Trying to add a new user..");

    // Fill the constructor model User with incoming JSON data from request.
    var user = new User({
        email: request.body.email,
        username: request.body.username,
        password: request.body.password,
        firstName: request.body.firstName,
        surname: request.body.surname,
        bio: request.body.bio
    });

    //console.log(user.email + " " + user.username + " " + user.password + " " + user.firstName + " " + user.surname + " " + user.bio + " ");

    // Will check if a username is unique in the database
    // Adapted from: http://stackoverflow.com/questions/16882938/how-to-check-if-that-data-already-exist-in-the-database-during-update-mongoose
    User.find({username: user.username}, function(error, userdoc){
        if (error) return response.send(error);
        
        if(!userdoc.length){
            // Use mongooses .save to add the user to the database
            user.save(function(error){
                //If there is an error, send the error message to the requester
                if(error) return response.send(error);
                
                response.json({message : "Saved"});
            });
        }else{
            response.json({message: "Username already exists"});
        }
    });
})
.get(function(request, response){
    console.log("Trying to show all users");

    User.find(function(error, users) {
            if (error) return response.send(error);

            response.json(users);
    });
});

// /api/users/:username
router.route('/users/:username')
.get(function(request, response){
    console.log("Showing user with username: " + request.params.username);

    User.find({username: request.params.username}, function(error, user){
        if (error) return response.send(error);

        response.json(user);
    })
    
});

router.route('/projects')
.post(function(request, response){
    console.log("Trying to add a new project!");
})
.get(function(request, response){
    console.log("Trying to show all projects");
});

router.route('/projects/:projectId')
.get(function(request, response){
    console.log("Showing project with projectId: "+ request.body.projectId);
});

//------------------------------------------------------- API ROUTES

//Will prefix '/api' to all requests: used for convention.
app.use('/api', router);

//Server will listen on port 8080 for requests
app.listen(port);
console.log('Server started and listening on port ' + port);
