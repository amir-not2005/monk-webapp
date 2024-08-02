const Router = require("express");
const router = new Router();
const goalsController = require("../db/controllers/goals-controller");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/create", authMiddleware, goalsController.createGoal);
router.get("/", authMiddleware, goalsController.getAllGoals);
router.get("/:id", authMiddleware, goalsController.getGoal);
router.put("/update", authMiddleware, goalsController.updateGoal);
router.delete("/delete/:id", authMiddleware, goalsController.deleteGoal);

module.exports = router;
