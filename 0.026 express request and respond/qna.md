# Practice Set: Express.js Request and Response

Try these exercises using Express.js. Run them with `node app.js`.

---

## 1. Greeting with Query

Create a route `/hello` that accepts a `name` query parameter and responds with "Hello, [name]!". If no name is provided, respond with "Hello, Guest!".

**Tip:** Use `req.query`.

## 2. Route Parameters

Create a route `/product/:id` that responds with "Product ID: [id]".

**Tip:** Use `req.params`.

## 3. POST JSON Message

Create a POST route `/message` that accepts JSON `{text: '...'}` and responds with "You sent: [text]".

**Tip:** Use `express.json()` middleware and `req.body`.

## 4. Custom Status Code

Create a route `/unauthorized` that responds with HTTP status code 401 and message "Unauthorized Access".

**Tip:** Use `res.status()`.

## 5. JSON Array Response

Create a route `/users` that responds with a JSON array of at least 3 users. Example:

```json
[{"name": "Alice"}, {"name": "Bob"}, {"name": "Charlie"}]
```

**Tip:** Use `res.json()`.

## 6. Redirect Route

Create a route `/google` that redirects the user to `https://www.google.com`.

**Tip:** Use `res.redirect()`.

## 7. Headers Exercise

Create a route `/headers` that reads a custom header `x-client-name` and responds with "Hello, [client name]!". If the header is missing, respond with "Hello, Unknown!".

**Tip:** Use `req.headers`.

## 8. Combined Route

Create a route `/order/:id` that accepts POST requests with JSON `{quantity: number}` and responds with "Order [id]: [quantity] items".

**Tip:** Combine `req.params` and `req.body` for dynamic responses.
