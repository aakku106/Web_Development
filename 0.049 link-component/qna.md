<!-- @format -->

# Link Component in Next.js - Q&A

## Beginner Level (10 questions)

### 1. What is the Link component in Next.js?

**Answer:** The Link component is a built-in React component in Next.js that enables client-side navigation between pages without full page reload. It provides faster navigation and better user experience compared to traditional HTML anchor tags.

**Example:**

```javascript
import Link from "next/link";

<Link href="/about">About Page</Link>;
```

---

### 2. Why should we use Link instead of `<a>` tag in Next.js?

**Answer:**

- Link provides **client-side navigation** (no page reload)
- Faster navigation with **automatic prefetching**
- Preserves application state
- Better user experience with smooth transitions
- `<a>` tags cause full page reload which is slower

**Comparison:**

```javascript
// ❌ Slow - causes page reload
<a href="/about">About</a>

// ✅ Fast - client-side navigation
<Link href="/about">About</Link>
```

---

### 3. How do you import and use the Link component?

**Answer:**

1. Import Link from 'next/link'
2. Use it like any other React component with `href` prop

**Example:**

```javascript
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/contact">Contact Us</Link>
    </div>
  );
}
```

---

### 4. What is the required prop for Link component?

**Answer:** The `href` prop is **required**. It specifies the destination path where the link should navigate.

**Example:**

```javascript
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/blog/first-post">Blog Post</Link>
```

---

### 5. When should you use `<a>` tag instead of Link?

**Answer:** Use `<a>` tag for **external links** (links to other websites). Link component should only be used for internal navigation within your Next.js app.

**Example:**

```javascript
// ✅ Use Link for internal pages
<Link href="/about">About Us</Link>

// ✅ Use <a> for external websites
<a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
  Next.js Docs
</a>
```

---

### 6. How do you navigate to a page with dynamic routes?

**Answer:** Use template literals or string concatenation in the `href` prop to create dynamic paths.

**Example:**

```javascript
// Navigate to /blog/1, /blog/2, etc.
const postId = 1;
<Link href={`/blog/${postId}`}>Blog Post {postId}</Link>;

// Navigate to /user/john
const username = "john";
<Link href={`/user/${username}`}>User Profile</Link>;
```

---

### 7. Can you add CSS classes to Link component?

**Answer:** Yes! Use the `className` prop to add CSS classes to the Link component.

**Example:**

```javascript
<Link href="/about" className="nav-link">
  About
</Link>

// CSS
.nav-link {
  color: blue;
  text-decoration: none;
  padding: 10px;
}

.nav-link:hover {
  color: darkblue;
}
```

---

### 8. What is prefetching in Next.js Link?

**Answer:** Prefetching means Next.js automatically loads the linked page's code in the background when the Link appears in the viewport. This makes navigation instant when the user clicks the link.

**Default behavior:**

- Prefetching is **enabled by default** in production
- Disabled in development mode

**Example:**

```javascript
// Prefetch enabled (default)
<Link href="/about">About</Link>

// Disable prefetch
<Link href="/heavy-page" prefetch={false}>Heavy Page</Link>
```

---

### 9. How do you pass query parameters with Link?

**Answer:** Use query string in the `href` or use object syntax.

**Example:**

{% raw %}

```javascript
// Method 1: Query string
<Link href="/search?q=nextjs&sort=recent">Search</Link>

// Method 2: Object syntax
<Link href={{
  pathname: '/search',
  query: { q: 'nextjs', sort: 'recent' }
}}>
  Search Results
</Link>
```

{% endraw %}

---

### 10. What happens when you click a Link component?

**Answer:**

1. Browser doesn't reload the page
2. Next.js fetches the page content (if not already prefetched)
3. Updates the URL in the browser
4. Renders the new page component
5. Navigation happens **instantly** without white flash

---

## Intermediate Level (10 questions)

### 11. What is the `replace` prop and when should you use it?

**Answer:** The `replace` prop replaces the current history entry instead of adding a new one. This means users cannot use the back button to return to the previous page.

**Use case:** After login, replace the login page so users can't go back to it.

