# Page Routing in React using React Router

In modern web apps, you often need multiple pages like Home, About, and Contact. In React, we use **React Router** for client-side routing.

---

## 1️⃣ Installing React Router

```bash
npm install react-router-dom
```

---

## 2️⃣ Setting Up Basic Routes

```jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/about" element=<About /> />
        <Route path="/contact" element=<Contact /> />
      </Routes>
    </Router>
  );
}

export default App;
```

---

## 3️⃣ Key Points

* **BrowserRouter**: Wrap your app to enable routing.
* **Routes & Route**: Define your pages and paths.
* **Link**: Use `Link` instead of `<a>` to prevent full page reload.
* **element prop**: Pass the component you want to render.

---

## 4️⃣ Nested Routes Example

```jsx
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Routes>
        <Route path="profile" element=<p>Profile Page</p> />
        <Route path="settings" element=<p>Settings Page</p> />
      </Routes>
    </div>
  );
}
```

* Access via `/dashboard/profile` or `/dashboard/settings`

---

## 5️⃣ Redirecting

```jsx
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/old" element=<Navigate to="/new" /> />
    </Routes>
  );
}
```

* `Navigate` allows redirecting from old paths to new paths.

---

With React Router, you can **create multi-page React apps** without full page reloads, making the app feel fast and dynamic!
