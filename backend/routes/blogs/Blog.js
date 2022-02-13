var express = require("express");
var router = express.Router();

// Load Blogs model
const Blog = require("../../models/blogs/blog");

// GET request
// Getting all the blogs
router.get("/", function (req, res) {
  Blog.find(function (err, blogs) {
    if (err) {
      console.log(err);
    } else {
      res.json(blogs);
    }
  });
});

// POST REQUEST
// Adding blogs through college name
router.post("/add", function (req, res) {
  const newBlog = new Blog({
    name: req.body.name,
    email: req.body.email,
    college: req.body.college,
    likes: req.body.likes,
    text: req.body.text
  });

  newBlog
    .save()
    .then((blog) => {
      res.status(200).json(blog);
    })
    .catch((err) => {
      res.status(400).send("Try Again");
    });
});

// POST REQUEST
// Return the likes of the blog (_id)
router.post("/likes", (req, res) => {
  const _id = req.body._id;

  // Find blog by _id
  Blog.findOne({ _id: _id }).then((blog) => {
    // Check if buyer email exists
    if (!blog) {
      res.status(404).send("Invalid ID");
    } else res.json(blog.likes);
  });
});

// POST REQUEST
// Change the likes of the blog based on _id
router.post("/change-likes", (req, res) => {
  const _id = req.body._id;
  const likes = req.body.likes;

  // Find blog by _id
  Blog.findOne({ _id: _id }).then((blog) => {

    // Check if blog exists
    if (!blog) {
      res.status(404).send("Invalid ID");
    } else {
      Blog.updateOne({ _id: _id }, { $set: { likes: likes } })
        .then((blog) => {
          res.json("Your likes has been changed successfully !");
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    }
  });
});

module.exports = router;
