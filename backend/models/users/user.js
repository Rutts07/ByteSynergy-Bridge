const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},

	email: {
		type: String,
		required: true,
        unique: true
	},

    college: {
        type: String,
        required: true,
    },

    karma: {
        type: Number,
        required: true
    },

	password: {
		type: String,
		required: true
	},
});

module.exports = User = mongoose.model("Users", UserSchema);
