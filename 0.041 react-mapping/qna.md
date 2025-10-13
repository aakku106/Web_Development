<!-- @format -->

# React Mapping - Rendering Lists with .map() | Practice Questions

## Basic Understanding

### 1. What is React Mapping?

Explain what mapping means in React and why it's essential for rendering dynamic lists.

**Your Answer:**

```text
[Write your answer here]
```

### 2. JavaScript .map() vs React .map()

Compare these two mapping examples and explain the differences:

**JavaScript .map():**

```javascript
const aakkuFriends = ["Aakku", "CCN", "Toffu", "Priya"];
const upperNames = aakkuFriends.map((name) => name.toUpperCase());
console.log(upperNames); // ["AAKKU", "CCN", "TOFFU", "PRIYA"]
```

**React .map():**

```jsx
function AakkuFriendsList() {
  const friends = ["Aakku", "CCN", "Toffu", "Priya"];
  return (
    <ul>
      {friends.map((friend, index) => (
        <li key={index}>{friend}</li>
      ))}
    </ul>
  );
}
```

**Your Explanation:**

```text
[Explain the key differences and use cases]
```

### 3. Key Prop Identification

Identify what's wrong with these key implementations:

```jsx
// Example A
const badExample1 = items.map((item, index) => (
  <div key={index}>{item.name}</div>
));

// Example B
const badExample2 = items.map((item) => <div key={item.name}>{item.name}</div>);

// Example C
const badExample3 = items.map((item) => <div>{item.name}</div>);
```

**Issues Found:**

- Example A:
- Example B:
- Example C:

**Correct Implementation:**

```jsx
// Write the correct version here
```

## Practical Exercises

### 4. AakkuTech Team Directory

Create a team directory component using the following data:

```jsx
const aakkuTeam = [
  {
    id: 1,
    name: "Adarasha",
    email: "adarasha.gaihre106@gmail.com",
    role: "Full Stack Developer",
    department: "Engineering",
    skills: ["React", "Node.js", "MongoDB"],
    avatar: "👨‍💻",
  },
  {
    id: 2,
    name: "CCN",
    email: "ccn@aakkutech.com",
    role: "UI/UX Designer",
    department: "Design",
    skills: ["Figma", "Adobe XD", "CSS"],
    avatar: "🎨",
  },
  {
    id: 3,
    name: "Toffu",
    email: "toffu@aakkutech.com",
    role: "Frontend Developer",
    department: "Engineering",
    skills: ["React", "TypeScript", "Tailwind"],
    avatar: "⚡",
  },
  {
    id: 4,
    name: "Priya",
    email: "priya@aakkutech.com",
    role: "Product Manager",
    department: "Product",
    skills: ["Analytics", "Scrum", "Strategy"],
    avatar: "📊",
  },
];

function AakkuTeamDirectory() {
  return (
    <div className="team-directory">
      <h1>AakkuTech Team Directory</h1>
      {/* Complete this component */}
    </div>
  );
}
```

**Requirements:**

- Display each team member as a card
- Show avatar, name, role, and email
- List skills as badges
- Make email clickable (mailto link)
- Use proper keys

**Your Solution:**

```jsx
function AakkuTeamDirectory() {
  return (
    <div className="team-directory">
      <h1>AakkuTech Team Directory</h1>
      {/* Write your mapping code here */}
    </div>
  );
}
```

### 5. CCN's Portfolio Grid

Create a portfolio component for CCN's design projects:

```jsx
const ccnProjects = [
  {
    id: 1,
    title: "AakkuTech Website Redesign",
    description: "Modern, responsive company website",
    technologies: ["Figma", "React", "Tailwind CSS"],
    status: "completed",
    imageUrl: "/images/aakkutech-website.jpg",
    clientFeedback: 5,
  },
  {
    id: 2,
    title: "Toffu Mobile App UI",
    description: "Creative portfolio mobile application",
    technologies: ["Adobe XD", "React Native", "Animations"],
    status: "in-progress",
    imageUrl: "/images/toffu-app.jpg",
    clientFeedback: 4.8,
  },
  {
    id: 3,
    title: "Priya's E-commerce Platform",
    description: "Complete e-commerce user experience",
    technologies: ["Sketch", "Prototyping", "User Research"],
    status: "completed",
    imageUrl: "/images/priya-ecommerce.jpg",
    clientFeedback: 4.9,
  },
];

function CCNPortfolio() {
  // Complete this component
}
```

**Requirements:**

- Grid layout (responsive)
- Show project image, title, and description
- Display technologies as tags
- Show status with appropriate styling
- Display star rating for feedback
- Add hover effects

