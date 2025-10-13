# Lesson: Introduction to Express.js

Imagine Node.js is a **kitchen** where you can cook anything, but sometimes it feels **slow to prepare every dish manually**. Express.js is like a **smart kitchen assistant** — it helps you **serve dishes faster** and organize your kitchen efficiently.

Express.js is a **Node.js framework** that makes **building web servers and APIs simpler**.

---

## 1. What is Express.js?

* **Express.js** is a **framework** built on top of Node.js.
* It simplifies handling HTTP requests, routes, middleware, and responses.
* You can **build websites, REST APIs, or even full web applications** easily.

**Analogy:** Node.js = kitchen, Express.js = sous-chef that speeds up tasks.

---

## 2. Why Use Express.js?

1. **Simpler Syntax:** Easier than using `http.createServer`.
2. **Routing Made Easy:** Define multiple URLs (routes) with minimal code.
3. **Middleware Support:** Can add extra processing (like logging, authentication) before handling requests.
4. **Community & Packages:** Huge ecosystem via npm.

---

## 3. Installing Express.js

* First, install Node.js and npm.
* Create a folder for your project:

```bash
mkdir my-express-app
cd my-express-app
npm init -y
```

* Install Express:

```bash
npm install express
```

---

## 4. Your First Express App

Create `app.js`:

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

* `app.get('/', ...)` → handles GET requests to `/` route.
* `res.send()` → sends response to the client.
* `app.listen()` → starts server on specified port.

Open `http://localhost:3000` in your browser to see the message.

---

## 5. Adding Multiple Routes

```javascript
app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});
```

* Visit `/about` → "About Page"
* Visit `/contact` → "Contact Page"

---

### Key Takeaways:

1. Express.js is a **Node.js framework** that simplifies server creation.
2. Use `app.get` (or `post`, `put`, `delete`) for routes.
3. `res.send()` sends response to the client.
4. Middleware allows you to **add extra functionality** easily.

Next, you can learn **handling POST requests, using middleware, and creating REST APIs** with Express.js.
