var mongoose = require('mongoose');

mongoose.createConnection('mongodb://127.0.0.1:27017/groupdDB');

var UserSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    firstName: String,
    surname: String,
    bio: String,
});

var User = mongoose.model('User', UserSchema);