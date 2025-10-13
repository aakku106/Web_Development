# Lesson: CRUD Operations in Mongoose (MongoDB)

## 1. Real-World Analogy

Imagine your library again. You need to:

* **Add new books** (Create)
* **Check all available books** (Read)
* **Update book availability** (Update)
* **Remove books that are lost or damaged** (Delete)

CRUD operations in databases are exactly these four actions: Create, Read, Update, Delete.

---

## 2. Setting Up Mongoose

```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://username:password@cluster0.mongodb.net/library?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error(err));

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  available: { type: Boolean, default: true }
});

const Book = mongoose.model('Book', bookSchema);
```

Now we are ready to perform CRUD operations.

---

## 3. Create (Add a Book)

```javascript
const newBook = new Book({ title: 'Harry Potter', author: 'J.K. Rowling' });
await newBook.save();
console.log('Book added');
```

Or add multiple books:

```javascript
await Book.insertMany([
  { title: 'Book 1', author: 'Author A' },
  { title: 'Book 2', author: 'Author B' }
]);
console.log('Multiple books added');
```

---

## 4. Read (Retrieve Books)

Get all books:

```javascript
const books = await Book.find();
console.log(books);
```

Get a specific book by title:

```javascript
const book = await Book.findOne({ title: 'Harry Potter' });
console.log(book);
```

Get books by author:

```javascript
const authorBooks = await Book.find({ author: 'Author A' });
console.log(authorBooks);
```

---

## 5. Update (Modify Book Data)

Update a book's availability:

```javascript
await Book.updateOne({ title: 'Harry Potter' }, { available: false });
console.log('Book updated');
```

Update multiple books:

```javascript
await Book.updateMany({ author: 'Author B' }, { available: true });
console.log('Books updated');
```

---

## 6. Delete (Remove Books)

Delete a single book:

```javascript
await Book.deleteOne({ title: 'Harry Potter' });
console.log('Book deleted');
```

Delete multiple books:

```javascript
await Book.deleteMany({ author: 'Author B' });
console.log('Books deleted');
```

---

## 7. Mini Tips

* Always handle errors with `try-catch`.
* Use `findOne` for single records and `find` for multiple.
* `updateOne` and `updateMany` for updates.
* `deleteOne` and `deleteMany` for deletes.
* Mongoose makes CRUD very intuitive compared to raw MongoDB queries.
