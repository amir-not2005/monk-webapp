const db = require("../db");

class goalsController {
  async createGoal(req, res) {
    const { title, description, category = "" } = req.body;
    const userId = req.user.id;

    try {
      const newGoal = await db.query(
        `INSERT INTO goals (user_id, title, description, category, created_at ) VALUES ($1, $2, $3, $4, to_timestamp(${Date.now()} / 1000.0)) RETURNING *`,
        [userId, title, description, category]
      );
      res.status(200).json(newGoal.rows[0]);
    } catch (e) {
      console.log(e);
      res.status(500).json("internal error");
    }
  }

  async getGoal(req, res) {}
  async updateGoal(req, res) {}
  async deleteGoal(req, res) {}
}

module.exports = new goalsController();
