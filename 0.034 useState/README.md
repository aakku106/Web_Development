<!-- @format -->

# useState - State Management Basics in React

## What is useState?

Think of **useState** as a memory box for your React components! Just like you remember things in your mind, components need to remember information like "Is the button clicked?", "What did the user type?", or "How many likes does this post have?".

**Real-life analogy:** useState is like a sticky note on your fridge. You can read what's written (get state), and you can update it with new information (set state). The component "remembers" this information! 📝

## Why Do We Need State?

### Without State (Static)

```javascript
// This never changes - boring! 😴
function StaticComponent() {
  return <h1>Count: 0</h1>;
}
```

### With State (Dynamic)

```javascript
// This can change - exciting! 🎉
function DynamicComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

## Basic useState Syntax

### 1. Import useState

```javascript
import { useState } from "react";
```

### 2. Declare State Variable

```javascript
const [stateName, setStateName] = useState(initialValue);
```

**Breaking it down:**

- `stateName` - The current value (like reading the sticky note)
- `setStateName` - Function to update the value (like writing on the sticky note)
- `initialValue` - Starting value (what's initially written)

### 3. Simple Example

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Start with 0

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
}
```

## State vs Props - What's the Difference?

### Props (Passed Down)

Think of props like **gifts from parents** - you receive them but can't change them.

```javascript
// Parent gives name to child
function Parent() {
  return <Child name="John" />;
}

function Child({ name }) {
  // Can't change name here - it's a prop!
  return <h1>Hello {name}</h1>;
}
```

### State (Own Memory)

Think of state like **your own notebook** - you can read it and write in it.

```javascript
function MyComponent() {
  const [name, setName] = useState("John");

  // Can change name - it's my state!
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={() => setName("Jane")}>Change Name</button>
    </div>
  );
}
```

## Common useState Patterns

### 1. Numbers (Counter, Score, Age)

```javascript
function NumberExample() {
  const [age, setAge] = useState(25);
  const [score, setScore] = useState(0);

  return (
    <div>
      <p>Age: {age}</p>
      <button onClick={() => setAge(age + 1)}>Birthday!</button>

      <p>Score: {score}</p>
      <button onClick={() => setScore(score + 10)}>+10 Points</button>
    </div>
  );
}
```

### 2. Strings (Name, Message, Input)

```javascript
function StringExample() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("Hello!");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Welcome, {name}!</p>

      <button onClick={() => setMessage("Goodbye!")}>Change Message</button>
      <p>{message}</p>
    </div>
  );
}
```

### 3. Booleans (Show/Hide, On/Off, True/False)

```javascript
function BooleanExample() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
      </button>
      {isVisible && <p>I'm visible!</p>}

      <button onClick={() => setIsLiked(!isLiked)}>
        {isLiked ? "💙 Liked" : "🤍 Like"}
      </button>
    </div>
  );
}
```

### 4. Arrays (Lists, Items, Todos)

```javascript
function ArrayExample() {
  const [items, setItems] = useState(["Apple", "Banana"]);

  const addItem = () => {
    setItems([...items, "Orange"]); // Add new item
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index)); // Remove item
  };

  return (
    <div>
      <button onClick={addItem}>Add Orange</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### 5. Objects (User Info, Settings, Form Data)

```javascript
function ObjectExample() {
  const [user, setUser] = useState({
    name: "John",
    age: 25,
    email: "john@example.com",
  });

  const updateName = () => {
    setUser({
      ...user, // Keep everything else
      name: "Jane", // Change only name
    });
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <button onClick={updateName}>Change Name</button>
    </div>
  );
}
```

## Real-World Examples

### Example 1: Like Button (Instagram/Facebook style)

```javascript
function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <button onClick={handleLike}>
      {isLiked ? "💙" : "🤍"} {likes} Likes
    </button>
  );
}
```

### Example 2: Todo List (Task Management)

```javascript
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
        },
      ]);
      setInputValue(""); // Clear input
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a todo..."
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}>
              {todo.text}
            </span>
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "Undo" : "Done"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Example 3: Form with Validation

```javascript
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Valid email is required";
    }

    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
      />
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <button type="submit">Send Message</button>
    </form>
  );
}
```

## Important Rules for useState

### ✅ DO

