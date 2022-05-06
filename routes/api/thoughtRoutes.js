const router = require("express").Router();
const {
  getThought,
  getOneThought,
  createThought,
  deleteThought,
  updateThought,
} = require("../../controllers/thoughtsController");

// api/thought
router.route("/").get(getThought).post(createThought);

// Get a single thought, delete thought, and update thought
router.route("/:thoughtId").get(getOneThought).delete(deleteThought).put(updateThought);

module.exports = router;
