<!-- @format -->

# Next.js Introduction - Questions & Answers

## Beginner Level Questions

### 1. What is Next.js?

**Answer:** Next.js is a React framework that provides additional structure, tools, and features to help you build complete web applications. While React is a library for building user interfaces, Next.js adds features like routing, server-side rendering, and performance optimizations.

### 2. What are the main benefits of using Next.js over plain React?

**Answer:**

- **Built-in routing** - File-based routing system
- **Server-side rendering (SSR)** - Better SEO and performance
- **Static site generation (SSG)** - Lightning-fast websites
- **API routes** - Backend functionality in the same project
- **Image optimization** - Automatic image compression
- **Zero configuration** - Works out of the box

### 3. How does routing work in Next.js?

**Answer:** Next.js uses file-based routing. You create files in the `pages` folder, and Next.js automatically creates routes:

- `pages/index.js` → `/`
- `pages/about.js` → `/about`
- `pages/blog/index.js` → `/blog`
- `pages/blog/[slug].js` → `/blog/any-post-name`

### 4. What is the difference between SSR, SSG, and CSR?

**Answer:**

- **CSR (Client-Side Rendering)**: Page rendered in browser after JavaScript loads
- **SSR (Server-Side Rendering)**: Page rendered on server for each request
- **SSG (Static Site Generation)**: Page pre-built at build time

### 5. How do you create a new Next.js project?

**Answer:**

```bash
npx create-next-app@latest my-nextjs-app
cd my-nextjs-app
npm run dev
```

## Intermediate Level Questions

### 6. When should you choose Next.js over React?

**Answer:** Choose Next.js when you need:

- Better SEO (server-side rendering)
- Better performance (optimizations built-in)
- Full-stack capabilities (API routes)
- Less configuration time
- E-commerce or content-heavy websites

### 7. What is the pages directory in Next.js?

**Answer:** The `pages` directory is where you create your application routes. Each file automatically becomes a route based on its filename and location in the folder structure.

### 8. Explain dynamic routing in Next.js

**Answer:** Dynamic routing uses square brackets in filenames:

- `[id].js` - matches any single segment
- `[...slug].js` - matches any number of segments
- `[[...slug]].js` - optionally matches any number of segments

Example: `pages/blog/[slug].js` matches `/blog/hello-world`, `/blog/nextjs-guide`, etc.

### 9. What are API routes in Next.js?

**Answer:** API routes let you create backend endpoints in your Next.js app. Files in `pages/api/` become API endpoints:

```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello World" });
}
```

This creates an endpoint at `/api/hello`.

### 10. How do you add CSS styling in Next.js?

**Answer:** Next.js supports multiple styling options:

- **CSS Modules**: `styles.module.css`
- **Global CSS**: Import in `_app.js`
- **Styled-jsx**: Built-in CSS-in-JS
- **Tailwind CSS**: Can be configured during setup
- **Sass/SCSS**: Install sass package

## Advanced Level Questions

### 11. Explain getStaticProps and getServerSideProps

**Answer:**

- **getStaticProps**: Runs at build time, pre-renders page with props
- **getServerSideProps**: Runs on each request, renders page server-side

```javascript
// Static Generation
export async function getStaticProps() {
  const data = await fetchData();
  return { props: { data } };
}

// Server-Side Rendering
export async function getServerSideProps() {
  const data = await fetchData();
  return { props: { data } };
}
```

### 12. What is the difference between next/link and regular anchor tags?

**Answer:**

- **next/link**: Client-side navigation, faster page transitions, prefetching
- **anchor tags**: Full page reload, slower navigation

```javascript
import Link from 'next/link'

// Good - Client-side navigation
<Link href="/about">About</Link>

// Avoid - Full page reload
<a href="/about">About</a>
```

### 13. How does Next.js optimize images?

**Answer:** Next.js provides the `next/image` component that:

- Automatically serves modern formats (WebP, AVIF)
- Lazy loads images
- Prevents layout shift
- Resizes images for different screen sizes
- Optimizes loading performance

### 14. What is the App Router in Next.js 13+?

**Answer:** The App Router is a new routing system that:

- Uses the `app` directory instead of `pages`
- Supports React Server Components
- Provides better layouts and nested routing
- Enables streaming and partial pre-rendering

### 15. How do you deploy a Next.js application?

**Answer:** Multiple deployment options:

- **Vercel**: `vercel --prod` (easiest, made by Next.js creators)
- **Netlify**: Connect GitHub repo, auto-deploy
- **AWS/Azure/GCP**: Use Docker or serverless functions
- **Traditional servers**: `npm run build` then `npm start`

## Practical Coding Questions

### 16. Create a simple Next.js page component

**Answer:**

```javascript
// pages/about.js
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our Next.js application!</p>
    </div>
  );
}
```

### 17. How do you navigate programmatically in Next.js?

**Answer:**

```javascript
import { useRouter } from "next/router";

function MyComponent() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };

  return <button onClick={handleClick}>Go to Dashboard</button>;
}
```

