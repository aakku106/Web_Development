# Lesson: Express.js Request and Response

Imagine you're a **waiter** in a restaurant:

* The **customer** tells you what they want (Request)
* You **deliver the food** back to them (Response)

In Express.js, **`req` (request)** represents the information coming from the client, and **`res` (response)** is what you send back.

---

## 1. Understanding `req` (Request)

`req` contains information about **what the client is asking**:

| Property      | Description                                       |
| ------------- | ------------------------------------------------- |
| `req.params`  | URL parameters (e.g., `/user/:id`)                |
| `req.query`   | Query string parameters (e.g., `/search?term=js`) |
| `req.body`    | Data sent in POST/PUT requests                    |
| `req.method`  | HTTP method used (`GET`, `POST`, etc.)            |
| `req.headers` | HTTP headers sent by the client                   |

**Example: Using query parameters**

```javascript
app.get('/greet', (req, res) => {
  const name = req.query.name || 'Guest';
  res.send(`Hello, ${name}!`);
});
```

Visiting `/greet?name=Alice` → Response: `Hello, Alice!`

---

## 2. Understanding `res` (Response)

`res` is used to **send data back to the client**. Common methods:

| Method             | Description               |
| ------------------ | ------------------------- |
| `res.send()`       | Sends text, HTML, or JSON |
| `res.json()`       | Sends JSON object         |
| `res.status(code)` | Sets HTTP status code     |
| `res.sendFile()`   | Sends a file              |
| `res.redirect()`   | Redirects to another URL  |

**Example: Sending JSON**

```javascript
app.get('/user', (req, res) => {
  res.json({ name: 'Alice', age: 25 });
});
```

**Example: Sending status code**

```javascript
app.get('/notfound', (req, res) => {
  res.status(404).send('Page not found');
});
```

---

## 3. Combining `req` and `res`

**Example: Using route parameters and sending a response**

```javascript
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID requested: ${userId}`);
});
```

Visiting `/user/123` → Response: `User ID requested: 123`

**Example: POST request with JSON body**

```javascript
app.use(express.json());
app.post('/submit', (req, res) => {
  const message = req.body.message;
  res.send(`Message received: ${message}`);
});
```

---

### Key Takeaways:

1. `req` = information **from the client** (params, query, body, headers).
2. `res` = **what you send back** (text, JSON, files, redirect, status).
3. Methods like `send`, `json`, `status`, `sendFile`, and `redirect` help shape responses.
4. Combine `req` and `res` to **handle dynamic requests** and build APIs.
