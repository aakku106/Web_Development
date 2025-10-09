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

// Simulation Variables
let isSimulating = false;
let currentSimulation = null;

// Reset Demo
function resetDemo() {
  isSimulating = false;
  if (currentSimulation) {
    clearTimeout(currentSimulation);
  }

  document.getElementById("server-activity").innerHTML = "";
  document.getElementById("network-activity").innerHTML = "";
  document.getElementById("browser-activity").innerHTML = "";

  document.getElementById("ttfb-value").textContent = "-";
  document.getElementById("fcp-value").textContent = "-";
  document.getElementById("tti-value").textContent = "-";
  document.getElementById("total-value").textContent = "-";

  document.getElementById("viewport-content").innerHTML = `
        <div class="viewport-placeholder">
            Click a simulation button to see the rendering process
        </div>
    `;
}

// Simulate Client-Side Rendering
function simulateCSR() {
  if (isSimulating) return;
  isSimulating = true;
  resetDemo();

  const serverLog = document.getElementById("server-activity");
  const networkLog = document.getElementById("network-activity");
  const browserLog = document.getElementById("browser-activity");
  const viewport = document.getElementById("viewport-content");

  // Timeline for CSR
  const timeline = [
    {
      time: 0,
      action: () => {
        addLog(browserLog, "📤 Request sent to server");
      },
    },
    {
      time: 100,
      action: () => {
        addLog(serverLog, "📥 Received request");
        addLog(serverLog, "📄 Sending empty HTML shell");
        updateMetric("ttfb", "80ms");
      },
    },
    {
      time: 300,
      action: () => {
        addLog(networkLog, "📦 Downloading HTML");
        viewport.innerHTML = `
                    <div style="color: #999; text-align: center; padding: 50px;">
                        <div style="font-size: 2rem; margin-bottom: 10px;">⏳</div>
                        <div>Loading HTML...</div>
                    </div>
                `;
      },
    },
    {
      time: 600,
      action: () => {
        addLog(browserLog, "📄 HTML received (empty)");
        addLog(networkLog, "📦 Downloading JavaScript (500KB)");
      },
    },
    {
      time: 1500,
      action: () => {
        addLog(browserLog, "⚙️ Parsing JavaScript");
        addLog(browserLog, "🔄 Initializing React");
      },
    },
    {
      time: 2000,
      action: () => {
        addLog(browserLog, "🌐 Fetching data from API");
        viewport.innerHTML = `
                    <div style="color: #999; text-align: center; padding: 50px;">
                        <div class="loading-spinner"></div>
                        <div>Loading data...</div>
                    </div>
                `;
      },
    },
    {
      time: 2800,
      action: () => {
        addLog(serverLog, "📊 API request received");
        addLog(serverLog, "🔍 Fetching from database");
      },
    },
    {
      time: 3200,
      action: () => {
        addLog(networkLog, "📊 Receiving API data");
      },
    },
    {
      time: 3800,
      action: () => {
        addLog(browserLog, "🎨 Rendering components");
        updateMetric("fcp", "3.8s");
      },
    },
    {
      time: 4500,
      action: () => {
        addLog(browserLog, "✅ Content displayed");
        updateMetric("tti", "4.5s");
        updateMetric("total", "4.5s");
        viewport.innerHTML = `
                    <div style="padding: 20px;">
                        <h2 style="color: #333; margin-bottom: 15px;">Product Page</h2>
                        <div style="display: flex; gap: 20px; margin-bottom: 15px;">
                            <div style="width: 200px; height: 200px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 10px;"></div>
                            <div style="flex: 1;">
                                <h3 style="color: #667eea; margin-bottom: 10px;">Awesome Product</h3>
                                <p style="color: #666; margin-bottom: 10px;">This is a great product description that was loaded via API call.</p>
                                <p style="color: #333; font-size: 1.5rem; font-weight: bold;">$99.99</p>
                            </div>
                        </div>
                        <button style="background: #667eea; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 600;">Add to Cart</button>
                        <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107;">
                            <strong>⚠️ CSR Issues:</strong> Slow initial load, poor SEO, high JavaScript bundle
                        </div>
                    </div>
                `;
        isSimulating = false;
      },
    },
  ];

  executeTimeline(timeline);
}

