# Lesson: Express.js Middleware

Imagine a **restaurant again**:

* A waiter takes your order, but **before reaching the chef**, a sous-chef checks it, adds extra instructions, or logs it.
* This **extra processing step** is like middleware in Express.js.

Middleware functions are **functions that execute during the request-response cycle** before reaching the route handler.

---

## 1. What is Middleware?

* A middleware is a function with **three parameters**: `(req, res, next)`
* `req` → request object
* `res` → response object
* `next` → a function to pass control to the next middleware

**Syntax:**

```javascript
function myMiddleware(req, res, next) {
  console.log('Middleware executed');
  next(); // pass control to next middleware or route
}
app.use(myMiddleware);
```

---

## 2. Types of Middleware

1. **Application-level middleware**: Used in the entire app.

```javascript
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});
```

2. **Router-level middleware**: Used for a specific router.

```javascript
const router = express.Router();
router.use((req, res, next) => { console.log('Router middleware'); next(); });
```

3. **Third-party middleware**: From npm packages (e.g., `body-parser`, `cors`).

```javascript
const cors = require('cors');
app.use(cors());
```

4. **Error-handling middleware**: Handles errors.

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

---

## 3. Common Use Cases

* **Logging requests**
* **Parsing request body** (`express.json()`)
* **Authentication & Authorization**
* **Serving static files** (`express.static`)
* **Error handling**

**Example: Logging Middleware**

```javascript
app.use((req, res, next) => {
  console.log(`Time: ${new Date().toISOString()}, Method: ${req.method}, URL: ${req.url}`);
  next();
});
```

**Example: Protecting a Route**

```javascript
function authMiddleware(req, res, next) {
  if(req.headers['x-api-key'] === 'secret') next();
  else res.status(401).send('Unauthorized');
}

app.get('/protected', authMiddleware, (req, res) => {
  res.send('This is protected content');
});
```

---

### Key Takeaways:

1. Middleware functions **run before route handlers** and can modify `req` or `res`.
2. Always call `next()` to pass control unless you are **ending the response**.
3. Use middleware for logging, auth, body parsing, error handling, and static files.
4. Express supports **application-level, router-level, third-party, and error-handling** middleware.
