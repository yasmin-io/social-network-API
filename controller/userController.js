const { User, Thought } = require("../models");

const userController = {
  // Get All Users
  getAllUsers(req, res) {
    User.find()
      .then((allUsers) => {
        res.json(allUsers);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  // Get One User by id
  getOneUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  // Create a New User
  createNewUser(req, res) {
    User.create(req.body)
      .then((newUserData) => {
        res.json(newUserData);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  // Delete a User by id
  deleteOneUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) => {
        res.json({ message: "This user has been deleted!" });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  // Update a User by id
  updateOneUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedUser) => {
        res.json(updatedUser);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

module.exports = userController;
