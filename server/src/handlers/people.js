// Require data.
const languages = require("../data/languages.json");

// TODO: endpoint handler for creating a new person.
const createPerson = (request, response) => {
  console.log(request.body);
};

module.exports = { createPerson };
