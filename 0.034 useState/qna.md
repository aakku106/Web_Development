<!-- @format -->

# useState - Questions and Answers

**Created by aakku106** | [GitHub Profile](https://github.com/aakku106)

This document contains comprehensive questions and answers about React's useState hook to test and reinforce your understanding of state management concepts.

---

## 📚 **Beginner Level Questions**

### **Q1: What is useState in React?**

**Answer:** useState is a React Hook that allows you to add state (memory) to functional components. It lets components remember values between renders and update the UI when those values change.

### **Q2: What does useState return?**

**Answer:** useState returns an array with exactly two elements:

1. The current state value
2. A function to update that state

Example: `const [count, setCount] = useState(0);`

### **Q3: What is the basic syntax of useState?**

**Answer:**

```javascript
const [stateName, setStateName] = useState(initialValue);
```

- `stateName`: Current state value
- `setStateName`: Function to update state
- `initialValue`: The starting value for state

### **Q4: What's the difference between state and props?**

**Answer:**

- **State**: Internal component memory, can be changed by the component itself
- **Props**: External data passed from parent, read-only, cannot be changed by the component

### **Q5: How do you initialize state with useState?**

**Answer:** Pass the initial value as an argument to useState:

```javascript
const [name, setName] = useState("John"); // String
const [age, setAge] = useState(25); // Number
const [isVisible, setIsVisible] = useState(true); // Boolean
```

### **Q6: Can you call useState conditionally?**

**Answer:** No! You must always call useState at the top level of your component, never inside loops, conditions, or nested functions. This is a Rule of Hooks.

---

## 🔧 **Intermediate Level Questions**

### **Q7: How do you update state that depends on the previous state?**

**Answer:** Use the functional update pattern:

```javascript
// Instead of: setCount(count + 1)
setCount((prevCount) => prevCount + 1);
```

This ensures you're working with the latest state value.

### **Q8: How do you update object state?**

**Answer:** Use the spread operator to create a new object:

```javascript
const [user, setUser] = useState({ name: "John", age: 25 });

// Correct way
setUser((prevUser) => ({ ...prevUser, age: 26 }));

// Wrong way (mutates state)
user.age = 26; // Never do this!
```

### **Q9: How do you update array state?**

**Answer:** Create a new array instead of mutating the existing one:

```javascript
const [items, setItems] = useState(["apple", "banana"]);

// Add item
setItems((prevItems) => [...prevItems, "orange"]);

// Remove item
setItems((prevItems) => prevItems.filter((item) => item !== "banana"));

// Update item
setItems((prevItems) =>
  prevItems.map((item) => (item === "apple" ? "green apple" : item))
);
```

### **Q10: What happens when you call setState multiple times?**

**Answer:** React batches multiple setState calls together for performance. If you need the latest state value, use functional updates:

```javascript
// These will be batched
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
// Result: count + 1 (not count + 3)

// Use functional updates for sequential updates
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
// Result: count + 3
```

### **Q11: When should you split state into multiple useState calls?**

**Answer:** Split state when:

- Values change independently
- Values have different update patterns
- You want to optimize re-renders

```javascript
// Good: Split independent values
const [name, setName] = useState("");
const [email, setEmail] = useState("");

// Good: Keep related values together
const [user, setUser] = useState({ name: "", email: "" });
```

### **Q12: How do you handle complex state logic?**

**Answer:** For complex state with multiple sub-values or complex updates, consider using useReducer instead of useState:

```javascript
// Simple state: use useState
const [loading, setLoading] = useState(false);

// Complex state: consider useReducer
const [state, dispatch] = useReducer(reducer, {
  loading: false,
  data: null,
  error: null,
});
```

---

## **Advanced Level Questions**

### **Q13: What is lazy initial state and when should you use it?**

**Answer:** Lazy initial state runs a function only on the first render to compute the initial state. Use it when initial state is expensive to calculate:

```javascript
// Expensive calculation runs on every render
const [data, setData] = useState(expensiveCalculation());

// Expensive calculation runs only once
const [data, setData] = useState(() => expensiveCalculation());
```

### **Q14: Why shouldn't you mutate state directly?**

**Answer:**

1. React uses Object.is() to compare state values
2. If you mutate state directly, React won't detect the change
3. Component won't re-render
4. UI becomes out of sync with state

```javascript
// Wrong: Mutation
const [user, setUser] = useState({ name: "John", age: 25 });
user.age = 26; // React won't detect this change

// Correct: Create new object
setUser((prev) => ({ ...prev, age: 26 }));
```

### **Q15: How can you optimize useState performance?**

**Answer:**

1. **Functional updates**: `setState(prev => prev + 1)`
2. **Lazy initialization**: `useState(() => expensiveCalc())`
3. **Split state**: Separate frequently changing values
4. **Use React.memo**: Prevent unnecessary re-renders
5. **Avoid objects in state**: Unless you need them

### **Q16: What's the difference between useState and useRef for storing values?**

**Answer:**

- **useState**: Triggers re-renders when value changes, for UI state
- **useRef**: Doesn't trigger re-renders, for persistent values across renders

```javascript
const [count, setCount] = useState(0); // Triggers re-render
const countRef = useRef(0); // No re-render
```

### **Q17: How do you share state between components?**

**Answer:**

1. **Lift state up**: Move state to common parent
2. **Context API**: For deeply nested components
3. **State management libraries**: Redux, Zustand for complex apps

```javascript
// Lift state up
function Parent() {
  const [sharedState, setSharedState] = useState(0);
  return (
    <>
      <Child1 value={sharedState} onChange={setSharedState} />
      <Child2 value={sharedState} />
    </>
  );
}
```

### **Q18: What are common useState mistakes to avoid?**

**Answer:**

1. **Direct mutation**: `state.push(item)` instead of `setState([...state, item])`
2. **Missing dependencies**: Using stale state in effects
3. **Conditional calls**: Calling useState inside if statements
4. **Over-batching**: Grouping unrelated state together
5. **Missing functional updates**: Not using `prev => newValue` pattern

---

## **Practical Scenario Questions**

### **Q19: How would you implement a toggle button with useState?**

**Answer:**

```javascript
function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn((prev) => !prev)}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
```

### **Q20: How would you implement a counter with min/max limits?**

**Answer:**

```javascript
function LimitedCounter() {
  const [count, setCount] = useState(0);
  const MIN = 0;
  const MAX = 10;

  const increment = () => setCount((prev) => (prev < MAX ? prev + 1 : prev));

  const decrement = () => setCount((prev) => (prev > MIN ? prev - 1 : prev));

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
```

### **Q21: How would you implement a shopping cart with useState?**

**Answer:**

```javascript
function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addItem = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - Qty: {item.quantity}
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
```

### **Q22: How would you implement form validation with useState?**

**Answer:**

```javascript
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

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
      console.log("Form submitted:", formData);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        placeholder="Name"
      />
      {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}

      <input
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        placeholder="Email"
      />
      {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}

      <textarea
        value={formData.message}
        onChange={(e) => handleChange("message", e.target.value)}
        placeholder="Message"
      />
      {errors.message && <span style={{ color: "red" }}>{errors.message}</span>}

      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 🧠 **Conceptual Questions**

### **Q23: When does a component re-render with useState?**

**Answer:** A component re-renders when:

1. State changes (React compares with Object.is())
2. Props change
3. Parent component re-renders
4. Context value changes (if using useContext)

### **Q24: Can you have multiple useState hooks in one component?**

**Answer:** Yes! You can have as many useState hooks as needed:

```javascript
function MyComponent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [isActive, setIsActive] = useState(false);
  // ... and so on
}
```

### **Q25: What happens if you forget to use the state setter function?**

**Answer:** If you directly modify state without using the setter:

1. React won't detect the change
2. Component won't re-render
3. UI will be out of sync with state
4. Can lead to bugs and unexpected behavior

```javascript
// Wrong
let [count, setCount] = useState(0);
count = 5; // React doesn't know about this change

