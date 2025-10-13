/** @format */

// Tab navigation functionality
function initializeTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs and contents
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      // Add active class to clicked tab and corresponding content
      tab.classList.add("active");
      contents[index].classList.add("active");

      // Add bounce animation
      tab.classList.add("bounce");
      setTimeout(() => tab.classList.remove("bounce"), 600);
    });
  });
}

// Copy to clipboard functionality
function initializeCopyButtons() {
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const codeBlock = button.previousElementSibling.textContent;

      try {
        await navigator.clipboard.writeText(codeBlock);
        const originalText = button.textContent;
        button.textContent = "Copied!";
        button.style.background = "rgba(34, 197, 94, 0.9)";

        setTimeout(() => {
          button.textContent = originalText;
          button.style.background = "rgba(14, 165, 233, 0.9)";
        }, 2000);
      } catch (err) {
        button.textContent = "Failed to copy";
        setTimeout(() => {
          button.textContent = "Copy";
        }, 2000);
      }
    });
  });
}

// Counter demo functionality
function initializeCounterDemo() {
  let count = 0;
  const display = document.getElementById("countDisplay");
  const incrementBtn = document.getElementById("incrementBtn");
  const decrementBtn = document.getElementById("decrementBtn");
  const resetBtn = document.getElementById("resetBtn");
  const codeDisplay = document.getElementById("countCode");

  function updateDisplay() {
    display.textContent = count;
    codeDisplay.textContent = `const [count, setCount] = useState(${count});`;

    // Add pulse animation
    display.classList.add("pulse");
    setTimeout(() => display.classList.remove("pulse"), 800);
  }

  incrementBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
    console.log("useState: count updated to", count);
  });

  decrementBtn.addEventListener("click", () => {
    count--;
    updateDisplay();
    console.log("useState: count updated to", count);
  });

  resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
    console.log("useState: count reset to", count);
  });

  // Initialize display
  updateDisplay();
}

