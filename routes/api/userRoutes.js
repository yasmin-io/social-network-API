const router = require("express").Router();
// Const destructure all the controller endpoint function names require from controller/userController
const {
  getAllUsers,
  createNewUser,
  getOneUser,
  deleteOneUser,
  updateOneUser,
} = require("../../controller/userController");

//Example:
// router.route('path').get(function).post(function)

// Get all the users || Post a New User to the database
router.route("/").get(getAllUsers).post(createNewUser);

// Get, Update, Delete a single user by id
router
  .route("/:userId")
  .get(getOneUser)
  .put(updateOneUser)
  .delete(deleteOneUser);

module.exports = router;
