const express = require("express");
const router = express.Router();

// An in-memory store for the user details
let users = [];

// Create a user
router.post("/", (req, res) => {
  const user = req.body;

  // Validate the request body
  if (!user.id || !user.firstName || !user.lastName || !user.email) {
    res.status(400).send({ message: "Invalid request body" });
    return;
  }

  users.push(user);
  res.send(user);
});

// Read a user
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === id);

  if (!user) {
    res.status(404).send({ message: "User not found" });
    return;
  }

  res.send(user);
});

// Update a user
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;

  // Validate the request body
  if (!updatedUser.firstName || !updatedUser.lastName || !updatedUser.email) {
    res.status(400).send({ message: "Invalid request body" });
    return;
  }

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    res.status(404).send({ message: "User not found" });
    return;
  }

  users[userIndex] = { ...users[userIndex], ...updatedUser };
  res.send(users[userIndex]);
});

// Delete a user
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    res.status(404).send({ message: "User not found" });
    return;
  }

  users.splice(userIndex, 1);
  res.send({ message: "User deleted" });
});

module.exports = router;