// Pattern demos functionality
function initializePatternDemos() {
  // Age changer demo
  let age = 25;
  const ageDisplay = document.getElementById("ageDisplay");
  const ageInput = document.getElementById("ageInput");
  const updateAgeBtn = document.getElementById("updateAgeBtn");

  function updateAgeDisplay() {
    ageDisplay.textContent = `Age: ${age}`;
    ageInput.value = age;
  }

  updateAgeBtn.addEventListener("click", () => {
    const newAge = parseInt(ageInput.value);
    if (!isNaN(newAge) && newAge >= 0 && newAge <= 120) {
      age = newAge;
      updateAgeDisplay();
      console.log("useState: age updated to", age);
    } else {
      alert("Please enter a valid age (0-120)");
    }
  });

  updateAgeDisplay();

  // Name input demo
  let name = "John Doe";
  const nameDisplay = document.getElementById("nameDisplay");
  const nameInput = document.getElementById("nameInput");

  function updateNameDisplay() {
    nameDisplay.textContent = `Hello, ${name}!`;
  }

  nameInput.addEventListener("input", (e) => {
    name = e.target.value || "Anonymous";
    updateNameDisplay();
    console.log("useState: name updated to", name);
  });

  nameInput.value = name;
  updateNameDisplay();

  // Visibility toggle demo
  let isVisible = true;
  const visibilityDisplay = document.getElementById("visibilityDisplay");
  const toggleVisibilityBtn = document.getElementById("toggleVisibilityBtn");

  function updateVisibilityDisplay() {
    visibilityDisplay.style.display = isVisible ? "block" : "none";
    toggleVisibilityBtn.textContent = isVisible
      ? "Hide Content"
      : "Show Content";
  }

  toggleVisibilityBtn.addEventListener("click", () => {
    isVisible = !isVisible;
    updateVisibilityDisplay();
    console.log("useState: visibility updated to", isVisible);
  });

  updateVisibilityDisplay();

  // Fruit list demo
  let fruits = ["Apple", "Banana", "Orange"];
  const fruitList = document.getElementById("fruitList");
  const newFruitInput = document.getElementById("newFruitInput");
  const addFruitBtn = document.getElementById("addFruitBtn");

  function updateFruitList() {
    fruitList.innerHTML = "";
    fruits.forEach((fruit, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${fruit}`;
      li.style.animation = "slideIn 0.3s ease";
      fruitList.appendChild(li);
    });
  }

  addFruitBtn.addEventListener("click", () => {
    const newFruit = newFruitInput.value.trim();
    if (newFruit && !fruits.includes(newFruit)) {
      fruits = [...fruits, newFruit];
      newFruitInput.value = "";
      updateFruitList();
      console.log("useState: fruits updated to", fruits);
    } else if (fruits.includes(newFruit)) {
      alert("This fruit is already in the list!");
    } else {
      alert("Please enter a fruit name!");
    }
  });

  updateFruitList();

  // User info demo
  let userInfo = { name: "Alice", email: "alice@example.com", age: 28 };
  const userInfoDisplay = document.getElementById("userInfoDisplay");
  const updateUserBtn = document.getElementById("updateUserBtn");

  function updateUserInfoDisplay() {
    userInfoDisplay.innerHTML = `
      <p><strong>Name:</strong> ${userInfo.name}</p>
      <p><strong>Email:</strong> ${userInfo.email}</p>
      <p><strong>Age:</strong> ${userInfo.age}</p>
    `;
  }

  updateUserBtn.addEventListener("click", () => {
    // Simulate updating user info
    userInfo = {
      ...userInfo,
      age: userInfo.age + 1,
    };
    updateUserInfoDisplay();
    console.log("useState: userInfo updated to", userInfo);
  });

  updateUserInfoDisplay();
}

// Example demos functionality
function initializeExampleDemos() {
  // Like button demo
  let isLiked = false;
  let likeCount = 42;
  const likeBtn = document.getElementById("likeBtn");
  const likeStatus = document.getElementById("likeStatus");

  function updateLikeButton() {
    likeBtn.innerHTML = isLiked ? "❤️ Liked" : "🤍 Like";
    likeBtn.classList.toggle("liked", isLiked);
    likeStatus.textContent = isLiked
      ? `You and ${likeCount} others like this`
      : `${likeCount} people like this`;
  }

  likeBtn.addEventListener("click", () => {
    isLiked = !isLiked;
    likeCount += isLiked ? 1 : -1;
    updateLikeButton();
    console.log("useState: like status", { isLiked, likeCount });
  });

  updateLikeButton();

  // Todo list demo
  let todos = [
    { id: 1, text: "Learn React basics", completed: true },
    { id: 2, text: "Understand useState", completed: false },
    { id: 3, text: "Build a project", completed: false },
  ];
  let nextId = 4;

  const todoInput = document.getElementById("todoInput");
  const addTodoBtn = document.getElementById("addTodoBtn");
  const todoList = document.getElementById("todoList");
  const todoCount = document.getElementById("todoCount");

  function updateTodoList() {
    todoList.innerHTML = "";
    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.className = `todo-item ${todo.completed ? "completed" : ""}`;
      li.innerHTML = `
        <span>${todo.text}</span>
        <div>
          <button class="toggle" onclick="toggleTodo(${todo.id})">
            ${todo.completed ? "Undo" : "Done"}
          </button>
          <button onclick="deleteTodo(${todo.id})">Delete</button>
        </div>
      `;
      todoList.appendChild(li);
    });

    const completedCount = todos.filter((todo) => todo.completed).length;
    todoCount.textContent = `${completedCount} of ${todos.length} completed`;
  }

  window.toggleTodo = (id) => {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    updateTodoList();
    console.log(
      "useState: todo toggled",
      todos.find((t) => t.id === id)
    );
  };

  window.deleteTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
    updateTodoList();
    console.log("🗑️ useState: todo deleted", id);
  };

  addTodoBtn.addEventListener("click", () => {
    const text = todoInput.value.trim();
    if (text) {
      todos = [...todos, { id: nextId++, text, completed: false }];
      todoInput.value = "";
      updateTodoList();
      console.log("➕ useState: todo added", text);
    }
  });

  todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTodoBtn.click();
    }
  });

  updateTodoList();

  // Contact form demo
  let formData = { name: "", email: "", message: "" };
  let errors = {};
  let isSubmitted = false;

  const nameInput = document.getElementById("contactName");
  const emailInput = document.getElementById("contactEmail");
  const messageInput = document.getElementById("contactMessage");
  const submitBtn = document.getElementById("submitContactBtn");
  const successMessage = document.getElementById("contactSuccess");

  function validateForm() {
    errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return Object.keys(errors).length === 0;
  }

  function updateFormErrors() {
    ["name", "email", "message"].forEach((field) => {
      const errorElement = document.getElementById(`${field}Error`);
      if (errorElement) {
        errorElement.textContent = errors[field] || "";
      }
    });
  }

  function handleInputChange(field, value) {
    formData = { ...formData, [field]: value };

    // Clear previous errors for this field
    if (errors[field]) {
      errors = { ...errors };
      delete errors[field];
      updateFormErrors();
    }

    console.log("📝 useState: form data updated", formData);
  }

  nameInput.addEventListener("input", (e) => {
    handleInputChange("name", e.target.value);
  });

  emailInput.addEventListener("input", (e) => {
    handleInputChange("email", e.target.value);
  });

  messageInput.addEventListener("input", (e) => {
    handleInputChange("message", e.target.value);
  });

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (validateForm()) {
      isSubmitted = true;
      successMessage.style.display = "block";
      successMessage.textContent = "Thank you! Your message has been sent.";

      // Reset form
      formData = { name: "", email: "", message: "" };
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";

      console.log("useState: form submitted successfully");

      setTimeout(() => {
        successMessage.style.display = "none";
        isSubmitted = false;
      }, 3000);
    } else {
      updateFormErrors();
      console.log("useState: form validation failed", errors);
    }
  });
}

// Educational console helpers
function initializeConsoleHelpers() {
  console.group("useState Learning Session Started!");
  console.info(
    "Interactive demos will show you how useState works in practice"
  );
  console.info("Watch for state changes, validations, and React patterns");

  console.groupCollapsed("Key useState Concepts");
  const concepts = [
    {
      concept: "State Memory",
      description: "State is component memory that persists between renders",
    },
    {
      concept: "Setter Function",
      description: "Always use setState function to update state",
    },
    {
      concept: "Re-renders",
      description: "State updates trigger component re-renders",
    },
    {
      concept: "Functional Updates",
      description: "Use prev => newValue for complex state logic",
    },
    {
      concept: "Immutability",
      description: "Don't mutate state directly - create new objects/arrays",
    },
  ];
  console.table(concepts);
  console.groupEnd();

  console.groupCollapsed("Demo Navigation");
  console.info("Counter Demo: Learn basic state updates");
  console.info("Pattern Demos: Numbers, Strings, Booleans, Arrays, Objects");
  console.info("Real Examples: Like button, Todo list, Contact form");
  console.info("Best Practices: Rules, tips, and common mistakes");
  console.groupEnd();

  console.groupEnd();
}

// Animation helpers
function addRandomAnimation(element) {
  const animations = ["bounce", "pulse", "animate-in"];
  const randomAnimation =
    animations[Math.floor(Math.random() * animations.length)];

  element.classList.add(randomAnimation);
  setTimeout(() => {
    element.classList.remove(randomAnimation);
  }, 1000);
}

// Page load effects
function initializePageEffects() {
  // Add fade-in animation to content sections
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add("animate-in");
    }, index * 200);
  });

  // Add hover effects to interactive elements
  const interactiveElements = document.querySelectorAll(
    ".demo-btn, .pattern-demo button, .like-button, .todo-item button"
  );

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      element.style.transform = "translateY(-2px)";
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform = "translateY(0)";
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.group("useState Lesson Initialization");
  console.time("Initialization Time");

  console.info("Loading components...");
  initializeTabs();
  initializeCopyButtons();
  initializeCounterDemo();
  initializePatternDemos();
  initializeExampleDemos();
  initializeConsoleHelpers();
  initializePageEffects();

  // Initialize global displays
  console.info("Setting up interactive displays...");
  updateCounterDisplay();
  updateFruitDisplay();
  updateUserDisplay();
  updateTodoDisplay();

  console.timeEnd("Initialization Time");
  console.info("useState lesson initialized successfully!");
  console.info("Try interacting with the demos to see useState in action!");
  console.groupEnd();
});

// Error handling for missing elements
function safeQuerySelector(selector, callback) {
  const element = document.querySelector(selector);
  if (element && callback) {
    callback(element);
  } else if (!element) {
    console.warn(`Element not found: ${selector}`);
  }
  return element;
}

// Utility function for demo state logging
function logStateChange(component, state, action = "updated") {
  console.group(`🔄 useState: ${component} ${action}`);
  console.log("New state:", state);
  console.log("Type:", typeof state);
  if (Array.isArray(state)) {
    console.log("Length:", state.length);
  } else if (typeof state === "object" && state !== null) {
    console.log("Keys:", Object.keys(state));
  }
  console.groupEnd();
}

// Performance monitoring
function monitorStateUpdates() {
  let updateCount = 0;
  let updateHistory = [];
  const originalLog = console.log;
  const originalGroup = console.group;

  // Override console.group to track useState updates
  console.group = function (message, ...args) {
    if (
      message &&
      (message.includes("State Update") ||
        message.includes("Pattern Demo") ||
        message.includes("Example"))
    ) {
      updateCount++;
      updateHistory.push({
        count: updateCount,
        message: message,
        timestamp: new Date().toLocaleTimeString(),
      });

      if (updateCount % 15 === 0) {
        console.groupCollapsed("📊 Performance Monitor");
        console.warn(`🏃‍♂️ ${updateCount} state updates completed so far`);
        console.info(
          "💡 Remember: In React, frequent state updates can impact performance"
        );
        console.info(
          "🔧 Consider using useCallback, useMemo, or state batching for optimization"
        );

        console.groupCollapsed("📈 Recent Update History");
        console.table(updateHistory.slice(-10));
        console.groupEnd();
        console.groupEnd();
      }
    }

    return originalGroup.apply(console, [message, ...args]);
  };
}

// Initialize monitoring
monitorStateUpdates();

// Global functions for HTML onclick handlers
window.showTab = function (tabName) {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  // Remove active class from all tabs and contents
  tabs.forEach((tab) => tab.classList.remove("active"));
  contents.forEach((content) => content.classList.remove("active"));

  // Find and activate the clicked tab and corresponding content
  tabs.forEach((tab, index) => {
    if (
      tab.textContent.toLowerCase().includes(tabName.toLowerCase()) ||
      (tabName === "basics" && index === 0) ||
      (tabName === "patterns" && index === 1) ||
      (tabName === "examples" && index === 2) ||
      (tabName === "rules" && index === 3)
    ) {
      tab.classList.add("active");
      contents[index].classList.add("active");
    }
  });
};

// Counter demo functions
let globalCount = 0;
let countHistory = [];

window.increaseCount = function () {
  const previousCount = globalCount;
  globalCount++;
  countHistory.push({
    action: "increment",
    from: previousCount,
    to: globalCount,
    timestamp: new Date().toLocaleTimeString(),
  });

  updateCounterDisplay();

  console.group("Counter State Update");
  console.info(`Action: Increment | ${previousCount} → ${globalCount}`);
  console.log("Current state:", globalCount);
  console.log("State type:", typeof globalCount);

  if (countHistory.length > 1) {
    console.groupCollapsed("Counter History");
    console.table(countHistory.slice(-5)); // Show last 5 actions
    console.groupEnd();
  }
  console.groupEnd();
};

window.decreaseCount = function () {
  const previousCount = globalCount;
  globalCount--;
  countHistory.push({
    action: "decrement",
    from: previousCount,
    to: globalCount,
    timestamp: new Date().toLocaleTimeString(),
  });

  updateCounterDisplay();

  console.group("Counter State Update");
  console.info(`Action: Decrement | ${previousCount} → ${globalCount}`);
  console.log("Current state:", globalCount);
  console.log("State type:", typeof globalCount);

  if (countHistory.length > 1) {
    console.groupCollapsed("Counter History");
    console.table(countHistory.slice(-5));
    console.groupEnd();
  }
  console.groupEnd();
};

window.resetCount = function () {
  const previousCount = globalCount;
  globalCount = 0;
  countHistory.push({
    action: "reset",
    from: previousCount,
    to: globalCount,
    timestamp: new Date().toLocaleTimeString(),
  });

  updateCounterDisplay();

  console.group("Counter Reset");
  console.warn(`State reset: ${previousCount} → ${globalCount}`);
  console.log("All history cleared");
  console.groupEnd();
};

function updateCounterDisplay() {
  const display = document.getElementById("countDisplay");
  const currentState = document.getElementById("currentState");
  const lastAction = document.getElementById("lastAction");

  if (display) display.textContent = globalCount;
  if (currentState) currentState.textContent = globalCount;
  if (lastAction) {
    if (
      globalCount === 0 &&
      document.getElementById("currentState").textContent === "0"
    ) {
      lastAction.textContent = "Reset to 0";
    } else if (
      globalCount > parseInt(currentState.textContent) ||
      globalCount === parseInt(currentState.textContent) + 1
    ) {
      lastAction.textContent = "Increased";
    } else {
      lastAction.textContent = "Decreased";
    }
  }
}

// Pattern demo functions
let globalAge = 25;
window.changeAge = function (delta) {
  const previousAge = globalAge;
  globalAge += delta;
  if (globalAge < 0) globalAge = 0;
  if (globalAge > 120) globalAge = 120;

  const ageValue = document.getElementById("ageValue");
  if (ageValue) ageValue.textContent = globalAge;

  console.group("Age Pattern Demo");
  console.info(
    `Age ${
      delta > 0 ? "increased" : "decreased"
    }: ${previousAge} → ${globalAge}`
  );
  console.log("Age constraints: 0-120 years");
  console.groupEnd();
};

window.updateName = function (value) {
  const nameDisplay = document.getElementById("nameDisplay");
  const displayValue = value || "Anonymous";

  if (nameDisplay) {
    nameDisplay.textContent = displayValue;
  }

  console.group("String Pattern Demo");
  console.info(`Name updated: "${displayValue}"`);
  console.log("String length:", displayValue.length);
  console.log(
    "Input validation:",
    value ? "Valid" : "Empty (fallback applied)"
  );
  console.groupEnd();
};

let isSecretVisible = false;
window.toggleVisibility = function () {
  const previousState = isSecretVisible;
  isSecretVisible = !isSecretVisible;

  const secretMessage = document.getElementById("secretMessage");
  const toggleBtn = document.getElementById("toggleBtn");

  if (secretMessage) {
    secretMessage.style.display = isSecretVisible ? "block" : "none";
  }
  if (toggleBtn) {
    toggleBtn.textContent = isSecretVisible ? "Hide" : "Show";
  }

  console.group("Boolean Pattern Demo");
  console.info(`Visibility toggled: ${previousState} → ${isSecretVisible}`);
  console.log("Boolean state:", isSecretVisible);
  console.log(
    "UI effect:",
    isSecretVisible ? "Element shown" : "Element hidden"
  );
  console.groupEnd();
};

let globalFruits = ["🍎 Apple", "🍌 Banana"];
window.addFruit = function () {
  const fruits = [
    "🍊 Orange",
    "🍇 Grapes",
    "🍓 Strawberry",
    "🥝 Kiwi",
    "🍑 Cherry",
  ];
  const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];

  if (!globalFruits.includes(randomFruit)) {
    const previousLength = globalFruits.length;
    globalFruits.push(randomFruit);
    updateFruitDisplay();

    console.group("Array Pattern Demo - Add Fruit");
    console.info(`Fruit added: ${randomFruit}`);
    console.log("Array length:", `${previousLength} → ${globalFruits.length}`);
    console.log("Updated array:", globalFruits);
    console.log("React pattern: [...fruits, newFruit]");
    console.groupEnd();
  } else {
    window.addFruit(); // Try again with different fruit
  }
};

window.removeFruit = function () {
  if (globalFruits.length > 0) {
    const previousLength = globalFruits.length;
    const removed = globalFruits.pop();
    updateFruitDisplay();

    console.group("Array Pattern Demo - Remove Fruit");
    console.warn(`Fruit removed: ${removed}`);
    console.log("Array length:", `${previousLength} → ${globalFruits.length}`);
    console.log("Updated array:", globalFruits);
    console.log("React pattern: fruits.filter() or fruits.slice()");
    console.groupEnd();
  } else {
    console.warn("Cannot remove fruit: Array is empty");
  }
};

function updateFruitDisplay() {
  const fruitList = document.getElementById("fruitList");
  if (fruitList) {
    fruitList.innerHTML = "";
    globalFruits.forEach((fruit) => {
      const li = document.createElement("li");
      li.textContent = fruit;
      fruitList.appendChild(li);
    });
  }
}

let globalUser = { name: "Aakku", age: 20 };
window.updateUserName = function () {
  const names = [
    "Adarasha",
    "Toffu",
    "Ram",
    "Pramish",
    "Naruto",
    "Emma",
    "Aakku",
  ];
  const previousName = globalUser.name;
  globalUser.name = names[Math.floor(Math.random() * names.length)];
  updateUserDisplay();

  console.group("Object Pattern Demo - Update Name");
  console.info(`Name changed: "${previousName}" → "${globalUser.name}"`);
  console.log("Updated user object:", globalUser);
  console.log("React pattern: setUser({...user, name: newName})");
  console.groupEnd();
};

window.updateUserAge = function () {
  const previousAge = globalUser.age;
  globalUser.age += 1;
  updateUserDisplay();

  console.group("Object Pattern Demo - Birthday");
  console.info(`Age updated: ${previousAge} → ${globalUser.age}`);
  console.log("Updated user object:", globalUser);
  console.log("React pattern: setUser({...user, age: user.age + 1})");
  console.groupEnd();
};

function updateUserDisplay() {
  const userName = document.getElementById("userName");
  const userAge = document.getElementById("userAge");

  if (userName) userName.textContent = globalUser.name;
  if (userAge) userAge.textContent = globalUser.age;
}

// Like button functions
let isLiked = false;
let likeCount = 0;
window.toggleLike = function () {
  const previousState = { isLiked, likeCount };
  isLiked = !isLiked;
  likeCount += isLiked ? 1 : -1;

  const likeIcon = document.getElementById("likeIcon");
  const likeCountDisplay = document.getElementById("likeCount");
  const likeStatus = document.getElementById("likeStatus");

  if (likeIcon) {
    likeIcon.textContent = isLiked ? "💙" : "🤍";
  }
  if (likeCountDisplay) {
    likeCountDisplay.textContent = likeCount;
  }
  if (likeStatus) {
    likeStatus.textContent = isLiked
      ? `You liked this post! Total: ${likeCount} likes`
      : `Click to like this post! Total: ${likeCount} likes`;
  }

  console.group("Like Button Example");
  console.info(`Action: ${isLiked ? "Liked" : "Unliked"} the post`);
  console.table([
    { State: "isLiked", Previous: previousState.isLiked, Current: isLiked },
    {
      State: "likeCount",
      Previous: previousState.likeCount,
      Current: likeCount,
    },
  ]);
  console.log("UI Update: Icon and status text changed");
  console.groupEnd();
};

// Todo functions
let globalTodos = [];
let todoIdCounter = 1;

window.addTodo = function () {
  const todoInput = document.getElementById("todoInput");
  const text = todoInput ? todoInput.value.trim() : "";

  if (text) {
    const newTodo = {
      id: todoIdCounter++,
      text: text,
      completed: false,
    };

    globalTodos.push(newTodo);
    if (todoInput) todoInput.value = "";
    updateTodoDisplay();

    console.group("Todo List - Add Item");
    console.info(`Todo added: "${text}"`);
    console.log("New todo object:", newTodo);
    console.log("Total todos:", globalTodos.length);
    console.groupCollapsed("All Todos");
    console.table(globalTodos);
    console.groupEnd();
    console.groupEnd();
  } else {
    console.warn("Cannot add empty todo");
  }
};

window.handleTodoKeyPress = function (event) {
  if (event.key === "Enter") {
    window.addTodo();
  }
};

window.toggleTodo = function (id) {
  const todoIndex = globalTodos.findIndex((todo) => todo.id === id);
  const previousCompleted = globalTodos[todoIndex].completed;

  globalTodos = globalTodos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );

  updateTodoDisplay();

  const updatedTodo = globalTodos.find((todo) => todo.id === id);

  console.group("Todo List - Toggle Complete");
  console.info(
    `Todo "${updatedTodo.text}" marked as ${
      updatedTodo.completed ? "completed" : "pending"
    }`
  );
  console.log(
    "State change:",
    `${previousCompleted} → ${updatedTodo.completed}`
  );
  console.log("Updated todo:", updatedTodo);
  console.groupEnd();
};

window.deleteTodo = function (id) {
  const todoToDelete = globalTodos.find((todo) => todo.id === id);
  const previousLength = globalTodos.length;

  globalTodos = globalTodos.filter((todo) => todo.id !== id);
  updateTodoDisplay();

  console.group("Todo List - Delete Item");
  console.warn(`Todo deleted: "${todoToDelete.text}"`);
  console.log("Todos count:", `${previousLength} → ${globalTodos.length}`);
  console.log("React pattern: todos.filter(todo => todo.id !== id)");
  console.groupEnd();
};

function updateTodoDisplay() {
  const todoList = document.getElementById("todoList");
  const todoCount = document.getElementById("todoCount");

  if (todoList) {
    todoList.innerHTML = "";
    globalTodos.forEach((todo) => {
      const li = document.createElement("li");
      li.className = `todo-item ${todo.completed ? "completed" : ""}`;
      li.innerHTML = `
        <span>${todo.text}</span>
        <div>
          <button class="toggle" onclick="toggleTodo(${todo.id})">
            ${todo.completed ? "Undo" : "Done"}
          </button>
          <button onclick="deleteTodo(${todo.id})">Delete</button>
        </div>
      `;
      todoList.appendChild(li);
    });
  }

  if (todoCount) {
    todoCount.textContent = globalTodos.length;
  }
}

// Form functions
let globalFormData = { name: "", email: "", message: "" };
let globalFormErrors = {};

window.handleFormSubmit = function (event) {
  event.preventDefault();

  const formName = document.getElementById("formName");
  const formEmail = document.getElementById("formEmail");
  const formMessage = document.getElementById("formMessage");

  // Update form data
  const previousFormData = { ...globalFormData };
  globalFormData = {
    name: formName ? formName.value : "",
    email: formEmail ? formEmail.value : "",
    message: formMessage ? formMessage.value : "",
  };

  // Validate
  globalFormErrors = {};

  if (!globalFormData.name.trim()) {
    globalFormErrors.name = "Name is required";
  } else if (globalFormData.name.length < 2) {
    globalFormErrors.name = "Name must be at least 2 characters";
  }

  if (!globalFormData.email.trim()) {
    globalFormErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(globalFormData.email)) {
    globalFormErrors.email = "Email is invalid";
  }

  if (!globalFormData.message.trim()) {
    globalFormErrors.message = "Message is required";
  } else if (globalFormData.message.length < 10) {
    globalFormErrors.message = "Message must be at least 10 characters";
  }

  // Update error display
  updateFormErrors();

  // If valid, show success
  if (Object.keys(globalFormErrors).length === 0) {
    const formSuccess = document.getElementById("formSuccess");
    if (formSuccess) {
      formSuccess.style.display = "block";
      formSuccess.textContent = "✅ Message sent successfully!";
    }

    console.group("Contact Form - Submission Success");
    console.info("Form validated and submitted successfully!");
    console.log("Form data:", globalFormData);
    console.log("Validation: All fields passed");
    console.groupEnd();

    // Reset form
    if (formName) formName.value = "";
    if (formEmail) formEmail.value = "";
    if (formMessage) formMessage.value = "";

    globalFormData = { name: "", email: "", message: "" };

    setTimeout(() => {
      if (formSuccess) formSuccess.style.display = "none";
    }, 3000);
  } else {
    console.group("Contact Form - Validation Failed");
    console.warn("Form submission failed due to validation errors");
    console.table(
      Object.entries(globalFormErrors).map(([field, error]) => ({
        Field: field,
        Error: error,
      }))
    );
    console.log("Form data:", globalFormData);
    console.groupEnd();
  }
};

function updateFormErrors() {
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  if (nameError) nameError.textContent = globalFormErrors.name || "";
  if (emailError) emailError.textContent = globalFormErrors.email || "";
  if (messageError) messageError.textContent = globalFormErrors.message || "";
}

// Copy code function
window.copyCode = function (button) {
  const codeBlock = button.nextElementSibling.textContent;

  navigator.clipboard
    .writeText(codeBlock)
    .then(() => {
      const originalText = button.textContent;
      button.textContent = "✅ Copied!";
      button.style.background = "rgba(34, 197, 94, 0.9)";

      console.group("Code Copy");
      console.info("Code successfully copied to clipboard");
      console.log("Code length:", codeBlock.length + " characters");
      console.groupCollapsed("Copied Code");
      console.log(codeBlock);
      console.groupEnd();
      console.groupEnd();

      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = "rgba(14, 165, 233, 0.9)";
      }, 2000);
    })
    .catch(() => {
      button.textContent = "❌ Failed";
      console.error("Failed to copy code to clipboard");
      setTimeout(() => {
        button.textContent = "📋 Copy";
      }, 2000);
    });
};

// Export functions for testing (if needed)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initializeTabs,
    initializeCounterDemo,
    initializePatternDemos,
    initializeExampleDemos,
    logStateChange,
  };
}
