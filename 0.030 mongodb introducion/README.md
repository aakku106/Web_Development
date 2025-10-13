# Lesson: Introduction to MongoDB and Connecting with Express

## 1. Imagine a Real-World Problem

Think of a library. You need to keep track of books: their titles, authors, availability, and borrowers. If you just write everything on paper, it gets messy fast. We need a system that **stores data efficiently** and lets us easily add, update, or find books.

This is where **databases** come in. They are like digital filing cabinets for your data.

---

## 2. What is MongoDB?

MongoDB is a **NoSQL database**. Unlike traditional databases that store data in tables and rows (like Excel), MongoDB stores data in **flexible JSON-like documents**.

Think of it as a collection of objects:

```json
{
  "title": "Harry Potter",
  "author": "J.K. Rowling",
  "available": true
}
```

Each document can have different fields, and you don’t need a fixed structure.

**Why MongoDB?**

* Easy to use with JavaScript (JSON-style)
* Flexible structure, no strict schema
* Good for projects that grow fast

---

## 3. Installing MongoDB

You can either:

1. **Install locally**: [MongoDB Community Server](https://www.mongodb.com/try/download/community)
2. **Use cloud**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (recommended for beginners)

Once installed or signed up:

* You get a **connection string**, like:

```
mongodb+srv://username:password@cluster0.mongodb.net/myFirstDB?retryWrites=true&w=majority
```

---

## 4. Connecting Express with MongoDB

### Step 1: Create a new Express project

```bash
mkdir my-app
cd my-app
npm init -y
npm install express mongodb
```

### Step 2: Create a basic Express server

```javascript
// index.js
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // Parse JSON requests

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

---

### Step 3: Connect to MongoDB

```javascript
const { MongoClient } = require("mongodb");

// Replace this with your connection string
const uri = "mongodb+srv://username:password@cluster0.mongodb.net/myFirstDB?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const database = client.db("library");
    const books = database.collection("books");

    // Example: Insert a book
    const result = await books.insertOne({
      title: "Harry Potter",
      author: "J.K. Rowling",
      available: true
    });

    console.log("Inserted document:", result.insertedId);

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
```

---

## 5. What Just Happened?

1. We **created a MongoDB client** and connected to our cluster.
2. Selected a database (`library`) and a collection (`books`).
3. Inserted a document (book) into the collection.
4. Closed the connection.

Now, we can do **CRUD operations** (Create, Read, Update, Delete) using MongoDB and Express.

---

## 6. Mini Tips

* Use `express.json()` to parse JSON requests when sending data from frontend.
* Keep your connection string **secret**, don’t push it to GitHub.
* You can keep `client.connect()` open if your app needs to handle multiple requests.
