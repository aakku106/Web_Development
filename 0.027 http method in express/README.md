# Lesson: Deep Dive into HTTP Methods in Express.js

Imagine the **web as a restaurant** again:

* **GET** = customer asks for a menu item (read request)
* **POST** = customer places an order (create new data)
* **PUT** = customer changes their order (update existing data)
* **DELETE** = customer cancels an order (remove data)

Express.js allows you to handle all these **HTTP methods** easily.

---

## 1. Understanding HTTP Methods

| Method | Description          | Real-life Analogy      |
| ------ | -------------------- | ---------------------- |
| GET    | Retrieve data        | Asking for a menu item |
| POST   | Create new data      | Placing an order       |
| PUT    | Update existing data | Changing an order      |
| DELETE | Delete data          | Canceling an order     |

**Tip:** Always think of GET as **safe** (doesn't change data) and POST/PUT/DELETE as **changing** the server data.

---

## 2. Using GET Method

```javascript
// Get list of users
app.get('/users', (req, res) => {
  res.json([
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'}
  ]);
});
```

* GET requests **fetch data** without modifying the server.
* Query parameters can be used to filter data: `/users?name=Alice` → `req.query.name`

---

## 3. Using POST Method

```javascript
app.use(express.json());
app.post('/users', (req, res) => {
  const newUser = req.body;
  // Imagine we save it to DB here
  res.status(201).json({ message: 'User created', user: newUser });
});
```

* POST is used to **send new data** to the server.
* Always use `express.json()` to parse JSON body data.
* Status code `201` means resource created.

---

## 4. Using PUT Method

```javascript
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;
  // Imagine we update the user in DB here
  res.json({ message: `User ${userId} updated`, data: updatedData });
});
```

* PUT updates **existing resources**.
* All properties can be updated or replaced.

---

## 5. Using DELETE Method

```javascript
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Imagine we delete user from DB here
  res.json({ message: `User ${userId} deleted` });
});
```

* DELETE removes a resource by ID.
* Always respond with a message or status code to confirm deletion.

---

## 6. Combining Methods for RESTful API

**Example: Simple REST API for users**

```javascript
let users = [
  {id: 1, name: 'Alice'},
  {id: 2, name: 'Bob'}
];

// GET all users
app.get('/users', (req, res) =&gt; res.json(users));

// POST new user
app.post('/users', (req, res) =&gt; {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put('/users/:id', (req, res) =&gt; {
  const userId = parseInt(req.params.id);
  const updated = req.body;
  users = users.map(u =&gt; u.id === userId ? {...u, ...updated} : u);
  res.json(users.find(u =&gt; u.id === userId));
});

// DELETE user
app.delete('/users/:id', (req, res) =&gt; {
  const userId = parseInt(req.params.id);
  users = users.filter(u =&gt; u.id !== userId);
  res.json({message: `User ${userId} deleted`});
});
```

* This creates a **complete CRUD API** using Express.js.

---

### Key Takeaways:

1. GET = read, POST = create, PUT = update, DELETE = delete.
2. Use `req.params` for route params, `req.query` for queries, `req.body` for sent data.
3. Always return appropriate **status codes** (`200`, `201`, `404`, etc.).
4. Combining these methods gives you a **RESTful API** ready for frontends or other clients.

---

Next, we can do a **practice set for HTTP methods** to reinforce GET, POST, PUT, DELETE handling.
