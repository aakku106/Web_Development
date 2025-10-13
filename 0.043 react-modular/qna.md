<!-- @format -->

# Modular Programming in React - Practice Questions & Answers

## Level 1: Component Basics (Beginner)

### Question 1: What is a React Component?

**Q**: In your own words, explain what a React component is. Why are components important in React development?

**A**: A React component is a reusable piece of UI that encapsulates its own structure, styling, and behavior. Components are important because they:

- **Reusability**: Write once, use multiple times
- **Maintainability**: Easier to debug and update
- **Organization**: Break complex UIs into manageable pieces
- **Testing**: Test individual components in isolation
- **Collaboration**: Different developers can work on different components

**Example from AakkuTech**:

```jsx
// A simple UserCard component
function UserCard({ name, role, email }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{email}</p>
    </div>
  );
}
```

### Question 2: Function vs Class Components

**Q**: What's the difference between function components and class components? Which one should Aakku use for new AakkuTech projects?

**A**:
**Function Components** (Recommended):

- Simpler syntax
- Use React Hooks for state and lifecycle
- Better performance with React's optimizations
- Easier to test and reason about

**Class Components** (Legacy):

- More verbose syntax
- Use this.state and lifecycle methods
- Still supported but not recommended for new code

**Recommendation**: Use function components with hooks for all new AakkuTech projects.

### Question 3: Props Flow

**Q**: Toffu is confused about props. Explain how props work in React components with an example from the AakkuTech team.

**A**: Props (properties) are how data flows from parent to child components. They are:

- **Read-only**: Child components cannot modify props
- **One-way flow**: Data flows down from parent to child
- **Dynamic**: Can pass any JavaScript value

```jsx
// Parent component
function TeamDashboard() {
  const teamMembers = [
    { name: "Aakku", role: "Lead Developer" },
    { name: "CCN", role: "Frontend Developer" },
    { name: "Toffu", role: "Backend Developer" },
  ];

  return (
    <div>
      {teamMembers.map((member) => (
        <TeamMemberCard
          key={member.name}
          name={member.name}
          role={member.role}
        />
      ))}
    </div>
  );
}

// Child component
function TeamMemberCard({ name, role }) {
  return (
    <div className="member-card">
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}
```

## Level 2: Component Architecture (Intermediate)

### Question 4: Single Responsibility Principle

**Q**: CCN created a component that handles user profile display, user editing, AND user deletion. Why is this problematic? How should she refactor it?

**A**: This violates the Single Responsibility Principle. Problems:

- **Hard to maintain**: Changes in one area affect others
- **Difficult to test**: Too many responsibilities to test
- **Poor reusability**: Can't reuse just the display logic
- **Complex state**: Managing multiple concerns in one place

**Better approach**:

```jsx
// Separate responsibilities
function UserProfile({ user }) {
  return <UserDisplay user={user} />; // Only displays
}

function UserDisplay({ user }) {
  return (
    <div className="user-display">
      <img src={user.avatar} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

function UserEditForm({ user, onSave }) {
  // Only handles editing
}

function UserActions({ user, onEdit, onDelete }) {
  // Only handles action buttons
}
```

### Question 5: Component Composition

**Q**: Priya wants to create a flexible Card component that can contain different types of content. Show her how to use composition instead of inheritance.

**A**: Use composition with `children` prop:

```jsx
// Flexible Card component
function Card({ title, children, className = "" }) {
  return (
    <div className={`card ${className}`}>
      {title && <div className="card-header">{title}</div>}
      <div className="card-content">{children}</div>
    </div>
  );
}

// Usage examples
function ProjectDashboard() {
  return (
    <div>
      {/* Card with user info */}
      <Card title="Team Member">
        <UserDisplay user={aakkuData} />
      </Card>

      {/* Card with project stats */}
      <Card title="Project Stats">
        <ProjectStats data={projectData} />
      </Card>

      {/* Card with custom content */}
      <Card title="Custom Widget">
        <div>
          <p>Any custom content here</p>
          <button>Custom Action</button>
        </div>
      </Card>
    </div>
  );
}
```

