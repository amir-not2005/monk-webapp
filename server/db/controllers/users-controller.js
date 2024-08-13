const db = require("../db");
const bcrypt = require("bcrypt");
const { json } = require("express");
const jwt = require("jsonwebtoken");

function generateJwt(id, login) {
  return jwt.sign(
    {
      id: id,
      login: login,
    },
    process.env.SECRET_KEY,
    { expiresIn: "24h" }
  );
}

class usersController {
  async registerUser(req, res, next) {
    const { login, password } = req.body;

    // Check if User already exists
    const candidate = await db.query(`SELECT * FROM users WHERE login = $1`, [
      login,
    ]);
    if (candidate.rows[0]) {
      console.log(candidate.rows);
      return next(res.status(409).json("User already exists"));
    }

    // Hash password and create User
    const hashPassword = await bcrypt.hash(password, 5);
    const newUser = await db.query(
      `INSERT INTO users (login, password) VALUES ($1, $2) RETURNING *`,
      [login, hashPassword]
    );

    const token = generateJwt(newUser.rows[0].id, newUser.rows[0].login);

    return res.status(200).json(token);
  }

  async loginUser(req, res, next) {
    const { login, password } = req.body;
    const user = await db.query(`SELECT * FROM users WHERE login = $1`, [
      login,
    ]);
    if (!user.rows[0]) {
      return next(res.status(404).json("No such user, please register"));
    }
    let comparePassword = bcrypt.compareSync(password, user.rows[0].password);
    if (!comparePassword) {
      return next(res.status(404).json("Check login or password"));
    }

    const token = generateJwt(user.rows[0].id, user.rows[0].login);
    return res.status(200).json(token);
  }

  async authUser(req, res) {
    const token = generateJwt(req.user.id, req.user.login);
    return res.status(200).json({ token });
  }
}

module.exports = new usersController();

// class usersController {
//   async createUser(req, res) {
//     const { login, password } = req.body;
//     const newUser = await db.query(
//       `INSERT INTO users (login, password) VALUES ($1, $2) RETURNING *`,
//       [login, password]
//     );

//     res.json({
//       success: "true",
//       data: newUser.rows[0],
//     });
//   }

//   async getAllUsers(req, res) {
//     const allUsers = await db.query("SELECT * FROM users");
//     res.json({
//       success: "true",
//       data: allUsers.rows,
//     });
//   }

//   async getUser(req, res) {
//     const id = req.params.id;
//     const user = await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
//     res.json({
//       success: "true",
//       data: user.rows[0],
//     });
//   }

//   async updateUser(req, res) {
//     const { id, login, password } = req.body;
//     const updatedUser = await db.query(
//       `UPDATE users SET login = $1, password = $2 WHERE id = $3 RETURNING *`,
//       [login, password, id]
//     );
//     res.json({
//       success: "true",
//       data: updatedUser.rows[0],
//     });
//   }

//   async deleteUser(req, res) {
//     const id = req.params.id;
//     const deletedUser = await db.query(
//       `DELETE FROM users WHERE id = $1 RETURNING *`,
//       [id]
//     );
//     res.json({
//       success: "true",
//       data: deletedUser.rows[0],
//     });
//   }
// }
