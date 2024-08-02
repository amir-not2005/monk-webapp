const db = require("../db");

class groupsController {
  async createGroup(req, res) {
    let userId;
    let userLogin;
    try {
      userId = req.user.id;
      userLogin = req.user.login;
    } catch (e) {
      res.status(401).json("Please, login again");
      return next();
    }

    try {
      // Create group for the user
      const createdGroup = await db.query(
        `INSERT INTO groups (name) VALUES ($1) RETURNING *`,
        [userLogin]
      );

      // Check if a goal was deleted
      if (createdGroup.rows.length === 0) {
        return res.status(500).json("Internal error when creating the group");
      }

      // Connect user with the group
      const userUpdatedGroup = await db.query(
        `UPDATE users SET group_id = $1 WHERE id = $2 RETURNING *`,
        [createdGroup.rows[0].id, userId]
      );

      return res.status(200).json({
        group: createdGroup.rows[0],
        userGroup: userUpdatedGroup.rows[0],
      });
    } catch (e) {
      console.error(e);
      return res.status(500).json("Internal error");
    }
  }

  async loginGroup(req, res) {
    const { groupId } = req.body;

    let userId;
    try {
      userId = req.user.id;
    } catch (e) {
      res.status(401).json("Please, login again");
      return next();
    }

    try {
      // Connect user with the group
      const newGroup = await db.query(
        `UPDATE users SET group_id = $1 WHERE id = $2 RETURNING *`,
        [groupId, userId]
      );

      return res.status(200).json(newGroup.rows[0]);
    } catch (e) {
      console.error(e);
      return res.status(404).json("Group not found");
    }
  }

  async getGroup(req, res) {
    let userId;
    try {
      userId = req.user.id;
    } catch (e) {
      res.status(401).json("Please, login again");
      return next();
    }

    try {
      const groupId = (
        await db.query(`SELECT * FROM users WHERE id = $1`, [userId])
      ).rows[0].group_id;
      const group = await db.query(`SELECT * FROM groups WHERE id = $1`, [
        groupId,
      ]);
      res.status(200).json(group.rows[0]);
    } catch (e) {
      console.log(e);
      return res.status(500).json("Internal error");
    }
  }

  async membersGroup(req, res) {
    let userId;
    try {
      userId = req.user.id;
    } catch (e) {
      res.status(401).json("Please, login again");
      return next();
    }

    try {
      const groupId = (
        await db.query(`SELECT * FROM users WHERE id = $1`, [userId])
      ).rows[0].group_id;
      const groupMembers = await db.query(
        `SELECT * FROM users WHERE group_id = $1`,
        [groupId]
      );
      res.status(200).json(groupMembers.rows);
    } catch (e) {
      console.log(e);
      return res.status(500).json("Internal error");
    }
  }

  async updateGroup(req, res) {
    const { name } = req.body;

    let userId;
    try {
      userId = req.user.id;
    } catch (e) {
      res.status(401).json("Please, login again");
      return next();
    }

    try {
      const groupId = (
        await db.query(`SELECT * FROM users WHERE id = $1`, [userId])
      ).rows[0].group_id;
      const updatedGroup = await db.query(
        `UPDATE groups SET name = $1 WHERE id = $2 RETURNING *`,
        [name, groupId]
      );
      res.status(200).json(updatedGroup.rows[0]);
    } catch (e) {
      console.log(e);
      return res.status(500).json("Internal error");
    }
  }
  // Used when user connects to another group
  async deleteGroup(req, res) {
    let userId;
    try {
      userId = req.user.id;
    } catch (e) {
      res.status(401).json("Please, login again");
      return next();
    }

    try {
      const groupId = (
        await db.query(`SELECT * FROM users WHERE id = $1`, [userId])
      ).rows[0].group_id;

      await db.query(
        `UPDATE users SET group_id = $1 WHERE id = $2 RETURNING *`,
        [null, userId]
      );

      const deletedGroup = await db.query(
        `DELETE FROM groups WHERE id = $1 RETURNING *`,
        [groupId]
      );
      res.status(200).json(deletedGroup.rows[0]);
    } catch (e) {
      console.log(e);
      return res.status(500).json("Internal error");
    }
  }
}

module.exports = new groupsController();
