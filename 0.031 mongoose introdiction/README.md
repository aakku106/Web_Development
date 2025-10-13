# Lesson: Introduction to Mongoose

## 1. Imagine a Real-World Problem

Continuing with our library example: we want to **ensure every book has a title, an author, and an availability status**, and we want to **easily update or query books** without manually checking the structure each time.

While MongoDB is flexible, sometimes **too much flexibility can cause mistakes** (like missing fields). We need a way to **structure our data** in a more organized way.

---

## 2. What is Mongoose?

Mongoose is a **library for Node.js** that helps you interact with MongoDB **easily and safely**.

Think of it as a **manager** for your MongoDB collections:

* Ensures your documents follow a defined **schema**
* Makes CRUD operations simple with JavaScript methods
* Provides **validation** and **default values**

With Mongoose, you write code like this:

```javascript
const book = new Book({ title: 'Harry Potter', author: 'J.K. Rowling' });
book.save();
```

And Mongoose takes care of storing it in MongoDB correctly.

---

## 3. Installing Mongoose

In your Node.js project:

```bash
npm install mongoose
```

---

## 4. Connecting to MongoDB with Mongoose

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://username:password@cluster0.mongodb.net/library?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB with Mongoose!'))
  .catch(err => console.error('Connection error:', err));
```

---

## 5. Defining a Schema and Model

A **schema** defines the structure of your documents. A **model** is a class you use to create and read documents.

```javascript
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  available: { type: Boolean, default: true }
});

const Book = mongoose.model('Book', bookSchema);
```

Now `Book` represents the `books` collection in MongoDB.

---

## 6. CRUD Operations with Mongoose

### Create

```javascript
const newBook = new Book({ title: 'Harry Potter', author: 'J.K. Rowling' });
await newBook.save();
```

### Read

```javascript
const books = await Book.find(); // get all books
const book = await Book.findOne({ title: 'Harry Potter' });
```

### Update

```javascript
await Book.updateOne({ title: 'Harry Potter' }, { available: false });
```

### Delete

```javascript
await Book.deleteOne({ title: 'Harry Potter' });
```

---

## 7. Mini Tips

* Always use **try-catch** for async operations to handle errors.
* Use **schemas** to validate data and avoid mistakes.
* Mongoose automatically pluralizes your model name for the collection (`Book` → `books`).
* You can define **default values** and **required fields** to enforce rules.

With Mongoose, your MongoDB interactions become **safer, structured, and simpler**.