### Question 6: State vs Props

**Q**: When should data be component state vs props? Give examples from AakkuTech scenarios.

**A**:
**Use State when**:

- Data changes over time
- Component controls the data
- Data is internal to component

**Use Props when**:

- Data comes from parent
- Data is read-only for this component
- Data is passed down the component tree

```jsx
// State example - internal form data
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  }); // STATE - component controls this

  return (
    <form>
      <input
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
    </form>
  );
}

// Props example - data from parent
function TeamMemberList({ members }) {
  // PROPS - comes from parent
  return (
    <div>
      {members.map((member) => (
        <TeamMemberCard key={member.id} member={member} /> // PROPS
      ))}
    </div>
  );
}
```

## Level 3: Component Communication (Advanced)

### Question 7: Parent-Child Communication

**Q**: In the AakkuTech project dashboard, how would you implement communication from a TaskForm child component back to the TaskList parent component when a new task is added?

**A**: Use callback functions passed as props:

```jsx
// Parent component
function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        ...newTask,
        id: Date.now(),
        createdBy: "aakku@aakkutech.com",
      },
    ]);
  };

  return (
    <div className="task-manager">
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

// Child component
function TaskForm({ onAddTask }) {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "medium",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(taskData); // Communicate back to parent
    setTaskData({ title: "", description: "", priority: "medium" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={taskData.title}
        onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
        placeholder="Task title"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
```

### Question 8: Sibling Communication

**Q**: CCN has a ProjectSelector component and a ProjectDetails component that are siblings. When a project is selected in ProjectSelector, ProjectDetails should update. How should this be implemented?

**A**: Lift the state up to the nearest common ancestor:

```jsx
// Common parent manages shared state
function ProjectDashboard() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects] = useState([
    { id: 1, name: "AakkuTech Website", status: "In Progress" },
    { id: 2, name: "Client Portal", status: "Planning" },
    { id: 3, name: "Mobile App", status: "Testing" },
  ]);

  return (
    <div className="project-dashboard">
      <ProjectSelector
        projects={projects}
        selectedProject={selectedProject}
        onSelectProject={setSelectedProject} // Pass setter
      />
      <ProjectDetails
        project={selectedProject} // Pass selected data
      />
    </div>
  );
}

// Sibling 1
function ProjectSelector({ projects, selectedProject, onSelectProject }) {
  return (
    <div className="project-selector">
      {projects.map((project) => (
        <button
          key={project.id}
          className={selectedProject?.id === project.id ? "selected" : ""}
          onClick={() => onSelectProject(project)}>
          {project.name}
        </button>
      ))}
    </div>
  );
}

// Sibling 2
function ProjectDetails({ project }) {
  if (!project) {
    return <div>Select a project to view details</div>;
  }

  return (
    <div className="project-details">
      <h2>{project.name}</h2>
      <p>Status: {project.status}</p>
      <p>Assigned to: aakku@aakkutech.com</p>
    </div>
  );
}
```

### Question 9: Context for Deep Prop Drilling

**Q**: Toffu has a deeply nested component structure where user authentication data needs to be passed through many levels. How can he avoid prop drilling?

**A**: Use React Context:

```jsx
// 1. Create Context
const AuthContext = createContext();

// 2. Create Provider component
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user data
    setTimeout(() => {
      setUser({
        name: "Aakku",
        email: "aakku@aakkutech.com",
        role: "Lead Developer",
      });
      setLoading(false);
    }, 1000);
  }, []);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Custom hook for easy access
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

// 4. Use in any nested component
function DeeplyNestedUserProfile() {
  const { user, logout } = useAuth(); // No prop drilling!

  if (!user) return <div>Not logged in</div>;

  return (
    <div>
      <h3>Welcome, {user.name}!</h3>
      <p>{user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

// 5. App structure
function App() {
  return (
    <AuthProvider>
      <Header />
      <Main>
        <Sidebar />
        <Content>
          <DeeplyNestedUserProfile />
        </Content>
      </Main>
    </AuthProvider>
  );
}
```

## Level 4: Advanced Patterns (Expert)

