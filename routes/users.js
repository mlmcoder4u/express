const express = require("express");
const router = express.Router();
const userController = require("../app/api/controller/users");

router.post("/register", userController.create);
router.post("/authenticate", userController.authenticate);
router.put("/update/:id", userController.update);

module.exports = router;
