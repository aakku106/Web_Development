/** @format */

// Tailwind CSS Interactive Lesson - JavaScript Implementation
// Educational demonstrations of Tailwind utility classes

// ===============================
// State Management
// ===============================

const appState = {
  currentUtilityClasses: [
    "bg-white",
    "p-4",
    "rounded-lg",
    "border-2",
    "border-dashed",
    "border-gray-300",
    "text-center",
    "transition-all",
    "duration-500",
  ],
  flexClasses: ["flex", "justify-start", "items-start"],
  gridClasses: ["grid", "grid-cols-2", "gap-4"],
  spacingClasses: ["p-4", "m-4"],
  colorClass: "bg-blue-500",
  typographyClasses: ["text-base", "font-normal"],
  hasGap: true,
};

// ===============================
// Educational Helper Functions
// ===============================

function initializeLesson() {
  console.group("Tailwind CSS Lesson Initialization");
  console.info("Interactive Tailwind CSS utility class demonstrations");
  console.log("Available features:");
  console.table({
    "Utility Classes": "Interactive class toggling and preview",
    "Layout System": "Flexbox and Grid demonstrations",
    "Color System": "Color palette with live preview",
    Typography: "Font size and weight examples",
    Components: "Pre-built component patterns",
    Responsive: "Mobile-first responsive design",
  });
  console.groupEnd();

  setupTabStyles();
}

function setupTabStyles() {
  console.group("Tab Styling Setup");
  console.info("Setting up tab navigation with Tailwind classes");

  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      console.log(`Tab switched to: ${this.textContent.trim()}`);
    });
  });

  console.log("Tab styles configured with hover and active states");
  console.groupEnd();
}

// ===============================
// Tab Navigation
// ===============================

window.showTab = function (tabName) {
  console.group("Tab Navigation");
  console.info(`Switching to ${tabName} tab`);

  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Remove active class from all tab buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
    btn.classList.remove("bg-blue-500", "text-white");
    btn.classList.add("bg-gray-200", "text-gray-700", "hover:bg-gray-300");
  });

  // Show selected tab content
  document.getElementById(tabName).classList.add("active");

  // Style active tab button
  event.target.classList.add("active", "bg-blue-500", "text-white");
  event.target.classList.remove(
    "bg-gray-200",
    "text-gray-700",
    "hover:bg-gray-300"
  );

  console.log(`Successfully switched to ${tabName} tab`);
  console.groupEnd();
};

// ===============================
// Utility Classes Demo
// ===============================

window.toggleUtility = function (utilityType) {
  console.group("Utility Class Toggle");
  console.info(`Toggling ${utilityType} utility classes`);

  const demoElement = document.getElementById("utility-demo");
  const currentClassesDisplay = document.getElementById("current-classes");

  switch (utilityType) {
    case "padding":
      if (appState.currentUtilityClasses.includes("p-4")) {
        appState.currentUtilityClasses = appState.currentUtilityClasses.filter(
          (c) => !c.startsWith("p-")
        );
        appState.currentUtilityClasses.push("p-8");
        console.log("Changed padding from p-4 to p-8");
      } else {
        appState.currentUtilityClasses = appState.currentUtilityClasses.filter(
          (c) => !c.startsWith("p-")
        );
        appState.currentUtilityClasses.push("p-4");
        console.log("Reset padding to p-4");
      }
      break;

    case "background":
      if (appState.currentUtilityClasses.includes("bg-white")) {
        appState.currentUtilityClasses = appState.currentUtilityClasses.filter(
          (c) => !c.startsWith("bg-")
        );
        appState.currentUtilityClasses.push(
          "bg-gradient-to-r",
          "from-blue-400",
          "to-purple-500"
        );
        console.log("Changed background to gradient");
      } else {
        appState.currentUtilityClasses = appState.currentUtilityClasses.filter(
          (c) =>
            !c.startsWith("bg-") &&
            !c.startsWith("from-") &&
            !c.startsWith("to-")
        );
        appState.currentUtilityClasses.push("bg-white");
        console.log("Reset background to white");
      }
      break;

    case "border":
      if (appState.currentUtilityClasses.includes("border-dashed")) {
        appState.currentUtilityClasses = appState.currentUtilityClasses.filter(
          (c) => !c.includes("border-dashed") && !c.includes("border-gray-300")
        );
        appState.currentUtilityClasses.push("border-solid", "border-blue-500");
        console.log("Changed to solid blue border");
      } else {
        appState.currentUtilityClasses = appState.currentUtilityClasses.filter(
          (c) => !c.includes("border-solid") && !c.includes("border-blue-500")
        );
        appState.currentUtilityClasses.push("border-dashed", "border-gray-300");
        console.log("Reset to dashed gray border");
      }
      break;

    case "shadow":
      if (appState.currentUtilityClasses.some((c) => c.includes("shadow"))) {
        appState.currentUtilityClasses = appState.currentUtilityClasses.filter(
          (c) => !c.includes("shadow")
        );
        console.log("Removed shadow");
      } else {
        appState.currentUtilityClasses.push("shadow-lg");
        console.log("Added large shadow");
      }
      break;
  }

  // Apply new classes
  demoElement.className = appState.currentUtilityClasses.join(" ");
  currentClassesDisplay.textContent = appState.currentUtilityClasses.join(" ");

  console.table({
    "Utility Type": utilityType,
    "Classes Applied": appState.currentUtilityClasses.length,
    "Current Classes": appState.currentUtilityClasses.join(" "),
  });
  console.groupEnd();
};

