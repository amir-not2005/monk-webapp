const db = require("../db");

class usersController {
  async createUser(req, res) {
    const { login, password } = req.body;
    const newUser = await db.query(
      `INSERT INTO users (login, password) VALUES ($1, $2) RETURNING *`,
      [login, password]
    );

    res.json({
      success: "true",
      data: newUser.rows[0],
    });
  }

  async getAllUsers(req, res) {
    const allUsers = await db.query("SELECT * FROM users");
    res.json({
      success: "true",
      data: allUsers.rows,
    });
  }

  async getUser(req, res) {
    const id = req.params.id;
    const user = await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
    res.json({
      success: "true",
      data: user.rows[0],
    });
  }

  async updateUser(req, res) {
    const { id, login, password } = req.body;
    const updatedUser = await db.query(
      `UPDATE users SET login = $1, password = $2 WHERE id = $3 RETURNING *`,
      [login, password, id]
    );
    res.json({
      success: "true",
      data: updatedUser.rows[0],
    });
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    const deletedUser = await db.query(
      `DELETE FROM users WHERE id = $1 RETURNING *`,
      [id]
    );
    res.json({
      success: "true",
      data: deletedUser.rows[0],
    });
  }
}

module.exports = new usersController();