// Correct
setCount(5); // React will re-render the component
```

---

## 🎯 **Challenge Questions**

### **Bonus Q26: How would you implement undo/redo functionality?**

**Answer:**

```javascript
function UndoRedoCounter() {
  const [history, setHistory] = useState([0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentValue = history[currentIndex];

  const setValue = (newValue) => {
    const newHistory = history.slice(0, currentIndex + 1);
    setHistory([...newHistory, newValue]);
    setCurrentIndex(newHistory.length);
  };

  const undo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const redo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      <button onClick={() => setValue(currentValue + 1)}>+</button>
      <span>{currentValue}</span>
      <button onClick={() => setValue(currentValue - 1)}>-</button>
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>
    </div>
  );
}
```

---

## 📖 **Study Tips**

1. **Practice with real examples**: Build small projects using useState
2. **Console.log your state**: Watch how state changes over time
3. **Experiment with different data types**: strings, numbers, booleans, arrays, objects
4. **Learn the common patterns**: toggle, counter, form handling, list management
5. **Understand when NOT to use useState**: for values that don't affect rendering

---

**Remember:** useState is the foundation of React state management. Master these concepts and you'll be well-prepared for more advanced React patterns and hooks!

---

_Created by [aakku106](https://github.com/aakku106) - Happy Learning! 🚀_
