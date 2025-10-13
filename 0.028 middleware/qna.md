# Practice Set: Express.js Middleware

Try these exercises using Express.js middleware. Run them with `node app.js`.

---

## 1. Logging Middleware

Create a middleware that logs the **HTTP method** and **URL** of every request.

## 2. JSON Body Parsing

Use middleware to parse incoming JSON requests. Create a POST route `/data` that responds with the JSON sent by the client.

## 3. Authentication Middleware

Create a middleware that checks for a header `x-api-key`. If the key is `12345`, allow access; otherwise respond with `401 Unauthorized`. Apply it to a route `/secure`.

## 4. Router-level Middleware

Create a router `/admin` with middleware that logs "Admin access" for every route under `/admin`. Add a GET `/admin/dashboard` route that returns "Admin Dashboard".

## 5. Error-handling Middleware

Create an error-handling middleware that catches errors thrown in routes and responds with `500 Internal Server Error` and the error message.

## 6. Static Files

Use middleware to serve static files from a folder called `public`. Place an `index.html` file in `public` and make it accessible via `/`.

## 7. Chaining Middleware

Create two middlewares for a route `/chain`:

1. Adds `req.startTime = Date.now()`
2. Logs the time taken to process the request by comparing with `Date.now()` in the route handler.

## 8. Conditional Middleware

Create a middleware that only runs for POST requests to `/special` and adds a property `req.isSpecial = true`. In the route handler, respond with "Special POST received" if `req.isSpecial` is true.