### 18. Create a dynamic API route

**Answer:**

```javascript
// pages/api/users/[id].js
export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    res.status(200).json({ userId: id, name: "John Doe" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
```

### 19. How do you handle environment variables?

**Answer:**
Create `.env.local` file:

```
DATABASE_URL=your_database_url
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

Use in code:

```javascript
// Server-side only
const dbUrl = process.env.DATABASE_URL;

// Client-side accessible (NEXT_PUBLIC_ prefix)
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

### 20. Create a custom 404 page

**Answer:**

```javascript
// pages/404.js
export default function Custom404() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </div>
  );
}
```

## Project-Based Questions

### 21. How would you create a blog with Next.js?

**Answer:**

1. **Setup**: `npx create-next-app@latest my-blog`
2. **Structure**:
   ```
   pages/
     index.js (blog homepage)
     blog/
       [slug].js (individual blog posts)
   posts/ (markdown files)
   ```
3. **Features**:
   - Use `getStaticProps` for post data
   - Use `getStaticPaths` for dynamic routes
   - Parse markdown with libraries like `gray-matter`

### 22. How do you add authentication to Next.js?

**Answer:**
Options include:

- **NextAuth.js**: `npm install next-auth`
- **Auth0**: Third-party authentication service
- **Firebase Auth**: Google's authentication
- **Custom JWT**: Build your own system

Example with NextAuth.js:

```javascript
// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
```

### 23. How do you optimize Next.js for performance?

**Answer:**

- Use `next/image` for images
- Implement code splitting with dynamic imports
- Use `getStaticProps` when possible
- Enable compression in `next.config.js`
- Optimize fonts with `next/font`
- Use React.memo for expensive components
- Implement proper caching strategies

### 24. How do you handle forms in Next.js?

**Answer:**

```javascript
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### 25. What are some common Next.js mistakes to avoid?

**Answer:**
❌ **Don't:**

- Use regular `<img>` tags (use `next/image`)
- Import large libraries in components (use dynamic imports)
- Use `getServerSideProps` when `getStaticProps` would work
- Put API keys in client-side code
- Use React Router (Next.js has built-in routing)

✅ **Do:**

- Use TypeScript for better development experience
- Implement proper error boundaries
- Use environment variables correctly
- Optimize Core Web Vitals
- Follow Next.js conventions and best practices

## Challenge Questions

### 26. Build a simple e-commerce product page

**Answer:** Create a dynamic route `pages/products/[id].js`:

```javascript
import { useRouter } from "next/router";
import Image from "next/image";

export default function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Image src={product.image} alt={product.name} width={500} height={500} />
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const product = await fetchProduct(params.id);
  return { props: { product } };
}

export async function getStaticPaths() {
  const products = await fetchAllProducts();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: true };
}
```

### 27. How do you implement internationalization (i18n)?

**Answer:**

1. Configure `next.config.js`:

```javascript
module.exports = {
  i18n: {
    locales: ["en", "es", "fr"],
    defaultLocale: "en",
  },
};
```

2. Use the `useRouter` hook:

```javascript
import { useRouter } from "next/router";

export default function HomePage() {
  const { locale, locales, push } = useRouter();

  const t = {
    en: { title: "Welcome" },
    es: { title: "Bienvenido" },
    fr: { title: "Bienvenue" },
  };

  return <h1>{t[locale].title}</h1>;
}
```

### 28. Create a middleware for authentication

**Answer:**

```javascript
// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("auth-token");

  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
```

## Bonus Questions

### 29. What's the difference between Next.js and Gatsby?

**Answer:**

- **Next.js**: React framework, hybrid SSG/SSR, runtime rendering
- **Gatsby**: Static site generator, build-time only, GraphQL data layer
- **Use Next.js for**: Dynamic content, e-commerce, web apps
- **Use Gatsby for**: Blogs, documentation, marketing sites

### 30. How do you test Next.js applications?

**Answer:**
Testing tools and approaches:

- **Jest + React Testing Library**: Unit/integration tests
- **Cypress**: End-to-end testing
- **Playwright**: Modern e2e testing
- **Storybook**: Component testing

Example test:

```javascript
import { render, screen } from "@testing-library/react";
import HomePage from "../pages/index";

test("renders welcome message", () => {
  render(<HomePage />);
  const heading = screen.getByRole("heading", { name: /welcome/i });
  expect(heading).toBeInTheDocument();
});
```

---

## Summary

These questions cover the fundamentals of Next.js from basic concepts to advanced implementation. Practice building real projects to solidify your understanding!

**Remember:** The best way to learn Next.js is by building projects. Start with a simple blog or portfolio, then move to more complex applications like e-commerce stores or social media apps.

**Next Steps:**

1. Complete the official Next.js tutorial
2. Build a personal project
3. Explore advanced features like middleware and edge functions
4. Learn deployment and optimization techniques

Good luck with your Next.js journey! 🚀