**Example:**

```javascript
// Normal navigation (adds to history)
<Link href="/dashboard">Dashboard</Link>
// User can click back button

// Replace navigation (replaces history)
<Link href="/dashboard" replace={true}>Dashboard</Link>
// User cannot go back to previous page
```

---

### 12. How do you create an active link (highlight current page)?

**Answer:** Use the `usePathname` hook from `next/navigation` to check the current path and conditionally add a CSS class.

**Example:**

```javascript
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        href="/"
        className={pathname === '/' ? 'active' : ''}
      >
        Home
      </Link>

      <Link
        href="/about"
        className={pathname === '/about' ? 'active' : ''}
      >
        About
      </Link>
    </nav>
  );
}

// CSS
.active {
  color: orange;
  font-weight: bold;
  border-bottom: 2px solid orange;
}
```

---

### 13. What is the `scroll` prop used for?

**Answer:** The `scroll` prop controls whether the page should scroll to the top after navigation. Default is `true`.

**Example:**

```javascript
// Scroll to top after navigation (default)
<Link href="/article" scroll={true}>Article</Link>

// Keep current scroll position
<Link href="/section" scroll={false}>Jump to Section</Link>
```

**Use case:** Disable scroll when navigating to anchor links or tabs on the same page.

---

### 14. Can you use Link with programmatic navigation?

**Answer:** For programmatic navigation (navigation triggered by JavaScript, not clicks), use the `useRouter` hook instead of Link.

**Example:**

```javascript
"use client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async () => {
    // Perform login
    const success = await loginUser();

    if (success) {
      // Navigate programmatically
      router.push("/dashboard");
    }
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

---

### 15. How do you navigate to nested dynamic routes?

**Answer:** Use multiple dynamic segments in the path.

**Example:**

```javascript
// File structure:
// pages/blog/[category]/[slug].js

// Navigation:
<Link href="/blog/nextjs/getting-started">Getting Started with Next.js</Link>;

// Or with variables:
const category = "nextjs";
const slug = "getting-started";
<Link href={`/blog/${category}/${slug}`}>Getting Started</Link>;
```

---

### 16. What's the difference between shallow routing and normal routing?

**Answer:** Shallow routing updates the URL without running data fetching methods like `getServerSideProps` or `getStaticProps`.

**Example:**

```javascript
// Normal routing (runs data fetching)
<Link href="/page?id=2">Page 2</Link>

// Shallow routing (just updates URL)
<Link href="/page?id=2" shallow>Page 2</Link>
```

**Use case:** Updating filters or pagination without refetching all data.

---

### 17. How do you handle external and internal links conditionally?

**Answer:** Create a reusable component that checks if the link is external and uses either Link or `<a>`.

**Example:**

```javascript
function SmartLink({ href, children, ...props }) {
  const isExternal = href.startsWith('http');

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return <Link href={href} {...props}>{children}</Link>;
}

// Usage:
<SmartLink href="/about">About</SmartLink>
<SmartLink href="https://google.com">Google</SmartLink>
```

---

### 18. Can you nest Link components?

**Answer:** No, you should **not** nest Link components inside each other. Each link should be independent.

**Example:**

```javascript
// ❌ Wrong - Don't nest Links
<Link href="/parent">
  <Link href="/child">Child</Link>
</Link>

// ✅ Correct - Separate Links
<Link href="/parent">Parent</Link>
<Link href="/child">Child</Link>
```

---

### 19. How do you add inline styles to Link?

**Answer:** Use the `style` prop to add inline styles.

**Example:**

```javascript
<Link
  href="/about"
  style={{
    color: "blue",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "5px",
  }}>
  About
</Link>
```

---

### 20. What are the router methods available for navigation?

**Answer:** The `useRouter` hook provides several navigation methods:

**Methods:**

- `router.push('/path')` - Navigate to new page (adds to history)
- `router.replace('/path')` - Navigate without adding to history
- `router.back()` - Go to previous page
- `router.forward()` - Go to next page (if available)
- `router.refresh()` - Refresh current page

**Example:**

```javascript
"use client";
import { useRouter } from "next/navigation";

