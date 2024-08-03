const Router = require("express");
const router = new Router();
const goalsCompletionsController = require("../db/controllers/goals_completion-controller");

router.post("/create", goalsCompletionsController.createGoalsCompletion);
router.get("/:goal_id", goalsCompletionsController.getAllGoalsCompletion);
router.get(
  "/:goal_id/:completion_id",
  goalsCompletionsController.getGoalCompletion
);
router.delete(
  "/delete/:goal_id/:completion_id",
  goalsCompletionsController.deleteGoalCompletion
);

module.exports = router;