// Simulate Server-Side Rendering
function simulateSSR() {
  if (isSimulating) return;
  isSimulating = true;
  resetDemo();

  const serverLog = document.getElementById("server-activity");
  const networkLog = document.getElementById("network-activity");
  const browserLog = document.getElementById("browser-activity");
  const viewport = document.getElementById("viewport-content");

  // Timeline for SSR
  const timeline = [
    {
      time: 0,
      action: () => {
        addLog(browserLog, "📤 Request sent to server");
      },
    },
    {
      time: 100,
      action: () => {
        addLog(serverLog, "📥 Received request");
        addLog(serverLog, "🔍 Fetching data from database");
      },
    },
    {
      time: 300,
      action: () => {
        addLog(serverLog, "📊 Data received");
        addLog(serverLog, "🎨 Rendering React on server");
      },
    },
    {
      time: 500,
      action: () => {
        addLog(serverLog, "📦 Generating full HTML");
        addLog(serverLog, "✅ HTML ready with content");
        updateMetric("ttfb", "450ms");
      },
    },
    {
      time: 700,
      action: () => {
        addLog(networkLog, "📦 Sending complete HTML");
      },
    },
    {
      time: 900,
      action: () => {
        addLog(browserLog, "📄 HTML received (with content)");
        updateMetric("fcp", "0.9s");
        viewport.innerHTML = `
                    <div style="padding: 20px; animation: fadeIn 0.5s ease;">
                        <h2 style="color: #333; margin-bottom: 15px;">Product Page</h2>
                        <div style="display: flex; gap: 20px; margin-bottom: 15px;">
                            <div style="width: 200px; height: 200px; background: linear-gradient(135deg, #11998e, #38ef7d); border-radius: 10px;"></div>
                            <div style="flex: 1;">
                                <h3 style="color: #11998e; margin-bottom: 10px;">Awesome Product</h3>
                                <p style="color: #666; margin-bottom: 10px;">This content was rendered on the server and sent ready to display!</p>
                                <p style="color: #333; font-size: 1.5rem; font-weight: bold;">$99.99</p>
                            </div>
                        </div>
                        <button style="background: #ccc; color: #666; border: none; padding: 12px 24px; border-radius: 8px; cursor: not-allowed; font-weight: 600;" disabled>Loading JS...</button>
                    </div>
                `;
      },
    },
    {
      time: 1200,
      action: () => {
        addLog(networkLog, "📦 Downloading JavaScript");
        addLog(browserLog, "⚙️ Parsing JavaScript");
      },
    },
    {
      time: 1800,
      action: () => {
        addLog(browserLog, "🔄 Hydrating React components");
      },
    },
    {
      time: 2200,
      action: () => {
        addLog(browserLog, "✅ Page is fully interactive");
        updateMetric("tti", "2.2s");
        updateMetric("total", "2.2s");
        viewport.innerHTML = `
                    <div style="padding: 20px;">
                        <h2 style="color: #333; margin-bottom: 15px;">Product Page</h2>
                        <div style="display: flex; gap: 20px; margin-bottom: 15px;">
                            <div style="width: 200px; height: 200px; background: linear-gradient(135deg, #11998e, #38ef7d); border-radius: 10px;"></div>
                            <div style="flex: 1;">
                                <h3 style="color: #11998e; margin-bottom: 10px;">Awesome Product</h3>
                                <p style="color: #666; margin-bottom: 10px;">This content was rendered on the server and sent ready to display!</p>
                                <p style="color: #333; font-size: 1.5rem; font-weight: bold;">$99.99</p>
                            </div>
                        </div>
                        <button style="background: #11998e; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 600;">Add to Cart</button>
                        <div style="margin-top: 20px; padding: 15px; background: #d4edda; border-radius: 8px; border-left: 4px solid #28a745;">
                            <strong>✅ SSR Benefits:</strong> Fast FCP, perfect SEO, instant content visibility
                        </div>
                    </div>
                `;
        isSimulating = false;
      },
    },
  ];

  executeTimeline(timeline);
}

