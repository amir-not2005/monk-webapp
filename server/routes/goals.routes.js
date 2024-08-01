const Router = require("express");
const router = new Router();
const goalsController = require("../db/controllers/goals-controller");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/create", authMiddleware, goalsController.createGoal);
router.get("");
router.get("");

module.exports = router;
