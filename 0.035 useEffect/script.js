/** @format */

// useEffect Side Effects Lesson - Interactive JavaScript Demos
// Educational implementation showing useEffect patterns

// ===============================
// Educational Helper Functions
// ===============================

function initializeLesson() {
  console.group("useEffect Lesson Initialization");
  console.info("React useEffect hook simulation initialized");
  console.log("Features available:");
  console.table({
    "Basic Patterns": "Every render, mount only, dependencies",
    "Common Patterns": "API fetching, title updates, timers",
    "Real Examples": "Online status, resize listener, localStorage",
    Advanced: "Debounced search, async cleanup, multiple effects",
  });
  console.groupEnd();

  setupWindowResizeListener();
  updateWindowSize();
  loadStorageDisplay();
}

// ===============================
// State Management (Simulating React State)
// ===============================

const appState = {
  everyRenderCount: 0,
  mountCount: 0,
  dependencyCount: 0,
  dataValue: 0,
  otherValue: 0,
  timerInterval: null,
  timerValue: 0,
  isOnline: navigator.onLine,
  searchCount: 0,
  searchTimeout: null,
  asyncStatus: "Ready",
  effects: {
    data: "Not triggered",
    title: "Not triggered",
    analytics: "Not triggered",
  },
};

// ===============================
// Tab Navigation
// ===============================

window.showTab = function (tabName) {
  console.group("Tab Navigation");
  console.info(`Switching to tab: ${tabName}`);

  // Hide all tabs
  const tabs = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-btn");

  tabs.forEach((tab) => tab.classList.remove("active"));
  buttons.forEach((btn) => btn.classList.remove("active"));

  // Show selected tab
  document.getElementById(tabName).classList.add("active");
  event.target.classList.add("active");

  console.log("Tab switch completed");
  console.groupEnd();
};

// ===============================
// Basic useEffect Patterns
// ===============================

window.triggerEveryRender = function () {
  appState.everyRenderCount++;

  console.group("Effect on Every Render");
  console.info("Simulating useEffect(() => { ... }) - no dependency array");
  console.log("This would run after every render in React");
  console.log(`Render count: ${appState.everyRenderCount}`);
  console.groupEnd();

  document.getElementById("everyRenderCount").textContent =
    appState.everyRenderCount;
};

window.simulateMount = function () {
  appState.mountCount++;

  console.group("Effect Only on Mount");
  console.info(
    "Simulating useEffect(() => { ... }, []) - empty dependency array"
  );
  console.log("This would run only once when component mounts");
  console.log(`Mount effects triggered: ${appState.mountCount}`);
  console.groupEnd();

  document.getElementById("mountCount").textContent = appState.mountCount;
};

window.changeData = function () {
  const oldData = appState.dataValue;
  appState.dataValue++;
  appState.dependencyCount++;

  console.group("Effect with Dependencies");
  console.info(
    "Simulating useEffect(() => { ... }, [data]) - with dependencies"
  );
  console.table({
    "Old Value": oldData,
    "New Value": appState.dataValue,
    "Effect Triggered": "Yes (data changed)",
    "Other Value": appState.otherValue + " (unchanged)",
  });
  console.groupEnd();

  document.getElementById("dataValue").textContent = appState.dataValue;
  document.getElementById("dependencyCount").textContent =
    appState.dependencyCount;
};

window.changeOtherData = function () {
  const oldOther = appState.otherValue;
  appState.otherValue++;

  console.group("Effect with Dependencies");
  console.info("Changing non-dependency variable");
  console.table({
    "Data Value": appState.dataValue + " (unchanged)",
    "Old Other": oldOther,
    "New Other": appState.otherValue,
    "Effect Triggered": "No (data dependency unchanged)",
  });
  console.log("Effect would NOT run because 'data' didn't change");
  console.groupEnd();

  document.getElementById("otherValue").textContent = appState.otherValue;
};

// ===============================
// Common Patterns - API Fetching
// ===============================

window.fetchUserData = function () {
  console.group("API Data Fetching Pattern");
  console.info("Simulating useEffect(() => { fetch... }, [])");

  const usersDisplay = document.getElementById("usersDisplay");
  usersDisplay.innerHTML = "<p>Loading users...</p>";

  // Simulate API call delay
  setTimeout(() => {
    const mockUsers = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
      { id: 3, name: "Bob Johnson", email: "bob@example.com" },
    ];

    console.log("API Response received:");
    console.table(mockUsers);

    const usersList = mockUsers
      .map(
        (user) =>
          `<div class="user-card">
        <strong>${user.name}</strong><br>
        <small>${user.email}</small>
      </div>`
      )
      .join("");

    usersDisplay.innerHTML = usersList;
    console.log("Users displayed in UI");
    console.groupEnd();
  }, 1000);
};

window.clearUsers = function () {
  console.group("Clear Users Data");
  console.info("Clearing user data from state");

  document.getElementById("usersDisplay").innerHTML =
    '<p>Click "Fetch Users" to load data</p>';
  console.log("Users cleared from UI");
  console.groupEnd();
};

