const Router = require("express");
const router = new Router();

const usersRoutes = require("./users.routes");
const groupsRoutes = require("./groups.routes");
const goalsRoutes = require("./goals.routes");
const goalsCompletionRoutes = require("./goals_completion.routes");

router.use("/users", usersRoutes);
router.use("/groups", groupsRoutes);
router.use("/goals", goalsRoutes);
router.use("/goals_completion", goalsCompletionRoutes);

module.exports = router;
