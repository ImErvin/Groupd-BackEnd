var mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost/testDb');

var UserSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    firstName: String,
    surname: String,
    job: String,
    bio: String,
});

module.exports = mongoose.model('User', UserSchema);