const people = require("../data/people.json");

// TODO: Implement create person handler.

// Delete a person by ID.
const deletePerson = (request, response) => {
  const { id } = request.params;

  // Find the index of the person with the provided ID.
  const foundIndex = people.findIndex((person) => person.id === Number(id));

  if (foundIndex === -1) {
    return response
      .status(404)
      .json({ status: 404, message: "No person found.", data: { id } });
  }

  // Remove the person from the array.
  people.splice(foundIndex, 1);
  return response.status(204).json();
};

// Get an array of people.
const getPeople = (request, response) => {
  return response.status(200).json({ status: 200, data: people });
};

// Update a person by ID.
const updatePerson = (request, response) => {
  const { id } = request.params;
  const { language } = request.body;

  // Verify that the required data has been provided.
  if (!language) {
    return response
      .status(400)
      .json({ status: 400, message: "Please provide a language." });
  }

  // Find the index of the person with the provided ID.
  const foundIndex = people.findIndex((person) => person.id === Number(id));

  if (foundIndex === -1) {
    return response
      .status(404)
      .json({ status: 404, message: "No person found.", data: { id } });
  }

  // Update the person's language.
  people[foundIndex].language = language;
  return response.status(200).json({ status: 200, data: people[foundIndex] });
};

module.exports = { deletePerson, getPeople, updatePerson };
