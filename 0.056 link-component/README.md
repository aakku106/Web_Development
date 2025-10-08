<!-- @format -->

# Link Component in Next.js - Navigation Made Easy

## What is the Link Component?

Think of the **Link component** as a smart navigation tool in Next.js. Instead of the traditional HTML `<a>` tag that reloads the entire page, Next.js Link provides **instant navigation** without page refresh!

**Real-life analogy:** Traditional links (`<a>`) are like closing one book and opening another. Next.js Link is like flipping pages in the same book - smooth and fast! 📚

## Why Use Link Component?

### Traditional `<a>` Tag Problems

- ❌ Full page reload (slow)
- ❌ Loses application state
- ❌ No prefetching
- ❌ White flash between pages

### Next.js Link Benefits

- ✅ No page reload (instant navigation)
- ✅ Keeps application state
- ✅ Automatic prefetching (pages load faster)
- ✅ Smooth transitions
- ✅ Better user experience

## Basic Usage

### 1. Import the Link Component

```javascript
import Link from "next/link";
```

### 2. Simple Navigation

```javascript
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}
```

That's it! Super simple! 🎉

## Link vs Anchor Tag

### Using `<a>` Tag (Old Way - Avoid in Next.js)

```javascript
// ❌ DON'T do this in Next.js
<a href="/about">About</a>
// This causes full page reload
```

### Using Link Component (Correct Way)

```javascript
// ✅ DO this in Next.js
<Link href="/about">About</Link>
// Fast client-side navigation
```

## Common Link Patterns

### 1. Internal Navigation (Pages in Your App)

```javascript
// Navigate to different pages
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/contact">Contact</Link>
<Link href="/blog">Blog</Link>
```

### 2. Dynamic Routes

```javascript
// Navigate to dynamic pages with IDs
<Link href="/blog/1">First Blog Post</Link>
<Link href="/blog/2">Second Blog Post</Link>
<Link href={`/user/${userId}`}>User Profile</Link>
<Link href={`/products/${productId}`}>Product Details</Link>
```

### 3. With Query Parameters

```javascript
// Pass query parameters
<Link href="/search?q=nextjs">Search Next.js</Link>
<Link href="/products?category=electronics&sort=price">Electronics</Link>

// Or using object syntax
<Link href={{
  pathname: '/search',
  query: { q: 'nextjs', sort: 'recent' }
}}>
  Search Results
</Link>
```

### 4. External Links (Opening Other Websites)

```javascript
// For external websites, use regular <a> tag
<a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
  Next.js Docs
</a>

// Don't use Link for external URLs
```

## Link Component Props

### 1. `href` (Required)

The destination URL

```javascript
<Link href="/about">About</Link>
<Link href="/blog/my-first-post">Blog Post</Link>
```

### 2. `prefetch` (Optional)

Automatically loads the linked page in background for faster navigation

```javascript
// Prefetch enabled (default in production)
<Link href="/about" prefetch={true}>About</Link>

// Disable prefetch
<Link href="/about" prefetch={false}>About</Link>
```

**When to disable prefetch:**

- Pages with heavy content
- Dynamic data that changes frequently
- Login/private pages

### 3. `replace` (Optional)

Replace current history entry instead of adding new one

```javascript
// Normal navigation (adds to browser history)
<Link href="/login">Login</Link>

// Replace current page (doesn't add to history)
<Link href="/dashboard" replace={true}>Dashboard</Link>
```

**Use case:** After login, replace login page so users can't go back to it.

### 4. `scroll` (Optional)

Scroll to top after navigation (default: true)

```javascript
// Scroll to top (default)
<Link href="/about" scroll={true}>About</Link>

// Don't scroll to top
<Link href="/about" scroll={false}>About</Link>
```

## Styling Links

### Method 1: Using className

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
  text-decoration: underline;
}
```

### Method 2: Styled Components / CSS Modules

```javascript
import styles from "./Navigation.module.css";

<Link href="/about" className={styles.link}>
  About
</Link>;
```

### Method 3: Inline Styles

```javascript
<Link href="/about" style={{ color: "blue", textDecoration: "none" }}>
  About
</Link>
```

## Active Link Pattern

Show which page is currently active:

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

## Real-World Navigation Bar Example

```javascript
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link href="/">MyWebsite</Link>
      </div>

      <div style={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    background: "#333",
    color: "white",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
};
```

## Programmatic Navigation

Sometimes you need to navigate from JavaScript (not from a link click):

```javascript
"use client";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const handleLogin = () => {
    // After successful login
    router.push("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

**Router methods:**

- `router.push('/path')` - Navigate to new page (adds to history)
- `router.replace('/path')` - Navigate without adding to history
- `router.back()` - Go back to previous page
- `router.refresh()` - Refresh current page

## Best Practices

### ✅ DO

1. Use Link for internal navigation (pages in your app)
2. Use `<a>` tag for external links
3. Add `target="_blank"` and `rel="noopener noreferrer"` for external links
4. Prefetch important pages for better performance
5. Use meaningful link text (not "click here")

### ❌ DON'T

1. Don't use `<a>` for internal navigation
2. Don't use Link for external websites
3. Don't put onClick handlers that prevent navigation
4. Don't nest Links inside each other

## Common Mistakes to Avoid

### Mistake 1: Using `<a>` inside Link

```javascript
// ❌ Wrong - Don't nest <a> in Link (old Next.js pattern)
<Link href="/about">
  <a>About</a>
</Link>

// ✅ Correct (Next.js 13+)
<Link href="/about">About</Link>
```

### Mistake 2: Using Link for External URLs

```javascript
// ❌ Wrong
<Link href="https://google.com">Google</Link>

// ✅ Correct
<a href="https://google.com" target="_blank" rel="noopener noreferrer">
  Google
</a>
```

### Mistake 3: Preventing Default Navigation

```javascript
// ❌ Wrong - Defeats the purpose of Link
<Link href="/about" onClick={(e) => e.preventDefault()}>
  About
</Link>

// ✅ Correct - Use button if you don't want navigation
<button onClick={handleClick}>Click Me</button>
```

## Performance Tips

1. **Prefetching**: Link automatically prefetches pages in production
2. **Code Splitting**: Each page is loaded only when needed
3. **Shallow Routing**: Update URL without running data fetching

```javascript
// Shallow routing - just update URL
<Link href="/blog?page=2" shallow>
  Page 2
</Link>
```

## Folder Structure Example

```
pages/
├── index.js          → / (Home)
├── about.js          → /about
├── contact.js        → /contact
├── blog/
│   ├── index.js      → /blog
│   └── [id].js       → /blog/1, /blog/2, etc.
└── products/
    └── [id].js       → /products/abc, /products/xyz
```

**Navigation:**

```javascript
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/blog">Blog</Link>
<Link href="/blog/1">Blog Post 1</Link>
<Link href="/products/abc">Product ABC</Link>
```

## Summary

- **Link component** = Fast navigation in Next.js
- No page reload = Better user experience
- Use Link for internal pages, `<a>` for external sites
- Automatic prefetching makes pages load faster
- Simple to use: `<Link href="/page">Text</Link>`

## 📚 Learn More

- **Next.js Link Documentation**: <https://nextjs.org/docs/app/api-reference/components/link>
- **Routing Fundamentals**: <https://nextjs.org/docs/app/building-your-application/routing>

---

**Created by aakku106**  
GitHub: <https://github.com/aakku106>