### Question 10: Higher-Order Components (HOC)

**Q**: Priya wants to add loading states to multiple components in the AakkuTech dashboard. Show her how to create a reusable HOC for this.

**A**: Create a Higher-Order Component:

```jsx
// HOC for loading functionality
function withLoading(WrappedComponent) {
  return function WithLoadingComponent(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate loading
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading AakkuTech data...</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}

// Usage
const TeamListWithLoading = withLoading(TeamList);
const ProjectStatsWithLoading = withLoading(ProjectStats);
const UserProfileWithLoading = withLoading(UserProfile);

function Dashboard() {
  return (
    <div>
      <TeamListWithLoading />
      <ProjectStatsWithLoading />
      <UserProfileWithLoading />
    </div>
  );
}
```

### Question 11: Custom Hooks

**Q**: CCN notices she's duplicating API fetch logic across components. How can she create a reusable custom hook?

**A**: Create a custom hook:

```jsx
// Custom hook for API fetching
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (!cancelled) {
          // Mock data based on URL
          if (url.includes("team")) {
            setData([
              { id: 1, name: "Aakku", role: "Lead Developer" },
              { id: 2, name: "CCN", role: "Frontend Developer" },
              { id: 3, name: "Toffu", role: "Backend Developer" },
            ]);
          } else if (url.includes("projects")) {
            setData([
              { id: 1, name: "AakkuTech Website", status: "Active" },
              { id: 2, name: "Client Portal", status: "Planning" },
            ]);
          }
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, loading, error };
}

// Usage in components
function TeamList() {
  const { data: team, loading, error } = useApi("/api/team");

  if (loading) return <div>Loading team...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {team.map((member) => (
        <div key={member.id}>
          {member.name} - {member.role}
        </div>
      ))}
    </div>
  );
}

function ProjectList() {
  const { data: projects, loading, error } = useApi("/api/projects");

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          {project.name}: {project.status}
        </div>
      ))}
    </div>
  );
}
```

### Question 12: Render Props Pattern

**Q**: Aakku wants to create a flexible data fetcher that can render different UI based on the data state. Show him the render props pattern.

**A**: Use render props for flexible rendering:

```jsx
// Render props component
function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (url.includes("team")) {
          setData([
            { id: 1, name: "Aakku", email: "aakku@aakkutech.com" },
            { id: 2, name: "CCN", email: "ccn@aakkutech.com" },
          ]);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return render({ data, loading, error });
}

// Usage with different render functions
function TeamDashboard() {
  return (
    <div>
      {/* Render as cards */}
      <DataFetcher
        url="/api/team"
        render={({ data, loading, error }) => {
          if (loading) return <div>Loading team...</div>;
          if (error) return <div>Error: {error}</div>;

          return (
            <div className="team-cards">
              {data.map((member) => (
                <div key={member.id} className="member-card">
                  <h3>{member.name}</h3>
                  <p>{member.email}</p>
                </div>
              ))}
            </div>
          );
        }}
      />

      {/* Render as table */}
      <DataFetcher
        url="/api/team"
        render={({ data, loading, error }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error: {error}</div>;

          return (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {data.map((member) => (
                  <tr key={member.id}>
                    <td>{member.name}</td>
                    <td>{member.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          );
        }}
      />
    </div>
  );
}
```

## Level 5: Real-World Scenarios (Expert)

### Question 13: Component Performance

**Q**: Toffu's AakkuTech dashboard is re-rendering too frequently. What optimization techniques should he apply?

**A**: Multiple optimization strategies:

