const express = require("express");

// Require routes.
const router = require("./routes/people");

const PORT = 8000;

const app = express();

// Middleware to parse JSON-formatted data
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static("public"));

// Endpoints.
app.use(router);

// Define a catch-all route to handle 404 errors
app.all("*", (request, response) => {
  response.status(404).json({ status: 404, message: "No endpoint found." });
});

app.listen(PORT, () => {
  console.info(`Server is listening on port ${PORT}`);
});