1. **Always use setter function to update state**

   ```javascript
   const [count, setCount] = useState(0);
   setCount(count + 1); // ✅ Correct
   ```

2. **Use functional updates for complex state**

   ```javascript
   setCount((prevCount) => prevCount + 1); // ✅ Better for async
   ```

3. **Spread objects and arrays when updating**

   ```javascript
   setUser({ ...user, name: "Jane" }); // ✅ Correct
   setItems([...items, newItem]); // ✅ Correct
   ```

### ❌ DON'T

1. **Never mutate state directly**

   ```javascript
   const [count, setCount] = useState(0);
   count = count + 1; // ❌ Wrong - doesn't work
   ```

2. **Don't modify arrays/objects directly**

   ```javascript
   const [items, setItems] = useState([]);
   items.push(newItem); // ❌ Wrong - React won't re-render
   ```

3. **Don't call hooks inside conditions**

   ```javascript
   // ❌ Wrong
   if (condition) {
     const [state, setState] = useState(0);
   }

   // ✅ Correct
   const [state, setState] = useState(0);
   if (condition) {
     setState(newValue);
   }
   ```

## Common Mistakes and Solutions

### Mistake 1: State Not Updating Immediately

```javascript
// ❌ This won't work as expected
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count); // Still shows old value!
  };

  return <button onClick={handleClick}>Count: {count}</button>;
}

// ✅ Solution: Use useEffect or console.log outside
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    console.log(newCount); // Shows correct value
  };

  return <button onClick={handleClick}>Count: {count}</button>;
}
```

### Mistake 2: Updating Objects Incorrectly

```javascript
// ❌ Wrong - mutates state
const updateUser = () => {
  user.name = "Jane";
  setUser(user);
};

// ✅ Correct - creates new object
const updateUser = () => {
  setUser({ ...user, name: "Jane" });
};
```

### Mistake 3: Multiple State Updates

```javascript
// ❌ Not ideal - multiple renders
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");

// ✅ Better - single object
const [userInfo, setUserInfo] = useState({
  firstName: "",
  lastName: "",
  email: "",
});
```

## Performance Tips

### 1. Use Functional Updates for Performance

```javascript
// Instead of this:
setCount(count + 1);

// Use this for better performance:
setCount((prevCount) => prevCount + 1);
```

### 2. Initialize State with Function (for Expensive Calculations)

```javascript
// ❌ Runs on every render
const [state, setState] = useState(expensiveCalculation());

// ✅ Runs only once
const [state, setState] = useState(() => expensiveCalculation());
```

### 3. Combine Related State

```javascript
// ❌ Too many separate states
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [data, setData] = useState(null);

// ✅ Combined state
const [apiState, setApiState] = useState({
  loading: false,
  error: null,
  data: null,
});
```

## useState vs Other State Management

### When to Use useState

- ✅ Component-level state
- ✅ Simple state (strings, numbers, booleans)
- ✅ Small to medium apps
- ✅ Local UI state (form inputs, toggles)

### When to Consider Other Options

- 🤔 **useReducer**: Complex state logic with multiple actions
- 🤔 **Context API**: State shared across many components
- 🤔 **Redux/Zustand**: Large apps with complex state management

## Summary

useState is like having a **memory** for your React components:

1. **Import it**: `import { useState } from 'react';`
2. **Declare it**: `const [value, setValue] = useState(initial);`
3. **Read it**: Use `value` in your JSX
4. **Update it**: Call `setValue(newValue)`
5. **Remember**: Always use the setter function, never mutate directly!

## Quick Cheat Sheet

```javascript
// Basic usage
const [state, setState] = useState(initialValue);

// Common patterns
const [count, setCount] = useState(0); // Number
const [name, setName] = useState(""); // String
const [isVisible, setIsVisible] = useState(true); // Boolean
const [items, setItems] = useState([]); // Array
const [user, setUser] = useState({ name: "", age: 0 }); // Object

// Updating
setState(newValue); // Direct update
setState((prev) => prev + 1); // Functional update
setState({ ...state, key: newValue }); // Object update
setState([...state, newItem]); // Array update
```

---

**Created by aakku106**  
GitHub: <https://github.com/aakku106>

Making Web Development simple,fun and accessible for everyone!