```jsx
// 1. React.memo for preventing unnecessary re-renders
const TeamMemberCard = React.memo(function TeamMemberCard({ member, onEdit }) {
  console.log(`Rendering ${member.name}`); // Should only log when member changes

  return (
    <div className="member-card">
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <button onClick={() => onEdit(member.id)}>Edit</button>
    </div>
  );
});

// 2. useCallback for stable function references
function TeamDashboard() {
  const [members, setMembers] = useState([
    { id: 1, name: "Aakku", role: "Lead Developer" },
    { id: 2, name: "CCN", role: "Frontend Developer" },
  ]);
  const [filter, setFilter] = useState("");

  // Without useCallback, this creates new function on every render
  // causing TeamMemberCard to re-render unnecessarily
  const handleEditMember = useCallback((memberId) => {
    console.log("Editing member:", memberId);
    // Edit logic here
  }, []); // No dependencies = stable reference

  const filteredMembers = useMemo(() => {
    return members.filter((member) =>
      member.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [members, filter]); // Only recalculate when members or filter changes

  return (
    <div>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter members..."
      />
      {filteredMembers.map((member) => (
        <TeamMemberCard
          key={member.id}
          member={member}
          onEdit={handleEditMember}
        />
      ))}
    </div>
  );
}

// 3. Code splitting for large components
const HeavyAnalyticsDashboard = lazy(() => import("./HeavyAnalyticsDashboard"));

function App() {
  return (
    <Suspense fallback={<div>Loading analytics...</div>}>
      <HeavyAnalyticsDashboard />
    </Suspense>
  );
}
```

### Question 14: Error Boundaries

**Q**: CCN wants to prevent the entire AakkuTech app from crashing when one component fails. How should she implement error boundaries?

**A**: Create error boundary components:

```jsx
// Error Boundary class component (must be class component)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // Log error to service
    console.error("AakkuTech App Error:", error, errorInfo);
    // In production: send to error tracking service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Oops! Something went wrong in AakkuTech Dashboard</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            <summary>Error Details (for developers)</summary>
            <p>
              <strong>Error:</strong>{" "}
              {this.state.error && this.state.error.toString()}
            </p>
            <p>
              <strong>Stack Trace:</strong>
            </p>
            <pre>{this.state.errorInfo.componentStack}</pre>
          </details>
          <button onClick={() => window.location.reload()}>Reload Page</button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <Header />
      <ErrorBoundary>
        <TeamDashboard />
      </ErrorBoundary>
      <ErrorBoundary>
        <ProjectAnalytics />
      </ErrorBoundary>
    </ErrorBoundary>
  );
}

// Component that might throw error
function ProblematicComponent() {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error("Intentional error for testing!");
  }

  return (
    <div>
      <p>This component works fine</p>
      <button onClick={() => setShouldThrow(true)}>Trigger Error</button>
    </div>
  );
}
```

### Question 15: Testing Component Architecture

**Q**: Priya needs to write tests for the AakkuTech component architecture. Show her how to test different types of components.

**A**: Comprehensive testing strategies:

