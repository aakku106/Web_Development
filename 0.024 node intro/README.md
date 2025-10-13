# Lesson: Introduction to Node.js

Imagine you want to **build a restaurant**. The **frontend** is like the **dining area** — customers see it, interact with it, order food. But the **kitchen** behind the scenes is what **prepares the food** — that’s your **backend**.

**Node.js** is like a **kitchen for web applications** — it lets JavaScript run on the **server**, not just in the browser.

---

## 1. What is Node.js?

* **Node.js** is a **runtime environment** that runs JavaScript on the **server**.
* It allows your JavaScript code to **handle requests, read/write files, connect to databases, and more**.
* Built on **Google Chrome's V8 engine**, so it's fast and efficient.

**Analogy:** Browser JS = frontend chef, Node.js = backend chef.

---

## 2. Why Node.js?

1. **JavaScript Everywhere:** Use JS for both frontend and backend.
2. **Non-blocking:** Can handle many tasks at once (like a restaurant with multiple chefs).
3. **Fast & Scalable:** Great for real-time apps (chat apps, live feeds).
4. **Large Ecosystem:** Thousands of packages available via **npm** (Node Package Manager).

---

## 3. Installing Node.js

* Download from [https://nodejs.org](https://nodejs.org) and install.
* Verify installation in terminal:

```bash
node -v   # Shows Node.js version
npm -v    # Shows npm version
```

---

## 4. Your First Node.js Program

Create a file `app.js`:

```javascript
// app.js
console.log('Hello from Node.js!');
```

Run in terminal:

```bash
node app.js
```

**Output:** `Hello from Node.js!`

---

## 5. Simple HTTP Server

```javascript
// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, Node.js Server!');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

* Open `http://localhost:3000` in your browser.
* Node.js responds with "Hello, Node.js Server!"
* `http.createServer` → creates a server
* `server.listen` → starts listening on a port

---

### Key Takeaways:

1. Node.js lets you **run JavaScript on the server**.
2. Great for **real-time, scalable apps**.
3. Use **npm** to install packages.
4. Start server with `http.createServer` and listen on a port.

---

Next, you can create **routes, handle requests, and build real apps** using Node.js.
