const Router = require("express");
const router = new Router();

const authMiddleware = require("../middleware/authMiddleware");
const groupsController = require("../db/controllers/groups-controller");

router.post("/create", authMiddleware, groupsController.createGroup); //auth middleware to exctract user login and create the group's name with it
router.post("/login", authMiddleware, groupsController.loginGroup);
router.get("/info", authMiddleware, groupsController.getGroup);
router.get("/members", authMiddleware, groupsController.membersGroup);
router.put("/update", authMiddleware, groupsController.updateGroup);
router.delete("/delete", authMiddleware, groupsController.deleteGroup);

module.exports = router;
