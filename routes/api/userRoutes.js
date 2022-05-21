const router = require("express").Router();
// Const destructure all the controller endpoint function names require from controller/userController
const {
  getAllUsers,
  createNewUser,
  getOneUser,
  deleteOneUser,
  updateOneUser,
  addNewFriend,
  deleteFriend,
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

// Get a particular user's friends
router
  .route("/:userId/friends/:friendId")
  .post(addNewFriend)
  .delete(deleteFriend);

module.exports = router;
