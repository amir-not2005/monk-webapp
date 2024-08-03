const db = require("../db");

class goalsCompletionsController {
  async createGoalsCompletion(req, res) {
    const { goal_id, commentary } = req.body;

    try {
      const newGoalCompletion = await db.query(
        `INSERT INTO goal_completion (goal_id, commentary, completion_date) VALUES ($1, $2, to_timestamp(${Date.now()} / 1000.0)) RETURNING *`,
        [goal_id, commentary]
      );
      return res.status(200).json(newGoalCompletion.rows[0]);
    } catch (e) {
      console.log(e);
      return res.status(500).json("internal error");
    }
  }
  async getAllGoalsCompletion(req, res) {
    const { goal_id } = req.params;

    try {
      const allGoalsCompletion = await db.query(
        `SELECT * FROM goal_completion WHERE goal_id = $1`,
        [goal_id]
      );
      return res.status(200).json(allGoalsCompletion.rows);
    } catch (e) {
      console.log(e);
      return res.status(500).json("internal error");
    }
  }
  async getGoalCompletion(req, res) {
    const { goal_id, completion_id } = req.params;

    try {
      const oneGoalCompletion = await db.query(
        `SELECT * FROM goal_completion WHERE goal_id = $1 AND id = $2`,
        [goal_id, completion_id]
      );
      return res.status(200).json(oneGoalCompletion.rows[0]);
    } catch (e) {
      console.log(e);
      return res.status(500).json("internal error");
    }
  }
  async deleteGoalCompletion(req, res) {
    const { goal_id, completion_id } = req.params;

    try {
      const deletedGoalCompletion = await db.query(
        `DELETE FROM goal_completion WHERE goal_id = $1 AND id = $2 RETURNING *`,
        [goal_id, completion_id]
      );
      return res.status(200).json(deletedGoalCompletion.rows[0]);
    } catch (e) {
      console.log(e);
      return res.status(500).json("internal error");
    }
  }
}

module.exports = new goalsCompletionsController();
