// Require data.
const people = require("../data/people.json");

// TODO: Create a new person.
const createPerson = (request, response) => {};

// Delete a person by id.
const deletePerson = (request, response) => {
  const { id } = request.params;

  // Verify that the person with provided id exists.
  const foundIndex = people.findIndex((person) => {
    return person.id === Number(id);
  });

  if (foundIndex === -1) {
    return response
      .status(404)
      .json({ status: 404, message: "No person found.", data: { id } });
  }

  people.splice(foundIndex, 1);
  return response.status(204).json();
};

// Get an array of people.
const getPeople = (request, response) => {
  return response.status(200).json({ status: 200, data: people });
};

// Update a person by id.
const updatePerson = (request, response) => {
  const { id } = request.params;
  const { language } = request.body;

  // Verify that the required data has been provided.
  if (!language) {
    return response
      .status(400)
      .json({ status: 400, message: "Please provide a language." });
  }

  // Verify that the person with provided id exists.
  const foundIndex = people.findIndex((person) => {
    return person.id === Number(id);
  });

  if (foundIndex === -1) {
    return response
      .status(404)
      .json({ status: 404, message: "No person found.", data: { id } });
  }

  people[foundIndex].language = language;
  return response.status(200).json({ status: 200, data: people[foundIndex] });
};

module.exports = { deletePerson, getPeople, updatePerson };
