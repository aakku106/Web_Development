<!-- @format -->

# 🛣️ API Routing in Next.js - Complete Guide

Learn how to create powerful backend endpoints directly in your Next.js application! 🚀

## 📚 Table of Contents

- [What is API Routing?](#what-is-api-routing)
- [How API Routes Work](#how-api-routes-work)
- [Creating Your First API Route](#creating-your-first-api-route)
- [HTTP Methods](#http-methods)
- [Request and Response](#request-and-response)
- [Dynamic API Routes](#dynamic-api-routes)
- [Real-World Examples](#real-world-examples)
- [Best Practices](#best-practices)
- [Career Opportunities](#career-opportunities)

## What is API Routing?

**API Routing** in Next.js allows you to create backend endpoints (APIs) directly inside your Next.js application without needing a separate server!

### 🎯 Simple Explanation

Think of API routes as **mini servers** inside your Next.js app that can:

- Store and retrieve data
- Process user requests
- Connect to databases
- Handle authentication
- Send emails
- And much more!

### Visual Flow

```text
Traditional Setup:
Frontend (React) → Separate Server (Express/Node) → Database
   ↓                      ↓                           ↓
  Port 3000            Port 5000                   MongoDB

Next.js API Routes:
Frontend + Backend (All in One!) → Database
         ↓                            ↓
      Port 3000                    MongoDB
```

## How API Routes Work

### File Structure

In Next.js, API routes live in the `pages/api` or `app/api` folder:

```text
my-app/
├── pages/
│   ├── api/              ← Backend endpoints here!
│   │   ├── hello.js      → /api/hello
│   │   ├── users.js      → /api/users
│   │   └── products/
│   │       └── [id].js   → /api/products/123
│   └── index.js          ← Frontend pages
```

### The Magic

```javascript
// pages/api/hello.js

export default function handler(req, res) {
  // This runs on the SERVER, not in browser!
  res.status(200).json({ message: "Hello from API!" });
}
```

When you visit `http://localhost:3000/api/hello`, this code runs on the server and returns JSON!

## Creating Your First API Route

### Step 1: Create the File

Create `pages/api/hello.js`:

```javascript
// pages/api/hello.js

export default function handler(req, res) {
  res.status(200).json({
    message: "Hello, World!",
    timestamp: new Date().toISOString(),
  });
}
```

### Step 2: Test the Endpoint

Visit in browser: `http://localhost:3000/api/hello`

**Response:**

```json
{
  "message": "Hello, World!",
  "timestamp": "2025-10-07T10:30:00.000Z"
}
```

### Step 3: Call from Frontend

```javascript
// pages/index.js

export default function Home() {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch("/api/hello");
    const result = await response.json();
    setData(result);
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {data && <p>{data.message}</p>}
    </div>
  );
}
```

## HTTP Methods

API routes can handle different HTTP methods:

### GET - Retrieve Data

```javascript
// pages/api/users.js

export default function handler(req, res) {
  if (req.method === "GET") {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];

    res.status(200).json(users);
  }
}
```

**Usage:**

```javascript
// Frontend
const response = await fetch("/api/users");
const users = await response.json();
```

### POST - Create Data

```javascript
// pages/api/users.js

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    // Save to database (simplified)
    const newUser = {
      id: Date.now(),
      name,
      email,
    };

    res.status(201).json(newUser);
  }
}
```

**Usage:**

```javascript
// Frontend
const response = await fetch("/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Charlie", email: "charlie@example.com" }),
});
```

### PUT/PATCH - Update Data

```javascript
// pages/api/users/[id].js

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === "PUT") {
    const { name, email } = req.body;

    // Update in database
    const updatedUser = { id, name, email };

    res.status(200).json(updatedUser);
  }
}
```

### DELETE - Remove Data

```javascript
// pages/api/users/[id].js

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === "DELETE") {
    // Delete from database
    res.status(200).json({ message: "User deleted", id });
  }
}
```

## Request and Response

### Request Object (`req`)

```javascript
export default function handler(req, res) {
  // HTTP Method
  console.log(req.method); // GET, POST, PUT, DELETE

  // URL Query Parameters
  console.log(req.query); // { id: "123", search: "test" }

  // Request Body (POST/PUT)
  console.log(req.body); // { name: "John", email: "john@example.com" }

  // Headers
  console.log(req.headers); // { authorization: "Bearer token..." }

  // Cookies
  console.log(req.cookies); // { sessionId: "abc123" }
}
```

### Response Object (`res`)

```javascript
export default function handler(req, res) {
  // Set status code
  res.status(200); // 200 = OK
  res.status(201); // 201 = Created
  res.status(400); // 400 = Bad Request
  res.status(404); // 404 = Not Found
  res.status(500); // 500 = Server Error

  // Send JSON
  res.json({ message: "Success" });

  // Send text
  res.send("Plain text response");

  // Redirect
  res.redirect("/dashboard");

  // Set headers
  res.setHeader("Content-Type", "application/json");
}
```

## Dynamic API Routes

### Single Parameter

```javascript
// pages/api/products/[id].js

export default function handler(req, res) {
  const { id } = req.query;

  // GET /api/products/123 → id = "123"

  const product = {
    id,
    name: "Product " + id,
    price: 99.99,
  };

  res.status(200).json(product);
}
```

### Multiple Parameters

```javascript
// pages/api/posts/[category]/[id].js

export default function handler(req, res) {
  const { category, id } = req.query;

  // GET /api/posts/tech/5 → category = "tech", id = "5"

  res.status(200).json({ category, id });
}
```

### Catch-All Routes

```javascript
// pages/api/files/[...slug].js

export default function handler(req, res) {
  const { slug } = req.query;

  // GET /api/files/folder/subfolder/file.txt
  // slug = ["folder", "subfolder", "file.txt"]

  res.status(200).json({ path: slug });
}
```

## Real-World Examples

### 1. User Authentication

```javascript
// pages/api/auth/login.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  // Check credentials (simplified)
  if (email === "user@example.com" && password === "password123") {
    return res.status(200).json({
      success: true,
      user: { email, name: "John Doe" },
      token: "jwt_token_here",
    });
  }

  res.status(401).json({ error: "Invalid credentials" });
}
```

### 2. Database Operations

```javascript
// pages/api/products.js

import { connectToDatabase } from "@/lib/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "GET") {
    // Fetch all products
    const products = await db.collection("products").find({}).toArray();
    return res.status(200).json(products);
  }

  if (req.method === "POST") {
    // Create new product
    const { name, price, description } = req.body;

    const result = await db.collection("products").insertOne({
      name,
      price,
      description,
      createdAt: new Date(),
    });

    return res.status(201).json({ id: result.insertedId });
  }

  res.status(405).json({ error: "Method not allowed" });
}
```

### 3. External API Integration

```javascript
// pages/api/weather.js

export default async function handler(req, res) {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: "City parameter required" });
  }

  try {
    // Call external weather API
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
    );

    const data = await response.json();

    res.status(200).json({
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
}
```

### 4. File Upload

```javascript
// pages/api/upload.js

import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false, // Disable default body parser
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = formidable({ uploadDir: "./uploads", keepExtensions: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: "Upload failed" });
    }

    res.status(200).json({
      message: "File uploaded successfully",
      filename: files.file.originalFilename,
    });
  });
}
```

### 5. Email Sending

```javascript
// pages/api/send-email.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { to, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text: message,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" });
  }
}
```

## Best Practices

### ✅ DO:

1. **Validate Input**

   ```javascript
   if (!email || !email.includes("@")) {
     return res.status(400).json({ error: "Invalid email" });
   }
   ```

2. **Handle Errors Gracefully**

   ```javascript
   try {
     // Your code
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: "Internal server error" });
   }
   ```

3. **Use Environment Variables**

   ```javascript
   // .env.local
   DATABASE_URL = "mongodb://...";
   API_KEY = "secret_key";

   // In your API route
   const apiKey = process.env.API_KEY;
   ```

4. **Return Proper Status Codes**

   ```javascript
   res.status(200).json({ data }); // Success
   res.status(201).json({ created }); // Created
   res.status(400).json({ error }); // Bad request
   res.status(404).json({ error }); // Not found
   res.status(500).json({ error }); // Server error
   ```

5. **Implement Rate Limiting**

   ```javascript
   import rateLimit from "express-rate-limit";

   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100, // Max 100 requests per window
   });
   ```

### ❌ DON'T:

1. **Don't Expose Sensitive Data**

   ```javascript
   // ❌ Bad
   res.json({ user: { password: "secret123" } });

   // ✅ Good
   res.json({ user: { id, email, name } });
   ```

2. **Don't Skip Validation**

   ```javascript
   // ❌ Bad
   const user = await db.users.create(req.body);

   // ✅ Good
   if (!req.body.email || !req.body.password) {
     return res.status(400).json({ error: "Missing fields" });
   }
   ```

3. **Don't Forget Error Handling**

   ```javascript
   // ❌ Bad
   const data = await fetch(url).then((r) => r.json());

   // ✅ Good
   try {
     const response = await fetch(url);
     if (!response.ok) throw new Error("Fetch failed");
     const data = await response.json();
   } catch (error) {
     return res.status(500).json({ error: error.message });
   }
   ```

4. **Don't Block the Event Loop**

   ```javascript
   // ❌ Bad - Synchronous operation
   const file = fs.readFileSync("large-file.txt");

   // ✅ Good - Asynchronous
   const file = await fs.promises.readFile("large-file.txt");
   ```

## Career Opportunities

### 💼 Job Roles Using API Development

1. **Full-Stack Developer**

   - Salary: $80K-$150K (USA)
   - Salary: $20K-$50K (India)
   - Salary: $30K-$60K (Nepal)
   - Remote: $70K-$130K

2. **Backend Developer**

   - Salary: $75K-$140K (USA)
   - Salary: $18K-$45K (India)
   - Salary: $25K-$55K (Nepal)
   - Remote: $65K-$120K

3. **Next.js Developer**
   - Salary: $85K-$160K (USA)
   - Salary: $22K-$55K (India)
   - Salary: $35K-$65K (Nepal)
   - Remote: $75K-$140K

### 🎯 Skills Employers Want

- **Next.js API Routes** ⭐⭐⭐⭐⭐
- **REST API Design**
- **Database Integration** (MongoDB, PostgreSQL)
- **Authentication** (JWT, OAuth)
- **Error Handling**
- **API Security**

## 📖 Learn More

- [Next.js API Routes Docs](https://nextjs.org/docs/api-routes/introduction) - Official documentation
- [Next.js Learn](https://nextjs.org/learn) - Interactive tutorial
- [MDN HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) - HTTP basics
- [REST API Best Practices](https://restfulapi.net/) - API design guide

## 🎓 Quick Recap

### What are API Routes?

Backend endpoints inside your Next.js app that run on the server

### How to Create?

1. Create file in `pages/api/` folder
2. Export default function with `req` and `res`
3. Handle different HTTP methods

### Key Concepts

- **req** = incoming request (method, body, query)
- **res** = outgoing response (status, json, send)
- **Dynamic routes** = `[id].js` for parameters

### When to Use?

- ✅ Authentication
- ✅ Database operations
- ✅ External API calls
- ✅ File uploads
- ✅ Email sending
- ✅ Payment processing

---

## 🚀 Next Steps

1. **Practice**: Create CRUD API routes
2. **Database**: Connect to MongoDB or PostgreSQL
3. **Security**: Implement authentication
4. **Deploy**: Deploy to Vercel with API routes
5. **Test**: Use Postman or Thunder Client

Ready to build powerful full-stack applications? Start creating APIs! 💻

---

Created by [aakku106](https://github.com/aakku106) - Making web development fun and accessible for everyone! 🚀
