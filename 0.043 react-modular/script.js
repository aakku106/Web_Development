/**
 * Modular Programming in React - Interactive JavaScript
 * Educational demonstrations of React component architecture
 *
 * @format
 */

// Sample data for demonstrations
const teamMembers = [
  {
    id: 1,
    name: "Aakku",
    role: "Full Stack Developer",
    email: "adarasha.gaihre106@gmail.com",
    skills: ["React", "Node.js", "MongoDB", "TypeScript"],
    avatar: "DEV",
  },
  {
    id: 2,
    name: "CCN",
    role: "UI/UX Designer",
    email: "ccn@aakkutech.com",
    skills: ["Figma", "Adobe XD", "CSS", "Design Systems"],
    avatar: "DES",
  },
  {
    id: 3,
    name: "Toffu",
    role: "Frontend Developer",
    email: "toffu@aakkutech.com",
    skills: ["React", "Vue.js", "CSS", "JavaScript"],
    avatar: "FE",
  },
  {
    id: 4,
    name: "Priya",
    role: "Product Manager",
    email: "priya@aakkutech.com",
    skills: ["Analytics", "Scrum", "Strategy", "User Research"],
    avatar: "PM",
  },
];

const projects = [
  {
    id: 1,
    name: "AakkuTech Website",
    description: "Company website redesign",
    status: "active",
    team: ["Aakku", "CCN"],
    priority: "high",
  },
  {
    id: 2,
    name: "Mobile App",
    description: "Cross-platform mobile application",
    status: "planning",
    team: ["Toffu", "Priya"],
    priority: "medium",
  },
  {
    id: 3,
    name: "API Gateway",
    description: "Microservices API gateway",
    status: "completed",
    team: ["Aakku"],
    priority: "high",
  },
];

// State management for demos
let currentState = {
  selectedProject: null,
  showSkills: true,
  tasks: [],
  renderCount: 0,
};

// Educational logging
function logOperation(operation, details = {}) {
  console.group(`Component Operation: ${operation}`);
  console.log("Details:", details);
  console.log("Current State:", currentState);
  console.groupEnd();
}

// Tab navigation functionality
function showTab(tabName) {
  logOperation("Tab Navigation", { activeTab: tabName });

  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });

  // Remove active class from all tab buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active", "bg-blue-500", "text-white");
    btn.classList.add("bg-gray-200", "text-gray-700");
  });

  // Show selected tab content
  const selectedTab = document.getElementById(tabName);
  if (selectedTab) {
    selectedTab.classList.add("active");
  }

  // Update active tab button
  const activeBtn = event.target;
  activeBtn.classList.remove("bg-gray-200", "text-gray-700");
  activeBtn.classList.add("active", "bg-blue-500", "text-white");

  console.log(`Switched to ${tabName} tab`);
}

// Component Basics Tab Functions

function renderGreetingComponent() {
  console.group("Rendering Greeting Components");

  const names = ["Aakku", "CCN", "Toffu", "Priya"];

  // Simulate React component
  function Greeting(name) {
    return `
      <div class="greeting-card bg-blue-50 border border-blue-200 rounded-lg p-4 mb-2">
        <h3 class="text-lg font-semibold text-blue-800">Hello, ${name}!</h3>
        <p class="text-blue-600">Welcome to AakkuTech</p>
      </div>
    `;
  }

  const output = names
    .map((name) => {
      console.log(`Creating Greeting component for ${name}`);
      return Greeting(name);
    })
    .join("");

  const container = document.getElementById("greeting-result");
  container.innerHTML = output;

  document.getElementById("greeting-output").style.display = "block";

  console.log(`Rendered ${names.length} Greeting components`);
  console.groupEnd();

  logOperation("Render Greeting Components", { components: names.length });
}

