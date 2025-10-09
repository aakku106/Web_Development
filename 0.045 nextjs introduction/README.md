<!-- @format -->

# 0.052 Next.js Introduction

## What is Next.js?

**Next.js** is a powerful React framework that makes building web applications easier and more efficient. Think of it as React with superpowers! While React is a library for building user interfaces, Next.js is a framework that provides additional structure, tools, and features to help you build complete web applications.

## Why Use Next.js Over Plain React?

### React Alone

When you use React by itself, you need to:

- Set up routing manually
- Handle server-side rendering yourself
- Optimize for performance manually
- Configure build tools
- Set up development environment

### Next.js Benefits

Next.js handles all of this for you and provides:

- **Built-in routing** - Just create files and folders
- **Server-side rendering (SSR)** - Better SEO and performance
- **Static site generation (SSG)** - Lightning-fast websites
- **API routes** - Backend functionality in the same project
- **Image optimization** - Automatic image compression
- **CSS support** - Built-in styling options
- **TypeScript support** - Optional but built-in
- **Zero configuration** - Works out of the box

## Real-World Analogy

Think of building a house:

- **HTML/CSS/JavaScript** = Raw materials (wood, nails, paint)
- **React** = Tools (hammer, saw, paintbrush)
- **Next.js** = Complete construction kit with blueprints, pre-made parts, and expert guidance

## Next.js in the Industry

### Global Job Market & Salaries (2024)

#### Nepal 🇳🇵

- Junior Next.js Developer: NPR 600,000 - 1,200,000/year
- Mid-level Developer: NPR 1,200,000 - 2,400,000/year
- Senior Developer: NPR 2,400,000 - 4,800,000/year

#### India 🇮🇳

- Junior Next.js Developer: ₹400,000 - 800,000/year
- Mid-level Developer: ₹800,000 - 1,600,000/year
- Senior Developer: ₹1,600,000 - 3,200,000/year

#### USA 🇺🇸

- Junior Next.js Developer: $60,000 - 85,000/year
- Mid-level Developer: $85,000 - 130,000/year
- Senior Developer: $130,000 - 200,000+/year

#### Remote/Global 🌍

- Junior: $25,000 - 45,000/year
- Mid-level: $45,000 - 75,000/year
- Senior: $75,000 - 120,000/year

### Companies Using Next.js

- **Netflix** - Streaming platform
- **TikTok** - Social media
- **Hulu** - Video streaming
- **Twitch** - Live streaming
- **Washington Post** - News media
- **Marvel** - Entertainment
- **IBM** - Technology
- **AT&T** - Telecommunications

## Key Features Explained

### 1. File-Based Routing

```text
pages/
  index.js       → yoursite.com/
  about.js       → yoursite.com/about
  blog/
    index.js     → yoursite.com/blog
    [slug].js    → yoursite.com/blog/any-post-name
```

### 2. Pre-rendering

- **Static Generation (SSG)**: Pages built at build time
- **Server-Side Rendering (SSR)**: Pages built on each request
- **Client-Side Rendering (CSR)**: Traditional React approach

### 3. API Routes

Create backend APIs in the same project:

```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from Next.js!" });
}
```

### 4. Image Optimization

```javascript
import Image from "next/image";

function Profile() {
  return <Image src="/profile.jpg" alt="Profile" width={500} height={500} />;
}
```

## When to Use Next.js

### Perfect For

- **E-commerce websites** (better SEO)
- **Blogs and content sites** (static generation)
- **Company websites** (professional performance)
- **Web applications** (full-stack capabilities)
- **Progressive Web Apps (PWAs)**

### Maybe Not Needed For

- Simple static websites
- Learning React basics
- Very simple projects
- Projects with specific build requirements

## Learning Path

### Prerequisites (You Should Know)

1. ✅ HTML/CSS basics
2. ✅ JavaScript fundamentals
3. ✅ React basics (components, props, state)
4. ✅ Node.js basics (helpful but not required)

### What We'll Learn

1. **Installation and Setup**
2. **Project Structure**
3. **Pages and Routing**
4. **Components in Next.js**
5. **Styling Options**
6. **Basic Data Fetching**
7. **Building and Deployment**

## Installation Methods

### Method 1: Create Next App (Recommended)

```bash
npx create-next-app@latest my-nextjs-app
cd my-nextjs-app
npm run dev
```

### Method 2: Manual Setup

```bash
mkdir my-nextjs-app
cd my-nextjs-app
npm init -y
npm install next react react-dom
```

Then add to package.json:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

## Project Structure

```text
my-nextjs-app/
├── pages/
│   ├── _app.js        # Custom App component
│   ├── index.js       # Home page
│   └── about.js       # About page
├── public/            # Static files
├── styles/            # CSS files
├── components/        # Reusable components
├── package.json
└── next.config.js     # Next.js configuration
```

## Your First Next.js Page

```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>This is your first Next.js page.</p>
    </div>
  );
}
```

## Next.js vs React Comparison

| Feature     | React                  | Next.js               |
| ----------- | ---------------------- | --------------------- |
| Routing     | Manual setup needed    | File-based routing    |
| SEO         | Client-side rendering  | Server-side rendering |
| Performance | Manual optimization    | Built-in optimization |
| Setup       | Complex configuration  | Zero configuration    |
| Backend     | Separate server needed | Built-in API routes   |
| Deployment  | Manual process         | Optimized builds      |

## Development vs Production

### Development Mode

```bash
npm run dev
```

- Hot reloading
- Error reporting
- Development optimizations

### Production Mode

```bash
npm run build
npm start
```

- Optimized bundles
- Minified code
- Performance optimizations

## Next Steps

1. **Practice**: Create a simple Next.js app
2. **Explore**: Try different page types
3. **Experiment**: Add styling and components
4. **Build**: Create a small project
5. **Deploy**: Put your app online

## Common Beginner Mistakes

❌ **Don't:**

- Use React Router in Next.js (use file-based routing)
- Import Next.js components in regular React
- Forget to use Next.js Image component for optimization
- Skip the pages folder structure

✅ **Do:**

- Follow the file-based routing convention
- Use Next.js optimized components
- Understand the difference between SSR and SSG
- Read the official documentation

## Resources for Learning

### Official Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn Course](https://nextjs.org/learn)

### Video Tutorials

- Next.js official YouTube channel
- Vercel YouTube channel

### Practice Projects

- Personal portfolio
- Blog website
- Simple e-commerce store
- Company landing page

## Summary

Next.js is React made easier and more powerful. It's the framework of choice for many companies because it provides excellent performance, SEO benefits, and developer experience out of the box. While React teaches you the fundamentals of component-based development, Next.js teaches you how to build production-ready applications.

Remember: **React is the foundation, Next.js is the framework that makes React shine in production!**

---

## Next Lesson Preview

In the next lesson, we'll dive into creating your first Next.js project and exploring the project structure in detail.

Ready to build something amazing with Next.js? Let's go! 🚀
