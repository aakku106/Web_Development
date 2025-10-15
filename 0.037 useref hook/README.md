# 🪄 Lesson: Understanding the `useRef` Hook in React

## 🎯 Real-world Problem

Imagine you have an input box, and you want to **focus** on it automatically when the page loads — or maybe you want to **read its value** without re-rendering the component.
Using `useState` here would cause **unnecessary re-renders** — every small change would refresh the UI.

So how do we handle this?

That’s where the **`useRef` hook** comes in! 💡

---

## 🔍 What is `useRef`?

`useRef` stands for **“reference”**.
It allows you to **store a mutable value** that **does not trigger re-render** when it changes.

Think of it as a **secret box** 🗃️ that React watches but doesn’t re-render when you update what’s inside.

---

## 🧠 Syntax

```jsx
import { useRef } from "react";

const refName = useRef(initialValue);
```

* `initialValue`: The starting value of your reference.
* `refName.current`: The actual value stored inside the ref.

---

## 💡 Example 1: Accessing DOM Elements

Let’s say you want to **focus on an input** when the page loads.

**File: `App.js`**

```jsx
import { useRef, useEffect } from "react";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Automatically focuses when component mounts
  }, []);

  return (
    <div>
      <h2>Auto Focus Input</h2>
      <input ref={inputRef} placeholder="Type something..." />
    </div>
  );
}

export default App;
```

🧩 **Explanation:**

* `useRef(null)` creates a reference to be attached to the input.
* The `<input ref={inputRef} />` connects the input element to that ref.
* `useEffect()` ensures the focus happens after rendering.

---

## 💡 Example 2: Storing Mutable Values Without Re-render

Here’s how you can use `useRef` to store data that doesn’t affect UI:

```jsx
import { useRef, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current += 1;

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <p>Render Count (tracked using useRef): {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
```

🧠 **Key idea:**
`renderCount` stores data **across renders** but **doesn’t trigger** re-renders when updated.

---

## 💬 When to Use `useRef`

✅ To **access or modify DOM elements** (like focus, play, scroll).
✅ To **store values** that you don’t want to cause re-renders (like timers, counters, or previous values).
❌ Don’t use it to store data that should update the UI — use `useState` for that.

---

## 🚀 Summary

| Feature                  | `useRef`                         | `useState` |
| ------------------------ | -------------------------------- | ---------- |
| Triggers re-render?      | ❌ No                             | ✅ Yes      |
| Persists across renders? | ✅ Yes                            | ✅ Yes      |
| Best for                 | DOM refs, timers, caching values | UI updates |

---

Next up, try using `useRef` to:

1. Focus an input field on button click.
2. Count renders without showing it in UI.
3. Store the previous state of a variable.

---