**Your Solution:**

```jsx
function CCNPortfolio() {
  // Write your solution here
}
```

### 6. Toffu's Shopping Cart

Implement a shopping cart with interactive features:

```jsx
const cartItems = [
  {
    id: 1,
    name: "CCN Pro Laptop",
    price: 1299.99,
    quantity: 1,
    image: "💻",
    inStock: true,
  },
  {
    id: 2,
    name: "Aakku Mobile App License",
    price: 49.99,
    quantity: 2,
    image: "📱",
    inStock: true,
  },
  {
    id: 3,
    name: "Toffu Design Templates",
    price: 29.99,
    quantity: 1,
    image: "🎨",
    inStock: false,
  },
];

function ToffuShoppingCart() {
  const [items, setItems] = useState(cartItems);

  const updateQuantity = (itemId, newQuantity) => {
    // Implement this function using map
  };

  const removeItem = (itemId) => {
    // Implement this function
  };

  const getTotalPrice = () => {
    // Calculate total using reduce
  };

  return (
    <div className="shopping-cart">
      <h2>Toffu's Shopping Cart</h2>
      {/* Complete the cart rendering */}
    </div>
  );
}
```

**Requirements:**

- Display cart items with image, name, price
- Show quantity controls (+ and - buttons)
- Calculate and display total price
- Remove item functionality
- Disable actions for out-of-stock items
- Use proper state updates with map/filter

**Your Solution:**

```jsx
function ToffuShoppingCart() {
  // Write your complete solution here
}
```

## Advanced Challenges

### 7. Nested Mapping - Rajesh's Project Structure

Create a component that displays nested project data:

```jsx
const rajeshProjects = [
  {
    id: 1,
    name: "AakkuTech Backend",
    categories: [
      {
        id: 1,
        name: "API Development",
        tasks: [
          {
            id: 1,
            title: "User Authentication API",
            completed: true,
            assignee: "Arjun",
          },
          {
            id: 2,
            title: "Product Catalog API",
            completed: false,
            assignee: "Bikash",
          },
          {
            id: 3,
            title: "Payment Gateway Integration",
            completed: true,
            assignee: "Rajesh",
          },
        ],
      },
      {
        id: 2,
        name: "Database Design",
        tasks: [
          {
            id: 4,
            title: "User Schema Design",
            completed: true,
            assignee: "Rajesh",
          },
          {
            id: 5,
            title: "Product Schema",
            completed: false,
            assignee: "Sandesh",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Mobile App Backend",
    categories: [
      {
        id: 3,
        name: "Real-time Features",
        tasks: [
          {
            id: 6,
            title: "Chat System",
            completed: false,
            assignee: "Krishna",
          },
          {
            id: 7,
            title: "Push Notifications",
            completed: true,
            assignee: "Ramesh",
          },
        ],
      },
    ],
  },
];

function RajeshProjectDashboard() {
  // Implement nested mapping for projects -> categories -> tasks
}
```

**Requirements:**

- Three levels of nesting (projects, categories, tasks)
- Show completion status for tasks
- Display assignee names
- Calculate completion percentage per category
- Use proper keys at each level
- Responsive layout

**Your Solution:**

```jsx
function RajeshProjectDashboard() {
  // Write your nested mapping solution here
}
```

### 8. Filter + Map Pattern - Shreya's Task Filter

Implement filtering with mapping:

```jsx
const shreyaTasks = [
  {
    id: 1,
    title: "Test Aakku's authentication feature",
    priority: "high",
    status: "in-progress",
    assignee: "Shreya",
    tags: ["testing", "authentication", "security"],
    dueDate: "2024-11-15",
  },
  {
    id: 2,
    title: "Review CCN's design components",
    priority: "medium",
    status: "completed",
    assignee: "Priya",
    tags: ["review", "design", "components"],
    dueDate: "2024-11-10",
  },
  {
    id: 3,
    title: "Bug testing for Toffu's mobile app",
    priority: "high",
    status: "pending",
    assignee: "Shreya",
    tags: ["testing", "mobile", "bugs"],
    dueDate: "2024-11-20",
  },
  {
    id: 4,
    title: "Performance testing for Rajesh's API",
    priority: "low",
    status: "in-progress",
    assignee: "Anushka",
    tags: ["testing", "performance", "api"],
    dueDate: "2024-11-25",
  },
];

function ShreyaTaskFilter() {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("dueDate");

  const getFilteredTasks = () => {
    // Implement filtering logic
  };

  const getSortedTasks = (tasks) => {
    // Implement sorting logic
  };

  return (
    <div className="task-filter">
      <h2>Shreya's Task Management</h2>
      {/* Add filter controls */}
      {/* Render filtered and sorted tasks */}
    </div>
  );
}
```

