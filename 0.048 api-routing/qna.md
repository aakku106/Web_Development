<!-- @format -->

# API Routing Q&A

## Beginner Level (10 questions)

### 1. What are API routes in Next.js?

**Answer:** API routes in Next.js are server-side functions that run on the backend to handle HTTP requests and return responses. They are stored in the `pages/api` folder and allow you to build a backend API without needing a separate server.

**Example:**

```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from API!" });
}
```

---

### 2. How do you create your first API route?

**Answer:** Create a file in the `pages/api` folder. The file name becomes the endpoint route.

**Example:**

- File: `pages/api/hello.js` → Endpoint: `/api/hello`
- File: `pages/api/users.js` → Endpoint: `/api/users`

**Code:**

```javascript
export default function handler(req, res) {
  res.status(200).json({ message: "My first API!" });
}
```

---

### 3. What is the handler function in API routes?

**Answer:** The handler function is the main function exported from an API route file. It receives `req` (request) and `res` (response) objects and processes the API request.

**Syntax:**

```javascript
export default function handler(req, res) {
  // Handle request
  res.status(200).json({ data: "response" });
}
```

---

### 4. How do you access the HTTP method in an API route?

**Answer:** Use `req.method` to get the HTTP method (GET, POST, PUT, DELETE, etc.).

**Example:**

```javascript
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "GET request" });
  } else if (req.method === "POST") {
    res.status(200).json({ message: "POST request" });
  }
}
```

---

### 5. How do you return JSON data from an API route?

**Answer:** Use `res.json()` to send JSON responses.

**Example:**

```javascript
export default function handler(req, res) {
  res.status(200).json({
    name: "John",
    age: 25,
    city: "New York",
  });
}
```

---

### 6. What is the difference between `res.json()` and `res.send()`?

**Answer:**

- `res.json()`: Sends JSON data with `Content-Type: application/json`
- `res.send()`: Sends any type of data (text, HTML, JSON)

**Best Practice:** Use `res.json()` for JSON responses.

---

### 7. How do you set HTTP status codes?

**Answer:** Use `res.status()` before sending the response.

**Example:**

```javascript
// Success
res.status(200).json({ message: "OK" });

// Created
res.status(201).json({ message: "Resource created" });

// Bad Request
res.status(400).json({ error: "Invalid data" });

// Not Found
res.status(404).json({ error: "Not found" });

// Server Error
res.status(500).json({ error: "Server error" });
```

---

### 8. How do you access request body data?

**Answer:** Use `req.body` to access JSON data sent in POST/PUT requests.

**Example:**

```javascript
export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;
    res.status(200).json({
      message: `Received: ${name}, ${email}`,
    });
  }
}
```

---

### 9. How do you access query parameters?

**Answer:** Use `req.query` to access URL query parameters.

**Example:**

```javascript
// URL: /api/users?name=John&age=25
export default function handler(req, res) {
  const { name, age } = req.query;
  res.status(200).json({ name, age });
}
```

---

### 10. Can you use async/await in API routes?

**Answer:** Yes! You can make the handler function `async` to use async/await.

**Example:**

```javascript
export default async function handler(req, res) {
  const data = await fetchDataFromDatabase();
  res.status(200).json(data);
}
```

---

## Intermediate Level (10 questions)

### 11. How do you create dynamic API routes?

**Answer:** Use square brackets `[]` in the filename to create dynamic routes.

**Example:**

- File: `pages/api/users/[id].js`
- Endpoint: `/api/users/123`, `/api/users/456`

**Code:**

```javascript
// pages/api/users/[id].js
export default function handler(req, res) {
  const { id } = req.query;
  res.status(200).json({ userId: id });
}
```

---

### 12. How do you handle different HTTP methods in one route?

**Answer:** Use a switch statement or if-else chain with `req.method`.

**Example:**

