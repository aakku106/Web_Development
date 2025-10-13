<!-- @format -->

# useEffect - Side Effects

## What is useEffect?

**useEffect** is a React hook that allows you to perform **side effects** in functional components. Think of it as a way to tell React: "Hey, after you update the component, I want to do something extra."

## What are Side Effects?

**Side effects** are operations that happen outside the normal flow of rendering a component. These include:

- **API calls** - Fetching data from a server
- **DOM manipulation** - Changing the page title or focus
- **Timers** - Setting intervals or timeouts
- **Subscriptions** - Listening to events or data streams
- **Cleanup** - Removing event listeners or canceling requests

Think of side effects as "extra work" that needs to happen alongside your component rendering.

## Basic Syntax

```javascript
import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    // Your side effect code here
    console.log("Component rendered or updated");
  });

  return <div>Hello World</div>;
}
```

## Types of useEffect

### 1. Effect on Every Render

```javascript
useEffect(() => {
  console.log("Runs after every render");
});
```

This runs after **every** render, including the initial render and all updates.

### 2. Effect Only on Mount (Empty Dependency Array)

```javascript
useEffect(() => {
  console.log("Runs only once when component mounts");
}, []); // Empty array means "no dependencies"
```

This runs **only once** when the component first loads.

### 3. Effect with Dependencies

```javascript
const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Count changed:", count);
}, [count]); // Runs only when 'count' changes
```

This runs **only when** the variables in the dependency array change.

## Cleanup Functions

Sometimes your effects need to be "cleaned up" to prevent memory leaks or unwanted behavior:

```javascript
useEffect(() => {
  // Set up a timer
  const timer = setInterval(() => {
    console.log("Timer tick");
  }, 1000);

  // Cleanup function
  return () => {
    clearInterval(timer);
    console.log("Timer cleaned up");
  };
}, []);
```

The **cleanup function** runs:

- Before the component unmounts
- Before the effect runs again (if dependencies change)

## Common Use Cases

### 1. API Data Fetching

```javascript
const [users, setUsers] = useState([]);

useEffect(() => {
  fetch("/api/users")
    .then((response) => response.json())
    .then((data) => setUsers(data));
}, []); // Fetch once when component mounts
```

### 2. Document Title Updates

```javascript
const [count, setCount] = useState(0);

useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]); // Update title when count changes
```

### 3. Event Listeners

```javascript
useEffect(() => {
  const handleResize = () => {
    console.log("Window resized");
  };

  window.addEventListener("resize", handleResize);

  // Cleanup
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

### 4. Timers and Intervals

```javascript
const [seconds, setSeconds] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setSeconds((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(interval);
}, []);
```

## Dependency Array Rules

The **dependency array** is crucial for controlling when your effect runs:

### ✅ Include ALL variables used inside the effect

```javascript
const [name, setName] = useState("");
const [age, setAge] = useState(0);

useEffect(() => {
  console.log(`${name} is ${age} years old`);
}, [name, age]); // Both name and age are dependencies
```

### ❌ Don't forget dependencies

```javascript
// BAD - Missing dependencies
useEffect(() => {
  console.log(`${name} is ${age} years old`);
}, []); // This will use stale values!
```

### ✅ Use empty array for one-time effects

```javascript
useEffect(() => {
  // This runs only once
  console.log("Component mounted");
}, []);
```

## Performance Tips

### 1. Avoid Unnecessary Re-runs

```javascript
// Instead of this (runs on every render)
useEffect(() => {
  expensiveOperation();
});

// Do this (runs only when needed)
useEffect(() => {
  expensiveOperation();
}, [dependency]);
```

### 2. Separate Concerns

```javascript
// Instead of one big effect
useEffect(() => {
  fetchUserData();
  updateTitle();
  setupEventListeners();
}, []);

// Use multiple effects
useEffect(() => {
  fetchUserData();
}, []);

useEffect(() => {
  updateTitle();
}, [user]);

useEffect(() => {
  setupEventListeners();
  return cleanup;
}, []);
```

## Common Mistakes to Avoid

### 1. Infinite Loops

```javascript
// BAD - This creates an infinite loop
const [data, setData] = useState([]);

useEffect(() => {
  fetchData().then(setData);
  // Missing dependency array causes infinite re-renders
});

// GOOD - Add dependency array
useEffect(() => {
  fetchData().then(setData);
}, []); // Runs only once
```

### 2. Missing Cleanup

```javascript
// BAD - No cleanup
useEffect(() => {
  const timer = setInterval(updateTime, 1000);
  // Timer keeps running even after component unmounts
}, []);

// GOOD - With cleanup
useEffect(() => {
  const timer = setInterval(updateTime, 1000);
  return () => clearInterval(timer);
}, []);
```

### 3. Wrong Dependencies

```javascript
const [count, setCount] = useState(0);

// BAD - Missing count dependency
useEffect(() => {
  document.title = `Count: ${count}`;
}, []); // Title won't update when count changes

// GOOD - Include count dependency
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

## useEffect vs useLayoutEffect

- **useEffect**: Runs **after** the DOM has been updated (asynchronous)
- **useLayoutEffect**: Runs **before** the browser paints (synchronous)

Use `useLayoutEffect` when you need to:

- Measure DOM elements
- Make synchronous DOM mutations
- Prevent visual flickering

```javascript
// For most cases, use useEffect
useEffect(() => {
  // Async side effects
}, []);

// For DOM measurements, use useLayoutEffect
useLayoutEffect(() => {
  const element = ref.current;
  const height = element.offsetHeight;
  // Use height immediately
}, []);
```

## Real-World Example: User Profile

```javascript
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [online, setOnline] = useState(false);

  // Fetch user data when userId changes
  useEffect(() => {
    setLoading(true);
    fetch(`/api/users/${userId}`)
      .then((response) => response.json())
      .then((userData) => {
        setUser(userData);
        setLoading(false);
      });
  }, [userId]);

  // Update document title
  useEffect(() => {
    if (user) {
      document.title = `${user.name}'s Profile`;
    }
  }, [user]);

  // Listen for online status
  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Status: {online ? "Online" : "Offline"}</p>
    </div>
  );
}
```

## Summary

**useEffect** is your tool for handling side effects in React:

- **No dependencies**: Runs after every render
- **Empty array []**: Runs only once (on mount)
- **With dependencies [var]**: Runs when dependencies change
- **Return cleanup function**: Prevents memory leaks
- **Use multiple effects**: Separate different concerns

Remember: useEffect helps you synchronize your component with external systems and handle operations that go beyond just rendering UI.

## References

- [React Official Documentation - useEffect](https://react.dev/reference/react/useEffect)
- [React Official Documentation - Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [React Official Documentation - You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
- [React Official Documentation - Lifecycle of Reactive Effects](https://react.dev/learn/lifecycle-of-reactive-effects)
- [React Official Documentation - Separating Events from Effects](https://react.dev/learn/separating-events-from-effects)
- [React Official Documentation - Removing Effect Dependencies](https://react.dev/learn/removing-effect-dependencies)
- [React Official Documentation - Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

---

**Created by Aakku**  
[GitHub Profile](https://github.com/aakku106)

Making Web Development simple, fun and accessible for everyone!
