const router = require("express").Router();
const { getThought, getOneThought } = require("../../controllers/thoughtsController");

router.route("/").get(getThought).post();

module.exports = router;
