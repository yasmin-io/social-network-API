const { User, Thought } = require("../models");

const userController = {
  getAllUsers(req, res) {
    User.find()
      .then((allUsers) => {
        res.json(allUsers);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  getOneUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  createNewUser(req, res) {
    //create new users
    User.create(req.body)
      .then((newUserData) => {
        res.json(newUserData);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

module.exports = userController;