// ===============================
// Layout Demos
// ===============================

window.changeFlexDirection = function (direction) {
  console.group("Flexbox Direction Change");
  console.info(`Changing flex direction to: ${direction}`);

  const flexDemo = document.getElementById("flex-demo");
  const flexClassesDisplay = document.getElementById("flex-classes");

  // Remove existing direction classes
  appState.flexClasses = appState.flexClasses.filter(
    (c) => !c.includes("flex-row") && !c.includes("flex-col")
  );

  // Add new direction
  if (direction === "col") {
    appState.flexClasses.push("flex-col");
    flexDemo.classList.remove("flex-row");
    flexDemo.classList.add("flex-col");
  } else {
    appState.flexClasses.push("flex-row");
    flexDemo.classList.remove("flex-col");
    flexDemo.classList.add("flex-row");
  }

  flexClassesDisplay.textContent = appState.flexClasses.join(" ");
  console.log(`Flex direction updated to: ${direction}`);
  console.groupEnd();
};

window.changeJustify = function (justification) {
  console.group("Flexbox Justification Change");
  console.info(`Changing justify-content to: ${justification}`);

  const flexDemo = document.getElementById("flex-demo");
  const flexClassesDisplay = document.getElementById("flex-classes");

  // Remove existing justify classes
  flexDemo.classList.remove(
    "justify-start",
    "justify-center",
    "justify-between",
    "justify-around",
    "justify-evenly"
  );
  appState.flexClasses = appState.flexClasses.filter(
    (c) => !c.startsWith("justify-")
  );

  // Add new justify class
  const justifyClass = `justify-${justification}`;
  flexDemo.classList.add(justifyClass);
  appState.flexClasses.push(justifyClass);

  flexClassesDisplay.textContent = appState.flexClasses.join(" ");
  console.log(`Justify content updated to: ${justification}`);
  console.groupEnd();
};

window.changeAlign = function (alignment) {
  console.group("Flexbox Alignment Change");
  console.info(`Changing align-items to: ${alignment}`);

  const flexDemo = document.getElementById("flex-demo");
  const flexClassesDisplay = document.getElementById("flex-classes");

  // Remove existing align classes
  flexDemo.classList.remove(
    "items-start",
    "items-center",
    "items-end",
    "items-stretch"
  );
  appState.flexClasses = appState.flexClasses.filter(
    (c) => !c.startsWith("items-")
  );

  // Add new align class
  const alignClass = `items-${alignment}`;
  flexDemo.classList.add(alignClass);
  appState.flexClasses.push(alignClass);

  flexClassesDisplay.textContent = appState.flexClasses.join(" ");
  console.log(`Align items updated to: ${alignment}`);
  console.groupEnd();
};

