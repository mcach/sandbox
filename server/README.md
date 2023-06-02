# Endpoints

Endpoints are grouped into the following categories:

- **people** - relating to people in our data set

## People Endpoints

### GET /api/people

Get an array of people in the data set.

Response will be in this structure:

```json
{
  "status": 200,
  "data": [
    {
      "id": 1,
      "name": "george",
      "language": "javascript"
    },
    {
      "id": 2,
      "name": "elaine",
      "language": "rust"
    }
  ]
}
```

### PATCH /api/people/:id

Update the language of a person in the data set.

Expects a body with the following structure:

```json
{
  "language": "<programming language>"
}
```

Response will be in this structure:

```json
{
  "status": 200,
  "message": "If a message is required it will be here.",
  "data": {
    "id": 1,
    "name": "george",
    "language": "ruby"
  }
}
```

### DELETE /api/people/:id

Delete a person in the data set.

The endpoint will respond with a code of 204, no body will be returned.