**Requirements:**

- Filter by: all, high priority, assigned to Shreya, completed
- Sort by: due date, priority, status
- Search by task title
- Display task cards with all information
- Show filtered count
- Use chaining: filter().map() or map() with conditional rendering

**Your Solution:**

```jsx
function ShreyaTaskFilter() {
  // Write your complete filtering solution here
}
```

### 9. Dynamic Updates - Arjun's Real-time Chat

Create a chat component with real-time message updates:

```jsx
const initialMessages = [
  {
    id: 1,
    sender: "Aakku",
    message: "Hey team! How's the React mapping lesson going?",
    timestamp: new Date("2024-11-01T10:30:00"),
    avatar: "👨‍💻",
  },
  {
    id: 2,
    sender: "CCN",
    message: "Great! I love how we're using our names in examples 🎨",
    timestamp: new Date("2024-11-01T10:31:00"),
    avatar: "🎨",
  },
  {
    id: 3,
    sender: "Toffu",
    message: "The interactive demos are really helpful! ⚡",
    timestamp: new Date("2024-11-01T10:32:00"),
    avatar: "⚡",
  },
];

function ArjunChatRoom() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [currentUser] = useState("Arjun");

  const addMessage = () => {
    // Implement adding new message using map for updates
  };

  const deleteMessage = (messageId) => {
    // Implement message deletion
  };

  const editMessage = (messageId, newText) => {
    // Implement message editing using map
  };

  return (
    <div className="chat-room">
      <h2>AakkuTech Team Chat</h2>
      {/* Render messages */}
      {/* Add message input */}
    </div>
  );
}
```

**Requirements:**

- Display messages with sender, content, timestamp
- Add new messages to the list
- Delete messages (with confirmation)
- Edit messages inline
- Auto-scroll to latest message
- Show typing indicators
- Use proper state updates with map()

**Your Solution:**

```jsx
function ArjunChatRoom() {
  // Write your complete chat solution here
}
```

## Performance Challenges

### 10. Large List Optimization - Bikash's User Directory

Optimize rendering for large datasets:

```jsx
// Generate large user dataset
const generateUsers = (count) => {
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
  const departments = [
    "Engineering",
    "Design",
    "Product",
    "Marketing",
    "Sales",
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `${names[i % names.length]} ${Math.floor(i / names.length) + 1}`,
    email: `user${i + 1}@aakkutech.com`,
    department: departments[i % departments.length],
    joinDate: new Date(2020 + (i % 4), i % 12, (i % 28) + 1),
    isActive: Math.random() > 0.2,
  }));
};

function BikashUserDirectory() {
  const [users] = useState(() => generateUsers(10000)); // 10,000 users
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  // Implement efficient rendering
}
```

**Requirements:**

- Handle 10,000+ users efficiently
- Implement pagination (50 items per page)
- Add search functionality
- Show loading states
- Measure and display performance metrics
- Use React.memo for optimization
- Implement virtual scrolling (bonus)

**Your Solution:**

```jsx
function BikashUserDirectory() {
  // Write your optimized solution here
}
```

### 11. Memory Optimization - Sita's Image Gallery

Create a memory-efficient image gallery:

```jsx
const sitaPhotos = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  title: `AakkuTech Memory ${i + 1}`,
  photographer: ["Sita", "Binita", "Pooja", "Anushka"][i % 4],
  date: new Date(2024, i % 12, (i % 28) + 1),
  tags: ["team", "office", "events", "celebration"].slice(0, (i % 4) + 1),
  likes: Math.floor(Math.random() * 100),
  url: `https://picsum.photos/300/200?random=${i}`,
}));

function SitaImageGallery() {
  // Implement memory-efficient image loading
  // Use lazy loading, image compression, and cleanup
}
```

**Requirements:**

- Lazy load images (only visible ones)
- Implement infinite scroll
- Cleanup unused images from memory
- Show loading placeholders
- Add image interaction (like, share)
- Use useCallback and useMemo optimizations

**Your Solution:**

```jsx
function SitaImageGallery() {
  // Write your memory-optimized solution here
}
```

## Real-World Applications

### 12. E-commerce Product Catalog - Binita's Store

Build a complete e-commerce product listing:

```jsx
const binitaProducts = [
  {
    id: 1,
    name: "AakkuTech Pro Laptop",
    description: "High-performance laptop for developers",
    price: 1299.99,
    originalPrice: 1499.99,
    category: "electronics",
    brand: "AakkuTech",
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    images: ["laptop1.jpg", "laptop2.jpg"],
    specs: ["16GB RAM", "512GB SSD", "Intel i7"],
    tags: ["laptop", "programming", "high-performance"],
  },
  {
    id: 2,
    name: "CCN Design Masterclass",
    description: "Complete UI/UX design course",
    price: 199.99,
    originalPrice: 299.99,
    category: "education",
    brand: "CCN Digital",
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    images: ["course1.jpg"],
    specs: ["20 hours content", "Certificate", "Lifetime access"],
    tags: ["design", "course", "ui-ux"],
  },
  // Add more products...
];

