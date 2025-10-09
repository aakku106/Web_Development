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

// Simulate Client-Side Rendering (CSR)
function simulateCSR() {
  if (isSimulating) return;
  isSimulating = true;
  resetDemo();

  const serverLog = document.getElementById("server-activity");
  const networkLog = document.getElementById("network-activity");
  const browserLog = document.getElementById("browser-activity");
  const viewport = document.getElementById("viewport-content");

  // Timeline for CSR - showing the slower initial load
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
        addLog(networkLog, "📦 Downloading HTML (5KB)");
        viewport.innerHTML = `
                    <div style="color: #999; text-align: center; padding: 50px;">
                        <div style="font-size: 2rem; margin-bottom: 10px;">⏳</div>
                        <div>Downloading HTML...</div>
                    </div>
                `;
      },
    },
    {
      time: 600,
      action: () => {
        addLog(browserLog, "📄 HTML received (empty shell)");
        addLog(browserLog, "👀 Looking for JavaScript files");
        viewport.innerHTML = `
                    <div style="color: #999; text-align: center; padding: 50px;">
                        <div style="font-size: 2rem; margin-bottom: 10px;">📦</div>
                        <div>Empty page... waiting for JavaScript</div>
                    </div>
                `;
      },
    },
    {
      time: 900,
      action: () => {
        addLog(networkLog, "📦 Downloading JavaScript bundle (500KB)");
        addLog(networkLog, "⏳ This may take a while...");
      },
    },
    {
      time: 1500,
      action: () => {
        addLog(browserLog, "⚙️ Parsing JavaScript");
        addLog(browserLog, "🔄 Initializing React");
        viewport.innerHTML = `
                    <div style="color: #999; text-align: center; padding: 50px;">
                        <div class="loading-spinner"></div>
                        <div>Loading React...</div>
                    </div>
                `;
      },
    },
    {
      time: 2000,
      action: () => {
        addLog(browserLog, "🎨 Building virtual DOM");
        addLog(browserLog, "📍 Mounting React components");
      },
    },
    {
      time: 2500,
      action: () => {
        addLog(browserLog, "🌐 Fetching data from API");
        updateMetric("fcp", "2.5s");
        viewport.innerHTML = `
                    <div style="padding: 20px;">
                        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                            <div style="height: 30px; width: 200px; background: #dee2e6; border-radius: 5px; margin-bottom: 15px;"></div>
                            <div style="height: 20px; width: 100%; background: #dee2e6; border-radius: 5px; margin-bottom: 10px;"></div>
                            <div style="height: 20px; width: 80%; background: #dee2e6; border-radius: 5px;"></div>
                        </div>
                        <div class="loading-spinner"></div>
                        <div style="text-align: center; color: #666;">Loading data...</div>
                    </div>
                `;
      },
    },
    {
      time: 3200,
      action: () => {
        addLog(serverLog, "📊 API request received");
        addLog(serverLog, "🔍 Fetching from database");
      },
    },
    {
      time: 3800,
      action: () => {
        addLog(networkLog, "📊 Receiving API data (200KB)");
        addLog(browserLog, "✅ Data received");
      },
    },
    {
      time: 4500,
      action: () => {
        addLog(browserLog, "🎨 Re-rendering with data");
        addLog(browserLog, "✅ Content displayed!");
        updateMetric("tti", "4.5s");
        updateMetric("total", "4.5s");
        viewport.innerHTML = `
                    <div style="padding: 20px;">
                        <h2 style="color: #333; margin-bottom: 15px;">Product Dashboard</h2>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 20px;">
                            <div style="padding: 20px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 10px; color: white;">
                                <div style="font-size: 2rem; font-weight: bold;">245</div>
                                <div>Total Products</div>
                            </div>
                            <div style="padding: 20px; background: linear-gradient(135deg, #ee0979, #ff6a00); border-radius: 10px; color: white;">
                                <div style="font-size: 2rem; font-weight: bold;">$12.5K</div>
                                <div>Total Sales</div>
                            </div>
                        </div>
                        <div style="background: white; border: 2px solid #e9ecef; padding: 20px; border-radius: 10px;">
                            <h3 style="color: #333; margin-bottom: 15px;">Recent Products</h3>
                            <ul style="list-style: none;">
                                <li style="padding: 10px; background: #f8f9fa; margin: 5px 0; border-radius: 5px;">Product A - $99.99</li>
                                <li style="padding: 10px; background: #f8f9fa; margin: 5px 0; border-radius: 5px;">Product B - $149.99</li>
                                <li style="padding: 10px; background: #f8f9fa; margin: 5px 0; border-radius: 5px;">Product C - $79.99</li>
                            </ul>
                        </div>
                        <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107;">
                            <strong>⚠️ CSR Trade-offs:</strong> Slow initial load (4.5s), but interactions are now instant!
                        </div>
                    </div>
                `;
        isSimulating = false;
      },
    },
  ];

  executeTimeline(timeline);
}