window.changeGrid = function (columns) {
  console.group("Grid Layout Change");
  console.info(`Changing grid to ${columns} columns`);

  const gridDemo = document.getElementById("grid-demo");
  const gridClassesDisplay = document.getElementById("grid-classes");

  // Remove existing grid-cols classes
  gridDemo.classList.remove(
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6"
  );
  appState.gridClasses = appState.gridClasses.filter(
    (c) => !c.startsWith("grid-cols-")
  );

  // Add new grid-cols class
  const gridClass = `grid-cols-${columns}`;
  gridDemo.classList.add(gridClass);
  appState.gridClasses.push(gridClass);

  gridClassesDisplay.textContent = appState.gridClasses.join(" ");
  console.log(`Grid layout updated to ${columns} columns`);
  console.groupEnd();
};

window.toggleGap = function () {
  console.group("Grid Gap Toggle");
  console.info("Toggling grid gap");

  const gridDemo = document.getElementById("grid-demo");
  const gridClassesDisplay = document.getElementById("grid-classes");

  if (appState.hasGap) {
    gridDemo.classList.remove("gap-4");
    appState.gridClasses = appState.gridClasses.filter(
      (c) => !c.startsWith("gap-")
    );
    appState.hasGap = false;
    console.log("Gap removed");
  } else {
    gridDemo.classList.add("gap-4");
    appState.gridClasses.push("gap-4");
    appState.hasGap = true;
    console.log("Gap added (gap-4)");
  }

  gridClassesDisplay.textContent = appState.gridClasses.join(" ");
  console.groupEnd();
};

// ===============================
// Spacing Demo
// ===============================

window.changeSpacing = function (type, size) {
  console.group("Spacing Change");
  console.info(
    `Changing ${type === "p" ? "padding" : "margin"} to size ${size}`
  );

  const spacingDemo = document.getElementById("spacing-demo");
  const spacingClassesDisplay = document.getElementById("spacing-classes");

  // Remove existing spacing classes of this type
  if (type === "p") {
    spacingDemo.classList.remove("p-2", "p-4", "p-6", "p-8");
    appState.spacingClasses = appState.spacingClasses.filter(
      (c) => !c.startsWith("p-")
    );
    appState.spacingClasses.push(`p-${size}`);
    spacingDemo.classList.add(`p-${size}`);
  } else {
    spacingDemo.classList.remove("m-2", "m-4", "m-6", "m-8");
    appState.spacingClasses = appState.spacingClasses.filter(
      (c) => !c.startsWith("m-")
    );
    appState.spacingClasses.push(`m-${size}`);
    spacingDemo.classList.add(`m-${size}`);
  }

  spacingClassesDisplay.textContent = appState.spacingClasses.join(" ");

  console.table({
    Type: type === "p" ? "Padding" : "Margin",
    Size: size,
    Class: `${type}-${size}`,
    "Pixel Value": `${size * 4}px`,
  });
  console.groupEnd();
};

// ===============================
// Color Demo
// ===============================

window.changeColor = function (colorClass) {
  console.group("Color Change");
  console.info(`Changing background color to: ${colorClass}`);

  const colorDemo = document.getElementById("color-demo");
  const colorClassesDisplay = document.getElementById("color-classes");

  // Remove existing background color classes
  colorDemo.className = colorDemo.className.replace(/bg-\w+-\d+/g, "");

  // Add new color class
  colorDemo.classList.add(colorClass);
  appState.colorClass = colorClass;

  // Update text color based on background
  colorDemo.classList.remove("text-white", "text-gray-800");
  if (
    colorClass.includes("-700") ||
    colorClass.includes("-800") ||
    colorClass.includes("-900")
  ) {
    colorDemo.classList.add("text-white");
  } else {
    colorDemo.classList.add("text-gray-800");
  }

  colorClassesDisplay.textContent = colorClass;

  console.log(`Color updated to: ${colorClass}`);
  console.groupEnd();
};

// ===============================
// Typography Demo
// ===============================

