# 🧠 Practice Set: useContext Hook in React

## Instructions

---

### 1. Light/Dark Theme Context

* Create a `ThemeContext` that holds the current theme (`light` or `dark`).
* Allow users to toggle between themes with a button.
* Change the background and text color dynamically based on the current theme.

**Files:**

* `ThemeContext.js`
* `App.js`
* `ThemeButton.js`

---

### 2. User Authentication Context

* Build a `UserContext` to store `userName` and a function `loginUser`.
* When a user clicks “Login”, update the context with their name and display a welcome message.

**Files:**

* `UserContext.js`
* `App.js`
* `LoginButton.js`
* `Profile.js`

---

### 3. Language Selector Context

* Create a `LanguageContext` that manages app language (`English`, `Nepali`, `Hindi`).
* Display a message like “Hello”, “Namaste”, or “नमस्ते” depending on the selected language.
* Use buttons or dropdowns to switch the language globally.

**Files:**

* `LanguageContext.js`
* `App.js`
* `Greeting.js`

---

### 4. Theme + User Combined Context

* Create **two contexts**: one for theme and one for user.
* Allow the logged-in user to toggle theme.
* Display:

  > “Welcome, [User]! You’re using [Theme] mode.”

**Files:**

* `ThemeContext.js`
* `UserContext.js`
* `App.js`
* `Dashboard.js`

---

### 5. Bonus Challenge: Global Counter Context

* Make a `CounterContext` that stores a counter value.
* Create `Increment` and `Decrement` buttons available to all components.
* The counter value should update globally no matter which component updates it.

**Files:**

* `CounterContext.js`
* `App.js`
* `CounterDisplay.js`
* `CounterControls.js`
