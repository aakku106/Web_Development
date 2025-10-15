// Full Stack Web Development Course - Interactive Features
// Author: GitHub Copilot
// Purpose: Enhance user experience with interactive features

class FullStackCourse {
  constructor() {
    this.totalLessons = 49;
    this.completedLessons = this.getCompletedLessons();
    this.currentSection = "frontend";
    this.init();
  }

  init() {
    this.updateProgress();
    this.setupEventListeners();
    this.setupAnimations();
    this.setupSearch();
    this.setupThemeToggle();
    this.setupSectionNavigation();
    this.loadUserPreferences();
  }

  // Progress Management
  getCompletedLessons() {
    return JSON.parse(localStorage.getItem("completedLessons") || "[]");
  }

  markLessonComplete(lessonTitle) {
    if (!this.completedLessons.includes(lessonTitle)) {
      this.completedLessons.push(lessonTitle);
      localStorage.setItem(
        "completedLessons",
        JSON.stringify(this.completedLessons)
      );
      this.updateProgress();
      this.showCompletionMessage(lessonTitle);
    }
  }

  updateProgress() {
    const progressPercentage = Math.round(
      (this.completedLessons.length / this.totalLessons) * 100
    );
    const progressFill = document.getElementById("progressFill");

    if (progressFill) {
      progressFill.style.width = progressPercentage + "%";
      progressFill.textContent = progressPercentage + "% Complete";

      // Update stats
      this.updateStats();
    }
  }

  updateStats() {
    const completedCount = this.completedLessons.length;
    const remainingCount = this.totalLessons - completedCount;

    // Update completion statistics if elements exist
    const completedStat = document.querySelector('[data-stat="completed"]');
    const remainingStat = document.querySelector('[data-stat="remaining"]');

    if (completedStat) completedStat.textContent = completedCount;
    if (remainingStat) remainingStat.textContent = remainingCount;
  }

  showCompletionMessage(lessonTitle) {
    this.showNotification(`✅ Completed: ${lessonTitle}`, "success");
  }

