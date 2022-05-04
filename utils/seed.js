const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { users, thoughts } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drops table
  await Thought.deleteMany({});
  await User.deleteMany({});

  // Adds Thoughts
  await Thought.collection.insertMany(thoughts);

  // Adds Users
  await User.collection.insertMany(users);

  // seed data
  console.table(thoughts);
  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
