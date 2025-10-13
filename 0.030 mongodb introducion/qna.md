# Practice Set: MongoDB and Express

## Instructions

Try to solve these exercises using Node.js, Express, and MongoDB. Focus on connecting your server, performing CRUD operations, and understanding collections and documents.

---

### 1. Insert a Book

Create an Express endpoint `/add-book` that inserts a book into a `books` collection. Each book should have `title`, `author`, and `available` fields.

### 2. List All Books

Create an endpoint `/books` that returns all books from the `books` collection as JSON.

### 3. Find a Book by Title

Create an endpoint `/books/:title` that searches for a book by its `title` and returns the document.

### 4. Update Book Availability

Create an endpoint `/update-book/:title` that changes the `available` status of a book.

### 5. Delete a Book

Create an endpoint `/delete-book/:title` that deletes a book from the collection by title.

### 6. Bonus: Insert Multiple Books

Create an endpoint `/add-multiple-books` that takes an array of books in the request body and inserts them all at once into the `books` collection.

### 7. Extra Challenge: Search Books by Author

Create an endpoint `/books/author/:authorName` that finds all books written by a specific author.
