const db = require("../db");

class goalsController {
  async createGoal(req, res) {
    const { title, description, category = "" } = req.body;

    let userId;
    try {
      userId = req.user.id;
    } catch (e) {
      res.status(401).json("Please, login again");
      return next();
    }

    try {
      const newGoal = await db.query(
        `INSERT INTO goals (user_id, title, description, category, created_at ) VALUES ($1, $2, $3, $4, to_timestamp(${Date.now()} / 1000.0)) RETURNING *`,
        [userId, title, description, category]
      );
      return res.status(200).json(newGoal.rows[0]);
    } catch (e) {
      console.log(e);
      return res.status(500).json("internal error");
    }
  }

  async getAllGoals(req, res) {
    let userId;
    try {
      userId = req.user.id;
    } catch (e) {
      res.status(401).json("Please, login again");
      return next();
    }

    try {
      const fetchedGoals = await db.query(
        `SELECT * FROM goals WHERE user_id = $1`,
        [userId]
      );

      if (fetchedGoals.rows.length === 0) {
        return res
          .status(404)
          .json("Goal not found or you are not authorized to get these goal");
      }

      return res.status(200).json(fetchedGoals.rows);
    } catch (e) {
      console.log(e);
      return res.status(500).json("internal error");
    }
  }

  async getGoal(req, res) {
    const goalId = req.params.id;

    let userId;
    try {
      userId = req.user.id;
    } catch (e) {
      res.status(401).json("Please, login again");
      return next();
    }

    try {
      const fetchedGoal = await db.query(
        `SELECT * FROM goals WHERE id = $1 AND user_id = $2`,
        [goalId, userId]
      );

      if (fetchedGoal.rows.length === 0) {
        return res
          .status(404)
          .json("Goal not found or you are not authorized to get this goal");
      }

      return res.status(200).json(fetchedGoal.rows[0]);
    } catch (e) {
      console.log(e);
      return res.status(500).json("internal error");
    }
  }

  async updateGoal(req, res) {
    const { id, title, description, category = "" } = req.body;

    let userId;
    try {
      userId = req.user.id;
    } catch (e) {
      res.status(401).json("Please, login again");
      return next();
    }

    try {
      const updatedGoal = await db.query(
        `UPDATE goals SET title = $1, description = $2, category = $3 WHERE user_id = $4 AND id = $5 RETURNING *`,
        [title, description, category, userId, id]
      );

      if (updatedGoal.rows.length === 0) {
        return res
          .status(404)
          .json("Goal not found or you are not authorized to update this goal");
      }

      return res.status(200).json(updatedGoal.rows[0]);
    } catch (e) {
      console.log(e);
      return res.status(500).json("internal error");
    }
  }

  async deleteGoal(req, res, next) {
    const id = req.params.id;

    let userId;
    try {
      userId = req.user.id;
    } catch (e) {
      res.status(401).json("Please, login again");
      return next();
    }

    try {
      const deletedGoal = await db.query(
        `DELETE FROM goals WHERE id = $1 AND user_id = $2 RETURNING *`,
        [id, userId]
      );

      // Check if a goal was deleted
      if (deletedGoal.rows.length === 0) {
        return res
          .status(404)
          .json("Goal not found or you are not authorized to delete this goal");
      }

      return res.status(200).json(deletedGoal.rows[0]);
    } catch (e) {
      console.error(e);
      return res.status(500).json("Internal error");
    }
  }
}

module.exports = new goalsController();