window.changeTypography = function (textSizeClass) {
  console.group("Typography Size Change");
  console.info(`Changing text size to: ${textSizeClass}`);

  const typographyDemo = document.getElementById("typography-demo");
  const typographyClassesDisplay =
    document.getElementById("typography-classes");

  // Remove existing text size classes
  typographyDemo.classList.remove(
    "text-xs",
    "text-sm",
    "text-base",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-4xl"
  );
  appState.typographyClasses = appState.typographyClasses.filter(
    (c) => !c.startsWith("text-")
  );

  // Add new text size
  typographyDemo.classList.add(textSizeClass);
  appState.typographyClasses.push(textSizeClass);

  // Keep font weight
  const fontWeight =
    appState.typographyClasses.find((c) => c.startsWith("font-")) ||
    "font-normal";
  typographyClassesDisplay.textContent = appState.typographyClasses.join(" ");

  const sizeMap = {
    "text-xs": "12px",
    "text-sm": "14px",
    "text-base": "16px",
    "text-lg": "18px",
    "text-xl": "20px",
    "text-2xl": "24px",
    "text-3xl": "30px",
    "text-4xl": "36px",
  };

  console.table({
    Class: textSizeClass,
    "Pixel Size": sizeMap[textSizeClass],
    "Font Weight": fontWeight,
  });
  console.groupEnd();
};

window.changeFontWeight = function (fontWeightClass) {
  console.group("Typography Weight Change");
  console.info(`Changing font weight to: ${fontWeightClass}`);

  const typographyDemo = document.getElementById("typography-demo");
  const typographyClassesDisplay =
    document.getElementById("typography-classes");

  // Remove existing font weight classes
  typographyDemo.classList.remove(
    "font-light",
    "font-normal",
    "font-medium",
    "font-semibold",
    "font-bold",
    "font-extrabold"
  );
  appState.typographyClasses = appState.typographyClasses.filter(
    (c) => !c.startsWith("font-")
  );

  // Add new font weight
  typographyDemo.classList.add(fontWeightClass);
  appState.typographyClasses.push(fontWeightClass);

  typographyClassesDisplay.textContent = appState.typographyClasses.join(" ");

  console.log(`Font weight updated to: ${fontWeightClass}`);
  console.groupEnd();
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
      button.classList.remove("bg-blue-500", "hover:bg-blue-600");
      button.classList.add("bg-green-500", "hover:bg-green-600");

      console.group("Code Copy");
      console.info("Tailwind CSS code copied to clipboard");
      console.log("Code length:", codeBlock.length + " characters");
      console.groupCollapsed("Copied Code");
      console.log(codeBlock);
      console.groupEnd();
      console.groupEnd();

      setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove("bg-green-500", "hover:bg-green-600");
        button.classList.add("bg-blue-500", "hover:bg-blue-600");
      }, 2000);
    })
    .catch(() => {
      button.textContent = "❌ Failed";
      console.error("Failed to copy code to clipboard");
      setTimeout(() => {
        button.textContent = originalText;
      }, 2000);
    });
};

// ===============================
// Custom CSS for Traditional Button
// ===============================

const customButtonStyles = `
.traditional-btn {
  background-color: #3B82F6;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.traditional-btn:hover {
  background-color: #2563EB;
  transform: translateY(-1px);
}
`;

// ===============================
// Initialize Lesson
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  console.time("Tailwind CSS Lesson Load Time");

  // Add custom styles for traditional button demo
  const styleSheet = document.createElement("style");
  styleSheet.textContent = customButtonStyles;
  document.head.appendChild(styleSheet);

  initializeLesson();

  console.timeEnd("Tailwind CSS Lesson Load Time");
  console.info("Tailwind CSS lesson ready for interaction");

  // Log Tailwind configuration
  console.group("Tailwind Configuration");
  console.info("CDN loaded with custom configuration");
  console.log("Custom colors available: custom-blue, custom-purple");
  console.log("Custom animations: animate-float");
  console.log("JIT mode enabled for unlimited class generation");
  console.groupEnd();
});
