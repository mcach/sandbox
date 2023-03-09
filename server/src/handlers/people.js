// Require data.
const { people } = require("../../data");

// Create a new person.
const createPerson = (request, response) => {
  const { name, language } = request.body;

  // Verify that the required data has been provided.
  if (!name || !language) {
    return response
      .status(400)
      .json({ status: 400, message: "Request is missing data." });
  }

  const id = people[people.length - 1].id + 1;
  const newPerson = { id, name, language };

  people.push(newPerson);

  return response.status(201).json({
    status: 201,
    data: { newPerson },
  });
};

// TODO: Delete a person by id.
const deletePerson = (request, response) => {};

// Get an array of people.
const getPeople = (request, response) => {
  return response.status(200).json({ status: 200, data: { people } });
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
      .json({ status: 404, data: { id }, message: "No person found." });
  }

  people[foundIndex].language = language;
  return response
    .status(200)
    .json({ status: 200, data: { person: people[foundIndex] } });
};

module.exports = { createPerson, getPeople, updatePerson };
