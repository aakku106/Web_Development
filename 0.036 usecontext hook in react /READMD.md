# Lesson: Understanding the useContext Hook in React

## 1. The Real-World Problem: Prop Drilling

Imagine you’re managing a big hotel 🏨.
At the top, there’s the **manager (App.js)** who has important info — like the **Wi-Fi password**.
Now, a **guest in Room 5 (a deeply nested component)** needs it.

Normally, you’d pass the Wi-Fi password through **each level of staff** — manager → receptionist → cleaner → guest.
This is called **prop drilling** in React — passing props through many components that don’t even use them.

```jsx
// app.jsx
function App() {
  const wifiPassword = "ReactRocks123";
  return <Receptionist wifiPassword={wifiPassword} />;
}

// receptionist.jsx
function Receptionist({ wifiPassword }) {
  return <Room wifiPassword={wifiPassword} />;
}

// room.jsx
function Room({ wifiPassword }) {
  return <Guest wifiPassword={wifiPassword} />;
}

// guest.jsx
function Guest({ wifiPassword }) {
  return <p>Wi-Fi Password: {wifiPassword}</p>;
}
```

👎 **Problem:**
Too many unnecessary prop transfers. If your app grows, this becomes messy and hard to maintain.

---

## 2. The Solution: Context API + useContext Hook

React’s **Context API** acts like a **shared data center**.
Instead of passing data through every component, you place it in a **Context**, and **any component can directly access it** — no middlemen.

---

## 3. Step-by-Step: Creating and Using Context

### Step 1: Create the Context

```jsx
// ./HotelContext.js
import React, { createContext } from "react";

const HotelContext = createContext();
export default HotelContext;
```

---

### Step 2: Provide the Context

Wrap your app (or part of it) with the **Provider**, and pass the value you want to share.

```jsx
import React from "react";
import HotelContext from "./HotelContext";
import Receptionist from "./Receptionist";

function App() {
  const wifiPassword = "ReactRocks123";
  
  return (
    <HotelContext.Provider value={{ wifiPassword }}>
      <Receptionist />
    </HotelContext.Provider>
  );
}

export default App;
```

Now every component inside `HotelContext.Provider` can access the shared data.

---

### Step 3: Use Context Anywhere with `useContext`

Instead of receiving props, components can directly **consume** the value:

```jsx
// guest.jsx
import React, { useContext } from "react";
import HotelContext from "./HotelContext";

function Guest() {
  const { wifiPassword } = useContext(HotelContext);
  return <p>Wi-Fi Password: {wifiPassword}</p>;
}

export default Guest;
```

✅ **Result:**
No more prop drilling — just one context and direct access anywhere inside the provider!

---

## 4. Bonus: Updating Context Values

You can also share **functions** in context (e.g., updating user settings):

```jsx
import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}
```

Now, `Toolbar` can both **read** and **update** the context — and any other component using this context will automatically update too!

---

## 5. Key Takeaways

| Concept              | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| **createContext()**  | Creates a new context object                                 |
| **Provider**         | Supplies the context data to its children                    |
| **useContext()**     | Lets components read the context value directly              |
| **No Prop Drilling** | Data can be accessed from any level easily                   |
| **Reusable Logic**   | Context can hold global state like themes, auth, or language |

---

### 💡 Common Use Cases

* Managing **themes** (light/dark)
* Sharing **logged-in user data**
* Handling **language or locale**
* Managing **global settings or app state**

---

## 6. Quick Visualization

```
App (Provider)
│
├── Navbar
│   └── Profile → usesContext(user)
│
└── Footer → usesContext(theme)
```

✅ All children access shared data without props!

---

### Summary

The **useContext hook** simplifies data sharing across multiple components by removing prop drilling.
It’s ideal for **global states** like theme, language, or authentication — and works seamlessly with other hooks like `useState` and `useReducer`.
