var express = require("express");
var router = express.Router();

// Load Buyer model
const User = require("../../models/users/user");

// GET request
// Getting all the user
router.get("/", function (req, res) {
  User.find(function (err, users) {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

// POST REQUEST
// Return the wallet balance of the user (_id)
router.post("/karma", (req, res) => {
  const _id = req.body._id;
  // Find user by email
  User.findOne({ _id: _id }).then((user) => {
    // Check if buyer email exists
    if (!user) {
      res.status(404).send("Invalid ID");
    } else res.json(user.karma);
  });
});

// POST REQUEST
// Change the wallet balance of the user based on _id and wallet balance
router.post("/change-karma", (req, res) => {
  const _id = req.body._id;
  const karma = req.body.karma;

  // Find user by email
  User.findOne({ _id: _id }).then((buyer) => {

    // Check if user email exists
    if (!buyer) {
      res.status(404).send("Invalid username");
    } else {
      User.updateOne({ _id: _id }, { $set: { karma: karma } })
        .then((user) => {
          res.json("Your karma has been changed successfully !");
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    }
  });
});

// POST request
// Add a buyer to db
router.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const college = req.body.college;
  const karma = req.body.karma;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    // Check if user email exists
    if (user) {
      res.status(400).json({ error: "User already exists" });
    } else {
      const newUser = new User({
        name: name,
        email: email,
        college: college,
        karma: karma,
        password: password,
      });

      newUser
        .save()
        .then((user) => {
          res.status(200).json(user);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    }
  });
});

// POST request
// Login
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  
  // Find user by email
  User.findOne({ email: email, password: password }).then((user) => {
    // Check if user email exists
    if (!user) {
      res.status(404).send("Invalid username or password !");
    } else res.send(user);
  });
});

// POST REQUEST
// Return the _id of the user
router.post("/_id", (req, res) => {
  const email = req.body.email;
  
  // Find user by email
  User.findOne({ email: email }).then((user) => {
    // Check if buyer email exists
    if (!user) {
      res.status(404).send("Invalid ID");
    } else res.json(user._id);
  });
});


module.exports = router;