```javascript
export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      // Handle GET
      res.status(200).json({ message: "GET" });
      break;

    case "POST":
      // Handle POST
      res.status(201).json({ message: "POST" });
      break;

    case "DELETE":
      // Handle DELETE
      res.status(200).json({ message: "DELETE" });
      break;

    default:
      res.status(405).json({ error: "Method not allowed" });
  }
}
```

---

### 13. How do you handle errors in API routes?

**Answer:** Use try-catch blocks and return appropriate error status codes.

**Example:**

```javascript
export default async function handler(req, res) {
  try {
    const data = await fetchData();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
}
```

---

### 14. How do you set custom headers in responses?

**Answer:** Use `res.setHeader()` before sending the response.

**Example:**

```javascript
export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("X-Custom-Header", "MyValue");
  res.status(200).json({ message: "With custom headers" });
}
```

---

### 15. How do you enable CORS in API routes?

**Answer:** Set CORS headers to allow cross-origin requests.

**Example:**

```javascript
export default function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  res.status(200).json({ message: "CORS enabled" });
}
```

---

### 16. How do you validate request data?

**Answer:** Check if required fields exist and validate data types before processing.

**Example:**

```javascript
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, age } = req.body;

  // Validate
  if (!name || !email) {
    return res.status(400).json({
      error: "Name and email are required",
    });
  }

  if (age && (age < 0 || age > 150)) {
    return res.status(400).json({
      error: "Invalid age",
    });
  }

  // Process valid data
  res.status(200).json({ message: "Valid data", name, email, age });
}
```

---

### 17. How do you connect to a database in API routes?

**Answer:** Import your database client and use it in the handler function.

**Example (MongoDB):**

```javascript
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
  try {
    await client.connect();
    const db = client.db("mydb");
    const users = await db.collection("users").find({}).toArray();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  } finally {
    await client.close();
  }
}
```

---

### 18. How do you use middleware in API routes?

**Answer:** Create a middleware function and call it before handling the request.

**Example:**

```javascript
// middleware/auth.js
export function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Verify token
  req.user = { id: 123, name: "John" };
  next();
}

// pages/api/protected.js
import { authMiddleware } from "../../middleware/auth";

export default function handler(req, res) {
  authMiddleware(req, res, () => {
    res.status(200).json({
      message: "Protected data",
      user: req.user,
    });
  });
}
```

---

### 19. How do you handle file uploads in API routes?

**Answer:** Use a library like `formidable` or `multer` to parse multipart/form-data.

**Example:**

```javascript
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false, // Disable default body parser
  },
};

export default async function handler(req, res) {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: "Upload failed" });
    }

    res.status(200).json({
      message: "File uploaded",
      filename: files.file.originalFilename,
    });
  });
}
```

---

### 20. How do you make external API calls from API routes?

**Answer:** Use `fetch()` or libraries like `axios` to make HTTP requests.

**Example:**

```javascript
export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.github.com/users/vercel");
    const data = await response.json();

    res.status(200).json({
      name: data.name,
      followers: data.followers,
      repos: data.public_repos,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
```

---

## Advanced Level (5 questions)

### 21. How do you implement rate limiting in API routes?

**Answer:** Use packages like `express-rate-limit` or implement custom rate limiting with Redis.

**Example (Custom):**

```javascript
const requestCounts = new Map();

export default function handler(req, res) {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const now = Date.now();
  const minute = 60 * 1000;

  // Get or create request log
  const requests = requestCounts.get(ip) || [];
  const recentRequests = requests.filter((time) => now - time < minute);

  // Check limit (10 requests per minute)
  if (recentRequests.length >= 10) {
    return res.status(429).json({
      error: "Too many requests",
      retryAfter: 60,
    });
  }

  // Add current request
  recentRequests.push(now);
  requestCounts.set(ip, recentRequests);

  res.status(200).json({ message: "Request successful" });
}
```

---

### 22. How do you implement authentication with JWT in API routes?

**Answer:** Use `jsonwebtoken` package to create and verify tokens.

**Example:**

