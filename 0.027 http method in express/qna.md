# Practice Set: Express.js HTTP Methods (GET, POST, PUT, DELETE)

---

## 1. Simple GET

Create a GET route `/welcome` that responds with "Welcome to Express HTTP Methods!".

## 2. GET with Query Parameter

Create a GET route `/search` that accepts a query `term` and responds with "Search results for: [term]". If no term is provided, respond with "No search term provided".

## 3. POST New Item

Create a POST route `/items` that accepts JSON `{name: '...'}` and responds with "Item [name] created".

## 4. PUT Update Item

Create a PUT route `/items/:id` that accepts JSON `{name: '...'}` and updates the item with given `id`. Respond with "Item [id] updated to [name]".

## 5. DELETE Item

Create a DELETE route `/items/:id` that removes the item with given `id` and responds with "Item [id] deleted".

## 6. Combined CRUD

Create a small in-memory array of items and implement **GET, POST, PUT, DELETE** for `/items` so you can:

* GET all items
* POST new items
* PUT updates by id
* DELETE by id

**Tip:** Use `req.params`, `req.query`, and `req.body` as needed.

## 7. Status Codes

For all routes, set appropriate HTTP status codes:

* GET → 200
* POST → 201
* PUT → 200
* DELETE → 200

## 8. Tricky Scenario

Create a PUT route `/users/:id` where if the user with that id doesn't exist, respond with status `404` and message "User not found". Otherwise, update and respond with updated data.
