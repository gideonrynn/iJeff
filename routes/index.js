const router = require("express").Router();
const allRoutes = require("./allRoutes");

router.use("/api/tasks", allRoutes);

module.exports = router;