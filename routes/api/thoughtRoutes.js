const router = require("express").Router();
const {
  getThought,
  getOneThought,
  createThought,
} = require("../../controllers/thoughtsController");

// api/thought
router.route("/").get(getThought).post(createThought);

module.exports = router;
