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
  "data": {
    "people": [
      {
        "id": 1,
        "name": "george",
        "language": "javascript"
      },
      {
        "id": 2,
        "name": "elaine",
        "language": "rust"
      },
      {
        "id": 3,
        "name": "jerry",
        "language": "typescript"
      }
    ]
  }
}
```

### POST /api/people

Create a new person in the data set.

Expects a body with the following structure:

```json
{
  "name": "<name of person>",
  "language": "<programming language>"
}
```

Response will be in this structure:

```json
{
  "status": 201,
  "message": "If a message is required it will be here.",
  "data": {
    "newPerson": {
      "id": 4,
      "name": "newman",
      "language": "python"
    }
  }
}
```

### PATCH /api/people/:id

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
    "person": {
      "id": 1,
      "name": "george",
      "language": "ruby"
    }
  }
}
```