// Simulate Server-Side Rendering (SSR) for comparison
function simulateSSR() {
  if (isSimulating) return;
  isSimulating = true;
  resetDemo();

  const serverLog = document.getElementById("server-activity");
  const networkLog = document.getElementById("network-activity");
  const browserLog = document.getElementById("browser-activity");
  const viewport = document.getElementById("viewport-content");

  // Timeline for SSR - showing faster initial load
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
        addLog(serverLog, "📦 Generating complete HTML");
        addLog(serverLog, "✅ HTML ready with content!");
        updateMetric("ttfb", "450ms");
      },
    },
    {
      time: 700,
      action: () => {
        addLog(networkLog, "📦 Sending full HTML (150KB)");
      },
    },
    {
      time: 900,
      action: () => {
        addLog(browserLog, "📄 HTML received with content!");
        updateMetric("fcp", "0.9s");
        viewport.innerHTML = `
                    <div style="padding: 20px; animation: fadeIn 0.5s ease;">
                        <h2 style="color: #333; margin-bottom: 15px;">Product Dashboard</h2>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 20px;">
                            <div style="padding: 20px; background: linear-gradient(135deg, #11998e, #38ef7d); border-radius: 10px; color: white;">
                                <div style="font-size: 2rem; font-weight: bold;">245</div>
                                <div>Total Products</div>
                            </div>
                            <div style="padding: 20px; background: linear-gradient(135deg, #11998e, #38ef7d); border-radius: 10px; color: white;">
                                <div style="font-size: 2rem; font-weight: bold;">$12.5K</div>
                                <div>Total Sales</div>
                            </div>
                        </div>
                        <div style="background: white; border: 2px solid #e9ecef; padding: 20px; border-radius: 10px; opacity: 0.7;">
                            <h3 style="color: #333; margin-bottom: 15px;">Recent Products</h3>
                            <ul style="list-style: none;">
                                <li style="padding: 10px; background: #f8f9fa; margin: 5px 0; border-radius: 5px;">Product A - $99.99</li>
                                <li style="padding: 10px; background: #f8f9fa; margin: 5px 0; border-radius: 5px;">Product B - $149.99</li>
                                <li style="padding: 10px; background: #f8f9fa; margin: 5px 0; border-radius: 5px;">Product C - $79.99</li>
                            </ul>
                        </div>
                        <div style="margin-top: 20px; padding: 15px; background: #cfe2ff; border-radius: 8px;">
                            <strong>⚠️</strong> Content visible, but not interactive yet...
                        </div>
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
        addLog(browserLog, "✅ Page is fully interactive!");
        updateMetric("tti", "2.2s");
        updateMetric("total", "2.2s");
        viewport.innerHTML = `
                    <div style="padding: 20px;">
                        <h2 style="color: #333; margin-bottom: 15px;">Product Dashboard</h2>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 20px;">
                            <div style="padding: 20px; background: linear-gradient(135deg, #11998e, #38ef7d); border-radius: 10px; color: white;">
                                <div style="font-size: 2rem; font-weight: bold;">245</div>
                                <div>Total Products</div>
                            </div>
                            <div style="padding: 20px; background: linear-gradient(135deg, #11998e, #38ef7d); border-radius: 10px; color: white;">
                                <div style="font-size: 2rem; font-weight: bold;">$12.5K</div>
                                <div>Total Sales</div>
                            </div>
                        </div>
                        <div style="background: white; border: 2px solid #e9ecef; padding: 20px; border-radius: 10px;">
                            <h3 style="color: #333; margin-bottom: 15px;">Recent Products</h3>
                            <ul style="list-style: none;">
                                <li style="padding: 10px; background: #f8f9fa; margin: 5px 0; border-radius: 5px;">Product A - $99.99</li>
                                <li style="padding: 10px; background: #f8f9fa; margin: 5px 0; border-radius: 5px;">Product B - $149.99</li>
                                <li style="padding: 10px; background: #f8f9fa; margin: 5px 0; border-radius: 5px;">Product C - $79.99</li>
                            </ul>
                        </div>
                        <div style="margin-top: 20px; padding: 15px; background: #d4edda; border-radius: 8px; border-left: 4px solid #28a745;">
                            <strong>✅ SSR Benefits:</strong> Fast content visibility (0.9s), fully interactive in 2.2s!
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
      const basicsBtn = document.querySelector(
        "[onclick=\"showTab('basics')\"]"
      );
      if (basicsBtn) basicsBtn.click();
    } else if (e.key === "2") {
      const comparisonBtn = document.querySelector(
        "[onclick=\"showTab('comparison')\"]"
      );
      if (comparisonBtn) comparisonBtn.click();
    } else if (e.key === "3") {
      const visualizationBtn = document.querySelector(
        "[onclick=\"showTab('visualization')\"]"
      );
      if (visualizationBtn) visualizationBtn.click();
    } else if (e.key === "4") {
      const implementationBtn = document.querySelector(
        "[onclick=\"showTab('implementation')\"]"
      );
      if (implementationBtn) implementationBtn.click();
    }
  }
});

// Add animations
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
        border-top: 4px solid #ee0979;
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
  console.log("🚀 CSR Interactive Guide Loaded!");
  console.log("Keyboard shortcuts: Alt+1, Alt+2, Alt+3, Alt+4 to switch tabs");

  // Add tooltips
  document.querySelectorAll(".tab-btn").forEach((btn, index) => {
    btn.title = `Keyboard shortcut: Alt+${index + 1}`;
  });
});
