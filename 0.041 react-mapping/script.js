/** @format */

// React Mapping Interactive Lesson - JavaScript Implementation
// Educational demonstrations of React mapping patterns with personalized examples

// ===============================
// Educational State Management
// ===============================

const lessonState = {
  aakkuFriends: ["Aakku", "CCN", "Toffu", "Priya"],
  teamMembers: [
    {
      id: 1,
      name: "Aakku",
      role: "Full Stack Developer",
      avatar: "👨‍💻",
      email: "adarasha.gaihre106@gmail.com",
    },
    {
      id: 2,
      name: "CCN",
      role: "UI/UX Designer",
      avatar: "🎨",
      email: "ccn@aakkutech.com",
    },
    {
      id: 3,
      name: "Toffu",
      role: "Frontend Developer",
      avatar: "⚡",
      email: "toffu@aakkutech.com",
    },
    {
      id: 4,
      name: "Priya",
      role: "Product Manager",
      avatar: "📊",
      email: "priya@aakkutech.com",
    },
  ],
  portfolioProjects: [
    {
      id: 1,
      title: "AakkuTech Website",
      description: "Modern tech company website",
      image: "🌐",
      tech: ["React", "Tailwind", "Node.js"],
      status: "completed",
    },
    {
      id: 2,
      title: "Toffu Mobile App",
      description: "Creative portfolio app",
      image: "📱",
      tech: ["React Native", "Firebase"],
      status: "active",
    },
    {
      id: 3,
      title: "Priya's E-store",
      description: "E-commerce platform",
      image: "🛒",
      tech: ["Next.js", "Stripe", "MongoDB"],
      status: "active",
    },
  ],
  notifications: [
    {
      id: 1,
      message: "CCN completed the design review",
      type: "success",
      isImportant: true,
      timestamp: new Date(),
    },
    {
      id: 2,
      message: "Toffu pushed new code to main branch",
      type: "info",
      isImportant: false,
      timestamp: new Date(Date.now() - 300000),
    },
    {
      id: 3,
      message: "Server error in production",
      type: "error",
      isImportant: true,
      timestamp: new Date(Date.now() - 600000),
    },
  ],
  tasks: [
    {
      id: 1,
      title: "Review CCN's design mockups",
      completed: false,
      assignee: "Aakku",
      priority: "high",
    },
    {
      id: 2,
      title: "Fix bug in Toffu's component",
      completed: true,
      assignee: "Rajesh",
      priority: "medium",
    },
    {
      id: 3,
      title: "Update Priya's user stories",
      completed: false,
      assignee: "Arjun",
      priority: "low",
    },
  ],
  products: [
    {
      id: 1,
      name: "CCN Pro Laptop",
      price: 1299.99,
      category: "electronics",
      rating: 4.8,
      image: "💻",
      inStock: true,
    },
    {
      id: 2,
      name: "Aakku Mobile App License",
      price: 49.99,
      category: "software",
      rating: 4.9,
      image: "📱",
      inStock: true,
    },
    {
      id: 3,
      name: "Toffu Design Templates",
      price: 29.99,
      category: "design",
      rating: 4.7,
      image: "🎨",
      inStock: false,
    },
  ],
  socialPosts: [
    {
      id: 1,
      author: "Aakku",
      content:
        "Just shipped a new feature for AakkuTech! React mapping makes everything so smooth.",
      timestamp: new Date(),
      likes: 12,
      comments: 3,
      avatar: "👨‍💻",
    },
    {
      id: 2,
      author: "CCN",
      content:
        "Working on some beautiful UI designs for our next project. Loving the new design system!",
      timestamp: new Date(Date.now() - 1800000),
      likes: 8,
      comments: 2,
      avatar: "🎨",
    },
    {
      id: 3,
      author: "Toffu",
      content:
        "Code review completed! Clean code is happy code 😊 #ReactJS #CleanCode",
      timestamp: new Date(Date.now() - 3600000),
      likes: 15,
      comments: 5,
      avatar: "⚡",
    },
  ],
  currentFilter: "all",
  currentSort: "name",
  isRealTimeEnabled: false,
};

// ===============================
// Educational Helper Functions
// ===============================

function initializeReactMappingLesson() {
  console.group("React Mapping Lesson Initialization");
  console.info(
    "Interactive React mapping demonstrations with personalized examples"
  );
  console.log("Featured team members:");
  console.table(lessonState.teamMembers);

  console.log("Learning objectives:");
  console.table({
    "Basic Mapping": "Transform arrays into React elements",
    "Key Props": "Understand React reconciliation",
    "Common Patterns": "Cards, tables, lists",
    "Advanced Techniques": "Nested mapping, filtering",
    Performance: "Optimization strategies",
    "Real World": "Practical applications",
  });
  console.groupEnd();
}