  // Event Listeners
  setupEventListeners() {
    // Lesson completion tracking
    document.querySelectorAll(".lesson-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        const lessonCard = e.target.closest(".lesson-card");
        const lessonTitle = lessonCard.querySelector("h4").textContent;
        this.markLessonComplete(lessonTitle);
        this.addVisualCompletionIndicator(lessonCard);
      });
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case "f":
            e.preventDefault();
            this.focusSearch();
            break;
          case "s":
            e.preventDefault();
            this.saveProgress();
            break;
        }
      }
    });
  }

  addVisualCompletionIndicator(lessonCard) {
    if (!lessonCard.querySelector(".completion-badge")) {
      const badge = document.createElement("div");
      badge.className = "completion-badge";
      badge.innerHTML = "✅";
      badge.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                background: #4CAF50;
                color: white;
                border-radius: 50%;
                width: 25px;
                height: 25px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                animation: bounceIn 0.5s ease;
            `;
      lessonCard.style.position = "relative";
      lessonCard.appendChild(badge);
    }
  }

  // Animations
  setupAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeInUp 0.6s ease forwards";
          entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
        }
      });
    }, observerOptions);

    document.querySelectorAll(".lesson-card, .stat-card").forEach((card) => {
      observer.observe(card);
    });

    // Add CSS animations
    this.addAnimationStyles();
  }

  addAnimationStyles() {
    const style = document.createElement("style");
    style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes bounceIn {
                0% {
                    transform: scale(0);
                }
                50% {
                    transform: scale(1.2);
                }
                100% {
                    transform: scale(1);
                }
            }
            
            @keyframes slideInLeft {
                from {
                    opacity: 0;
                    transform: translateX(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            .lesson-card, .stat-card {
                opacity: 0;
            }
            
            .floating {
                animation: floating 3s ease-in-out infinite;
            }
            
            @keyframes floating {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
        `;
    document.head.appendChild(style);
  }

  // Search Functionality
  setupSearch() {
    const searchContainer = document.createElement("div");
    searchContainer.className = "search-container";
    searchContainer.innerHTML = `
            <div class="search-wrapper">
                <input type="text" id="lessonSearch" placeholder="Search lessons... (Ctrl/Cmd + F)" class="search-input">
                <div class="search-results" id="searchResults"></div>
            </div>
        `;

    const header = document.querySelector(".header");
    if (header) {
      header.appendChild(searchContainer);
    }

    const searchInput = document.getElementById("lessonSearch");
    const searchResults = document.getElementById("searchResults");

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.performSearch(e.target.value, searchResults);
      });

      searchInput.addEventListener("focus", () => {
        searchResults.style.display = "block";
      });

      document.addEventListener("click", (e) => {
        if (!searchContainer.contains(e.target)) {
          searchResults.style.display = "none";
        }
      });
    }

    this.addSearchStyles();
  }

  performSearch(query, resultsContainer) {
    if (query.length < 2) {
      resultsContainer.innerHTML = "";
      return;
    }

    const lessons = document.querySelectorAll(".lesson-card");
    const results = [];

    lessons.forEach((lesson) => {
      const title = lesson.querySelector("h4").textContent.toLowerCase();
      const description = lesson.querySelector("p").textContent.toLowerCase();

      if (
        title.includes(query.toLowerCase()) ||
        description.includes(query.toLowerCase())
      ) {
        results.push({
          title: lesson.querySelector("h4").textContent,
          description: lesson.querySelector("p").textContent,
          element: lesson,
        });
      }
    });

    this.displaySearchResults(results, resultsContainer);
  }

  displaySearchResults(results, container) {
    if (results.length === 0) {
      container.innerHTML = '<div class="search-result">No lessons found</div>';
      return;
    }

    const resultsHTML = results
      .map(
        (result) => `
            <div class="search-result" data-lesson="${result.title}">
                <strong>${result.title}</strong>
                <p>${result.description.substring(0, 100)}...</p>
            </div>
        `
      )
      .join("");

    container.innerHTML = resultsHTML;

    // Add click handlers to search results
    container.querySelectorAll(".search-result").forEach((result) => {
      result.addEventListener("click", () => {
        const lessonTitle = result.dataset.lesson;
        const lessonElement = Array.from(
          document.querySelectorAll(".lesson-card")
        ).find((card) => card.querySelector("h4").textContent === lessonTitle);

        if (lessonElement) {
          lessonElement.scrollIntoView({ behavior: "smooth" });
          lessonElement.style.animation = "pulse 1s ease";
        }

        container.style.display = "none";
      });
    });
  }

  addSearchStyles() {
    const style = document.createElement("style");
    style.textContent = `
            .search-container {
                margin-top: 20px;
                position: relative;
                max-width: 400px;
                margin-left: auto;
                margin-right: auto;
            }
            
            .search-input {
                width: 100%;
                padding: 12px 20px;
                border: 2px solid #667eea;
                border-radius: 25px;
                font-size: 16px;
                outline: none;
                transition: all 0.3s ease;
            }
            
            .search-input:focus {
                border-color: #764ba2;
                box-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
            }
            
            .search-results {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                max-height: 300px;
                overflow-y: auto;
                z-index: 1000;
                display: none;
            }
            
            .search-result {
                padding: 15px;
                border-bottom: 1px solid #eee;
                cursor: pointer;
                transition: background 0.2s ease;
            }
            
            .search-result:hover {
                background: #f5f5f5;
            }
            
            .search-result:last-child {
                border-bottom: none;
            }
            
            .search-result strong {
                color: #667eea;
                display: block;
                margin-bottom: 5px;
            }
            
            .search-result p {
                margin: 0;
                font-size: 14px;
                color: #666;
            }
        `;
    document.head.appendChild(style);
  }

  focusSearch() {
    const searchInput = document.getElementById("lessonSearch");
    if (searchInput) {
      searchInput.focus();
    }
  }

  // Theme Toggle
  setupThemeToggle() {
    const themeToggle = document.createElement("button");
    themeToggle.className = "theme-toggle";
    themeToggle.innerHTML = "🌙";
    themeToggle.setAttribute("aria-label", "Toggle dark mode");
    themeToggle.title = "Switch to dark mode";

    // Add it directly to body instead of header for better positioning
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", () => {
      this.toggleTheme();
    });

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      document.body.classList.add("dark-mode");
      themeToggle.innerHTML = "☀️";
      themeToggle.title = "Switch to light mode";
    }

    // Add theme transition class after page load for smooth initial transition
    setTimeout(() => {
      document.body.classList.add("theme-transitions-enabled");
    }, 100);
  }

  toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector(".theme-toggle");

    // Add a ripple effect
    this.createRippleEffect(themeToggle);

    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");

    if (themeToggle) {
      // Smooth icon transition
      themeToggle.style.transform = "scale(0.8) rotate(180deg)";

      setTimeout(() => {
        themeToggle.innerHTML = isDark ? "☀️" : "🌙";
        themeToggle.title = isDark
          ? "Switch to light mode"
          : "Switch to dark mode";
        themeToggle.style.transform = "scale(1) rotate(0deg)";
      }, 150);
    }

    // Save theme preference
    localStorage.setItem("darkMode", isDark);

    // Trigger a subtle page animation
    this.triggerThemeAnimation();
  }

  createRippleEffect(element) {
    const ripple = document.createElement("div");
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(79, 172, 254, 0.6);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
      left: 50%;
      top: 50%;
      width: 20px;
      height: 20px;
      margin-left: -10px;
      margin-top: -10px;
    `;

    element.style.position = "relative";
    element.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  triggerThemeAnimation() {
    const cards = document.querySelectorAll(".lesson-card, .card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.transform = "scale(0.98)";
        setTimeout(() => {
          card.style.transform = "scale(1)";
        }, 100);
      }, index * 30);
    });
  }

  // Section Navigation
  setupSectionNavigation() {
    const nav = document.createElement("nav");
    nav.className = "section-nav";
    nav.innerHTML = `
            <ul class="nav-list">
                <li><a href="#frontend" class="nav-link active" data-section="frontend">Frontend</a></li>
                <li><a href="#javascript" class="nav-link" data-section="javascript">JavaScript</a></li>
                <li><a href="#backend" class="nav-link" data-section="backend">Backend</a></li>
                <li><a href="#database" class="nav-link" data-section="database">Database</a></li>
                <li><a href="#react" class="nav-link" data-section="react">React</a></li>
                <li><a href="#nextjs" class="nav-link" data-section="nextjs">Next.js</a></li>
            </ul>
        `;

    const roadmap = document.querySelector(".roadmap");
    if (roadmap) {
      roadmap.insertBefore(nav, roadmap.firstChild.nextSibling);
    }

    // Add navigation event listeners
    nav.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.navigateToSection(e.target.dataset.section);
        this.updateActiveNav(e.target);
      });
    });

    this.addNavStyles();
  }

  navigateToSection(sectionName) {
    this.currentSection = sectionName;
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
      section.style.display = "none";
    });

    // Show the selected section (this is a simplified version)
    // In a real implementation, you might want to use proper section IDs
    const targetSection = Array.from(sections).find((section) =>
      section
        .querySelector("h3")
        .textContent.toLowerCase()
        .includes(sectionName.toLowerCase())
    );

    if (targetSection) {
      targetSection.style.display = "block";
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  updateActiveNav(activeLink) {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
    });
    activeLink.classList.add("active");
  }

  addNavStyles() {
    const style = document.createElement("style");
    style.textContent = `
            .section-nav {
                background: rgba(255, 255, 255, 0.95);
                padding: 15px 0;
                border-radius: 15px;
                margin-bottom: 20px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            }
            
            .nav-list {
                display: flex;
                justify-content: center;
                list-style: none;
                gap: 30px;
                margin: 0;
                padding: 0;
            }
            
            .nav-link {
                color: #333;
                text-decoration: none;
                font-weight: 500;
                padding: 8px 16px;
                border-radius: 20px;
                transition: all 0.3s ease;
            }
            
            .nav-link:hover,
            .nav-link.active {
                background: linear-gradient(45deg, #667eea, #764ba2);
                color: white;
            }
            
            @media (max-width: 768px) {
                .nav-list {
                    flex-wrap: wrap;
                    gap: 15px;
                }
                
                .nav-link {
                    font-size: 14px;
                    padding: 6px 12px;
                }
            }
        `;
    document.head.appendChild(style);
  }

  // User Preferences
  loadUserPreferences() {
    const darkMode = localStorage.getItem("darkMode") === "true";
    if (darkMode) {
      document.body.classList.add("dark-mode");
      const themeToggle = document.querySelector(".theme-toggle");
      if (themeToggle) {
        themeToggle.innerHTML = "☀️";
      }
    }

    // Load completed lessons visual indicators
    this.completedLessons.forEach((lessonTitle) => {
      const lessonCard = Array.from(
        document.querySelectorAll(".lesson-card")
      ).find((card) => card.querySelector("h4").textContent === lessonTitle);

      if (lessonCard) {
        this.addVisualCompletionIndicator(lessonCard);
      }
    });
  }

  saveProgress() {
    const progressData = {
      completedLessons: this.completedLessons,
      currentSection: this.currentSection,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem("courseProgress", JSON.stringify(progressData));
    this.showNotification("Progress saved!", "success");
  }

  // Notification System
  showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${
              type === "success"
                ? "#4CAF50"
                : type === "error"
                ? "#f44336"
                : "#2196F3"
            };
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            z-index: 1001;
            animation: slideInRight 0.3s ease;
        `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = "slideOutRight 0.3s ease";
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Utility Methods
  exportProgress() {
    const progressData = {
      completedLessons: this.completedLessons,
      currentSection: this.currentSection,
      totalProgress: Math.round(
        (this.completedLessons.length / this.totalLessons) * 100
      ),
      exportDate: new Date().toISOString(),
    };

    const dataStr = JSON.stringify(progressData, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "fullstack-course-progress.json";
    link.click();

    URL.revokeObjectURL(url);
    this.showNotification("Progress exported!", "success");
  }

  importProgress(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const progressData = JSON.parse(e.target.result);
        this.completedLessons = progressData.completedLessons || [];
        this.currentSection = progressData.currentSection || "frontend";

        localStorage.setItem(
          "completedLessons",
          JSON.stringify(this.completedLessons)
        );
        this.updateProgress();
        this.loadUserPreferences();

        this.showNotification("Progress imported successfully!", "success");
      } catch (error) {
        this.showNotification("Invalid progress file!", "error");
      }
    };
    reader.readAsText(file);
  }
}

// Initialize the course when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const course = new FullStackCourse();

  // Make course instance globally available for debugging
  window.fullStackCourse = course;

  // Add export/import buttons to footer
  const footer = document.querySelector(".footer");
  if (footer) {
    const progressButtons = document.createElement("div");
    progressButtons.className = "progress-actions";
    progressButtons.innerHTML = `
            <button onclick="fullStackCourse.exportProgress()" class="btn btn-secondary">
                📥 Export Progress
            </button>
            <input type="file" id="importProgress" accept=".json" style="display: none;">
            <button onclick="document.getElementById('importProgress').click()" class="btn btn-secondary">
                📤 Import Progress
            </button>
        `;
    footer.appendChild(progressButtons);

    // Setup import handler
    document
      .getElementById("importProgress")
      .addEventListener("change", (e) => {
        if (e.target.files.length > 0) {
          course.importProgress(e.target.files[0]);
        }
      });
  }
});
