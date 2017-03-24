var mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost/testDb');

//var User = require('./User');

var ProjectSchema = new mongoose.Schema({
    projectId: String,
    projectName: String,
    projectDesc: String,
    /*projectMembers: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    */
    projectDelete: Boolean,
    projectCompleted: Boolean,
    projectCreatedDate: { type: Date },
});

module.exports = mongoose.model('Project', ProjectSchema);