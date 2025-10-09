/** @format */

// Tab Navigation Functionality
function showTab(tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Remove active class from all tab buttons
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((btn) => {
    btn.classList.remove("active");
  });

  // Show selected tab content
  document.getElementById(tabName).classList.add("active");

  // Add active class to clicked button
  event.target.classList.add("active");
}

// Routing Simulator
function showRoute(route) {
  const output = document.getElementById("route-output");
  const routeExplanations = {
    "/": {
      route: "/",
      file: "pages/index.js",
      description: "Home page - Default route when visiting yoursite.com",
    },
    "/about": {
      route: "/about",
      file: "pages/about.js",
      description: "About page - Static route for yoursite.com/about",
    },
    "/contact": {
      route: "/contact",
      file: "pages/contact.js",
      description: "Contact page - Static route for yoursite.com/contact",
    },
    "/blog": {
      route: "/blog",
      file: "pages/blog/index.js",
      description: "Blog home - Nested route for yoursite.com/blog",
    },
    "/blog/[slug]": {
      route: "/blog/[slug]",
      file: "pages/blog/[slug].js",
      description:
        "Dynamic blog post - Matches yoursite.com/blog/any-post-name",
    },
  };

  const routeInfo = routeExplanations[route];

  output.innerHTML = `
        <div style="color: #4ecdc4; margin-bottom: 10px;">
            <strong>📁 File:</strong> ${routeInfo.file}
        </div>
        <div style="color: #ffa726; margin-bottom: 10px;">
            <strong>🌐 Route:</strong> ${routeInfo.route}
        </div>
        <div style="color: #e2e8f0; margin-bottom: 15px;">
            <strong>📝 Description:</strong> ${routeInfo.description}
        </div>
        <div style="color: #667eea; font-size: 0.8rem; font-style: italic;">
            💡 Next.js automatically creates routes based on file structure!
        </div>
    `;

  // Add visual feedback
  const files = document.querySelectorAll(".file, .folder");
  files.forEach((file) => {
    file.style.background = "#f8f9fa";
  });

  event.target.style.background = "#e3f2fd";
}

// Rendering Simulation
function simulateCSR() {
  const output = document.getElementById("rendering-output");
  const steps = [
    { text: "1. Browser requests page...", class: "csr" },
    { text: "2. Server sends empty HTML shell", class: "csr" },
    { text: "3. Browser downloads JavaScript bundle", class: "csr" },
    { text: "4. React starts rendering components", class: "csr" },
    { text: "5. Components fetch data from API", class: "csr" },
    { text: "6. Page content appears (3.2s later)", class: "csr" },
  ];

  output.innerHTML = '<div class="loading-simulation"></div>';
  const container = output.querySelector(".loading-simulation");

  let delay = 0;
  steps.forEach((step, index) => {
    setTimeout(() => {
      const stepDiv = document.createElement("div");
      stepDiv.className = `loading-step ${step.class} active`;
      stepDiv.textContent = step.text;
      container.appendChild(stepDiv);

      if (index === steps.length - 1) {
        setTimeout(() => {
          container.innerHTML += `
                        <div style="margin-top: 20px; padding: 15px; background: #f8d7da; border-radius: 8px; border-left: 4px solid #dc3545;">
                            <strong>⚠️ Issues with CSR:</strong><br>
                            • SEO challenges (empty HTML initially)<br>
                            • Slower initial page load<br>
                            • Poor performance on slow networks<br>
                            • Loading states needed for every page
                        </div>
                    `;
        }, 500);
      }
    }, delay);
    delay += 600;
  });
}

function simulateSSR() {
  const output = document.getElementById("rendering-output");
  const steps = [
    { text: "1. Browser requests page...", class: "ssr" },
    { text: "2. Server fetches data from API", class: "ssr" },
    { text: "3. Server renders complete HTML with data", class: "ssr" },
    { text: "4. Browser receives full page content", class: "ssr" },
    { text: "5. Page appears instantly (1.1s)", class: "ssr" },
    { text: "6. React hydrates for interactivity", class: "ssr" },
  ];

  output.innerHTML = '<div class="loading-simulation"></div>';
  const container = output.querySelector(".loading-simulation");

  let delay = 0;
  steps.forEach((step, index) => {
    setTimeout(() => {
      const stepDiv = document.createElement("div");
      stepDiv.className = `loading-step ${step.class} active`;
      stepDiv.textContent = step.text;
      container.appendChild(stepDiv);

      if (index === steps.length - 1) {
        setTimeout(() => {
          container.innerHTML += `
                        <div style="margin-top: 20px; padding: 15px; background: #d4edda; border-radius: 8px; border-left: 4px solid #28a745;">
                            <strong>✅ Benefits of SSR:</strong><br>
                            • Perfect SEO (full HTML from start)<br>
                            • Faster perceived performance<br>
                            • Better on slow devices/networks<br>
                            • Content visible immediately
                        </div>
                    `;
        }, 500);
      }
    }, delay);
    delay += 400; // Faster than CSR to show the difference
  });
}

