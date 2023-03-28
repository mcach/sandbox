// Require packages.
const router = require("express").Router();

// Require handlers.
const { createPerson, deletePerson, getPeople } = require("../handlers/people");

// Create a new person.
router.post("/api/people", createPerson);

// Get an array of people.
router.get("/api/people", getPeople);

// Delete a person by id.
router.delete("/api/people/:id", deletePerson);

module.exports = router;
