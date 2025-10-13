# Practice Set: Express.js

Write Express.js code for the following exercises. Run them using `node app.js`.

---

## 1. Hello Express

Create a basic Express server that responds with "Hello Express!" when visiting `/`.

## 2. Multiple Routes

Create two routes:

* `/about` → responds "About Us"
* `/contact` → responds "Contact Us"

## 3. JSON Response

Create a route `/user` that returns a JSON object:

```json
{"name": "Alice", "age": 25}
```

## 4. Query Parameters

Create a route `/greet` that takes a query parameter `name` and responds with "Hello, [name]!". Example: `/greet?name=Bob` → "Hello, Bob!"

## 5. POST Request

Create a route `/submit` that accepts POST requests with JSON data `{message: '...'}` and responds with "Received: [message]".

## 6. Middleware Logging

Add a middleware that logs the HTTP method and URL of every request.

## 7. 404 Page

Add a middleware that handles all undefined routes and responds with "404: Page Not Found".