// Terminal Simulator
function runCommand(command) {
  const output = document.getElementById("terminal-output");
  const cursor = document.querySelector(".cursor");

  if (command === "create-react-app") {
    cursor.style.display = "none";

    const commands = [
      "$ npx create-react-app my-react-app",
      "Creating a new React app in /my-react-app...",
      "",
      "Installing packages. This might take a couple of minutes.",
      "Installing react, react-dom, and react-scripts with cra-template...",
      "",
      "+ react@18.2.0",
      "+ react-dom@18.2.0",
      "+ react-scripts@5.0.1",
      "",
      "⚠️  Still need to install:",
      "  - react-router-dom (for routing)",
      "  - styled-components (for styling)",
      "  - axios (for API calls)",
      "  - And configure webpack, babel, etc.",
      "",
      "⏱️  Total setup time: ~2-4 hours",
      "📦 Bundle size: ~242 KB",
      "🔧 Manual configuration required",
      "",
      "Success! Created my-react-app",
    ];

    typeWriter(output, commands, 100);
  } else if (command === "create-next-app") {
    cursor.style.display = "none";

    const commands = [
      "$ npx create-next-app@latest my-nextjs-app",
      "✔ What is your project named? my-nextjs-app",
      "✔ Would you like to use TypeScript? No",
      "✔ Would you like to use ESLint? Yes",
      "✔ Would you like to use Tailwind CSS? No",
      "✔ Would you like to use `src/` directory? No",
      "✔ Would you like to use App Router? Yes",
      "✔ Would you like to customize the default import alias? No",
      "",
      "Creating a new Next.js app in /my-nextjs-app...",
      "",
      "Installing dependencies...",
      "+ next@14.0.0",
      "+ react@18.2.0",
      "+ react-dom@18.2.0",
      "",
      "✅ Everything included out of the box:",
      "  ✓ File-based routing",
      "  ✓ Server-side rendering",
      "  ✓ API routes",
      "  ✓ Image optimization",
      "  ✓ Code splitting",
      "  ✓ TypeScript support",
      "",
      "⏱️  Total setup time: ~2 minutes",
      "📦 Bundle size: ~156 KB (code split)",
      "🚀 Zero configuration needed",
      "",
      "Success! Created my-nextjs-app",
      "",
      'Run "npm run dev" to start developing!',
    ];

    typeWriter(output, commands, 80);
  }
}

function typeWriter(element, lines, speed) {
  let lineIndex = 0;
  let charIndex = 0;

  function type() {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        element.innerHTML += lines[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
      } else {
        element.innerHTML += "<br>";
        lineIndex++;
        charIndex = 0;
        setTimeout(type, speed * 2); // Pause between lines
      }
    } else {
      // Show cursor again when done
      document.querySelector(".cursor").style.display = "inline";
    }
  }

  type();
}

function clearTerminal() {
  document.getElementById("terminal-output").innerHTML = "";
  document.querySelector(".cursor").style.display = "inline";
}

// Performance Metrics Animation
function animateMetrics() {
  const loadingBars = document.querySelectorAll(".loading-bar .progress");
  const scorecircles = document.querySelectorAll(".score-circle");
  const sizeBars = document.querySelectorAll(".size-bar .size");

  // Animate loading bars
  loadingBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0%";
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });

  // Animate size bars
  sizeBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0%";
    setTimeout(() => {
      bar.style.width = width;
    }, 800);
  });

  // Animate score circles
  scorecircles.forEach((circle, index) => {
    circle.style.transform = "scale(0)";
    setTimeout(() => {
      circle.style.transform = "scale(1)";
      circle.style.transition = "transform 0.5s ease";
    }, 1000 + index * 200);
  });
}

// Feature Cards Stagger Animation
function animateFeatures() {
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.transition = "all 0.5s ease";
    }, index * 150);
  });
}

// Intersection Observer for Animations
function setupAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("performance-grid")) {
          animateMetrics();
        } else if (entry.target.classList.contains("features-grid")) {
          animateFeatures();
        }
      }
    });
  }, observerOptions);

  // Observe elements
  const performanceGrid = document.querySelector(".performance-grid");
  const featuresGrid = document.querySelector(".features-grid");

  if (performanceGrid) observer.observe(performanceGrid);
  if (featuresGrid) observer.observe(featuresGrid);
}

