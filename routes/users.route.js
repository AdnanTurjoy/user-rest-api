const express = require("express");
const {
  getAlluser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");
const router = express.Router();
// user route
router.get("/", getAlluser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