function renderButtonVariants() {
  console.group("Rendering Button Variants");

  const variants = [
    { variant: "primary", size: "md", text: "Primary Button" },
    { variant: "secondary", size: "md", text: "Secondary Button" },
    { variant: "danger", size: "sm", text: "Delete" },
    { variant: "success", size: "lg", text: "Save Changes" },
  ];

  function Button(config) {
    const variantClasses = {
      primary: "bg-blue-500 hover:bg-blue-600 text-white",
      secondary: "bg-gray-500 hover:bg-gray-600 text-white",
      danger: "bg-red-500 hover:bg-red-600 text-white",
      success: "bg-green-500 hover:bg-green-600 text-white",
    };

    const sizeClasses = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg",
    };

    return `
      <button 
        class="${variantClasses[config.variant]} ${
      sizeClasses[config.size]
    } rounded-lg transition-colors mr-2 mb-2"
        onclick="handleButtonClick('${config.text}')"
      >
        ${config.text}
      </button>
    `;
  }

  const output = variants
    .map((config) => {
      console.log(`Creating ${config.variant} button (${config.size})`);
      return Button(config);
    })
    .join("");

  const container = document.getElementById("button-examples-output");
  container.innerHTML = `
    <div class="button-showcase">
      ${output}
    </div>
    <div class="mt-4 p-3 bg-gray-100 rounded">
      <p class="text-sm text-gray-600">Click any button to see the reusable component in action!</p>
    </div>
  `;

  document.getElementById("button-examples-container").style.display = "block";

  console.log(`Rendered ${variants.length} button variants`);
  console.groupEnd();

  logOperation("Render Button Variants", { variants: variants.length });
}

function handleButtonClick(buttonText) {
  console.log(`Button clicked: ${buttonText}`);
  alert(`${buttonText} clicked! This demonstrates component reusability.`);
}

function testButtonClicks() {
  console.group("Testing Button Click Handlers");

  const testResults = [
    "Primary Button: ✓ Click handler working",
    "Secondary Button: ✓ Click handler working",
    "Delete Button: ✓ Click handler working",
    "Save Changes: ✓ Click handler working",
  ];

  testResults.forEach((result) => console.log(result));

  alert(
    "All button click handlers are working correctly!\nCheck the console for detailed test results."
  );

  console.groupEnd();
  logOperation("Test Button Clicks", { tests: testResults.length });
}

function renderTeamMemberCard() {
  console.group("Rendering Team Member Card");

  const member = teamMembers[0]; // Aakku

  function TeamMemberCard(member, showSkills) {
    return `
      <div class="team-member-card bg-white border border-gray-200 rounded-lg p-6 shadow-md">
        <div class="flex items-start space-x-4">
          <div class="avatar bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
            ${member.avatar}
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold text-gray-800">${member.name}</h3>
            <p class="text-gray-600">${member.role}</p>
            <p class="text-sm text-gray-500">${member.email}</p>
            ${
              showSkills
                ? `
              <div class="mt-3">
                <h4 class="text-sm font-semibold text-gray-700 mb-2">Skills:</h4>
                <div class="flex flex-wrap gap-1">
                  ${member.skills
                    .map(
                      (skill) => `
                    <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">${skill}</span>
                  `
                    )
                    .join("")}
                </div>
              </div>
            `
                : ""
            }
          </div>
        </div>
        <div class="mt-4 flex gap-2">
          <button 
            onclick="contactTeamMember('${member.name}')"
            class="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
          >
            Contact
          </button>
          <button 
            onclick="viewProjects('${member.name}')"
            class="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600 transition-colors"
          >
            View Projects
          </button>
        </div>
      </div>
    `;
  }

  const output = TeamMemberCard(member, currentState.showSkills);

  const container = document.getElementById("team-member-output");
  container.innerHTML = output;

  document.getElementById("team-member-container").style.display = "block";

  console.log(
    `Rendered card for ${member.name} with skills: ${currentState.showSkills}`
  );
  console.groupEnd();

  logOperation("Render Team Member Card", {
    member: member.name,
    showSkills: currentState.showSkills,
  });
}

function toggleTeamMemberSkills() {
  currentState.showSkills = !currentState.showSkills;
  renderTeamMemberCard();

  logOperation("Toggle Skills Display", {
    showSkills: currentState.showSkills,
  });
}

function contactTeamMember(name) {
  console.log(`Contacting ${name}`);
  alert(
    `Sending message to ${name}...\nThis demonstrates event handling in components!`
  );
}

function viewProjects(name) {
  console.log(`Viewing projects for ${name}`);
  alert(`Loading projects for ${name}...\nThis shows component interaction!`);
}

// Architecture Tab Functions

