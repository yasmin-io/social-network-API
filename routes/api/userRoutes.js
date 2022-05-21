const router = require("express").Router();

// Destructure each method from controllers to use in the routes
const {
  getAllUsers,
  createNewUser,
  getOneUser,
  deleteOneUser,
  updateOneUser,
  addNewFriend,
  deleteFriend,
} = require("../../controller/userController");

// Route '/' to either GET, PUT, DELETE or POST depending on the request
// Then run the method provided in the controller.

router.route("/").get(getAllUsers).post(createNewUser);

router
  .route("/:userId")
  .get(getOneUser)
  .put(updateOneUser)
  .delete(deleteOneUser);

router
  .route("/:userId/friends/:friendId")
  .post(addNewFriend)
  .delete(deleteFriend);

module.exports = router;