```javascript
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET;

// Login route
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Verify credentials (simplified)
    if (email === 'user@example.com' && password === 'password123') {
      const token = jwt.sign(
        { userId: 123, email },
        SECRET,
        { expiresIn: '7d' }
      );

      return res.status(200).json({ token });
    }

    return res.status(401).json({ error: 'Invalid credentials' });
  }
}

// Protected route
export default function protectedHandler(req, res) {
  const token = req.headers.authorization?.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    res.status(200).json({ user: decoded });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}
```

---

### 23. How do you handle pagination in API routes?

**Answer:** Use query parameters `page` and `limit` to control data chunks.

**Example:**

```javascript
export default async function handler(req, res) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  // Fetch from database with pagination
  const users = await db
    .collection("users")
    .find()
    .skip(skip)
    .limit(limit)
    .toArray();

  const total = await db.collection("users").countDocuments();

  res.status(200).json({
    data: users,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      hasNext: page * limit < total,
      hasPrev: page > 1,
    },
  });
}
```

---

### 24. How do you optimize API route performance?

**Answer:** Use caching, database indexing, connection pooling, and response compression.

**Example (Caching):**

```javascript
// Simple in-memory cache
const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export default async function handler(req, res) {
  const cacheKey = `users_${req.query.page}`;
  const cached = cache.get(cacheKey);

  // Return cached data if valid
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    res.setHeader("X-Cache", "HIT");
    return res.status(200).json(cached.data);
  }

  // Fetch fresh data
  const data = await fetchUsers(req.query.page);

  // Store in cache
  cache.set(cacheKey, {
    data,
    timestamp: Date.now(),
  });

  res.setHeader("X-Cache", "MISS");
  res.status(200).json(data);
}
```

---

### 25. How do you deploy API routes to production?

**Answer:** Deploy your Next.js app to Vercel, Netlify, or custom servers. API routes are automatically deployed.

**Steps:**

1. **Environment Variables**: Add secrets to `.env.local` (local) and hosting platform (production)
2. **Database**: Use production database (MongoDB Atlas, PostgreSQL on Railway, etc.)
3. **Deploy**: Push to Git and connect to Vercel/Netlify
4. **Test**: Test endpoints at `https://yourapp.vercel.app/api/...`

**Example (Vercel):**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**Security Checklist:**

- ✅ Use environment variables for secrets
- ✅ Enable HTTPS
- ✅ Implement rate limiting
- ✅ Validate all inputs
- ✅ Use authentication for protected routes
- ✅ Enable CORS only for trusted domains
- ✅ Log errors for monitoring

---

## Bonus: Common Patterns

### Pattern 1: RESTful CRUD API

```javascript
// pages/api/users/[id].js
export default async function handler(req, res) {
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const user = await getUser(id);
      return res.status(200).json(user);

    case "PUT":
      const updated = await updateUser(id, req.body);
      return res.status(200).json(updated);

    case "DELETE":
      await deleteUser(id);
      return res.status(204).end();

    default:
      return res.status(405).json({ error: "Method not allowed" });
  }
}
```

### Pattern 2: API Response Wrapper

```javascript
// utils/apiResponse.js
export function success(res, data, status = 200) {
  return res.status(status).json({
    success: true,
    data,
  });
}

export function error(res, message, status = 400) {
  return res.status(status).json({
    success: false,
    error: message,
  });
}

// Usage
import { success, error } from "../../utils/apiResponse";

export default function handler(req, res) {
  try {
    const data = { message: "Hello" };
    return success(res, data);
  } catch (err) {
    return error(res, "Something went wrong", 500);
  }
}
```

---

## 📚 Additional Resources

- **Next.js API Routes Docs**: https://nextjs.org/docs/api-routes/introduction
- **REST API Best Practices**: https://restfulapi.net/
- **HTTP Status Codes**: https://httpstatuses.com/
- **JWT Authentication**: https://jwt.io/introduction

---

**Created by aakku106**  
GitHub: https://github.com/aakku106
