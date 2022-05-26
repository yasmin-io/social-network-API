const router = require("express").Router();

// Destructure each method from controllers to use in the routes
const {
  getAllThoughts,
  createNewThought,
  getOneThought,
  updateThought,
  deleteThought,
  createThoughtReaction,
  deleteThoughtReaction,
} = require("../../controller/thoughtsController");

// Route '/' to either GET, PUT, DELETE or POST depending on the request
// Then run the method provided in the controller.

router.route("/").get(getAllThoughts).post(createNewThought);
router
  .route("/:thoughtId")
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(createThoughtReaction);
router.route("/:thoughtId/reactions/reactionId").delete(deleteThoughtReaction);

module.exports = router;
