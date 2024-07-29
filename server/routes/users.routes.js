const Router = require("express");
const router = new Router();
const usersController = require("../db/controllers/users-controller");

router.post("/users", usersController.createPerson);
router.get("/users");
router.get("/users/:id");
router.put("/users");
router.delete("/users/:id");

module.exports = router;