// ===============================
// Document Title Updates
// ===============================

window.updatePageTitle = function () {
  const titleInput = document.getElementById("titleInput");
  const newTitle = titleInput.value || "useEffect Demo";

  console.group("Document Title Update");
  console.info("Simulating useEffect(() => { document.title = ... }, [title])");
  console.table({
    "Old Title": document.title,
    "New Title": newTitle,
    Dependency: "pageTitle state changed",
  });

  document.title = newTitle;
  console.log("Document title updated");
  console.groupEnd();
};

window.resetTitle = function () {
  const defaultTitle = "useEffect - Side Effects | React Hook Lesson";

  console.group("Reset Title");
  console.info("Resetting to default title");

  document.title = defaultTitle;
  document.getElementById("titleInput").value = "useEffect Demo";

  console.log("Title reset to default");
  console.groupEnd();
};

// ===============================
// Timer with Cleanup
// ===============================

window.startTimer = function () {
  if (appState.timerInterval) {
    console.warn("Timer already running - stopping previous timer first");
    stopTimer();
  }

  console.group("Timer with Cleanup");
  console.info(
    "Simulating useEffect(() => { setInterval... return cleanup }, [])"
  );
  console.log("Starting timer with cleanup function");

  appState.timerValue = 0;
  appState.timerInterval = setInterval(() => {
    appState.timerValue++;
    document.getElementById("timerValue").textContent = appState.timerValue;
  }, 1000);

  console.log("Timer started - cleanup function will run on stop/unmount");
  console.groupEnd();
};

window.stopTimer = function () {
  if (appState.timerInterval) {
    console.group("Timer Cleanup");
    console.info("Executing cleanup function");
    console.log("clearInterval called - preventing memory leaks");

    clearInterval(appState.timerInterval);
    appState.timerInterval = null;

    console.log("Timer cleanup completed");
    console.groupEnd();
  } else {
    console.warn("No timer running to stop");
  }
};

// ===============================
// Online Status Detection
// ===============================

window.simulateOffline = function () {
  appState.isOnline = false;
  updateOnlineStatus();

  console.group("Online Status Event");
  console.info("Simulating 'offline' event listener");
  console.log("Browser went offline - event handler triggered");
  console.log("This demonstrates cleanup with event listeners");
  console.groupEnd();
};

window.simulateOnline = function () {
  appState.isOnline = true;
  updateOnlineStatus();

  console.group("Online Status Event");
  console.info("Simulating 'online' event listener");
  console.log("Browser came online - event handler triggered");
  console.groupEnd();
};

function updateOnlineStatus() {
  const statusElement = document.getElementById("onlineStatus");
  statusElement.textContent = appState.isOnline ? "Online" : "Offline";
  statusElement.className = appState.isOnline
    ? "status-online"
    : "status-offline";
}

// ===============================
// Window Resize Listener
// ===============================

function setupWindowResizeListener() {
  console.group("Window Resize Setup");
  console.info("Setting up resize event listener with cleanup");
  console.log("This demonstrates proper event listener cleanup in useEffect");
  console.groupEnd();

  window.addEventListener("resize", updateWindowSize);

  // This would be returned as cleanup function in useEffect
  // return () => window.removeEventListener('resize', updateWindowSize);
}

function updateWindowSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  document.getElementById("windowSize").textContent = `${width} x ${height}`;

  // Only log resize events that are significant (to avoid spam)
  if (
    Math.abs(width - (updateWindowSize.lastWidth || 0)) > 50 ||
    Math.abs(height - (updateWindowSize.lastHeight || 0)) > 50
  ) {
    console.group("Window Resize Event");
    console.info("Window size changed significantly");
    console.table({
      Width: width + "px",
      Height: height + "px",
      "Aspect Ratio": (width / height).toFixed(2),
    });
    console.groupEnd();

    updateWindowSize.lastWidth = width;
    updateWindowSize.lastHeight = height;
  }
}

// ===============================
// Local Storage Sync
// ===============================

window.saveToStorage = function () {
  const input = document.getElementById("storageInput");
  const value = input.value.trim();

  if (!value) {
    console.warn("No data to save");
    return;
  }

  console.group("LocalStorage Sync");
  console.info(
    "Simulating useEffect(() => { localStorage.setItem... }, [data])"
  );
  console.log("Saving data to localStorage when state changes");

  localStorage.setItem("useEffectDemo", value);
  loadStorageDisplay();

  console.log(`Data saved: "${value}"`);
  console.groupEnd();
};

window.loadFromStorage = function () {
  console.group("LocalStorage Load");
  console.info("Simulating useEffect(() => { localStorage.getItem... }, [])");
  console.log("Loading data from localStorage on component mount");

  const saved = localStorage.getItem("useEffectDemo");
  if (saved) {
    document.getElementById("storageInput").value = saved;
    console.log(`Data loaded: "${saved}"`);
  } else {
    console.log("No saved data found");
  }

  loadStorageDisplay();
  console.groupEnd();
};