function renderComponentHierarchy() {
  console.group("Rendering Component Hierarchy");

  const hierarchy = `
    <div class="component-tree bg-gray-50 p-6 rounded-lg">
      <div class="tree-node">
        <div class="component-box bg-blue-500 text-white p-3 rounded mb-2">
          <strong>App</strong> (Root Component)
        </div>
        <div class="children ml-4">
          <div class="component-box bg-green-500 text-white p-2 rounded mb-2">
            <strong>Header</strong>
            <div class="children ml-4 mt-2">
              <div class="component-box bg-yellow-500 text-black p-1 rounded mb-1 text-sm">Logo</div>
              <div class="component-box bg-yellow-500 text-black p-1 rounded mb-1 text-sm">Navigation</div>
              <div class="component-box bg-yellow-500 text-black p-1 rounded mb-1 text-sm">UserProfile</div>
            </div>
          </div>
          <div class="component-box bg-green-500 text-white p-2 rounded mb-2">
            <strong>Main</strong>
            <div class="children ml-4 mt-2">
              <div class="component-box bg-purple-500 text-white p-1 rounded mb-1 text-sm">
                ProjectList
                <div class="ml-4 mt-1">
                  <div class="component-box bg-pink-500 text-white p-1 rounded text-xs">ProjectCard</div>
                </div>
              </div>
              <div class="component-box bg-purple-500 text-white p-1 rounded mb-1 text-sm">
                ProjectDetails
                <div class="ml-4 mt-1">
                  <div class="component-box bg-pink-500 text-white p-1 rounded text-xs">TaskList</div>
                </div>
              </div>
            </div>
          </div>
          <div class="component-box bg-green-500 text-white p-2 rounded">
            <strong>Footer</strong>
            <div class="children ml-4 mt-2">
              <div class="component-box bg-yellow-500 text-black p-1 rounded mb-1 text-sm">SocialLinks</div>
              <div class="component-box bg-yellow-500 text-black p-1 rounded text-sm">Copyright</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 p-3 bg-blue-50 rounded">
      <p class="text-sm text-blue-700">
        <strong>Component Hierarchy:</strong> Each colored box represents a React component. 
        Parent components contain and manage their children.
      </p>
    </div>
  `;

  const container = document.getElementById("hierarchy-output");
  container.innerHTML = hierarchy;

  document.getElementById("hierarchy-container").style.display = "block";

  console.log("Component hierarchy visualization rendered");
  console.groupEnd();

  logOperation("Render Component Hierarchy");
}

function renderCardComposition() {
  console.group("Rendering Card Composition");

  function Card(title, children) {
    return `
      <div class="card bg-white border border-gray-200 rounded-lg shadow-md mb-4">
        <div class="card-header bg-gray-50 px-4 py-3 border-b">
          <h3 class="text-lg font-semibold text-gray-800">${title}</h3>
        </div>
        <div class="card-body p-4">
          ${children}
        </div>
      </div>
    `;
  }

  const userContent = `
    <div class="user-info">
      <p><strong>Name:</strong> Aakku</p>
      <p><strong>Role:</strong> Full Stack Developer</p>
      <p><strong>Email:</strong> adarasha.gaihre106@gmail.com</p>
    </div>
  `;

  const projectContent = `
    <div class="project-info">
      <p><strong>Status:</strong> Active</p>
      <p><strong>Team:</strong> Aakku, CCN</p>
      <p><strong>Deadline:</strong> Dec 15, 2024</p>
    </div>
  `;

  const output = `
    <div class="composition-demo">
      <h4 class="text-lg font-semibold mb-4">Same Card Component, Different Content:</h4>
      ${Card("User Profile", userContent)}
      ${Card("Project Details", projectContent)}
    </div>
    <div class="p-3 bg-green-50 rounded">
      <p class="text-sm text-green-700">
        <strong>Composition:</strong> The same Card component is reused with different content. 
        This is more flexible than inheritance!
      </p>
    </div>
  `;

  const container = document.getElementById("composition-output");
  container.innerHTML = output;

  document.getElementById("composition-container").style.display = "block";

  console.log("Card composition examples rendered");
  console.groupEnd();

  logOperation("Render Card Composition");
}

function renderDifferentCards() {
  console.group("Rendering Different Card Types");

  function Card(title, children, variant = "default") {
    const variants = {
      default: "border-gray-200",
      success: "border-green-200 bg-green-50",
      warning: "border-yellow-200 bg-yellow-50",
      danger: "border-red-200 bg-red-50",
    };

    return `
      <div class="card bg-white border ${variants[variant]} rounded-lg shadow-md mb-4">
        <div class="card-header px-4 py-3 border-b">
          <h3 class="text-lg font-semibold text-gray-800">${title}</h3>
        </div>
        <div class="card-body p-4">
          ${children}
        </div>
      </div>
    `;
  }

  const output = `
    <div class="different-cards">
      <h4 class="text-lg font-semibold mb-4">Card Variants:</h4>
      ${Card(
        "Success Message",
        "<p>Project completed successfully!</p>",
        "success"
      )}
      ${Card(
        "Warning",
        "<p>Deadline approaching for Mobile App project.</p>",
        "warning"
      )}
      ${Card("Error", "<p>Build failed for AakkuTech website.</p>", "danger")}
    </div>
  `;

  const container = document.getElementById("composition-output");
  container.innerHTML = output;

  console.log("Different card variants rendered");
  console.groupEnd();

  logOperation("Render Different Card Types");
}

