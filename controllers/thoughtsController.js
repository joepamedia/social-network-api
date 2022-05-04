const res = require("express/lib/response");
const { Thought, User } = require("../models");

module.exports = {
  // get thoughts
  getThought(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // get individual thought
  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with matching ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // delete a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) => {
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json({ message: "Thought deleted!" });
        return User.findOneAndUpdate(
          {
            thoughts: req.params.thoughtId,
          },
          {
            $pull: { thoughts: req.params.thoughtId },
          },
          { new: true }
        );
      })
      .catch((err) => res.status(500).json(err));
  },
};
