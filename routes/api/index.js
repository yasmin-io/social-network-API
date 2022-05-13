const router = require("express").Router();
const userRoutes = require("./userRoutes");
// You are in the API Folder :)
router.use("/users", userRoutes);

module.exports = router;
