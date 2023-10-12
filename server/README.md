# Endpoints

Endpoints are grouped into the following categories:

- **people** - relating to data about individuals.

## People

### GET /api/people

Retrieve an array of people from the data set.

**Response:**

- `200 OK`

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

Update the programming language of a person in the data set.

**Request Body:**

```json
{
  "language": "<programming language>"
}
```

**Response:**

- `200 OK`

```json
{
  "status": 200,
  "message": "A message may be provided here if required.",
  "data": {
    "id": 1,
    "name": "george",
    "language": "ruby"
  }
}
```

### DELETE /api/people/:id

Delete a person from the data set.

**Response:**

- `204 No Content`
