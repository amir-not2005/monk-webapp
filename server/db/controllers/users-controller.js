const db = require("../db");

class usersController {
  async createPerson(req, res) {
    const { login, password } = req.body;
    if (!login || !password) {
      res.json("Login or password should not be empty");
    }
    const newUser = await db.query(
      `INSERT INTO users (login, password) VALUES ($1, $2) RETURNING *`,
      [login, password]
    );

    res.json({
      success: "true",
      data: newUser,
    });
  }
}

module.exports = new usersController();