function renderSingleResponsibilityDemo() {
  console.group("Single Responsibility Principle Demo");

  // Modular approach
  function UserDisplay(user) {
    return `
      <div class="user-display bg-blue-50 p-4 rounded mb-2">
        <h4 class="font-semibold">UserDisplay Component</h4>
        <p><strong>${user.name}</strong> - ${user.role}</p>
        <p>${user.email}</p>
      </div>
    `;
  }

  function UserActions(user) {
    return `
      <div class="user-actions bg-green-50 p-4 rounded mb-2">
        <h4 class="font-semibold">UserActions Component</h4>
        <button class="bg-blue-500 text-white px-3 py-1 rounded mr-2">Edit</button>
        <button class="bg-gray-500 text-white px-3 py-1 rounded">View Projects</button>
      </div>
    `;
  }

  function UserStats(user) {
    return `
      <div class="user-stats bg-purple-50 p-4 rounded">
        <h4 class="font-semibold">UserStats Component</h4>
        <p>Projects: 3 | Tasks: 12 | Completed: 8</p>
      </div>
    `;
  }

  const user = teamMembers[0];

  const output = `
    <div class="responsibility-demo">
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="text-lg font-semibold mb-3 text-red-600">Monolithic Approach</h4>
          <div class="bg-red-50 border border-red-200 p-4 rounded">
            <p class="text-sm mb-2">One big component doing everything:</p>
            <ul class="text-xs space-y-1">
              <li>• User data display</li>
              <li>• Action buttons</li>
              <li>• Statistics calculation</li>
              <li>• State management</li>
              <li>• API calls</li>
            </ul>
            <p class="text-xs mt-2 text-red-600">Hard to test, maintain, and reuse!</p>
          </div>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-3 text-green-600">Modular Approach</h4>
          <div>
            ${UserDisplay(user)}
            ${UserActions(user)}
            ${UserStats(user)}
            <p class="text-xs text-green-600 mt-2">Easy to test, maintain, and reuse!</p>
          </div>
        </div>
      </div>
    </div>
  `;

  const container = document.getElementById("responsibility-output");
  container.innerHTML = output;

  document.getElementById("responsibility-container").style.display = "block";

  console.log("Single responsibility demo rendered");
  console.groupEnd();

  logOperation("Render Single Responsibility Demo");
}

// Communication Tab Functions

function renderParentToChild() {
  console.group("Parent to Child Communication Demo");

  function ProjectManager() {
    return `
      <div class="parent-component bg-blue-50 border-2 border-blue-300 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-blue-800 mb-4">ProjectManager (Parent)</h4>
        <p class="text-sm text-blue-600 mb-4">Manages project data and passes it to children via props</p>
        
        <div class="children-components space-y-4">
          ${projects.map((project) => ProjectCard(project)).join("")}
        </div>
      </div>
    `;
  }

  function ProjectCard(project) {
    return `
      <div class="child-component bg-white border border-gray-200 p-4 rounded shadow-sm">
        <h5 class="font-semibold text-gray-800">${project.name}</h5>
        <p class="text-sm text-gray-600">${project.description}</p>
        <div class="mt-2 flex space-x-2">
          <span class="bg-${
            project.status === "active"
              ? "green"
              : project.status === "planning"
              ? "yellow"
              : "blue"
          }-100 
                       text-${
                         project.status === "active"
                           ? "green"
                           : project.status === "planning"
                           ? "yellow"
                           : "blue"
                       }-800 
                       px-2 py-1 rounded text-xs">${project.status}</span>
          <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Team: ${project.team.join(
            ", "
          )}</span>
        </div>
      </div>
    `;
  }

  const output = ProjectManager();

  const container = document.getElementById("parent-child-output");
  container.innerHTML = output;

  document.getElementById("parent-child-container").style.display = "block";

  console.log("Parent to child communication demo rendered");
  console.log("Data flow: ProjectManager → ProjectCard components");
  console.groupEnd();

  logOperation("Render Parent to Child Demo", { projects: projects.length });
}

