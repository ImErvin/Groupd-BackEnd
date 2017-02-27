var mongoose = require('mongoose');

mongoose.createConnection('mongodb://127.0.0.1:27017/groupdDB');

var User = require('./User');


var ProjectSchema = new mongoose.Schema({
    projectId: String,
    projectName: String,
    projectDesc: String,
    projectMembers: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    projectDelete: Boolean,
    projectCompleted: Boolean,
    projectCreatedDate: { type: Date },
});

var User = mongoose.model('Project', ProjectSchema);