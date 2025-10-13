<!-- @format -->

# Modular Programming in React – Component-based Architecture

## Introduction

Welcome to the world of modular React development! Component-based architecture is the heart and soul of React. It's what makes React so powerful, maintainable, and scalable. In this lesson, we'll explore how to build applications by breaking them into small, reusable pieces called components.

Think of React components like LEGO blocks. Each block has a specific purpose, but when you combine them, you can build incredible structures. That's exactly what we'll learn to do with React components.

## What is Modular Programming?

Modular programming is a software design technique that breaks down a large application into smaller, independent modules (components in React). Each module:

- Has a specific responsibility
- Can be developed independently
- Can be reused across different parts of the application
- Is easier to test and maintain

### Real-World Analogy

Imagine AakkuTech is building a house:

- **Traditional Approach**: Build everything as one massive structure
- **Modular Approach**: Build separate modules like kitchen, bedroom, bathroom, then assemble them

The modular approach allows different teams to work on different parts simultaneously, reuse designs across multiple houses, and easily replace or upgrade individual components.

## React Component Architecture

In React, everything is a component. A component is a JavaScript function or class that returns JSX (HTML-like syntax). Components can:

1. Accept inputs (called "props")
2. Manage their own state
3. Render other components
4. Handle user interactions

### Component Hierarchy

```
App
├── Header
│   ├── Logo
│   ├── Navigation
│   └── UserProfile
├── Main
│   ├── Sidebar
│   │   ├── Menu
│   │   └── UserInfo
│   └── Content
│       ├── PostList
│       │   ├── Post
│       │   ├── Post
│       │   └── Post
│       └── Comments
│           ├── Comment
│           ├── Comment
│           └── CommentForm
└── Footer
    ├── SocialLinks
    └── Copyright
```

## Why Component-Based Architecture?

### 1. Reusability

Write once, use everywhere. Aakku creates a `Button` component and can use it throughout the entire AakkuTech application.

```jsx
// Reusable Button Component
function Button({ children, onClick, variant = "primary" }) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
}

// Usage throughout the app
<Button variant="primary">Save Project</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="danger">Delete Account</Button>
```

### 2. Maintainability

When CCN needs to update the button design, she only changes it in one place, and it updates everywhere.

### 3. Testability

Each component can be tested independently. Toffu can test the `UserProfile` component without worrying about the entire application.

### 4. Collaboration

Rajesh can work on the `Header` component while Priya works on the `Sidebar` component simultaneously.

### 5. Scalability

As AakkuTech grows, new components can be added without affecting existing ones.

## Types of Components

### 1. Functional Components (Modern Approach)

```jsx
// Simple functional component
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Component with hooks
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### 2. Class Components (Legacy but Important to Know)

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

## Component Communication

### 1. Parent to Child (Props)

```jsx
// Parent Component
function AakkuTechTeam() {
  const teamMembers = [
    { id: 1, name: "Aakku", role: "Full Stack Developer" },
    { id: 2, name: "CCN", role: "UI/UX Designer" },
    { id: 3, name: "Toffu", role: "Frontend Developer" },
  ];

  return (
    <div>
      <h2>AakkuTech Team</h2>
      {teamMembers.map((member) => (
        <TeamMember key={member.id} name={member.name} role={member.role} />
      ))}
    </div>
  );
}