// Simulate Static Site Generation
function simulateSSG() {
  if (isSimulating) return;
  isSimulating = true;
  resetDemo();

  const serverLog = document.getElementById("server-activity");
  const networkLog = document.getElementById("network-activity");
  const browserLog = document.getElementById("browser-activity");
  const viewport = document.getElementById("viewport-content");

  // Timeline for SSG
  const timeline = [
    {
      time: 0,
      action: () => {
        addLog(serverLog, "🏗️ Build time (not runtime)");
        addLog(serverLog, "🔍 Fetching all data");
      },
    },
    {
      time: 300,
      action: () => {
        addLog(serverLog, "🎨 Pre-rendering all pages");
        addLog(serverLog, "📦 Generating static HTML files");
      },
    },
    {
      time: 600,
      action: () => {
        addLog(serverLog, "✅ Static files ready");
        addLog(serverLog, "📤 Deployed to CDN");
        addLog(browserLog, "📤 Request sent");
      },
    },
    {
      time: 750,
      action: () => {
        addLog(networkLog, "⚡ CDN response (cached)");
        updateMetric("ttfb", "45ms");
      },
    },
    {
      time: 850,
      action: () => {
        addLog(browserLog, "📄 HTML received instantly");
        updateMetric("fcp", "0.4s");
        viewport.innerHTML = `
                    <div style="padding: 20px; animation: fadeIn 0.3s ease;">
                        <h2 style="color: #333; margin-bottom: 15px;">Product Page</h2>
                        <div style="display: flex; gap: 20px; margin-bottom: 15px;">
                            <div style="width: 200px; height: 200px; background: linear-gradient(135deg, #4facfe, #00f2fe); border-radius: 10px;"></div>
                            <div style="flex: 1;">
                                <h3 style="color: #4facfe; margin-bottom: 10px;">Awesome Product</h3>
                                <p style="color: #666; margin-bottom: 10px;">Pre-rendered at build time and served instantly from CDN!</p>
                                <p style="color: #333; font-size: 1.5rem; font-weight: bold;">$99.99</p>
                            </div>
                        </div>
                        <button style="background: #ccc; color: #666; border: none; padding: 12px 24px; border-radius: 8px; cursor: not-allowed; font-weight: 600;" disabled>Loading JS...</button>
                    </div>
                `;
      },
    },
    {
      time: 1100,
      action: () => {
        addLog(browserLog, "⚙️ Loading JavaScript");
        addLog(browserLog, "🔄 Hydrating");
      },
    },
    {
      time: 1400,
      action: () => {
        addLog(browserLog, "✅ Fully interactive");
        updateMetric("tti", "1.4s");
        updateMetric("total", "1.4s");
        viewport.innerHTML = `
                    <div style="padding: 20px;">
                        <h2 style="color: #333; margin-bottom: 15px;">Product Page</h2>
                        <div style="display: flex; gap: 20px; margin-bottom: 15px;">
                            <div style="width: 200px; height: 200px; background: linear-gradient(135deg, #4facfe, #00f2fe); border-radius: 10px;"></div>
                            <div style="flex: 1;">
                                <h3 style="color: #4facfe; margin-bottom: 10px;">Awesome Product</h3>
                                <p style="color: #666; margin-bottom: 10px;">Pre-rendered at build time and served instantly from CDN!</p>
                                <p style="color: #333; font-size: 1.5rem; font-weight: bold;">$99.99</p>
                            </div>
                        </div>
                        <button style="background: #4facfe; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 600;">Add to Cart</button>
                        <div style="margin-top: 20px; padding: 15px; background: #cfe2ff; border-radius: 8px; border-left: 4px solid #0d6efd;">
                            <strong>🚀 SSG Benefits:</strong> Fastest loading, lowest cost, perfect for static content
                        </div>
                    </div>
                `;
        isSimulating = false;
      },
    },
  ];

  executeTimeline(timeline);
}

// Helper Functions
function addLog(element, message) {
  const entry = document.createElement("div");
  entry.className = "log-entry";
  entry.textContent = message;
  element.appendChild(entry);

  // Auto-scroll to bottom
  element.scrollTop = element.scrollHeight;
}

function updateMetric(metricId, value) {
  const element = document.getElementById(`${metricId}-value`);
  element.textContent = value;
  element.style.animation = "pulse 0.5s ease";

  setTimeout(() => {
    element.style.animation = "";
  }, 500);
}

function executeTimeline(timeline) {
  timeline.forEach((event) => {
    currentSimulation = setTimeout(event.action, event.time);
  });
}

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.altKey) {
    if (e.key === "1") {
      document.querySelector("[onclick=\"showTab('basics')\"]").click();
    } else if (e.key === "2") {
      document.querySelector("[onclick=\"showTab('comparison')\"]").click();
    } else if (e.key === "3") {
      document.querySelector("[onclick=\"showTab('visualization')\"]").click();
    } else if (e.key === "4") {
      document.querySelector("[onclick=\"showTab('implementation')\"]").click();
    }
  }
});

// Pulse animation
const style = document.createElement("style");
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .loading-spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #667eea;
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

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 SSR Interactive Guide Loaded!");
  console.log("Keyboard shortcuts: Alt+1, Alt+2, Alt+3, Alt+4 to switch tabs");

  // Add tooltips
  document.querySelectorAll(".tab-btn").forEach((btn, index) => {
    btn.title = `Keyboard shortcut: Alt+${index + 1}`;
  });
});
