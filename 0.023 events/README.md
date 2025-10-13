# Lesson: DOM Events

Imagine your webpage is like a **house**. The buttons, links, and input fields are like **light switches, doors, and bells**. If you **touch a switch**, the light turns on. If you **press a doorbell**, it rings.

In web pages, **events** are like those interactions: they happen when the user **clicks, moves the mouse, types something, or presses a key**. JavaScript can “listen” to these events and **respond**.

## 1. What is a DOM Event?

A **DOM Event** is an action that occurs on an element. Examples:

* Clicking a button → `click` event
* Pressing a key → `keydown` event
* Moving the mouse → `mousemove` event
* Pressing mouse button → `mousedown` or `mouseup`

Think of it as **telling your page “do something when the user does this action”**.

---

## 2. How to Listen to Events

There are **two main ways** to handle events:

### a) Inline HTML (quick but not recommended)

```html
<button onclick="alert('Button clicked!')">Click Me</button>
```

* Here, `onclick` listens for a click.
* Works, but mixing HTML and JS is messy.

### b) Using JavaScript (recommended)

```html
<button id="myButton">Click Me</button>

<script>
  const button = document.getElementById('myButton');

  button.addEventListener('click', function() {
    alert('Button clicked using JS!');
  });
</script>
```

* `addEventListener` **attaches an event** to an element.
* First argument: the event type (`click`, `mousedown`, `mouseup`, etc.)
* Second argument: the function to run when the event happens

---

## 3. Common Mouse Events

| Event        | Description                              |
| ------------ | ---------------------------------------- |
| `click`      | When the mouse is clicked                |
| `dblclick`   | When the mouse is double-clicked         |
| `mousedown`  | When the mouse button is pressed down    |
| `mouseup`    | When the mouse button is released        |
| `mouseenter` | When the mouse pointer enters an element |
| `mouseleave` | When the mouse pointer leaves an element |
| `mousemove`  | When the mouse is moved over an element  |

---

## 4. Example: Mouse Down and Click

```html
<button id="btn">Try Me!</button>

<script>
  const btn = document.getElementById('btn');

  btn.addEventListener('mousedown', () => {
    console.log('Mouse button is pressed down!');
  });

  btn.addEventListener('click', () => {
    console.log('Button was clicked!');
  });
</script>
```

**Explanation:**

* `mousedown` triggers **as soon as the mouse button is pressed**.
* `click` triggers **after pressing and releasing the mouse button**.

---

## 5. Example: Mouse Enter and Leave

```html
<div id="box" style="width:150px;height:150px;background:skyblue;">
  Hover over me
</div>

<script>
  const box = document.getElementById('box');

  box.addEventListener('mouseenter', () => {
    box.style.background = 'orange';
  });

  box.addEventListener('mouseleave', () => {
    box.style.background = 'skyblue';
  });
</script>
```

* When you **hover**, the color changes.
* When you **move out**, it goes back.

---

### Key Takeaways:

1. Events are **actions** that happen on elements.
2. `addEventListener` is the **best way** to handle events.
3. Mouse events include `click`, `mousedown`, `mouseup`, `mouseenter`, `mouseleave`, `mousemove`.
4. You can make your page **interactive** by responding to these events.
