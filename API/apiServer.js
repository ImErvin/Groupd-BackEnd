// Wiring up modules and DB and setting up the router ------
var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");

// Ability to parse json and send json
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

// Use the mongoDb schemas from the models folder.
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

// Create a route that creates an auth token, recieve parameter (rememberMe), if true, set expiration to 30 days
// Else set expiration to 1 day.

router.route('/token')
.post(function(request, response){
    userToken = request.body.token;

    reponse.json({message: "Token saved"});
})
.get(function(request, response){
    
    response.json({userToken: userToken});
})


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
        address: request.body.address,     
        skills: request.body.skills,
        bio: request.body.bio,
        occupation: request.body.occupation,
        ratings: request.body.ratings,
        bookmarks: request.body.bookmarks,
	    projects: request.body.projects        
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
// Get function returns all the users in the database
.get(function(request, response){
    console.log("Trying to show all users");

    // MongoDb find will return all the users in the database
    User.find(function(error, users) {
            if (error) return response.send(error);

            return response.json(users);
    });
});

// /api/users/:username
router.route('/users/:username')
// Get function returns the user with the username :username
.get(function(request, response){
    console.log("Showing user with username: " + request.params.username);

    // mongoDB findone will find the user with the paramenter passed in the urlencoded
    // If it doesn't find a user, it will return a message with User does not exist
    User.findOne({username: request.params.username}, function(error, user){
        if (error) return response.send(error);

        if(!user){
            response.json({message : "404"});
        }else{
            response.json(user);
        }           
    })
    
});

router.route('/projects')
.post(function(request, response){
    console.log("Trying to add a new project!");

    function generateProjectId(){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 10; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    // Assign the request JSON data to the aprropriate Project variables.
    var project = new Project({
        projectId: generateProjectId(),
        projectName: request.body.projectName,
        projectThumb: request.body.projectThumb,
        projectCreator: request.body.projectCreator,
        projectMembers: request.body.projectMembers,
        projectDelete: request.body.projectDelete,
        maxMembers: request.body.maxMembers,
        projectDesc: request.body.projectDesc,
        comments: request.body.comments,
        time: request.body.time
    });
    // Then try to add the project to the database.
    function createProject(project){
        console.log(project.projectId);
        // Check if projectId already exists in the database.
        // If the projectID does exist, the createProject function will be called again.
        Project.find({projectId: project.projectId}, function(error, userdoc){
            if (error) return response.send(error);
            if(!userdoc.length){
                // Use mongooses .save to add the project to the database
                project.save(function(error){
                    if(error) return response.send(error);
                    console.log(project);
                    response.json({message : "Project Added"});
                });
            }else{
                console.log("Else");
                project.projectId = generateProjectId();
                createProject(project);
            }
       });
    }

    createProject(project);
})
.get(function(request, response){
    Project.find(function(error, projects){
        if(error) return response.json(error);

        response.json(projects);
    })
});

router.route('/projects/:projectId')
.get(function(request, response){
    console.log("Showing project with projectId: "+ request.body.projectId);
});

//------------------------------------------------------- API ROUTES

// Will prefix '/api' to all requests: used for convention.
app.use('/api', router);

//Server will listen on port 8080 for requests
app.listen(port);
console.log('Server started and listening on port ' + port);
