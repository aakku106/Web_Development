/** @format */

// Tab Navigation
function showTab(tabName) {
  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Remove active class from all buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Show selected tab
  document.getElementById(tabName).classList.add("active");
  event.target.classList.add("active");
}

// Copy Code Functionality
async function copyCode(button) {
  const codeBlock = button.closest(".code-example").querySelector("code");
  const text = codeBlock.textContent;

  try {
    await navigator.clipboard.writeText(text);
    const originalText = button.textContent;
    button.textContent = "✅ Copied!";
    button.style.background = "rgba(39, 174, 96, 0.3)";

    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = "";
    }, 2000);
  } catch (err) {
    console.error("Failed to copy:", err);
    button.textContent = "❌ Failed";
    setTimeout(() => {
      button.textContent = "📋 Copy";
    }, 2000);
  }
}

// Show/hide request body based on method
document.addEventListener("DOMContentLoaded", () => {
  const methodSelect = document.getElementById("method");
  const bodyGroup = document.getElementById("bodyGroup");

  if (methodSelect && bodyGroup) {
    methodSelect.addEventListener("change", () => {
      const method = methodSelect.value;
      if (method === "POST" || method === "PUT") {
        bodyGroup.style.display = "block";
      } else {
        bodyGroup.style.display = "none";
      }
    });
  }
});

// Test API Function
async function testAPI() {
  const method = document.getElementById("method").value;
  const endpoint = document.getElementById("endpoint").value;
  const requestBody = document.getElementById("requestBody").value;
  const responseOutput = document.getElementById("responseOutput");

  // Show loading
  responseOutput.textContent = "⏳ Sending request...";
  responseOutput.style.color = "#999";

  try {
    // Simulate API request (since we're testing locally)
    const mockResponse = await simulateAPICall(method, endpoint, requestBody);

    // Format and display response
    const formatted = JSON.stringify(mockResponse, null, 2);
    responseOutput.textContent = formatted;
    responseOutput.style.color = "#e2e8f0";
  } catch (error) {
    responseOutput.textContent = `❌ Error: ${error.message}`;
    responseOutput.style.color = "#ff6b6b";
  }
}

// Simulate API Call (mock responses for demonstration)
async function simulateAPICall(method, endpoint, body) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Parse body if provided
  let parsedBody = null;
  if (body) {
    try {
      parsedBody = JSON.parse(body);
    } catch (e) {
      throw new Error("Invalid JSON in request body");
    }
  }

  // Mock responses based on endpoint and method
  if (endpoint === "/api/hello" || endpoint === "api/hello") {
    return {
      message: "Hello from API!",
      timestamp: new Date().toISOString(),
      method: method,
    };
  }

  if (endpoint.includes("/api/users") || endpoint.includes("api/users")) {
    if (method === "GET") {
      return {
        users: [
          { id: 1, name: "Alice", email: "alice@example.com" },
          { id: 2, name: "Bob", email: "bob@example.com" },
          { id: 3, name: "Charlie", email: "charlie@example.com" },
        ],
        total: 3,
      };
    }

    if (method === "POST") {
      return {
        success: true,
        message: "User created successfully",
        user: {
          id: Date.now(),
          ...parsedBody,
          createdAt: new Date().toISOString(),
        },
      };
    }

    if (method === "PUT") {
      return {
        success: true,
        message: "User updated successfully",
        user: {
          id: 123,
          ...parsedBody,
          updatedAt: new Date().toISOString(),
        },
      };
    }

    if (method === "DELETE") {
      return {
        success: true,
        message: "User deleted successfully",
        deletedId: 123,
      };
    }
  }

  if (endpoint.includes("/api/products") || endpoint.includes("api/products")) {
    if (method === "GET") {
      return {
        products: [
          { id: 1, name: "Laptop", price: 999.99, stock: 15 },
          { id: 2, name: "Mouse", price: 29.99, stock: 50 },
          { id: 3, name: "Keyboard", price: 79.99, stock: 30 },
        ],
        total: 3,
      };
    }

    if (method === "POST") {
      return {
        success: true,
        message: "Product created successfully",
        product: {
          id: Date.now(),
          ...parsedBody,
          createdAt: new Date().toISOString(),
        },
      };
    }
  }

  if (endpoint.includes("/api/auth/login") || endpoint.includes("auth/login")) {
    if (method === "POST") {
      const { email, password } = parsedBody || {};

      if (!email || !password) {
        throw new Error("Email and password are required");
      }

      if (email === "user@example.com" && password === "password123") {
        return {
          success: true,
          message: "Login successful",
          user: {
            id: 1,
            email: email,
            name: "John Doe",
          },
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        };
      } else {
        throw new Error("Invalid credentials");
      }
    }
  }

  // Default response for unknown endpoints
  return {
    message: "API endpoint reached",
    endpoint: endpoint,
    method: method,
    timestamp: new Date().toISOString(),
  };
}

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.altKey) {
    if (e.key === "1") {
      const basicsBtn = document.querySelector(
        "[onclick=\"showTab('basics')\"]"
      );
      if (basicsBtn) basicsBtn.click();
    } else if (e.key === "2") {
      const methodsBtn = document.querySelector(
        "[onclick=\"showTab('methods')\"]"
      );
      if (methodsBtn) methodsBtn.click();
    } else if (e.key === "3") {
      const examplesBtn = document.querySelector(
        "[onclick=\"showTab('examples')\"]"
      );
      if (examplesBtn) examplesBtn.click();
    } else if (e.key === "4") {
      const testingBtn = document.querySelector(
        "[onclick=\"showTab('testing')\"]"
      );
      if (testingBtn) testingBtn.click();
    }
  }
});

// Interactive Examples
function runExample(exampleType) {
  console.log(`Running example: ${exampleType}`);

  switch (exampleType) {
    case "get":
      console.log("GET Request Example:");
      console.log(
        "fetch('/api/users').then(res => res.json()).then(console.log)"
      );
      break;

    case "post":
      console.log("POST Request Example:");
      console.log(`fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John', email: 'john@example.com' })
}).then(res => res.json()).then(console.log)`);
      break;

    case "put":
      console.log("PUT Request Example:");
      console.log(`fetch('/api/users/123', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John Updated' })
}).then(res => res.json()).then(console.log)`);
      break;

    case "delete":
      console.log("DELETE Request Example:");
      console.log(
        "fetch('/api/users/123', { method: 'DELETE' }).then(res => res.json()).then(console.log)"
      );
      break;
  }
}

// Add visual feedback for API testing
function addVisualFeedback() {
  const testBtn = document.querySelector(".test-btn");
  if (testBtn) {
    testBtn.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 100);
    });
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 API Routing Interactive Guide Loaded!");
  console.log("Keyboard shortcuts: Alt+1, Alt+2, Alt+3, Alt+4 to switch tabs");

  // Add tooltips
  document.querySelectorAll(".tab-btn").forEach((btn, index) => {
    btn.title = `Keyboard shortcut: Alt+${index + 1}`;
  });

  // Add visual feedback
  addVisualFeedback();

  // Add example JSON to request body
  const requestBodyTextarea = document.getElementById("requestBody");
  if (requestBodyTextarea) {
    requestBodyTextarea.placeholder = JSON.stringify(
      {
        name: "John Doe",
        email: "john@example.com",
        age: 25,
      },
      null,
      2
    );
  }
});

// Add animations
const style = document.createElement("style");
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .loading-spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #11998e;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 15px;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
