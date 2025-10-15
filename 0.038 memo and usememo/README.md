# React `memo` and `useMemo` Hook

## Why we need memoization in React?

Imagine you have a **big React app** with components that **re-render frequently**. Even if only **one small part of your app changes**, React will re-render child components unnecessarily. This can slow down your app.

Here, **`memo`** and **`useMemo`** come to the rescue!

---

## 1️⃣ `React.memo`

`React.memo` is a **higher-order component** that prevents a component from re-rendering if its **props haven’t changed**.

### Example:

```jsx
import React, { memo } from 'react';

const Child = memo(({ name }) => {
  console.log('Child rendered');
  return <p>Hello, {name}!</p>;
});

function Parent() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Child name="Pramish" />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default Parent;
```

* Here, clicking **Increment** updates `count`.
* Without `memo`, **Child** would re-render every time.
* With `memo`, **Child** only re-renders if its `name` prop changes.

**Analogy:** Think of it as a smart memo pad — it only updates when the content actually changes.

---

## 2️⃣ `useMemo` Hook

`useMemo` **caches the result of a function** so it doesn’t need to recompute on every render unless its dependencies change.

### Example:

```jsx
import React, { useState, useMemo } from 'react';

function ExpensiveComponent({ number }) {
  const factorial = useMemo(() => {
    console.log('Calculating factorial');
    const calcFactorial = n => n <= 1 ? 1 : n * calcFactorial(n - 1);
    return calcFactorial(number);
  }, [number]);

  return <p>Factorial of {number} is {factorial}</p>;
}

function App() {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  return (
    <>
      <ExpensiveComponent number={number} />
      <input type="number" value={number} onChange={e => setNumber(+e.target.value)} />
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default App;
```

* `factorial` calculation only runs when `number` changes.
* Updating `count` does **not trigger expensive recalculation**.

**Analogy:** It's like saving your calculation in a notebook — if the input doesn’t change, just reuse the previous result.

---

### ✅ Key Differences

| Concept      | Purpose                                                 | Usage                                                                    |
| ------------ | ------------------------------------------------------- | ------------------------------------------------------------------------ |
| `React.memo` | Prevent re-render of component if props unchanged       | Wrap a functional component: `memo(Component)`                           |
| `useMemo`    | Cache calculation result to avoid expensive computation | Inside a component: `const memoValue = useMemo(() => compute(), [deps])` |

---

### Takeaway

* Use `memo` to **skip unnecessary re-renders** of child components.
* Use `useMemo` to **cache expensive calculations**.
* Helps **performance optimization** in React apps.
