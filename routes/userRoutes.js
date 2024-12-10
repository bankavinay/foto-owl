const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const userrouter = express.Router();

userrouter.get("/", getUsers);

userrouter.get("/:id", getUserById);

userrouter.post("/", createUser);

userrouter.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = userrouter;