// Smooth Scrolling for Internal Links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Keyboard Navigation for Tabs
function setupKeyboardNavigation() {
  document.addEventListener("keydown", function (e) {
    if (e.altKey) {
      const tabs = ["routing", "rendering", "performance", "setup"];
      const currentTab = document.querySelector(".tab-content.active").id;
      const currentIndex = tabs.indexOf(currentTab);

      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
        let newIndex;

        if (e.key === "ArrowLeft") {
          newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        } else {
          newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        }

        // Trigger tab change
        const newTabButton = document.querySelector(
          `[onclick="showTab('${tabs[newIndex]}')"]`
        );
        if (newTabButton) {
          newTabButton.click();
        }
      }
    }
  });
}

// Copy Code Functionality
function setupCodeCopying() {
  document.querySelectorAll(".code-block").forEach((block) => {
    // Add copy button
    const copyBtn = document.createElement("button");
    copyBtn.textContent = "📋 Copy";
    copyBtn.className = "copy-btn";
    copyBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(255,255,255,0.1);
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.8rem;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

    block.style.position = "relative";
    block.appendChild(copyBtn);

    // Show/hide copy button
    block.addEventListener("mouseenter", () => {
      copyBtn.style.opacity = "1";
    });

    block.addEventListener("mouseleave", () => {
      copyBtn.style.opacity = "0";
    });

    // Copy functionality
    copyBtn.addEventListener("click", async () => {
      const code = block.querySelector("code").textContent;
      try {
        await navigator.clipboard.writeText(code);
        copyBtn.textContent = "✅ Copied!";
        setTimeout(() => {
          copyBtn.textContent = "📋 Copy";
        }, 2000);
      } catch (err) {
        console.error("Failed to copy: ", err);
        copyBtn.textContent = "❌ Failed";
        setTimeout(() => {
          copyBtn.textContent = "📋 Copy";
        }, 2000);
      }
    });
  });
}

// Progress Tracking
function setupProgressTracking() {
  const sections = ["routing", "rendering", "performance", "setup"];
  let visitedSections = new Set();

  // Track section visits
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabName = btn.getAttribute("onclick").match(/'([^']+)'/)[1];
      visitedSections.add(tabName);
      updateProgress();
    });
  });

  function updateProgress() {
    const progress = (visitedSections.size / sections.length) * 100;

    // Create or update progress bar
    let progressBar = document.querySelector(".progress-tracker");
    if (!progressBar) {
      progressBar = document.createElement("div");
      progressBar.className = "progress-tracker";
      progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: ${progress}%;
                height: 4px;
                background: linear-gradient(90deg, #667eea, #764ba2);
                transition: width 0.5s ease;
                z-index: 1000;
            `;
      document.body.appendChild(progressBar);
    } else {
      progressBar.style.width = `${progress}%`;
    }

    // Show completion message
    if (visitedSections.size === sections.length) {
      setTimeout(() => {
        alert(
          "🎉 Congratulations! You've explored all Next.js vs React comparisons. Ready to start building with Next.js?"
        );
      }, 1000);
    }
  }
}

// Easter Egg: Konami Code
function setupEasterEgg() {
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ];
  let konamiIndex = 0;

  document.addEventListener("keydown", (e) => {
    if (e.code === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        // Easter egg triggered!
        document.body.style.animation = "rainbow 2s infinite";
        document.head.insertAdjacentHTML(
          "beforeend",
          `
                    <style>
                        @keyframes rainbow {
                            0% { filter: hue-rotate(0deg); }
                            100% { filter: hue-rotate(360deg); }
                        }
                    </style>
                `
        );

        setTimeout(() => {
          document.body.style.animation = "";
          alert(
            "🌈 You found the hidden rainbow mode! You're definitely ready for advanced Next.js features!"
          );
        }, 4000);

        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
}

// Initialize Everything
document.addEventListener("DOMContentLoaded", function () {
  // Setup all functionality
  setupAnimations();
  setupSmoothScrolling();
  setupKeyboardNavigation();
  setupCodeCopying();
  setupProgressTracking();
  setupEasterEgg();

  // Add helpful tooltips
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((btn, index) => {
    btn.title = `Alt + Arrow Keys to navigate tabs quickly`;
  });

  // Add loading states to interactive elements
  document.querySelectorAll(".demo-btn, .terminal-cmd").forEach((btn) => {
    btn.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  });

  // Console message for developers
  console.log(`
    🚀 Welcome to Next.js vs React Interactive Guide!
    
    Keyboard shortcuts:
    - Alt + Left/Right arrows: Navigate tabs
    - Hover over code blocks: Copy button appears
    - Try the Konami code for a surprise! ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA
    
    Built with vanilla JavaScript - no frameworks needed for this demo! 😉
    `);
});

// Service Worker Registration (for offline functionality)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
