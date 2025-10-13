<!-- @format -->

# useEffect - Side Effects | Practice Questions

## Basic Understanding

### 1. What is useEffect?

Write a simple explanation of what useEffect is and why we need it in React.

**Your Answer:**

```
[Write your answer here]
```

### 2. Dependency Array Patterns

Match each useEffect pattern with its behavior:

A. `useEffect(() => { ... })`
B. `useEffect(() => { ... }, [])`  
C. `useEffect(() => { ... }, [count])`

Behaviors:

1. Runs only when `count` changes
2. Runs after every render
3. Runs only once on mount

**Your Answer:**

```
A ->
B ->
C ->
```

### 3. Side Effects Identification

Which of these are considered "side effects"? Mark with ✓ or ✗:

- [ ] Updating component state
- [ ] Making an API call
- [ ] Setting document title
- [ ] Rendering JSX
- [ ] Adding event listeners
- [ ] Calculating derived values
- [ ] Setting up timers

## Practical Exercises

### 4. Basic useEffect Implementation

Create a React component that displays the current time and updates every second.

```javascript
import React, { useState, useEffect } from "react";

function Clock() {
  // Your code here

  return (
    <div>
      <h2>Current Time: {/* Display time here */}</h2>
    </div>
  );
}

export default Clock;
```

**Requirements:**

- Display current time in HH:MM:SS format
- Update every second
- Clean up timer when component unmounts

### 5. API Data Fetching

Build a component that fetches and displays user data from an API.

```javascript
import React, { useState, useEffect } from "react";

function UserProfile({ userId }) {
  // Your code here

  return <div>{/* Display user data or loading state */}</div>;
}

export default UserProfile;
```

**Requirements:**

- Show loading state while fetching
- Fetch data when `userId` changes
- Handle errors gracefully
- Display user name and email

### 6. Document Title Updater

Create a component that updates the page title based on notification count.

```javascript
import React, { useState, useEffect } from "react";

function NotificationCenter() {
  const [notifications, setNotifications] = useState([]);

  // Your useEffect here

  const addNotification = () => {
    const newNotif = {
      id: Date.now(),
      message: `Notification ${notifications.length + 1}`,
    };
    // Add notification to state
  };

  return (
    <div>
      <button onClick={addNotification}>Add Notification</button>
      <div>{/* Display notifications */}</div>
    </div>
  );
}

export default NotificationCenter;
```

**Requirements:**

- Update page title to show notification count
- Title format: "MyApp (3)" where 3 is the count
- Reset to "MyApp" when no notifications

### 7. Window Resize Listener

Build a component that tracks and displays window dimensions.

```javascript
import React, { useState, useEffect } from "react";

function WindowTracker() {
  // Your code here

  return (
    <div>
      <h3>Window Size</h3>
      <p>Width: {/* width */}px</p>
      <p>Height: {/* height */}px</p>
      <p>Resize the window to see changes!</p>
    </div>
  );
}

export default WindowTracker;
```

**Requirements:**

- Show current window width and height
- Update when window is resized
- Clean up event listener properly

### 8. Local Storage Sync

Create a component that saves user preferences to localStorage.

```javascript
import React, { useState, useEffect } from "react";

function UserPreferences() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  // Your useEffect hooks here

  return (
    <div>
      <div>
        <label>
          Theme:
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Language:
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default UserPreferences;
```

**Requirements:**

- Load preferences from localStorage on mount
- Save preferences to localStorage when they change
- Use keys "userTheme" and "userLanguage"

## Debugging Challenges

### 9. Fix the Infinite Loop

This code creates an infinite loop. Fix it:

```javascript
function BrokenComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((result) => setData(result));
  }); // Problem is here!

  return <div>{data.length} items loaded</div>;
}
```

**What's wrong and how to fix it:**

```
Problem:
Solution:
```

### 10. Fix the Memory Leak

This component has a memory leak. Identify and fix it:

```javascript
function LeakyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // Missing something here!
  }, []);

  return <div>Count: {count}</div>;
}
```

**What's missing:**

```
Problem:
Solution:
```

### 11. Fix the Stale Closure

This component shows stale values. Fix it:

