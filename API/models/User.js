var mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost/testDb');

var UserSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    firstName: String,
    surname: String,
    address: String,
    skills: [String],
    bio: String,
    occupation: String,
	ratings: {
		rating: 
			{
				sum_of_rates: int,
				rate_count: int
			},
		ratedby: 
		[
			{
				username: String,
				rate: int 
			}
		]
	},
	bookmarks: [ String ],
	projects: [ String ]
});

module.exports = mongoose.model('User', UserSchema);