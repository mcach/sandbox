const { deletePerson, getPeople, updatePerson } = require("../handlers/people");
const express = require("express");

const router = express.Router();

// Route to get an array of people.
router.get("/api/people", getPeople);

// Route to delete a person by ID.
router.delete("/api/people/:id", deletePerson);

// Route to update a person by ID.
router.patch("/api/people/:id", updatePerson);

module.exports = router;