```jsx
// 1. Testing simple presentational components
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TeamMemberCard from "./TeamMemberCard";

describe("TeamMemberCard", () => {
  const mockMember = {
    id: 1,
    name: "Aakku",
    role: "Lead Developer",
    email: "aakku@aakkutech.com",
  };

  test("renders member information correctly", () => {
    render(<TeamMemberCard member={mockMember} />);

    expect(screen.getByText("Aakku")).toBeInTheDocument();
    expect(screen.getByText("Lead Developer")).toBeInTheDocument();
    expect(screen.getByText("aakku@aakkutech.com")).toBeInTheDocument();
  });

  test("calls onEdit when edit button is clicked", async () => {
    const mockOnEdit = jest.fn();
    const user = userEvent.setup();

    render(<TeamMemberCard member={mockMember} onEdit={mockOnEdit} />);

    const editButton = screen.getByRole("button", { name: /edit/i });
    await user.click(editButton);

    expect(mockOnEdit).toHaveBeenCalledWith(mockMember.id);
  });
});

// 2. Testing components with state
describe("TaskForm", () => {
  test("submits form with correct data", async () => {
    const mockOnAddTask = jest.fn();
    const user = userEvent.setup();

    render(<TaskForm onAddTask={mockOnAddTask} />);

    const titleInput = screen.getByPlaceholderText("Task title");
    const submitButton = screen.getByRole("button", { name: /add task/i });

    await user.type(titleInput, "New AakkuTech Feature");
    await user.click(submitButton);

    expect(mockOnAddTask).toHaveBeenCalledWith({
      title: "New AakkuTech Feature",
      description: "",
      priority: "medium",
    });
  });
});

// 3. Testing components with Context
import { AuthContext } from "./AuthContext";

function renderWithAuth(component, authValue = {}) {
  const defaultAuth = {
    user: { name: "Aakku", email: "aakku@aakkutech.com" },
    login: jest.fn(),
    logout: jest.fn(),
  };

  return render(
    <AuthContext.Provider value={{ ...defaultAuth, ...authValue }}>
      {component}
    </AuthContext.Provider>
  );
}

describe("UserProfile with Auth", () => {
  test("displays user information when logged in", () => {
    renderWithAuth(<UserProfile />);

    expect(screen.getByText("Welcome, Aakku!")).toBeInTheDocument();
  });

  test("shows login prompt when not logged in", () => {
    renderWithAuth(<UserProfile />, { user: null });

    expect(screen.getByText("Not logged in")).toBeInTheDocument();
  });
});

// 4. Testing custom hooks
import { renderHook, act } from "@testing-library/react";
import { useApi } from "./useApi";

describe("useApi hook", () => {
  test("returns loading state initially", () => {
    const { result } = renderHook(() => useApi("/api/team"));

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);
  });

  test("returns data after successful fetch", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useApi("/api/team"));

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual([
      { id: 1, name: "Aakku", role: "Lead Developer" },
    ]);
  });
});

// 5. Integration tests
describe("TeamDashboard Integration", () => {
  test("full team management workflow", async () => {
    const user = userEvent.setup();

    render(<TeamDashboard />);

    // Wait for data to load
    await screen.findByText("Aakku");

    // Add new team member
    const nameInput = screen.getByPlaceholderText("Member name");
    const addButton = screen.getByRole("button", { name: /add member/i });

    await user.type(nameInput, "New Developer");
    await user.click(addButton);

    // Verify new member appears
    expect(screen.getByText("New Developer")).toBeInTheDocument();
  });
});
```

## Bonus Challenge Questions

### Challenge 1: Architecture Design

**Q**: Design the component architecture for a complete AakkuTech project management system. Include components for projects, tasks, team members, time tracking, and reports. Show the component hierarchy and data flow.

**A**:

```
App
├── AuthProvider (Context)
├── Header
│   ├── UserMenu
│   └── NavigationTabs
├── Router
│   ├── Dashboard
│   │   ├── ProjectOverview
│   │   ├── TaskSummary
│   │   └── TeamActivity
│   ├── Projects
│   │   ├── ProjectList
│   │   ├── ProjectCard
│   │   └── ProjectDetails
│   │       ├── TaskBoard
│   │       │   ├── TaskColumn
│   │       │   └── TaskCard
│   │       └── TeamAssignment
│   ├── TimeTracking
│   │   ├── TimeEntryForm
│   │   └── TimeLogList
│   └── Reports
│       ├── ProjectReports
│       └── TeamReports
└── ErrorBoundary
```

### Challenge 2: Performance Optimization

**Q**: The AakkuTech dashboard renders 1000+ task items and becomes slow. Implement virtualization and other performance optimizations.

**A**: Implementation would include:

- React.memo for TaskCard components
- useCallback for event handlers
- useMemo for filtered/sorted data
- Virtual scrolling with react-window
- Debounced search input
- Pagination or infinite scrolling
- Code splitting for heavy components

---

## Practice Exercises Summary

These practice questions cover:

**Level 1-2**: Foundation concepts (components, props, state, composition)
**Level 3**: Communication patterns (parent-child, sibling, context)
**Level 4**: Advanced patterns (HOCs, custom hooks, render props)
**Level 5**: Real-world scenarios (performance, error handling, testing)

Each answer includes:

- Clear explanation
- Practical AakkuTech examples
- Code implementations
- Best practices
- Common pitfalls to avoid

Keep practicing these concepts with your own AakkuTech projects, Aakku! Remember:

- Start simple, then refactor
- Test your components
- Optimize only when needed
- Focus on maintainable code

Happy coding!
[GitHub Profile](https://github.com/aakku106)

Making Web development fun, easy, and accessible for everyone!