function logMappingExample(operation, data, result) {
  console.group(`Mapping Operation: ${operation}`);
  console.log("Input data:", data);
  console.log("Mapping function:", operation);
  console.log("Result:", result);
  console.log(`Items processed: ${Array.isArray(data) ? data.length : "N/A"}`);
  console.groupEnd();
}

// ===============================
// Tab Navigation
// ===============================

window.showTab = function (tabName) {
  console.group(`Tab Navigation`);
  console.info(`Switching to ${tabName} tab`);

  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Remove active class from all tab buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active", "bg-blue-500", "text-white");
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
// Basic Mapping Demonstrations
// ===============================

window.demonstrateBasicMap = function () {
  console.group("Basic JavaScript .map() Demonstration");

  const originalArray = lessonState.aakkuFriends;
  console.log("Original array:", originalArray);

  // Transform to uppercase
  const upperCaseNames = originalArray.map((name) => name.toUpperCase());
  console.log("Uppercase transformation:", upperCaseNames);

  // Transform to objects
  const friendObjects = originalArray.map((name, index) => ({
    id: index + 1,
    name: name,
    isOnline: Math.random() > 0.5,
  }));
  console.log("Object transformation:", friendObjects);

  // Update display
  document.getElementById(
    "mapped-array"
  ).textContent = `const upperNames = ${JSON.stringify(
    upperCaseNames,
    null,
    2
  )}`;

  const outputContainer = document.getElementById("basic-map-output");
  outputContainer.style.display = "block";

  const resultDiv = document.getElementById("basic-map-result");
  resultDiv.innerHTML = `
    <div class="grid gap-2">
      <div class="bg-blue-100 p-3 rounded">
        <strong>Original:</strong> ${originalArray.join(", ")}
      </div>
      <div class="bg-green-100 p-3 rounded">
        <strong>Uppercase:</strong> ${upperCaseNames.join(", ")}
      </div>
      <div class="bg-purple-100 p-3 rounded">
        <strong>Objects:</strong> ${friendObjects.length} friend objects created
      </div>
    </div>
  `;

  logMappingExample("Basic .map()", originalArray, upperCaseNames);
  console.groupEnd();
};

window.renderTeamList = function () {
  console.group("React Team List Rendering");

  const team = lessonState.teamMembers;
  console.log("Rendering team members:", team);

  const container = document.getElementById("team-list-container");
  container.style.display = "block";

  const output = document.getElementById("team-list-output");

  // Simulate React JSX rendering
  const teamHTML = team
    .map(
      (member) => `
    <div class="team-card bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div class="text-center">
        <div class="text-4xl mb-2">${member.avatar}</div>
        <h3 class="font-semibold text-gray-800">${member.name}</h3>
        <p class="text-gray-600 text-sm">${member.role}</p>
        <a href="mailto:${member.email}" class="text-blue-600 text-xs hover:underline">
          ${member.email}
        </a>
      </div>
    </div>
  `
    )
    .join("");

  output.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      ${teamHTML}
    </div>
  `;

  console.log("Team list rendered successfully");
  console.log(`Components created: ${team.length}`);
  console.groupEnd();
};

window.addTeamMember = function () {
  console.group("Adding New Team Member");

  const newMembers = [
    {
      id: 5,
      name: "Rajesh",
      role: "Senior Developer",
      avatar: "DEV",
      email: "rajesh@aakkutech.com",
    },
    {
      id: 6,
      name: "Shreya",
      role: "QA Engineer",
      avatar: "🕵️‍♀️",
      email: "shreya@aakkutech.com",
    },
    {
      id: 7,
      name: "Arjun",
      role: "Backend Developer",
      avatar: "⚙️",
      email: "arjun@aakkutech.com",
    },
  ];

  const randomMember =
    newMembers[Math.floor(Math.random() * newMembers.length)];

  // Check if member already exists
  if (!lessonState.teamMembers.find((m) => m.id === randomMember.id)) {
    lessonState.teamMembers.push(randomMember);
    console.log("Added new team member:", randomMember);

    // Re-render the team list
    renderTeamList();

    // Highlight the new addition
    setTimeout(() => {
      const cards = document.querySelectorAll(".team-card");
      const lastCard = cards[cards.length - 1];
      if (lastCard) {
        lastCard.classList.add("demo-highlight");
        setTimeout(() => lastCard.classList.remove("demo-highlight"), 3000);
      }
    }, 100);
  } else {
    console.log("Member already exists, trying another...");
    addTeamMember(); // Recursively try another
  }

  console.groupEnd();
};

// ===============================
// Key Prop Demonstrations
// ===============================

let keyDemoItems = [
  { id: 1, name: "Aakku's Project" },
  { id: 2, name: "CCN's Design" },
  { id: 3, name: "Toffu's App" },
];

window.demonstrateKeys = function (keyType) {
  console.group(`🔑 Keys Demonstration: ${keyType.toUpperCase()}`);

  const container =
    keyType === "bad"
      ? document.getElementById("bad-keys-demo")
      : document.getElementById("good-keys-demo");

  console.log("Current items:", keyDemoItems);

  if (keyType === "bad") {
    // Simulate bad keys (using index)
    const badHTML = keyDemoItems
      .map(
        (item, index) => `
      <div class="bg-red-100 border border-red-300 rounded p-2 mb-1 text-sm">
        key="${index}" → ${item.name}
      </div>
    `
      )
      .join("");

    container.innerHTML = badHTML;
    console.warn("Using index as key can cause issues with list updates");
  } else {
    // Simulate good keys (using unique ID)
    const goodHTML = keyDemoItems
      .map(
        (item) => `
      <div class="bg-green-100 border border-green-300 rounded p-2 mb-1 text-sm">
        key="${item.id}" → ${item.name}
      </div>
    `
      )
      .join("");

    container.innerHTML = goodHTML;
    console.info(
      "Using unique IDs as keys ensures proper React reconciliation"
    );
  }

  console.groupEnd();
};

window.addItemToList = function () {
  console.group("📝 Adding Item to Key Demo");

  const newItems = [
    { id: 4, name: "Priya's Analytics" },
    { id: 5, name: "Rajesh's API" },
    { id: 6, name: "Shreya's Tests" },
  ];

  const randomItem = newItems[Math.floor(Math.random() * newItems.length)];

  if (!keyDemoItems.find((item) => item.id === randomItem.id)) {
    // Insert at beginning to show key difference
    keyDemoItems.unshift(randomItem);

    console.log("Added item at beginning:", randomItem);
    console.log("Updated list:", keyDemoItems);

    // Re-render both demos
    demonstrateKeys("bad");
    demonstrateKeys("good");

    console.info(
      "Notice: Good keys maintain component identity, bad keys cause re-renders"
    );
  }

  console.groupEnd();
};

// ===============================
// Common Patterns
// ===============================

window.renderPortfolioGrid = function () {
  console.group("🎨 CCN's Portfolio Grid Rendering");

  const projects = lessonState.portfolioProjects;
  console.log("Rendering portfolio projects:", projects);

  const container = document.getElementById("portfolio-grid-container");
  container.style.display = "block";

  const output = document.getElementById("portfolio-grid-output");

  const projectsHTML = projects
    .map(
      (project) => `
    <div class="project-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div class="text-6xl p-6 text-center bg-gradient-to-r from-purple-100 to-blue-100">
        ${project.image}
      </div>
      <div class="p-6">
        <h3 class="font-bold text-lg mb-2">${project.title}</h3>
        <p class="text-gray-600 text-sm mb-3">${project.description}</p>
        <div class="flex flex-wrap gap-1 mb-3">
          ${project.tech
            .map(
              (tech) => `
            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
              ${tech}
            </span>
          `
            )
            .join("")}
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm font-medium ${
            project.status === "active" ? "text-green-600" : "text-blue-600"
          }">
            ${project.status}
          </span>
          <button class="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
            View Details
          </button>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  output.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${projectsHTML}
    </div>
  `;

  console.log(`Portfolio grid rendered with ${projects.length} projects`);
  console.groupEnd();
};

window.renderEmployeeTable = function () {
  console.group("📊 Employee Table Rendering");

  const employees = [
    {
      id: 1,
      name: "Adarasha",
      department: "Engineering",
      experience: "5 years",
      projects: 12,
    },
    {
      id: 2,
      name: "CCN",
      department: "Design",
      experience: "3 years",
      projects: 8,
    },
    {
      id: 3,
      name: "Toffu",
      department: "Engineering",
      experience: "2 years",
      projects: 6,
    },
    {
      id: 4,
      name: "Rajesh",
      department: "Engineering",
      experience: "7 years",
      projects: 15,
    },
    {
      id: 5,
      name: "Priya",
      department: "Product",
      experience: "4 years",
      projects: 10,
    },
  ];

  console.log("Rendering employee table:", employees);

  const container = document.getElementById("employee-table-container");
  container.style.display = "block";

  const output = document.getElementById("employee-table-output");

  const tableRows = employees
    .map(
      (employee) => `
    <tr class="hover:bg-gray-50">
      <td class="px-4 py-3 border-b">${employee.name}</td>
      <td class="px-4 py-3 border-b">${employee.department}</td>
      <td class="px-4 py-3 border-b">${employee.experience}</td>
      <td class="px-4 py-3 border-b text-center">${employee.projects}</td>
    </tr>
  `
    )
    .join("");

  output.innerHTML = `
    <div class="overflow-x-auto">
      <table class="w-full bg-white rounded-lg overflow-hidden shadow">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-4 py-3 text-left font-semibold">Name</th>
            <th class="px-4 py-3 text-left font-semibold">Department</th>
            <th class="px-4 py-3 text-left font-semibold">Experience</th>
            <th class="px-4 py-3 text-center font-semibold">Projects</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    </div>
  `;

  // Store reference for sorting
  lessonState.currentEmployees = employees;

  console.log(`Employee table rendered with ${employees.length} employees`);
  console.groupEnd();
};

window.sortEmployees = function (sortBy) {
  console.group(`🔄 Sorting Employees by ${sortBy}`);

  if (!lessonState.currentEmployees) {
    console.warn("No employee data loaded. Rendering table first...");
    renderEmployeeTable();
    return;
  }

  const sorted = [...lessonState.currentEmployees].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "experience") {
      return parseInt(b.experience) - parseInt(a.experience);
    }
    return 0;
  });

  console.log("Sorted employees:", sorted);

  lessonState.currentEmployees = sorted;
  renderEmployeeTable();

  console.groupEnd();
};

window.renderNotifications = function () {
  console.group("🔔 Notification System Rendering");

  const notifications = lessonState.notifications;
  console.log("Rendering notifications:", notifications);

  const container = document.getElementById("notifications-container");
  container.style.display = "block";

  const output = document.getElementById("notifications-output");

  const notificationsHTML = notifications
    .map((notification) => {
      const typeStyles = {
        success: "border-green-200 bg-green-50 text-green-800",
        info: "border-blue-200 bg-blue-50 text-blue-800",
        warning: "border-yellow-200 bg-yellow-50 text-yellow-800",
        error: "border-red-200 bg-red-50 text-red-800",
      };

      const typeIcons = {
        success: "✅",
        info: "ℹ️",
        warning: "⚠️",
        error: "🚨",
      };

      return `
      <div class="notification border-l-4 p-4 mb-3 rounded-r-lg ${
        typeStyles[notification.type]
      } ${notification.isImportant ? "ring-2 ring-opacity-50" : ""}">
        <div class="flex items-start">
          <span class="text-lg mr-3">${typeIcons[notification.type]}</span>
          <div class="flex-1">
            <p class="font-medium">${notification.message}</p>
            <p class="text-xs opacity-75 mt-1">
              ${notification.timestamp.toLocaleTimeString()}
              ${notification.isImportant ? "• High Priority" : ""}
            </p>
          </div>
          ${
            notification.type === "error"
              ? `
            <button class="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700 ml-3">
              Fix Now
            </button>
          `
              : ""
          }
        </div>
      </div>
    `;
    })
    .join("");

  output.innerHTML = `
    <div class="max-w-md mx-auto">
      <h3 class="font-semibold text-gray-700 mb-3">Toffu's Notifications</h3>
      ${notificationsHTML}
    </div>
  `;

  console.log(
    `Notification system rendered with ${notifications.length} notifications`
  );
  console.groupEnd();
};

window.addNotification = function (type, message) {
  console.group(`➕ Adding ${type.toUpperCase()} Notification`);

  const newNotification = {
    id: Date.now(),
    message: message,
    type: type,
    isImportant: type === "error",
    timestamp: new Date(),
  };

  lessonState.notifications.unshift(newNotification);
  console.log("Added notification:", newNotification);

  renderNotifications();

  // Highlight new notification
  setTimeout(() => {
    const notifications = document.querySelectorAll(".notification");
    if (notifications[0]) {
      notifications[0].classList.add("demo-highlight");
      setTimeout(
        () => notifications[0].classList.remove("demo-highlight"),
        3000
      );
    }
  }, 100);

  console.groupEnd();
};

// ===============================
// Advanced Patterns
// ===============================

window.renderDepartmentStructure = function () {
  console.group("🏢 Department Structure (Nested Mapping)");

  const departments = [
    {
      id: 1,
      name: "Engineering",
      teams: [
        { id: 1, name: "Frontend", members: ["Aakku", "Toffu", "Anushka"] },
        { id: 2, name: "Backend", members: ["Rajesh", "Arjun", "Bikash"] },
      ],
    },
    {
      id: 2,
      name: "Design",
      teams: [
        { id: 3, name: "UI/UX", members: ["CCN", "Priya", "Shreya"] },
        { id: 4, name: "Graphics", members: ["Sita", "Binita"] },
      ],
    },
  ];

  console.log("Rendering department structure:", departments);

  const container = document.getElementById("department-structure-container");
  container.style.display = "block";

  const output = document.getElementById("department-structure-output");

  // Nested mapping: departments -> teams -> members
  const departmentHTML = departments
    .map(
      (dept) => `
    <div class="department bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">${dept.name}</h2>
      <div class="teams grid md:grid-cols-2 gap-4">
        ${dept.teams
          .map(
            (team) => `
          <div class="team bg-gray-50 rounded-lg p-4">
            <h3 class="text-lg font-semibold text-gray-700 mb-3">${
              team.name
            } Team</h3>
            <div class="members space-y-2">
              ${team.members
                .map(
                  (member) => `
                <div class="member bg-white rounded px-3 py-2 text-sm">
                  👤 ${member}
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `
    )
    .join("");

  output.innerHTML = departmentHTML;

  console.log("Department structure rendered with nested mapping");
  console.log(
    `Departments: ${departments.length}, Teams: ${departments.reduce(
      (acc, dept) => acc + dept.teams.length,
      0
    )}`
  );
  console.groupEnd();
};

window.renderFilteredProjects = function (filter) {
  console.group(`🔍 Filtering Projects: ${filter.toUpperCase()}`);

  const allProjects = [
    {
      id: 1,
      name: "AakkuTech Redesign",
      status: "active",
      assignee: "CCN",
      priority: "high",
    },
    {
      id: 2,
      name: "Toffu Portfolio",
      status: "completed",
      assignee: "Toffu",
      priority: "medium",
    },
    {
      id: 3,
      name: "Priya's Dashboard",
      status: "active",
      assignee: "Aakku",
      priority: "high",
    },
    {
      id: 4,
      name: "Legacy Migration",
      status: "on-hold",
      assignee: "Rajesh",
      priority: "low",
    },
    {
      id: 5,
      name: "Mobile App Update",
      status: "active",
      assignee: "Arjun",
      priority: "medium",
    },
  ];

  let filteredProjects = allProjects;

  if (filter === "active") {
    filteredProjects = allProjects.filter(
      (project) => project.status === "active"
    );
  } else if (filter === "high") {
    filteredProjects = allProjects.filter(
      (project) => project.priority === "high"
    );
  }

  console.log(`Original projects: ${allProjects.length}`);
  console.log(`Filtered projects (${filter}): ${filteredProjects.length}`);
  console.log("Filtered result:", filteredProjects);

  const container = document.getElementById("filtered-projects-container");
  container.style.display = "block";

  const output = document.getElementById("filtered-projects-output");

  const projectsHTML = filteredProjects
    .map((project) => {
      const statusColors = {
        active: "bg-green-100 text-green-800",
        completed: "bg-blue-100 text-blue-800",
        "on-hold": "bg-yellow-100 text-yellow-800",
      };

      const priorityColors = {
        high: "border-red-300 bg-red-50",
        medium: "border-yellow-300 bg-yellow-50",
        low: "border-green-300 bg-green-50",
      };

      return `
      <div class="project border rounded-lg p-4 ${
        priorityColors[project.priority]
      }">
        <h3 class="font-semibold text-gray-800">${project.name}</h3>
        <p class="text-sm text-gray-600 mb-2">Assigned to: ${
          project.assignee
        }</p>
        <div class="flex justify-between items-center">
          <span class="px-2 py-1 rounded text-xs font-medium ${
            statusColors[project.status]
          }">
            ${project.status}
          </span>
          <span class="text-xs font-medium">
            ${project.priority} priority
          </span>
        </div>
      </div>
    `;
    })
    .join("");

  output.innerHTML = `
    <div class="mb-4">
      <h3 class="font-semibold text-gray-700">
        Priya's Projects (${filter === "all" ? "All" : filter})
      </h3>
      <p class="text-sm text-gray-600">
        Showing ${filteredProjects.length} of ${allProjects.length} projects
      </p>
    </div>
    <div class="grid gap-3">
      ${projectsHTML}
    </div>
  `;

  console.groupEnd();
};

window.renderTaskManager = function () {
  console.group("📝 Interactive Task Manager");

  const tasks = lessonState.tasks;
  console.log("Rendering task manager:", tasks);

  const container = document.getElementById("task-manager-container");
  container.style.display = "block";

  const output = document.getElementById("task-manager-output");

  const tasksHTML = tasks
    .map(
      (task) => `
    <div class="task-item flex items-center p-3 bg-white rounded-lg border hover:shadow-sm transition-shadow">
      <input 
        type="checkbox" 
        ${task.completed ? "checked" : ""} 
        onchange="toggleTask(${task.id})"
        class="mr-3 w-4 h-4 text-blue-600"
      />
      <div class="flex-1">
        <span class="${
          task.completed ? "line-through text-gray-500" : "text-gray-800"
        }">
          ${task.title}
        </span>
        <div class="text-xs text-gray-500 mt-1">
          Assigned to: ${task.assignee} • Priority: ${task.priority}
        </div>
      </div>
      <button 
        onclick="removeTask(${task.id})" 
        class="text-red-500 hover:text-red-700 text-sm ml-3"
      >
        Remove
      </button>
    </div>
  `
    )
    .join("");

  const completedCount = tasks.filter((task) => task.completed).length;

  output.innerHTML = `
    <div class="max-w-md mx-auto">
      <div class="mb-4">
        <h3 class="font-semibold text-gray-700">Bikash's Task Manager</h3>
        <p class="text-sm text-gray-600">
          ${completedCount} of ${tasks.length} tasks completed
        </p>
      </div>
      <div class="space-y-2">
        ${tasksHTML}
      </div>
    </div>
  `;

  console.log(`Task manager rendered with ${tasks.length} tasks`);
  console.groupEnd();
};

window.toggleTask = function (taskId) {
  console.group(`✅ Toggling Task ${taskId}`);

  lessonState.tasks = lessonState.tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );

  const updatedTask = lessonState.tasks.find((task) => task.id === taskId);
  console.log("Task updated:", updatedTask);

  renderTaskManager();
  console.groupEnd();
};

window.addNewTask = function () {
  console.group("➕ Adding New Task");

  const newTasks = [
    "Review Shreya's test cases",
    "Deploy Sandesh's feature",
    "Update Binita's documentation",
    "Fix Pooja's bug report",
    "Optimize Ramesh's queries",
  ];

  const randomTask = newTasks[Math.floor(Math.random() * newTasks.length)];
  const assignees = ["Aakku", "CCN", "Toffu", "Rajesh", "Priya"];
  const priorities = ["high", "medium", "low"];

  const newTask = {
    id: Date.now(),
    title: randomTask,
    completed: false,
    assignee: assignees[Math.floor(Math.random() * assignees.length)],
    priority: priorities[Math.floor(Math.random() * priorities.length)],
  };

  lessonState.tasks.push(newTask);
  console.log("Added new task:", newTask);

  renderTaskManager();
  console.groupEnd();
};

window.removeTask = function (taskId) {
  console.group(`🗑️ Removing Task ${taskId}`);

  lessonState.tasks = lessonState.tasks.filter((task) => task.id !== taskId);
  console.log(`Task ${taskId} removed`);

  renderTaskManager();
  console.groupEnd();
};

window.clearCompletedTasks = function () {
  console.group("🧹 Clearing Completed Tasks");

  const before = lessonState.tasks.length;
  lessonState.tasks = lessonState.tasks.filter((task) => !task.completed);
  const after = lessonState.tasks.length;

  console.log(`Removed ${before - after} completed tasks`);

  renderTaskManager();
  console.groupEnd();
};

// ===============================
// Performance Demonstrations
// ===============================

window.generateLargeList = function (size) {
  console.group(`🚀 Performance Test: ${size.toLocaleString()} Items`);
  console.time(`Generate ${size} items`);

  const users = [];
  const names = [
    "Aakku",
    "CCN",
    "Toffu",
    "Priya",
    "Rajesh",
    "Shreya",
    "Arjun",
    "Sita",
    "Bikash",
    "Anushka",
  ];
  const roles = ["Developer", "Designer", "Manager", "Analyst", "Engineer"];

  for (let i = 1; i <= size; i++) {
    users.push({
      id: i,
      name: `${names[i % names.length]} ${i}`,
      role: roles[i % roles.length],
      email: `user${i}@aakkutech.com`,
    });
  }

  console.timeEnd(`Generate ${size} items`);

  // Store for performance testing
  lessonState.largeUserList = users;

  // Show metrics
  const metricsContainer = document.getElementById("performance-metrics");
  metricsContainer.style.display = "block";

  document.getElementById("metrics-content").innerHTML = `
    <div class="grid grid-cols-2 gap-4 text-sm">
      <div>
        <strong>Items Generated:</strong> ${size.toLocaleString()}
      </div>
      <div>
        <strong>Memory Usage:</strong> ~${Math.round((size * 150) / 1024)}KB
      </div>
      <div>
        <strong>Generation Time:</strong> Measured in console
      </div>
      <div>
        <strong>Recommendation:</strong> ${
          size > 1000 ? "Use virtualization" : "Direct rendering OK"
        }
      </div>
    </div>
  `;

  console.log(`Generated ${size.toLocaleString()} user objects`);
  console.log("First 5 items:", users.slice(0, 5));
  console.groupEnd();
};

window.showPaginatedList = function () {
  console.group("📖 Paginated List Rendering");

  if (!lessonState.largeUserList) {
    console.warn("No large list generated. Generating 1000 items first...");
    generateLargeList(1000);
  }

  const itemsPerPage = 20;
  const currentPage = 0;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleUsers = lessonState.largeUserList.slice(startIndex, endIndex);

  console.log(
    `Showing items ${startIndex + 1}-${endIndex} of ${
      lessonState.largeUserList.length
    }`
  );

  const container = document.getElementById("large-list-container");
  container.style.display = "block";

  const output = document.getElementById("large-list-output");

  const usersHTML = visibleUsers
    .map(
      (user) => `
    <div class="user-item flex items-center p-2 border-b hover:bg-gray-50">
      <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs mr-3">
        ${user.name.charAt(0)}
      </div>
      <div class="flex-1">
        <div class="font-medium text-sm">${user.name}</div>
        <div class="text-xs text-gray-500">${user.role}</div>
      </div>
      <div class="text-xs text-gray-400">#${user.id}</div>
    </div>
  `
    )
    .join("");

  output.innerHTML = `
    <div class="max-w-md mx-auto">
      <div class="mb-4 flex justify-between items-center">
        <h3 class="font-semibold text-gray-700">AakkuTech User Directory</h3>
        <span class="text-sm text-gray-500">
          Page 1 of ${Math.ceil(
            lessonState.largeUserList.length / itemsPerPage
          )}
        </span>
      </div>
      <div class="bg-white rounded-lg border max-h-96 overflow-y-auto">
        ${usersHTML}
      </div>
      <div class="mt-4 text-center">
        <button class="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600">
          Load Next Page
        </button>
      </div>
    </div>
  `;

  console.log(`Rendered ${visibleUsers.length} items efficiently`);
  console.groupEnd();
};

// ===============================
// Real-World Applications
// ===============================

window.renderProductCatalog = function () {
  console.group("🛍️ E-commerce Product Catalog");

  const products = lessonState.products;
  console.log("Rendering product catalog:", products);

  const container = document.getElementById("product-catalog-container");
  container.style.display = "block";

  const output = document.getElementById("product-catalog-output");

  const productsHTML = products
    .map(
      (product) => `
    <div class="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div class="text-6xl p-6 text-center bg-gradient-to-r from-blue-100 to-purple-100">
        ${product.image}
      </div>
      <div class="p-4">
        <h3 class="font-bold text-lg mb-2">${product.name}</h3>
        <div class="flex items-center mb-2">
          <span class="text-yellow-500">★</span>
          <span class="text-sm text-gray-600 ml-1">${product.rating}</span>
        </div>
        <div class="flex justify-between items-center mb-3">
          <span class="text-2xl font-bold text-blue-600">$${
            product.price
          }</span>
          <span class="text-sm px-2 py-1 rounded ${
            product.inStock
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }">
            ${product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <button class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors ${
          !product.inStock ? "opacity-50 cursor-not-allowed" : ""
        }">
          ${product.inStock ? "Add to Cart" : "Notify Me"}
        </button>
      </div>
    </div>
  `
    )
    .join("");

  output.innerHTML = `
    <div class="mb-4">
      <h3 class="font-semibold text-gray-700">Shreya's E-commerce Store</h3>
      <p class="text-sm text-gray-600">
        ${products.length} products available
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${productsHTML}
    </div>
  `;

  console.log(`Product catalog rendered with ${products.length} products`);
  console.groupEnd();
};

window.filterProducts = function (category) {
  console.group(`🔍 Filtering Products by ${category}`);

  const allProducts = lessonState.products;
  const filteredProducts = allProducts.filter(
    (product) => product.category === category
  );

  console.log(
    `Found ${filteredProducts.length} products in ${category} category`
  );

  // Temporarily update products for rendering
  const originalProducts = [...lessonState.products];
  lessonState.products = filteredProducts;

  renderProductCatalog();

  // Restore original products
  setTimeout(() => {
    lessonState.products = originalProducts;
  }, 100);

  console.groupEnd();
};

window.sortProducts = function (sortBy) {
  console.group(`📊 Sorting Products by ${sortBy}`);

  const sorted = [...lessonState.products].sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    } else if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });

  console.log("Sorted products:", sorted);

  lessonState.products = sorted;
  renderProductCatalog();

  console.groupEnd();
};

window.renderSocialFeed = function () {
  console.group("📱 Social Media Feed");

  const posts = lessonState.socialPosts;
  console.log("Rendering social feed:", posts);

  const container = document.getElementById("social-feed-container");
  container.style.display = "block";

  const output = document.getElementById("social-feed-output");

  const postsHTML = posts
    .map(
      (post) => `
    <div class="post bg-white rounded-lg shadow-md p-6 mb-4">
      <div class="flex items-center mb-4">
        <div class="text-2xl mr-3">${post.avatar}</div>
        <div>
          <h3 class="font-semibold text-gray-800">${post.author}</h3>
          <p class="text-sm text-gray-500">${post.timestamp.toLocaleString()}</p>
        </div>
      </div>
      <p class="text-gray-700 mb-4">${post.content}</p>
      <div class="flex items-center justify-between text-sm text-gray-500">
        <button class="flex items-center hover:text-blue-600">
          ❤️ ${post.likes} likes
        </button>
        <button class="flex items-center hover:text-blue-600">
          💬 ${post.comments} comments
        </button>
        <button class="hover:text-blue-600">
          🔄 Share
        </button>
      </div>
    </div>
  `
    )
    .join("");

  output.innerHTML = `
    <div class="max-w-md mx-auto">
      <h3 class="font-semibold text-gray-700 mb-4">Sandesh's Social Feed</h3>
      ${postsHTML}
    </div>
  `;

  console.log(`Social feed rendered with ${posts.length} posts`);
  console.groupEnd();
};

window.addNewPost = function () {
  console.group("➕ Adding New Social Post");

  const authors = ["Binita", "Pooja", "Ramesh", "Krishna", "Anushka"];
  const postContents = [
    "Just finished an amazing React project! The mapping patterns are so powerful 🚀",
    "Learning new design techniques today. Loving the creative process! 🎨",
    "Coffee and code - the perfect combination for a productive day ☕️",
    "Team collaboration makes everything better! Great work everyone 👥",
    "Excited to share our latest product launch with the community! 🎉",
  ];

  const newPost = {
    id: Date.now(),
    author: authors[Math.floor(Math.random() * authors.length)],
    content: postContents[Math.floor(Math.random() * postContents.length)],
    timestamp: new Date(),
    likes: Math.floor(Math.random() * 20),
    comments: Math.floor(Math.random() * 10),
    avatar: "👤",
  };

  lessonState.socialPosts.unshift(newPost);
  console.log("Added new post:", newPost);

  renderSocialFeed();
  console.groupEnd();
};

window.loadMorePosts = function () {
  console.group("⬇️ Loading More Posts");

  // Simulate loading more posts
  const morePosts = [
    {
      id: Date.now() + 1,
      author: "System",
      content:
        "Welcome to AakkuTech Social! Connect with your teammates and share your journey.",
      timestamp: new Date(Date.now() - 86400000),
      likes: 5,
      comments: 1,
      avatar: "🤖",
    },
  ];

  lessonState.socialPosts.push(...morePosts);
  console.log(`Loaded ${morePosts.length} more posts`);

  renderSocialFeed();
  console.groupEnd();
};

window.renderAnalyticsDashboard = function () {
  console.group("📊 Analytics Dashboard");

  const metrics = [
    { id: 1, name: "Active Users", value: 1250, change: "+12%", icon: "👥" },
    { id: 2, name: "Revenue", value: "$45,230", change: "+8%", icon: "💰" },
    { id: 3, name: "Projects", value: 28, change: "+5%", icon: "📁" },
    { id: 4, name: "Team Members", value: 12, change: "+2%", icon: "👨‍💻" },
  ];

  console.log("Rendering analytics dashboard:", metrics);

  const container = document.getElementById("analytics-dashboard-container");
  container.style.display = "block";

  const output = document.getElementById("analytics-dashboard-output");

  const metricsHTML = metrics
    .map(
      (metric) => `
    <div class="metric-card bg-white rounded-lg shadow-md p-6">
      <div class="flex items-center justify-between mb-4">
        <div class="text-3xl">${metric.icon}</div>
        <span class="text-sm text-green-600 font-medium">${metric.change}</span>
      </div>
      <h3 class="text-2xl font-bold text-gray-800">${metric.value}</h3>
      <p class="text-gray-600 text-sm">${metric.name}</p>
    </div>
  `
    )
    .join("");

  output.innerHTML = `
    <div class="mb-4">
      <h3 class="font-semibold text-gray-700">Binita's Analytics Dashboard</h3>
      <p class="text-sm text-gray-600">
        Real-time metrics and insights
      </p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      ${metricsHTML}
    </div>
  `;

  console.log(`Analytics dashboard rendered with ${metrics.length} metrics`);
  console.groupEnd();
};

window.refreshDashboardData = function () {
  console.group("🔄 Refreshing Dashboard Data");

  console.log("Simulating data refresh...");

  // Simulate data update
  setTimeout(() => {
    renderAnalyticsDashboard();
    console.log("Dashboard data refreshed");
  }, 500);

  console.groupEnd();
};

window.toggleRealTimeUpdates = function () {
  console.group("⚡ Real-time Updates Toggle");

  lessonState.isRealTimeEnabled = !lessonState.isRealTimeEnabled;

  console.log(
    `Real-time updates: ${
      lessonState.isRealTimeEnabled ? "ENABLED" : "DISABLED"
    }`
  );

  if (lessonState.isRealTimeEnabled) {
    console.log("Starting real-time data simulation...");
    // In a real app, this would connect to websockets or polling
  } else {
    console.log("Stopped real-time updates");
  }

  console.groupEnd();
};

// ===============================
// Initialize Lesson
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  console.time("React Mapping Lesson Load Time");

  initializeReactMappingLesson();

  console.timeEnd("React Mapping Lesson Load Time");
  console.info("🎯 React Mapping lesson ready for interactive learning!");

  // Log available functions
  console.group("🛠️ Available Interactive Functions");
  console.log("Basic:", [
    "demonstrateBasicMap",
    "renderTeamList",
    "addTeamMember",
  ]);
  console.log("Keys:", ["demonstrateKeys", "addItemToList"]);
  console.log("Patterns:", [
    "renderPortfolioGrid",
    "renderEmployeeTable",
    "renderNotifications",
  ]);
  console.log("Advanced:", [
    "renderDepartmentStructure",
    "renderFilteredProjects",
    "renderTaskManager",
  ]);
  console.log("Performance:", ["generateLargeList", "showPaginatedList"]);
  console.log("Real World:", [
    "renderProductCatalog",
    "renderSocialFeed",
    "renderAnalyticsDashboard",
  ]);
  console.groupEnd();
});