```javascript
function StaleComponent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    const logUser = () => {
      console.log(`User: ${name}, Age: ${age}`);
    };

    const timer = setInterval(logUser, 2000);

    return () => clearInterval(timer);
  }, []); // Problem with dependencies!

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(+e.target.value)}
        placeholder="Age"
      />
    </div>
  );
}
```

**What's wrong:**

```
Problem:
Solution:
```

## Advanced Scenarios

### 12. Debounced Search

Implement a search component with debounced API calls:

```javascript
import React, { useState, useEffect } from "react";

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Your debounced search useEffect here

  const searchAPI = async (term) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          `Result 1 for "${term}"`,
          `Result 2 for "${term}"`,
          `Result 3 for "${term}"`,
        ]);
      }, 500);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />

      {loading && <p>Searching...</p>}

      <ul>{/* Display results */}</ul>
    </div>
  );
}

export default SearchComponent;
```

**Requirements:**

- Wait 300ms after user stops typing before searching
- Show loading state during search
- Cancel previous search if user types again
- Clear results when search term is empty

### 13. Multiple Effects Organization

Organize this component using multiple useEffect hooks:

```javascript
function UserDashboard({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [onlineStatus, setOnlineStatus] = useState(true);

  // Split this into multiple useEffect hooks:
  useEffect(() => {
    // Fetch user data
    // Fetch user posts
    // Set up online status listener
    // Update document title
    // Track analytics
    // All cleanup here
  }, [userId]);

  return <div>{/* Component JSX */}</div>;
}
```

**Task:** Split the single useEffect into multiple focused effects for:

1. User data fetching
2. Posts fetching
3. Online status tracking
4. Document title updates
5. Analytics tracking

### 14. Race Condition Prevention

Fix potential race conditions in this component:

```javascript
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`/api/users/${userId}`)
      .then((response) => response.json())
      .then((userData) => {
        setUser(userData);
        setLoading(false);
      });
  }, [userId]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {user && <div>{user.name}</div>}
    </div>
  );
}
```

**What could go wrong and how to fix it:**

```
Problem:
Solution:
```

## Real-World Applications

### 15. Shopping Cart with Persistence

Build a shopping cart that persists to localStorage:

```javascript
function ShoppingCart() {
  const [items, setItems] = useState([]);

  // Your useEffect hooks here

  const addItem = (product) => {
    // Add item to cart
  };

  const removeItem = (productId) => {
    // Remove item from cart
  };

  const updateQuantity = (productId, quantity) => {
    // Update item quantity
  };

  return <div>{/* Cart UI */}</div>;
}
```

**Requirements:**

- Load cart from localStorage on mount
- Save cart to localStorage when items change
- Calculate and display total price
- Handle empty cart state

### 16. Chat Application with Real-time Updates

Create a chat component with real-time message updates:

```javascript
function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Your useEffect hooks here

  const sendMessage = () => {
    // Send message logic
  };

  return (
    <div>
      <div className="messages">{/* Display messages */}</div>

      <div className="message-input">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
```

**Requirements:**

- Connect to WebSocket on mount
- Disconnect WebSocket on unmount
- Reconnect when roomId changes
- Auto-scroll to new messages
- Handle connection errors

## Answer Key

### Basic Understanding Answers

1. **What is useEffect?**
   useEffect is a React hook that allows you to perform side effects in functional components. Side effects are operations that happen outside the normal component rendering process, such as API calls, DOM manipulation, timers, subscriptions, etc. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.

2. **Dependency Array Patterns:**

   - A -> 2 (Runs after every render)
   - B -> 3 (Runs only once on mount)
   - C -> 1 (Runs only when count changes)

3. **Side Effects Identification:**
   - ✗ Updating component state (this is normal React flow)
   - ✓ Making an API call
   - ✓ Setting document title
   - ✗ Rendering JSX (this is normal React rendering)
   - ✓ Adding event listeners
   - ✗ Calculating derived values (should be in render or useMemo)
   - ✓ Setting up timers

### Key Takeaways

- **useEffect runs after render** - never during render
- **Always include dependencies** - avoid stale closures
- **Clean up properly** - prevent memory leaks
- **Separate concerns** - use multiple effects for different purposes
- **Handle race conditions** - especially with async operations
- **Debounce expensive operations** - like API calls from user input

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