window.clearStorage = function () {
  console.group("Clear LocalStorage");
  console.info("Removing data from localStorage");

  localStorage.removeItem("useEffectDemo");
  document.getElementById("storageInput").value = "";
  loadStorageDisplay();

  console.log("Storage cleared");
  console.groupEnd();
};

function loadStorageDisplay() {
  const saved = localStorage.getItem("useEffectDemo");
  const display = document.getElementById("storageDisplay");
  display.textContent = saved || "Nothing stored";
}

// ===============================
// Advanced Patterns
// ===============================

window.handleSearch = function (searchTerm) {
  // Clear previous timeout (debouncing)
  if (appState.searchTimeout) {
    clearTimeout(appState.searchTimeout);
  }

  console.group("Debounced Search");
  console.info(
    "Simulating useEffect(() => { setTimeout... return cleanup }, [searchTerm])"
  );
  console.log("Previous timeout cleared - preventing unnecessary API calls");

  // Set new timeout
  appState.searchTimeout = setTimeout(() => {
    if (searchTerm.trim()) {
      appState.searchCount++;

      console.log(`Search executed: "${searchTerm}"`);
      console.log("This would trigger an API call after 500ms delay");
      console.table({
        "Search Term": searchTerm,
        "Total Searches": appState.searchCount,
        Delay: "500ms",
      });

      document.getElementById("searchCount").textContent = appState.searchCount;
      document.getElementById("lastSearch").textContent = searchTerm;
    } else {
      console.log("Empty search term - no API call");
    }
    console.groupEnd();
  }, 500);

  console.log("New timeout set - waiting 500ms for user to stop typing");
};

window.loadSlowData = function () {
  appState.asyncStatus = "Loading slow data...";
  updateAsyncStatus();

  console.group("Async Data with Cleanup");
  console.info("Simulating slow API call with race condition protection");
  console.log("Setting cancelled flag to false");

  // Simulate race condition protection
  setTimeout(() => {
    console.log("Slow data loaded - checking if component still mounted");
    if (appState.asyncStatus.includes("Loading")) {
      appState.asyncStatus = "Slow data loaded";
      updateAsyncStatus();
      console.log("Data applied - component still mounted");
    } else {
      console.log(
        "Data discarded - component unmounted or newer request started"
      );
    }
    console.groupEnd();
  }, 3000);
};

window.loadFastData = function () {
  appState.asyncStatus = "Loading fast data...";
  updateAsyncStatus();

  console.group("Async Data with Cleanup");
  console.info("Simulating fast API call");

  setTimeout(() => {
    console.log("Fast data loaded");
    if (appState.asyncStatus.includes("Loading")) {
      appState.asyncStatus = "Fast data loaded";
      updateAsyncStatus();
      console.log("Fast data applied");
    }
    console.groupEnd();
  }, 1000);
};

window.cancelRequests = function () {
  console.group("Cancel Async Operations");
  console.info("Simulating cleanup function execution");
  console.log("Setting cancelled flag to true - preventing stale updates");

  appState.asyncStatus = "Cancelled";
  updateAsyncStatus();

  console.log("All pending requests cancelled");
  console.groupEnd();
};

function updateAsyncStatus() {
  document.getElementById("asyncStatus").textContent = appState.asyncStatus;
}

window.triggerAllEffects = function () {
  console.group("Multiple Effects Pattern");
  console.info("Triggering multiple useEffect hooks with different purposes");

  // Effect 1: Data fetching
  setTimeout(() => {
    appState.effects.data = "Data fetched";
    document.getElementById("dataEffect").textContent = appState.effects.data;
    console.log("Effect 1: Data fetching completed");
  }, 500);

  // Effect 2: Title update
  setTimeout(() => {
    appState.effects.title = "Title updated";
    document.getElementById("titleEffect").textContent = appState.effects.title;
    console.log("Effect 2: Document title updated");
  }, 1000);

  // Effect 3: Analytics
  setTimeout(() => {
    appState.effects.analytics = "Analytics sent";
    document.getElementById("analyticsEffect").textContent =
      appState.effects.analytics;
    console.log("Effect 3: Analytics event tracked");

    console.log("All effects completed - demonstrates separation of concerns");
    console.groupEnd();
  }, 1500);
};

// ===============================
// Copy Code Functionality
// ===============================

window.copyCode = function (button) {
  const codeBlock = button.nextElementSibling.textContent;
  const originalText = button.textContent;

  navigator.clipboard
    .writeText(codeBlock)
    .then(() => {
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

// ===============================
// Initialize on DOM Load
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  console.time("useEffect Lesson Load Time");

  initializeLesson();

  console.timeEnd("useEffect Lesson Load Time");
  console.info("useEffect lesson ready for interaction");
});
