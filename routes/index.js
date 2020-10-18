const router = require("express").Router();
const taskRoutes = require("./taskRoutes");
const histRoutes = require("./histRoutes");

router.use("/api/tasks", taskRoutes);
router.use("/api/history", histRoutes);

module.exports = router;