# JavaScript DOM (Document Object Model) Lesson

Have you ever wondered how JavaScript can change the content, style, or behavior of a web page dynamically? This is done using the **DOM (Document Object Model)**.

The DOM is like a tree structure representing all HTML elements in your page. JavaScript can access, modify, or remove these elements.

---

## 🔹 Selecting Elements

### 1. By ID

```js
let element = document.getElementById('myId');
```

* Selects a single element with the given `id`.

### 2. By Class Name

```js
let elements = document.getElementsByClassName('myClass');
```

* Selects all elements with the given class. Returns **HTMLCollection**.

### 3. By Tag Name

```js
let elements = document.getElementsByTagName('p');
```

* Selects all elements with a specific tag (like `<p>`). Returns **HTMLCollection**.

### 4. Query Selector

```js
let element = document.querySelector('.myClass');
```

* Selects the **first element** that matches a CSS selector.

### 5. Query Selector All

```js
let elements = document.querySelectorAll('div.myClass');
```

* Selects **all elements** matching a CSS selector. Returns a **NodeList**.

---

## 🔹 Changing Content or Style

```js
let heading = document.getElementById('heading');
heading.textContent = 'Hello World!'; // Change text
heading.style.color = 'red';         // Change style
```

---

## 🔹 Handling Form Input

Suppose you have a form input and want to store or use the value entered by the user.

HTML:

```html
<form id="myForm">
  <input type="text" id="username" placeholder="Enter username">
  <button type="submit">Submit</button>
</form>
<div id="display"></div>
```

JavaScript:

```js
let form = document.getElementById('myForm');
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page reload
  let input = document.getElementById('username').value;
  document.getElementById('display').textContent = `Username: ${input}`;
});
```

* `.value` fetches the input value.
* `addEventListener` listens for user actions.

---

## 🔹 Summary

* **DOM** represents HTML elements as objects.
* Select elements by **id, class, tag name, or CSS selectors**.
* Use `.textContent` or `.innerHTML` to change content.
* Use `.style` to change styles dynamically.
* Store form inputs using `.value`.

DOM allows you to make your page **interactive and dynamic**.

---

This lesson can be combined with forms, events, and dynamic content updates in JavaScript projects.