export default function NavigationButtons() {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/about")}>Go to About</button>
      <button onClick={() => router.back()}>Go Back</button>
      <button onClick={() => router.refresh()}>Refresh</button>
    </div>
  );
}
```

---

## Advanced Level (5 questions)

### 21. How does Link prefetching work and when is it disabled?

**Answer:**
**How it works:**

- When Link appears in viewport, Next.js automatically loads the page code
- Uses `<link rel="prefetch">` or `fetch()` based on browser support
- Prefetched pages are stored in cache

**When disabled:**

- Development mode (to save resources)
- When `prefetch={false}` is set
- On slow connections (automatic optimization)
- When page is not in viewport

**Example:**

```javascript
// Prefetch enabled (production default)
<Link href="/important" prefetch={true}>Important Page</Link>

// Disable for rarely-visited pages
<Link href="/archive" prefetch={false}>Archive</Link>
```

---

### 22. How do you implement breadcrumb navigation with Link?

**Answer:** Create a breadcrumb component using the current path and Link components.

**Example:**

```javascript
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <nav className="breadcrumbs">
      <Link href="/">Home</Link>
      {paths.map((path, index) => {
        const href = "/" + paths.slice(0, index + 1).join("/");
        const isLast = index === paths.length - 1;

        return (
          <span key={href}>
            <span> / </span>
            {isLast ? <span>{path}</span> : <Link href={href}>{path}</Link>}
          </span>
        );
      })}
    </nav>
  );
}

// URL: /blog/nextjs/tutorial
// Renders: Home / blog / nextjs / tutorial
```

---

### 23. How do you handle authentication-protected routes with Link?

**Answer:** Create a wrapper component that checks authentication before rendering Link or redirecting.

**Example:**

```javascript
"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";

function ProtectedLink({ href, children, ...props }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (!session) {
    // Redirect to login instead
    return (
      <Link href={`/login?redirect=${href}`} {...props}>
        {children} (Login Required)
      </Link>
    );
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}

// Usage:
<ProtectedLink href="/dashboard">Dashboard</ProtectedLink>;
```

---

### 24. How do you optimize Link performance for large lists?

**Answer:**

1. Disable prefetch for list items
2. Use virtualization for very long lists
3. Implement pagination or infinite scroll
4. Use `loading="lazy"` for images in links

**Example:**

```javascript
// Disable prefetch for large lists
export default function BlogList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.id}`}
          prefetch={false} // Disable prefetch
        >
          {post.title}
        </Link>
      ))}
    </div>
  );
}
```

---

### 25. How do you create a custom Link component with analytics tracking?

**Answer:** Wrap the Next.js Link component and add tracking logic.

**Example:**

```javascript
"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function TrackedLink({ href, children, trackingId, ...props }) {
  const handleClick = () => {
    // Track link click
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "link_click", {
        event_category: "navigation",
        event_label: href,
        tracking_id: trackingId,
      });
    }

    console.log(`Link clicked: ${href}`);
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

// Usage:
<TrackedLink href="/pricing" trackingId="pricing-page">
  View Pricing
</TrackedLink>;
```

---

## Bonus: Common Patterns

### Pattern 1: Navigation Menu Component

```javascript
import Link from "next/link";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function NavMenu() {
  return (
    <nav>
      {menuItems.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
```

### Pattern 2: Card with Link Wrapper

```javascript
import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="card">
      <img src={post.image} alt={post.title} />
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <span className="read-more">Read More →</span>
    </Link>
  );
}
```

### Pattern 3: Conditional Active State

```javascript
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={clsx("nav-link", isActive && "active")}>
      {children}
    </Link>
  );
}
```

---

## 📚 Additional Resources

- **Next.js Link Documentation**: https://nextjs.org/docs/app/api-reference/components/link
- **Next.js Routing**: https://nextjs.org/docs/app/building-your-application/routing
- **useRouter Hook**: https://nextjs.org/docs/app/api-reference/functions/use-router

---

**Created by aakku106**  
GitHub: https://github.com/aakku106
