const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BlogSchema = new Schema({
	text: {
		type: String,
		required: true
	},

    college: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
    },

    likes: {
        type: Number,
        required: true
    },

    name: {
        type: String,
    }
});

module.exports = Blog = mongoose.model("Blogs", BlogSchema);
