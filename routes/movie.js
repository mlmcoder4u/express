const express = require("express");
const router = express.Router();
const movieController = require("../app/api/controller/movie");
const validateUser = require("../middleware/validateUser");

router.post("/", validateUser, movieController.create);
router.get("/", movieController.getAll);
router.get("/:movieId", movieController.getById);
router.put("/:movieId", validateUser, movieController.updateById);
router.delete("/:movieId", validateUser, movieController.deleteById);

module.exports = router;
