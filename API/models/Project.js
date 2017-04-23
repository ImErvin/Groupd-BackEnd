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
    comments: String,
    tags: [String],
    /*projectMembers: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    
    tags: [String],
    projectDelete: Boolean,
    projectCompleted: Boolean,*/
    time: { type: Date },
});

module.exports = mongoose.model('Project', ProjectSchema);