function renderChildToParent() {
  console.group("Child to Parent Communication Demo");

  function TaskManager() {
    return `
      <div class="task-manager bg-green-50 border-2 border-green-300 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-green-800 mb-4">TaskManager (Parent)</h4>
        <p class="text-sm text-green-600 mb-4">Receives data from child components via callbacks</p>
        
        <div class="task-form-container mb-4">
          ${TaskForm()}
        </div>
        
        <div class="task-list">
          <h5 class="font-semibold text-gray-700 mb-2">Current Tasks:</h5>
          <div id="current-tasks">
            ${
              currentState.tasks.length === 0
                ? '<p class="text-gray-500 text-sm">No tasks yet. Add one above!</p>'
                : currentState.tasks
                    .map(
                      (task, index) => `
                <div class="task-item bg-white p-2 rounded mb-2 flex justify-between items-center">
                  <span>${task}</span>
                  <button onclick="removeTask(${index})" class="text-red-500 text-sm">Remove</button>
                </div>
              `
                    )
                    .join("")
            }
          </div>
        </div>
      </div>
    `;
  }

  function TaskForm() {
    return `
      <div class="task-form bg-white border border-gray-200 p-4 rounded">
        <h5 class="font-semibold text-gray-800 mb-2">TaskForm (Child)</h5>
        <div class="flex space-x-2">
          <input 
            type="text" 
            id="task-input" 
            placeholder="Enter new task..."
            class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
          >
          <button 
            onclick="addTaskFromForm()"
            class="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>
        <p class="text-xs text-gray-500 mt-1">Child sends data up via onAddTask callback</p>
      </div>
    `;
  }

  const output = TaskManager();

  const container = document.getElementById("child-parent-output");
  container.innerHTML = output;

  document.getElementById("child-parent-container").style.display = "block";

  console.log("Child to parent communication demo rendered");
  console.log("Callback flow: TaskForm → TaskManager");
  console.groupEnd();

  logOperation("Render Child to Parent Demo", {
    currentTasks: currentState.tasks.length,
  });
}

function addTaskFromForm() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();

  if (taskText) {
    addTask(taskText);
    input.value = "";
    renderChildToParent(); // Re-render to show updated tasks
  }
}

function addTask(taskText) {
  currentState.tasks.push(taskText);
  console.log(`Task added: ${taskText}`);
  logOperation("Add Task", {
    task: taskText,
    totalTasks: currentState.tasks.length,
  });
}

function addSampleTask() {
  const sampleTasks = [
    "Review CCN's design mockups",
    "Test Toffu's new component",
    "Deploy AakkuTech website",
    "Meet with Priya about roadmap",
  ];

  const randomTask =
    sampleTasks[Math.floor(Math.random() * sampleTasks.length)];
  addTask(randomTask);
  renderChildToParent();
}

function removeTask(index) {
  const removedTask = currentState.tasks.splice(index, 1)[0];
  console.log(`Task removed: ${removedTask}`);
  renderChildToParent();
  logOperation("Remove Task", {
    task: removedTask,
    remainingTasks: currentState.tasks.length,
  });
}