// Child Component
function TeamMember({ name, role }) {
  return (
    <div className="team-member">
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}
```

### 2. Child to Parent (Callback Functions)

```jsx
// Parent Component
function ProjectManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

// Child Component
function TaskForm({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ id: Date.now(), text: task, completed: false });
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
```

### 3. Sibling Components (Through Parent)

```jsx
function Dashboard() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      <ProjectList onSelectProject={setSelectedProject} />
      <ProjectDetails project={selectedProject} />
    </div>
  );
}
```

## Component Design Principles

### 1. Single Responsibility Principle

Each component should have one reason to change. If CCN's `UserProfile` component handles both user display and editing, it should be split:

```jsx
// Bad: Multiple responsibilities
function UserProfile({ user, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return <UserEditForm user={user} onSave={onEdit} />;
  }

  return (
    <div>
      {/* Display logic */}
      <UserDisplay user={user} />
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
}

// Good: Single responsibility
function UserProfile({ user, onEdit }) {
  return (
    <div>
      <UserDisplay user={user} />
      <UserActions onEdit={onEdit} />
    </div>
  );
}

function UserDisplay({ user }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

function UserActions({ onEdit }) {
  return (
    <div>
      <button onClick={onEdit}>Edit Profile</button>
      <button>View Projects</button>
    </div>
  );
}
```

### 2. Composition over Inheritance

React favors composition over inheritance. Instead of extending components, compose them:

```jsx
// Composition approach
function Card({ children, title }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

// Usage
function ProjectCard({ project }) {
  return (
    <Card title={project.name}>
      <p>{project.description}</p>
      <p>Team: {project.team.join(", ")}</p>
      <ProjectActions projectId={project.id} />
    </Card>
  );
}

function UserCard({ user }) {
  return (
    <Card title={user.name}>
      <p>{user.email}</p>
      <p>Role: {user.role}</p>
      <UserActions userId={user.id} />
    </Card>
  );
}
```

### 3. Props Interface Design

Design clear, predictable props interfaces:

```jsx
// Good props design
function ProductCard({
  product, // Required: product object
  onAddToCart, // Required: function
  showPrice = true, // Optional: boolean with default
  variant = "default", // Optional: string with default
  className = "", // Optional: string with default
}) {
  return (
    <div className={`product-card ${variant} ${className}`}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {showPrice && <span>${product.price}</span>}
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}
```

## Advanced Component Patterns

### 1. Higher-Order Components (HOCs)

```jsx
// HOC for authentication
function withAuth(WrappedComponent) {
  return function AuthenticatedComponent(props) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Check authentication
      checkAuth().then((user) => {
        setUser(user);
        setLoading(false);
      });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (!user) return <div>Please log in</div>;

    return <WrappedComponent {...props} user={user} />;
  };
}

// Usage
const ProtectedDashboard = withAuth(Dashboard);
```

### 2. Render Props Pattern

```jsx
function DataFetcher({ render, url }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return render({ data, loading });
}

// Usage
function ProjectList() {
  return (
    <DataFetcher
      url="/api/projects"
      render={({ data, loading }) =>
        loading ? (
          <div>Loading projects...</div>
        ) : (
          <div>
            {data.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )
      }
    />
  );
}
```

### 3. Custom Hooks Pattern

```jsx
// Custom hook for API data
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useApi(`/api/users/${userId}`);

  if (loading) return <div>Loading user...</div>;
  if (error) return <div>Error loading user</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
```

## File Organization

### Small Project Structure

```
src/
├── components/
│   ├── Button.js
│   ├── Card.js
│   ├── Header.js
│   └── Footer.js
├── pages/
│   ├── Home.js
│   ├── About.js
│   └── Contact.js
├── App.js
└── index.js
```

### Medium Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Button/
│   │   │   ├── Button.js
│   │   │   ├── Button.css
│   │   │   └── index.js
│   │   └── Card/
│   │       ├── Card.js
│   │       ├── Card.css
│   │       └── index.js
│   ├── layout/
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Sidebar/
│   └── forms/
│       ├── LoginForm/
│       ├── SignupForm/
│       └── ContactForm/
├── pages/
├── hooks/
├── utils/
├── App.js
└── index.js
```

### Large Project Structure

```
src/
├── components/
│   ├── ui/          # Reusable UI components
│   ├── layout/      # Layout components
│   ├── forms/       # Form components
│   └── business/    # Business logic components
├── features/        # Feature-based organization
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   ├── projects/
│   └── users/
├── shared/          # Shared utilities
│   ├── hooks/
│   ├── utils/
│   ├── services/
│   └── types/
├── App.js
└── index.js
```

## Real-World Example: AakkuTech Project Management

Let's build a simple project management interface using modular components:

### Project Structure

```jsx
// App.js - Main application component
function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Sidebar projects={projects} onSelectProject={setSelectedProject} />
        <ProjectWorkspace project={selectedProject} />
      </main>
      <Footer />
    </div>
  );
}

// Header.js - Top navigation
function Header() {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <UserProfile />
    </header>
  );
}

// Logo.js - Company logo
function Logo() {
  return (
    <div className="logo">
      <h1>AakkuTech</h1>
    </div>
  );
}

// Navigation.js - Main navigation
function Navigation() {
  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Team", path: "/team" },
    { label: "Reports", path: "/reports" },
  ];

  return (
    <nav className="navigation">
      {menuItems.map((item) => (
        <NavItem key={item.path} {...item} />
      ))}
    </nav>
  );
}

// NavItem.js - Individual navigation item
function NavItem({ label, path }) {
  return (
    <a href={path} className="nav-item">
      {label}
    </a>
  );
}

// Sidebar.js - Project list sidebar
function Sidebar({ projects, onSelectProject }) {
  return (
    <aside className="sidebar">
      <h2>Projects</h2>
      <ProjectList projects={projects} onSelectProject={onSelectProject} />
      <AddProjectButton />
    </aside>
  );
}

// ProjectList.js - List of projects
function ProjectList({ projects, onSelectProject }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          project={project}
          onSelect={onSelectProject}
        />
      ))}
    </div>
  );
}

// ProjectItem.js - Individual project item
function ProjectItem({ project, onSelect }) {
  return (
    <div className="project-item" onClick={() => onSelect(project)}>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <StatusBadge status={project.status} />
    </div>
  );
}
```

## Component Testing

### Unit Testing Components

```jsx
// Button.test.js
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button with text", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);

  fireEvent.click(screen.getByText("Click me"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("applies correct variant class", () => {
  render(<Button variant="danger">Delete</Button>);
  expect(screen.getByText("Delete")).toHaveClass("btn-danger");
});
```

### Integration Testing

```jsx
// ProjectList.test.js
test("displays list of projects", () => {
  const projects = [
    { id: 1, name: "AakkuTech Website", status: "active" },
    { id: 2, name: "Mobile App", status: "planning" },
  ];

  render(<ProjectList projects={projects} onSelectProject={() => {}} />);

  expect(screen.getByText("AakkuTech Website")).toBeInTheDocument();
  expect(screen.getByText("Mobile App")).toBeInTheDocument();
});
```

## Performance Optimization

### 1. React.memo for Expensive Components

```jsx
// Expensive component that shouldn't re-render unnecessarily
const TeamMemberCard = React.memo(function TeamMemberCard({ member }) {
  return (
    <div className="team-member-card">
      <img src={member.avatar} alt={member.name} />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </div>
  );
});

// Only re-renders when member prop changes
```

### 2. useMemo for Expensive Calculations

```jsx
function ProjectStats({ projects }) {
  const stats = useMemo(() => {
    return {
      total: projects.length,
      active: projects.filter((p) => p.status === "active").length,
      completed: projects.filter((p) => p.status === "completed").length,
      overdue: projects.filter((p) => new Date(p.deadline) < new Date()).length,
    };
  }, [projects]);

  return (
    <div className="project-stats">
      <StatCard label="Total" value={stats.total} />
      <StatCard label="Active" value={stats.active} />
      <StatCard label="Completed" value={stats.completed} />
      <StatCard label="Overdue" value={stats.overdue} />
    </div>
  );
}
```

### 3. useCallback for Stable Function References

```jsx
function ProjectManager() {
  const [projects, setProjects] = useState([]);

  // Stable function reference
  const addProject = useCallback((newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  }, []);

  const deleteProject = useCallback((projectId) => {
    setProjects((prevProjects) =>
      prevProjects.filter((p) => p.id !== projectId)
    );
  }, []);

  return (
    <div>
      <ProjectForm onSubmit={addProject} />
      <ProjectList projects={projects} onDelete={deleteProject} />
    </div>
  );
}
```

## Best Practices Summary

### 1. Component Design

- Keep components small and focused
- Use descriptive names (UserProfile, not UP)
- Prefer functional components over class components
- Design clear props interfaces

### 2. State Management

- Keep state as close to where it's used as possible
- Lift state up when multiple components need it
- Use custom hooks for complex state logic
- Consider state management libraries for complex apps

### 3. File Organization

- One component per file
- Use index.js files for cleaner imports
- Group related components together
- Separate business logic from UI components

### 4. Performance

- Use React.memo for expensive components
- Use useMemo for expensive calculations
- Use useCallback for stable function references
- Avoid creating objects/functions in render

### 5. Testing

- Test component behavior, not implementation
- Use descriptive test names
- Test user interactions
- Mock external dependencies

## Common Pitfalls and Solutions

### 1. Prop Drilling

**Problem**: Passing props through many levels

```jsx
// Bad: Prop drilling
function App() {
  const [user, setUser] = useState(null);
  return <Header user={user} />;
}

function Header({ user }) {
  return <Navigation user={user} />;
}

function Navigation({ user }) {
  return <UserMenu user={user} />;
}
```

**Solution**: Context API or state management

```jsx
// Good: Context API
const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={user}>
      <Header />
    </UserContext.Provider>
  );
}

function UserMenu() {
  const user = useContext(UserContext);
  return <div>{user?.name}</div>;
}
```

### 2. Unnecessary Re-renders

**Problem**: Components re-rendering when they shouldn't

```jsx
// Bad: Creates new function on every render
function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onEdit={() => editProject(project.id)} // New function every render
        />
      ))}
    </div>
  );
}
```

**Solution**: Stable function references

```jsx
// Good: Stable function references
function ProjectList({ projects, onEditProject }) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onEdit={onEditProject} // Stable reference
        />
      ))}
    </div>
  );
}
```

### 3. Overly Complex Components

**Problem**: Components trying to do too much

```jsx
// Bad: Overly complex component
function UserDashboard({ userId }) {
  // Too many responsibilities:
  // - User data fetching
  // - Project data fetching
  // - Notifications
  // - UI rendering
  // - Event handling
}
```

**Solution**: Break into smaller components

```jsx
// Good: Composed from smaller components
function UserDashboard({ userId }) {
  return (
    <div>
      <UserProfile userId={userId} />
      <UserProjects userId={userId} />
      <UserNotifications userId={userId} />
    </div>
  );
}
```

## Next Steps

After mastering modular programming in React, you should explore:

1. **State Management**: Redux, Zustand, or Context API for complex state
2. **Routing**: React Router for multi-page applications
3. **Styling**: CSS Modules, Styled Components, or CSS-in-JS
4. **Testing**: Jest, React Testing Library, and Cypress
5. **Performance**: Code splitting, lazy loading, and optimization
6. **TypeScript**: Type safety for better development experience

## Resources for Further Learning

- **React Documentation**: Official React docs are excellent
- **React Patterns**: Common patterns and best practices
- **Component Libraries**: Study well-designed libraries like Material-UI, Ant Design
- **Open Source Projects**: Read React codebases on GitHub
- **Testing**: React Testing Library documentation
- **Performance**: React DevTools Profiler

## Conclusion

Modular programming in React is about building applications from small, reusable components. By following the principles of single responsibility, composition, and clear interfaces, you can create maintainable, scalable applications.

Remember Aakku's journey: start with simple components, gradually compose them into complex UIs, and always think about reusability and maintainability. The AakkuTech team's success comes from writing clean, modular code that everyone can understand and contribute to.

The key is practice. Start building components, compose them together, and gradually tackle more complex patterns. Every expert was once a beginner, and every complex application started with simple components.

---

**Created by Aakku**  
[GitHub Profile](https://github.com/aakku106)

Making Web development fun, easy, and accessible for everyone!