function BinitaProductCatalog() {
  // Implement complete e-commerce catalog
}
```

**Requirements:**

- Product grid with responsive layout
- Filter by category, price range, brand
- Sort by price, rating, name
- Search functionality
- Product quick view modal
- Add to cart functionality
- Wishlist toggle
- Pagination with URL params
- Loading and error states

**Your Solution:**

```jsx
function BinitaProductCatalog() {
  // Write your complete e-commerce solution here
}
```

### 13. Social Media Feed - Pooja's Social App

Create a dynamic social media feed:

```jsx
const poojaFeedData = [
  {
    id: 1,
    author: {
      id: 1,
      name: "Adarasha",
      username: "aakku106",
      avatar: "👨‍💻",
      verified: true,
    },
    content:
      "Just finished implementing React mapping patterns! The personalized examples make learning so much more engaging 🚀",
    timestamp: new Date("2024-11-01T14:30:00"),
    likes: 42,
    comments: 8,
    shares: 3,
    images: ["coding-setup.jpg"],
    hashtags: ["#ReactJS", "#Learning", "#WebDev"],
    mentions: ["@ccn", "@toffu"],
  },
  // Add more posts...
];

function PoojasSocialFeed() {
  // Implement social media feed with interactions
}
```

**Requirements:**

- Infinite scroll feed
- Like, comment, share functionality
- Real-time updates simulation
- Image/video support
- Hashtag and mention highlighting
- Story feature
- Post creation modal
- User profile links
- Responsive design

**Your Solution:**

```jsx
function PoojasSocialFeed() {
  // Write your social media feed solution here
}
```

### 14. Analytics Dashboard - Ramesh's Metrics

Build a comprehensive analytics dashboard:

```jsx
const rameshAnalytics = {
  userMetrics: [
    {
      id: 1,
      metric: "Total Users",
      value: 12450,
      change: "+12%",
      period: "vs last month",
    },
    {
      id: 2,
      metric: "Active Users",
      value: 8920,
      change: "+8%",
      period: "vs last month",
    },
    {
      id: 3,
      metric: "New Signups",
      value: 340,
      change: "+15%",
      period: "this week",
    },
  ],
  revenueData: [
    { month: "Jan", revenue: 45000, users: 1200 },
    { month: "Feb", revenue: 52000, users: 1350 },
    { month: "Mar", revenue: 48000, users: 1280 },
    // More months...
  ],
  topFeatures: [
    { name: "React Mapping Tutorial", usage: 89, satisfaction: 4.8 },
    { name: "Interactive Demos", usage: 76, satisfaction: 4.9 },
    { name: "Personalized Examples", usage: 92, satisfaction: 4.7 },
  ],
  teamActivity: [
    { member: "Aakku", commits: 45, linesAdded: 2340, linesRemoved: 890 },
    { member: "CCN", designs: 12, prototypes: 8, reviews: 15 },
    { member: "Toffu", features: 8, bugs: 23, tests: 34 },
  ],
};

function RameshAnalyticsDashboard() {
  // Implement comprehensive analytics dashboard
}
```

**Requirements:**

- Multiple chart types (bar, line, pie)
- Interactive filters and date ranges
- Real-time data updates
- Export functionality
- Responsive grid layout
- Drill-down capabilities
- Performance metrics
- Team collaboration insights

**Your Solution:**

```jsx
function RameshAnalyticsDashboard() {
  // Write your analytics dashboard solution here
}
```

## Error Handling & Edge Cases

### 15. Robust Error Handling - Krishna's Error Boundaries

Implement error handling for mapping operations:

```jsx
const krishnaTaskData = [
  { id: 1, title: "Valid Task", status: "completed" },
  { id: 2, title: null, status: "pending" }, // Invalid data
  { id: 3, title: "Another Task", status: "invalid-status" }, // Invalid status
  // Some items might be null or undefined
  null,
  undefined,
  { id: 4, title: "Fix error handling", status: "in-progress" },
];

