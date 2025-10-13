# Lesson: Introduction to Databases

Imagine a **huge library**:

* Each **book** is a piece of information (data).
* **Organized shelves** = tables or collections.
* **Librarian** helps you quickly find or store books = database management system (DBMS).

Databases are **places where data is stored, organized, and managed** so applications can use it efficiently.

---

## 1. What is a Database?

* A database stores **structured information**.
* Can be **small** (like a local file) or **huge** (like Google search data).
* Two main types:

  1. **SQL (Relational)**: Stores data in tables with rows and columns. Examples: MySQL, PostgreSQL, SQLite.
  2. **NoSQL (Non-relational)**: Stores data in flexible formats (documents, key-value, graphs). Examples: MongoDB, Redis.

**Example SQL table:**

| ID | Name  | Age |
| -- | ----- | --- |
| 1  | Alice | 25  |
| 2  | Bob   | 30  |

**Example NoSQL document (MongoDB):**

```json
{
  "_id": 1,
  "name": "Alice",
  "age": 25
}
```

---

## 2. Why Use a Database?

* Store large amounts of data safely
* Quickly retrieve specific data
* Update, delete, or add new data efficiently
* Share data between multiple applications or users

**Analogy:** Without a database, storing data is like keeping all your books in a huge messy pile instead of organized shelves.

---

## 3. Basic Database Operations (CRUD)

CRUD = **Create, Read, Update, Delete**

| Operation | SQL Example                                           | NoSQL Example                                      |
| --------- | ----------------------------------------------------- | -------------------------------------------------- |
| Create    | `INSERT INTO users (name, age) VALUES ('Alice', 25);` | `db.users.insert({name: 'Alice', age: 25})`        |
| Read      | `SELECT * FROM users;`                                | `db.users.find({})`                                |
| Update    | `UPDATE users SET age=26 WHERE name='Alice';`         | `db.users.update({name:'Alice'}, {$set:{age:26}})` |
| Delete    | `DELETE FROM users WHERE name='Alice';`               | `db.users.remove({name:'Alice'})`                  |

---

## 4. Connecting to a Database from Node.js

1. Install a driver or ORM:

   * SQL: `npm install mysql` or `npm install pg`
   * NoSQL (MongoDB): `npm install mongodb` or `npm install mongoose`

2. Example connection (MongoDB + Mongoose):

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() =&gt; console.log('Connected to MongoDB'))
.catch(err =&gt; console.error('Connection error:', err));
```

3. Example: Create a user schema & insert a document:

```javascript
const userSchema = new mongoose.Schema({ name: String, age: Number });
const User = mongoose.model('User', userSchema);

const newUser = new User({ name: 'Alice', age: 25 });
newUser.save().then(() =&gt; console.log('User saved'));
```

---

### Key Takeaways:

1. Databases store and organize data efficiently.
2. SQL = structured tables; NoSQL = flexible formats.
3. CRUD = basic operations to manipulate data.
4. Node.js can connect to databases using drivers or ORMs like Mongoose.
5. Always handle connection errors and use proper schemas for data consistency.
