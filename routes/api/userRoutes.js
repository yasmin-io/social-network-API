const router = require("express").Router();
// Const destructure all the controller endpoint function names require from controller/userController
const {
  getAllUsers,
  createNewUser,
  getOneUser,
} = require("../../controller/userController");

// router.route('path').get(function).post(function)
router.route("/").get(getAllUsers).post(createNewUser);
router.route("/:userId").get(getOneUser);

module.exports = router;
