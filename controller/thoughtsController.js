const res = require("express/lib/response");
const { User, Thought, Reaction } = require("../models");

const thoughtsController = {
  // GET ALL thoughts
  getAllThoughts(req, res) {
    // Filter through ALL documents on the Thought Model
    Thought.find()
      // When that is finished...
      .then((allThoughts) => {
        // Display all thoughts
        res.json(allThoughts);
      }) // If not...
      .catch((err) => {
        // Catch and display the error
        res.status(500).json(err);
      });
  },

  // POST a new though
  createNewThought(req, res) {
    // Create a new document on the Thought Model
    Thought.create(req.body)

      .then((thought) => {
        // Then find a user that matches the id and update it with the added thought
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) => {
        // Then display the user with the newly added thought
        res.json(user);
      })
      .catch((err) => {
        // Or catch the error and display that instead.
        res.status(500).json(err);
      });
  },

  // GET a single thought by id
  getOneThought(req, res) {
    // Find a thought that matches the id
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) => {
        // Then display that thought.
        res.json(thought);
      })
      .catch((err) => {
        // If not, display the status and error.
        res.status(500).json(err);
      });
  },

  // UPDATE a single thought by its id
  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedThought) => {
        res.json(updatedThought);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  // DELETE a single thoought by its id
  deleteThought(req, res) {
    Thought.findByIdAndDelete(
      { _id: req.params.thoughtId },
      {
        new: true,
        runValidators: true,
      }
    )
      .then((thought) => {
        res.json(thought);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  // POST reaction on a single thought
  createThoughtReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true, runValidators: true }
    )
      .then((updatedThought) => {
        res.json(updatedThought);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

module.exports = thoughtsController;
