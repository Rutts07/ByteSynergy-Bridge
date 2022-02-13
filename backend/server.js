const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 8000;
const DB_NAME = "COLLEGE-BLOGS"

// routes
var BlogRouter = require("./routes/blogs/Blog");
var UserRouter = require("./routes/users/User");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/' + DB_NAME, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
})

// setup API endpoints
app.use("/user", UserRouter);
app.use("/blog", BlogRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
