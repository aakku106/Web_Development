# Handling Events in React

React provides a way to handle **user interactions** like clicks, typing, form submissions, and more. Events in React are similar to **HTML DOM events**, but with some differences:

* Event names are **camelCase** instead of lowercase.
* You pass a **function** as the event handler, not a string.

---

## 1️⃣ Commonly Used React Events

| Event Type | Event Name                                                 | Example                            |
| ---------- | ---------------------------------------------------------- | ---------------------------------- |
| Mouse      | `onClick`, `onDoubleClick`, `onMouseEnter`, `onMouseLeave` | Button clicks, hover effects       |
| Form       | `onChange`, `onSubmit`, `onInput`                          | Input changes, form submissions    |
| Keyboard   | `onKeyDown`, `onKeyUp`, `onKeyPress`                       | Detect key presses in input fields |
| Focus      | `onFocus`, `onBlur`                                        | Input focus/blur events            |
| Clipboard  | `onCopy`, `onPaste`, `onCut`                               | Detect copy/paste actions          |
| Media      | `onPlay`, `onPause`, `onEnded`                             | Video/audio controls               |
| Drag       | `onDrag`, `onDrop`, `onDragOver`                           | Drag-and-drop functionality        |

---

## 2️⃣ Handling `onClick`

```jsx
function ClickExample() {
  const handleClick = () => alert('Button clicked!');

  return <button onClick={handleClick}>Click Me</button>;
}
```

## 3️⃣ Handling `onChange` in Inputs

```jsx
import { useState } from 'react';

function InputExample() {
  const [text, setText] = useState('');

  return (
    <input
      type="text"
      value={text}
      onChange={e =&gt; setText(e.target.value)}
      placeholder="Type something..."
    />
  );
}
```

## 4️⃣ Handling Form Submission

```jsx
function FormExample() {
  const handleSubmit = e =&gt; {
    e.preventDefault(); // Prevent page reload
    alert('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" />
      <button type="submit"&gt;Submit&lt;/button>
    </form>
  );
}
```

## 5️⃣ Handling Keyboard Events

```jsx
function KeyExample() {
  const handleKeyDown = e =&gt; {
    if (e.key === 'Enter') alert('Enter pressed!');
  };

  return <input onKeyDown={handleKeyDown} placeholder="Press Enter" />;
}
```

## 6️⃣ Handling Focus and Blur

```jsx
function FocusExample() {
  const handleFocus = () => console.log('Input focused');
  const handleBlur = () => console.log('Input blurred');

  return <input onFocus={handleFocus} onBlur={handleBlur} placeholder="Focus me" />;
}
```

---

### ✅ Tips

* Always pass a **function reference**: `onClick={handleClick}`, not `onClick={handleClick()}`.
* Event objects (like `e`) are **synthetic events** in React, which wrap the native browser events.
* Combine state updates and events for **dynamic interactivity**.

By mastering these events, you can handle almost every **user interaction** in React apps!
