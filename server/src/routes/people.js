// Require packages.
const router = require("express").Router();

// Require handlers.
const { deletePerson, getPeople, updatePerson } = require("../handlers/people");

// Get an array of people.
router.get("/api/people", getPeople);

// Delete a person by id.
router.delete("/api/people/:id", deletePerson);

// Update a person by id.
router.patch("/api/people/:id", updatePerson);

module.exports = router;
