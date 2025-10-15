# Connecting React with Express and Fetching Data

Building a **full-stack app** often requires your React frontend to communicate with an Express backend. Here’s a beginner-friendly guide.

---

## 1️⃣ Setting Up Express Backend

1. Initialize a Node project:

```bash
mkdir my-backend
cd my-backend
npm init -y
```

2. Install Express:

```bash
npm install express cors
```

3. Create `server.js`:

```javascript
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors()); // Allow cross-origin requests
app.use(express.json());

// Sample endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

4. Run the server:

```bash
node server.js
```

Your Express server is now running at `http://localhost:5000`.

---

## 2️⃣ React Frontend Fetching Data

1. Create a React app (if not already):

```bash
npx create-react-app my-frontend
cd my-frontend
npm start
```

2. Fetch data using `useEffect`:

```jsx
import { useState, useEffect } from 'react';

function FetchMessage() {
  const [message, setMessage] = useState('');

  useEffect(() =&gt; {
    fetch('http://localhost:5000/api/message')
      .then(res =&gt; res.json())
      .then(data =&gt; setMessage(data.message))
      .catch(err =&gt; console.error(err));
  }, []);

  return <h2>{message}</h2>;
}

export default FetchMessage;
```

---

## 3️⃣ Tips and Best Practices

* **CORS**: Use `cors()` in Express to allow requests from React.
* **Environment Variables**: Store backend URL in `.env` file for easier deployment.
* **Async/Await**: You can replace `.then()` with `async/await` for cleaner code.
* **Error Handling**: Always handle errors gracefully.

---

## 4️⃣ Optional: POST Request

```javascript
// Express
app.post('/api/data', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

// React
const sendData = async () => {
  const res = await fetch('http://localhost:5000/api/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Pramish' })
  });
  const data = await res.json();
  console.log(data.message);
};
```