function KrishnaErrorHandling() {
  // Implement robust error handling for mapping
  // Handle null/undefined items, missing properties, invalid data
}
```

**Requirements:**

- Handle null/undefined array items
- Validate data before rendering
- Show error states gracefully
- Implement error boundaries
- Log errors for debugging
- Provide fallback UI
- Data sanitization

**Your Solution:**

```jsx
function KrishnaErrorHandling() {
  // Write your error handling solution here
}
```

## Performance Testing

### 16. Benchmark Mapping Performance - Sandesh's Performance Lab

Create performance tests for different mapping scenarios:

```jsx
function SandeshPerformanceLab() {
  const testScenarios = [
    { name: "Small List (100 items)", size: 100 },
    { name: "Medium List (1,000 items)", size: 1000 },
    { name: "Large List (10,000 items)", size: 10000 },
    { name: "Huge List (100,000 items)", size: 100000 },
  ];

  const performanceResults = [];

  const runPerformanceTest = (scenario) => {
    // Implement performance testing
    // Measure: render time, memory usage, frame rate
  };

  // Compare different optimization techniques:
  // 1. Regular mapping
  // 2. React.memo optimization
  // 3. useMemo for expensive calculations
  // 4. Virtual scrolling
  // 5. Pagination
}
```

**Requirements:**

- Measure render performance
- Track memory usage
- Test with different list sizes
- Compare optimization techniques
- Generate performance reports
- Identify bottlenecks

**Your Solution:**

```jsx
function SandeshPerformanceLab() {
  // Write your performance testing solution here
}
```

## Advanced Patterns

### 17. Custom Hooks for Mapping - Anushka's Hook Library

Create reusable hooks for common mapping patterns:

```jsx
// Implement these custom hooks

function useFilteredList(items, filterFn) {
  // Hook for filtering lists efficiently
}

function useSortedList(items, sortConfig) {
  // Hook for sorting with multiple criteria
}

function usePaginatedList(items, itemsPerPage) {
  // Hook for pagination logic
}

function useSearchableList(items, searchFields) {
  // Hook for search functionality
}

function useVirtualizedList(items, containerHeight, itemHeight) {
  // Hook for virtual scrolling
}

// Usage example:
function AnushkaHookDemo() {
  const rawData = /* large dataset */;

  const filteredData = useFilteredList(rawData, item => item.isActive);
  const sortedData = useSortedList(filteredData, { field: 'name', direction: 'asc' });
  const paginatedData = usePaginatedList(sortedData, 20);
  const searchResults = useSearchableList(paginatedData.items, ['name', 'email']);

  // Render the processed data
}
```

**Requirements:**

- Create at least 5 reusable hooks
- Handle performance optimization
- Include proper TypeScript types
- Add comprehensive error handling
- Write usage examples
- Document hook APIs

**Your Solution:**

```jsx
// Write your custom hooks here
```

## Answer Guidelines

### Key Concepts to Remember

1. **Mapping Fundamentals**:

   - Always return JSX elements from map()
   - Use unique, stable keys
   - Keep mapping functions pure

2. **Performance Considerations**:

   - Use React.memo for expensive components
   - Implement virtual scrolling for large lists
   - Consider pagination for better UX

3. **State Management**:

   - Use map() for updating specific items
   - Use filter() for removing items
   - Use spread operator for immutability

4. **Error Handling**:

   - Validate data before mapping
   - Handle null/undefined gracefully
   - Use error boundaries

5. **Best Practices**:
   - Extract complex map logic into components
   - Use meaningful variable names
   - Document complex mapping operations

### Common Patterns

- **Simple List**: `items.map(item => <Item key={item.id} {...item} />)`
- **Conditional Rendering**: `items.map(item => item.visible && <Item key={item.id} />)`
- **Nested Mapping**: `categories.map(cat => cat.items.map(item => ...))`
- **Filter + Map**: `items.filter(filter).map(render)`
- **State Updates**: `setItems(items.map(item => item.id === id ? updated : item))`

### Debugging Tips

1. **Console.log your data** before mapping
2. **Check for proper keys** in React DevTools
3. **Verify data structure** matches expectations
4. **Test with empty arrays** and edge cases
5. **Use React Strict Mode** for development

## References

- [React Official Documentation - Lists and Keys](https://react.dev/learn/rendering-lists)
- [MDN - Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [React Key Prop Best Practices](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)
- [React Performance Optimization](https://react.dev/reference/react/memo)
- [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [React Patterns and Best Practices](https://react.dev/learn/thinking-in-react)

---

**Created by Aakku**  
[GitHub Profile](https://github.com/aakku106)

Making Web Development simple, fun and accessible for everyone!