function renderSiblingCommunication() {
  console.group("Sibling Communication Demo");

  function ProjectDashboard() {
    return `
      <div class="project-dashboard bg-purple-50 border-2 border-purple-300 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-purple-800 mb-4">ProjectDashboard (Parent)</h4>
        <p class="text-sm text-purple-600 mb-4">Manages communication between sibling components</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="project-list">
            ${ProjectList()}
          </div>
          <div class="project-details">
            ${ProjectDetails()}
          </div>
        </div>
      </div>
    `;
  }

  function ProjectList() {
    return `
      <div class="bg-white border border-gray-200 p-4 rounded">
        <h5 class="font-semibold text-gray-800 mb-3">ProjectList (Sibling 1)</h5>
        <div class="space-y-2">
          ${projects
            .map(
              (project) => `
            <div 
              class="project-item p-2 rounded cursor-pointer transition-colors
                     ${
                       currentState.selectedProject?.id === project.id
                         ? "bg-blue-100 border border-blue-300"
                         : "bg-gray-50 hover:bg-gray-100"
                     }"
              onclick="selectProject(${project.id})"
            >
              <div class="text-sm font-medium">${project.name}</div>
              <div class="text-xs text-gray-500">${project.status}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function ProjectDetails() {
    const project = currentState.selectedProject;
    return `
      <div class="bg-white border border-gray-200 p-4 rounded">
        <h5 class="font-semibold text-gray-800 mb-3">ProjectDetails (Sibling 2)</h5>
        ${
          project
            ? `
          <div class="project-info">
            <h6 class="font-medium text-lg">${project.name}</h6>
            <p class="text-gray-600 text-sm mb-2">${project.description}</p>
            <div class="details">
              <p class="text-sm"><strong>Status:</strong> ${project.status}</p>
              <p class="text-sm"><strong>Team:</strong> ${project.team.join(
                ", "
              )}</p>
              <p class="text-sm"><strong>Priority:</strong> ${
                project.priority
              }</p>
            </div>
          </div>
        `
            : `
          <p class="text-gray-500 text-sm">Select a project from the list to see details</p>
        `
        }
      </div>
    `;
  }

  const output = ProjectDashboard();

  const container = document.getElementById("sibling-output");
  container.innerHTML = output;

  document.getElementById("sibling-container").style.display = "block";

  console.log("Sibling communication demo rendered");
  console.log("Communication flow: ProjectList ← Parent → ProjectDetails");
  console.groupEnd();

  logOperation("Render Sibling Communication Demo", {
    selectedProject: currentState.selectedProject?.name || "none",
  });
}

function selectProject(projectId) {
  const project = projects.find((p) => p.id === projectId);
  currentState.selectedProject = project;

  console.log(`Project selected: ${project.name}`);
  renderSiblingCommunication(); // Re-render to show selection

  logOperation("Select Project", { projectId, projectName: project.name });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  console.group("React Modular Programming Lesson Initialization");
  console.log("Welcome to Component-based Architecture!");
  console.log(
    "Available team members:",
    teamMembers.map((m) => m.name)
  );
  console.log(
    "Available projects:",
    projects.map((p) => p.name)
  );
  console.log("Interactive demos ready for exploration");
  console.groupEnd();

  logOperation("Page Initialization", {
    teamMembers: teamMembers.length,
    projects: projects.length,
  });
});

// Placeholder functions for advanced patterns (to be implemented in full version)
function renderHOCExample() {
  alert(
    "Higher-Order Components demo coming soon! This would show authentication wrapping."
  );
  logOperation("HOC Demo", { status: "placeholder" });
}

function renderCustomHooksExample() {
  alert("Custom Hooks demo coming soon! This would show useApi hook.");
  logOperation("Custom Hooks Demo", { status: "placeholder" });
}

function refreshHookData() {
  alert("Data refresh simulation! In real app, this would call the API again.");
  logOperation("Refresh Hook Data", { status: "simulated" });
}

function renderRenderPropsExample() {
  alert(
    "Render Props demo coming soon! This would show flexible data fetching."
  );
  logOperation("Render Props Demo", { status: "placeholder" });
}

function renderFullProjectManager() {
  alert(
    "Full Project Manager coming soon! This would show a complete modular application."
  );
  logOperation("Full Project Manager Demo", { status: "placeholder" });
}

function addNewProject() {
  alert(
    "Add Project functionality! This would demonstrate dynamic component updates."
  );
  logOperation("Add New Project", { status: "simulated" });
}

function assignTeamMember() {
  alert("Assign Team Member! This would show component interaction patterns.");
  logOperation("Assign Team Member", { status: "simulated" });
}

function renderPerformanceDemo() {
  currentState.renderCount++;
  alert(
    `Performance Demo! Render count: ${currentState.renderCount}\nThis would show React.memo, useMemo, and useCallback.`
  );
  logOperation("Performance Demo", { renderCount: currentState.renderCount });
}

function triggerReRender() {
  currentState.renderCount++;
  alert(
    `Re-render triggered! Count: ${currentState.renderCount}\nIn real demo, you'd see which components re-render.`
  );
  logOperation("Trigger Re-render", { renderCount: currentState.renderCount });
}

function runComponentTests() {
  alert(
    "Running component tests!\n✓ Button renders correctly\n✓ Props are passed down\n✓ Event handlers work\n✓ State updates properly"
  );
  logOperation("Run Component Tests", { status: "all passed" });
}

function showTestResults() {
  alert(
    "Test Results:\n✓ 24 tests passed\n✗ 0 tests failed\n📊 100% coverage\n⚡ Fast execution"
  );
  logOperation("Show Test Results", {
    passed: 24,
    failed: 0,
    coverage: "100%",
  });
}
