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
    button.style.background = "rgba(34, 197, 94, 0.9)";

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

// Simulate Navigation
function simulateNavigation(path, pageName) {
  const output = document.getElementById("navigationOutput");

  // Show loading state
  output.innerHTML = "🔄 Navigating...";
  output.style.background = "#fef3c7";
  output.style.borderColor = "#f59e0b";

  // Simulate navigation delay (representing prefetch and instant navigation)
  setTimeout(() => {
    output.innerHTML = `
            Current Page: <strong>${pageName}</strong> (${path})<br>
            <small style="color: #22c55e;">✅ Navigation completed instantly with Next.js Link!</small>
        `;
    output.style.background = "white";
    output.style.borderColor = "#667eea";
    output.classList.add("animate-in");
  }, 300);
}

// Initialize page
document.addEventListener("DOMContentLoaded", function () {
  console.log("🔗 Next.js Link Component Guide Loaded!");
  console.log(
    "💡 Tip: Use Link component for fast client-side navigation in Next.js"
  );

  // Add keyboard shortcuts for tabs
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
        const propsBtn = document.querySelector(
          "[onclick=\"showTab('props')\"]"
        );
        if (propsBtn) propsBtn.click();
      } else if (e.key === "4") {
        const examplesBtn = document.querySelector(
          "[onclick=\"showTab('examples')\"]"
        );
        if (examplesBtn) examplesBtn.click();
      }
    }
  });

  // Add tooltips to tab buttons
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((btn, index) => {
    btn.title = `Keyboard shortcut: Alt+${index + 1}`;
  });

  // Add hover effects to demo links
  const demoLinks = document.querySelectorAll(".demo-link");
  demoLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove active from all
      demoLinks.forEach((l) => l.classList.remove("active"));
      // Add active to clicked
      this.classList.add("active");
    });
  });

  // Add click animation to buttons
  const buttons = document.querySelectorAll(".demo-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    });
  });

  // Add animation to prop cards
  const propCards = document.querySelectorAll(".prop-card");
  propCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.animation = "slideIn 0.5s ease-out";
    }, index * 100);
  });

  // Add animation to benefit cards
  const benefitCards = document.querySelectorAll(".benefit-card");
  benefitCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.animation = "slideIn 0.5s ease-out";
    }, index * 100);
  });
});

// Interactive navigation simulator
class NavigationSimulator {
  constructor() {
    this.currentPage = "/";
    this.history = ["/"];
  }

  navigate(path) {
    this.history.push(path);
    this.currentPage = path;
    return {
      success: true,
      from: this.history[this.history.length - 2],
      to: path,
      message: "Navigation completed",
    };
  }

  back() {
    if (this.history.length > 1) {
      this.history.pop();
      this.currentPage = this.history[this.history.length - 1];
      return { success: true, current: this.currentPage };
    }
    return { success: false, message: "No previous page" };
  }

  getCurrentPath() {
    return this.currentPage;
  }

  getHistory() {
    return this.history;
  }
}

// Create global navigation simulator
const navSimulator = new NavigationSimulator();

// Console helper functions for learning
window.linkHelpers = {
  // Show link best practices
  bestPractices: function () {
    console.log("🔗 Next.js Link Best Practices:");
    console.log("✅ Use Link for internal navigation");
    console.log("✅ Use <a> for external links");
    console.log("✅ Enable prefetch for important pages");
    console.log("✅ Use descriptive link text");
    console.log("❌ Don't nest <a> inside Link (Next.js 13+)");
    console.log("❌ Don't use Link for external URLs");
  },

  // Show common patterns
  patterns: function () {
    console.log("🎨 Common Link Patterns:");
    console.log('\n1. Simple navigation:\n<Link href="/about">About</Link>');
    console.log("\n2. Dynamic routes:\n<Link href={`/blog/${id}`}>Post</Link>");
    console.log(
      '\n3. Query params:\n<Link href="/search?q=nextjs">Search</Link>'
    );
    console.log(
      '\n4. Object href:\n<Link href={{ pathname: "/page", query: { id: 1 } }}>Page</Link>'
    );
  },

  // Show props explanation
  props: function () {
    console.log("📋 Link Component Props:");
    console.log("• href (required): Destination path");
    console.log("• prefetch (optional): Auto-load page in background");
    console.log("• replace (optional): Replace history instead of push");
    console.log("• scroll (optional): Scroll to top after navigation");
  },

  // Compare with traditional navigation
  compare: function () {
    console.log("⚖️ Link vs Anchor Tag:");
    console.log("\nTraditional <a> tag:");
    console.log("  ❌ Full page reload");
    console.log("  ❌ Loses state");
    console.log("  ❌ Slower navigation");
    console.log("\nNext.js Link:");
    console.log("  ✅ Client-side navigation");
    console.log("  ✅ Preserves state");
    console.log("  ✅ Instant navigation");
    console.log("  ✅ Auto prefetching");
  },
};

// Add helpful console message
console.log("💡 Try these helper functions in console:");
console.log("  linkHelpers.bestPractices() - Show best practices");
console.log("  linkHelpers.patterns() - Show common patterns");
console.log("  linkHelpers.props() - Show Link props");
console.log("  linkHelpers.compare() - Compare Link vs <a>");

// Add smooth scroll behavior
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

// Add loading animation style
const style = document.createElement("style");
style.textContent = `
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
    
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
    
    .loading {
        animation: pulse 1.5s ease-in-out infinite;
    }
    
    .bounce {
        animation: bounce 0.5s ease;
    }
`;
document.head.appendChild(style);

// Performance monitoring
window.addEventListener("load", () => {
  console.log("✅ Page loaded successfully!");
  console.log(
    "⚡ In Next.js, Link component makes navigation even faster with prefetching!"
  );
});
