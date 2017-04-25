var mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost/testDb');

//var User = require('./User');

var ProjectSchema = new mongoose.Schema({
    projectId: String,
    projectName: String,
    projectThumb: String,
    projectCreator: String,
    projectMembers: [String],
    maxMembers: Number,
    projectDesc: String,
    tags: [String],
    comments: [{
        username: String,
        comment: String,
        time: { type: Date } 
    }],
    time: { type: Date },
});

module.exports = mongoose.model('Project', ProjectSchema);