const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// Error Wrong Route Route.
router.use((req, res) => {
  return res.send("Wrong route");
});

module.exports = router;
