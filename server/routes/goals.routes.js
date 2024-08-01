const Router = require("express");
const router = new Router();
const goalsController = require("../db/controllers/goals-controller");

router.post("/create", goalsController.createGoal);
router.get("");
router.get("");

module.exports = router;
