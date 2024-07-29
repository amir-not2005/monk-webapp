const Router = require("express");
const router = new Router();
const usersController = require("../db/controllers/users-controller");

router.post("/users", usersController.createUser);
router.get("/users", usersController.getAllUsers);
router.get("/users/:id", usersController.getUser);
router.put("/users", usersController.updateUser);
router.delete("/users/:id", usersController.deleteUser);

module.exports = router;
