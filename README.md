## Json Response

---

**Success Response:**

```
{
  "status": "success",
  "code": 200,
  "data": {
    "id": 12345,
    "name": "John Doe",
    "email": "john.doe@example.com"
  },
  "message": "User details retrieved successfully.",
  "timestamp": "2023-06-21T15:30:00Z",
}
```

**Error Response:**

```
{
  "status": "error",
  "code": 404,
  "message": "User not found.",
  "errors": [
    {
      "field": "id",
      "message": "Invalid user ID."
    }
  ],
  "timestamp": "2023-06-21T15:30:00Z",
}
```
