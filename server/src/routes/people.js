// Require packages.
const router = require("express").Router();

// Require handlers.
const { createPerson, getPeople, updatePerson } = require("../handlers/people");

// Create a new person.
router.post("/api/people", createPerson);

// Get an array of people.
router.get("/api/people", getPeople);

// Update a person by id.
router.patch("/api/people/:id", updatePerson);

module.exports = { router };
