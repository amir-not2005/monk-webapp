const Router = require("express");
const router = new Router();
const usersController = require("../db/controllers/users-controller");
const authMiddleware = require("../middleware/authMiddleware");
const { body } = require("express-validator");

router.post(
  "/registration",
  body("login").isEmail().withMessage("Email must be accurate"),
  body("password")
    .isLength({ min: 3 })
    .withMessage("Password is too short")
    .isLength({ max: 32 })
    .withMessage("Password is too long"),
  usersController.registerUser
);
router.post("/login", usersController.loginUser);
router.get("/auth", authMiddleware, usersController.authUser); // For JWT token

module.exports = router;

// router.post("/users", usersController.createUser);
// router.get("/users", usersController.getAllUsers);
// router.get("/users/:id", usersController.getUser);
// router.put("/users", usersController.updateUser);
// router.delete("/users/:id", usersController.deleteUser);
