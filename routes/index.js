const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// Error Wrong Route Route.

module.exports = router;
