<!-- @format -->

# Server-Side Rendering (SSR) - Questions & Answers

## Beginner Level Questions

### 1. What is Server-Side Rendering (SSR)?

**Answer:** Server-Side Rendering is a technique where web pages are generated on the server for each request, sending fully rendered HTML to the browser. Instead of the browser building the page from JavaScript, the server prepares everything and sends a complete, ready-to-display page.

### 2. What are the main benefits of SSR?

**Answer:**

- **Better SEO** - Search engines can easily read your content
- **Faster First Contentful Paint (FCP)** - Users see content immediately (0.5-1.5s vs 2-5s)
- **Better on low-end devices** - Server does the heavy lifting
- **Social media previews** - Facebook, Twitter can preview your pages correctly
- **Works without JavaScript** - Content visible even if JS fails

### 3. What's the difference between SSR and CSR?

**Answer:**

**CSR (Client-Side Rendering):**

- Browser receives empty HTML
- JavaScript downloads and runs
- JavaScript fetches data and renders content
- Total time: 3-6 seconds

**SSR (Server-Side Rendering):**

- Server fetches data and renders HTML
- Browser receives complete HTML
- Content visible immediately
- JavaScript hydrates for interactivity
- Total time: 1-3 seconds

### 4. When should you use SSR?

**Answer:** Use SSR when you need:

- Good SEO (e-commerce, news, blogs)
- Fast initial page load
- Social media sharing with previews
- Content-heavy websites
- Better mobile performance

### 5. What is "hydration" in SSR?

**Answer:** Hydration is the process where JavaScript "wakes up" the static HTML sent by the server, making it interactive. The HTML is already visible, but React/Vue/Svelte attaches event listeners and makes components functional.

```javascript
// Server sends this HTML:
<button>Click me</button>

// JavaScript hydrates it:
<button onclick="handleClick()">Click me</button>
```

## Intermediate Level Questions

### 6. What are the three main rendering strategies?

**Answer:**

1. **SSR (Server-Side Rendering)** - Rendered on server for each request

   - Use for: Dynamic content with SEO needs
   - Example: E-commerce product pages

2. **CSR (Client-Side Rendering)** - Rendered in browser

   - Use for: Apps without SEO needs
   - Example: Admin dashboards

3. **SSG (Static Site Generation)** - Rendered at build time
   - Use for: Static content
   - Example: Blog posts, documentation

### 7. How do you implement SSR in Next.js?

**Answer:**

```javascript
// pages/products/[id].js
export async function getServerSideProps(context) {
  const { id } = context.params;

  // This runs on the server for EACH request
  const res = await fetch(`https://api.example.com/products/${id}`);
  const product = await res.json();

  return {
    props: { product },
  };
}

export default function Product({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
    </div>
  );
}
```

### 8. What performance metrics improve with SSR?

**Answer:**

- **TTFB (Time to First Byte)**: Higher (200-500ms vs 50-100ms)
  - But contains full content!
- **FCP (First Contentful Paint)**: Much better (0.5-1.5s vs 2-5s)
- **TTI (Time to Interactive)**: Better (1-3s vs 3-6s)
- **SEO Score**: Excellent (95+ vs 65)

### 9. What are the challenges of SSR?

**Answer:**

**Challenge 1: Server Load**

- Every request hits the server
- Solution: Caching, CDN, optimize queries

**Challenge 2: Browser APIs Not Available**

- No `window`, `document`, `localStorage` on server
- Solution: Check environment before using

```javascript
if (typeof window !== "undefined") {
  // Use browser APIs here
  localStorage.setItem("key", "value");
}
```

**Challenge 3: Memory Leaks**

- Server-side code can create memory leaks
- Solution: Clean up resources, use timeouts

**Challenge 4: Third-Party Libraries**

- Some libraries only work in browser
- Solution: Dynamic imports with `ssr: false`

### 10. How do you handle errors in SSR?

**Answer:**

```javascript
export async function getServerSideProps(context) {
  try {
    const data = await fetchData(context.params.id);
    return { props: { data } };
  } catch (error) {
    // Show 404 page
    return { notFound: true };

    // Or redirect
    // return { redirect: { destination: '/', permanent: false } }
  }
}
```

## Advanced Level Questions

### 11. What is streaming SSR and how does it work?

**Answer:** Streaming SSR (React 18+) sends HTML to the browser in chunks as it's generated, rather than waiting for the entire page to be ready.

```javascript
import { Suspense } from "react";

function ProductPage() {
  return (
    <div>
      <Header /> {/* Sent immediately */}
      <Suspense fallback={<LoadingSkeleton />}>
        <ProductDetails /> {/* Streamed when ready */}
      </Suspense>
      <Footer /> {/* Sent immediately */}
    </div>
  );
}
```

**Benefits:**

- Faster perceived performance
- Progressive page loading
- Better user experience

### 12. How do you implement caching in SSR?

**Answer:**

```javascript
export async function getServerSideProps({ params, res }) {
  // Set cache headers
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=120"
  );

  const data = await fetchData(params.id);

  return {
    props: { data },
  };
}
```

**Cache Strategies:**

- `s-maxage=60` - CDN caches for 60 seconds
- `stale-while-revalidate=120` - Serve stale content while revalidating
- `max-age=0` - Browser doesn't cache

### 13. What's the difference between SSR and Static Site Generation (SSG)?

**Answer:**

| Feature      | SSR             | SSG                |
| ------------ | --------------- | ------------------ |
| **When**     | Each request    | Build time         |
| **Dynamic**  | Yes             | No                 |
| **Speed**    | Fast (0.5-1.5s) | Fastest (0.1-0.5s) |
| **Cost**     | Higher          | Lowest             |
| **Use Case** | Dynamic data    | Static content     |

**Example - SSR:**

```javascript
// Runs on every request
export async function getServerSideProps() {
  const currentPrice = await getPriceFromAPI(); // Live data
  return { props: { price: currentPrice } };
}
```

**Example - SSG:**

```javascript
// Runs once at build time
export async function getStaticProps() {
  const post = await getPostFromCMS(); // Fixed data
  return { props: { post } };
}
```

### 14. How do you optimize SSR performance?

**Answer:**

**1. Database Optimization:**

```javascript
// Bad - N+1 query problem
for (const product of products) {
  product.reviews = await getReviews(product.id);
}

// Good - Single query
const productIds = products.map((p) => p.id);
const allReviews = await getReviewsBulk(productIds);
```

**2. Parallel Data Fetching:**

```javascript
// Bad - Sequential
const user = await fetchUser();
const posts = await fetchPosts();
const comments = await fetchComments();

// Good - Parallel
const [user, posts, comments] = await Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments(),
]);
```

**3. Implement Timeouts:**

```javascript
async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal: controller.signal });
    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
}
```

### 15. How do you implement SSR with authentication?

**Answer:**

```javascript
export async function getServerSideProps(context) {
  const { req } = context;

  // Get token from cookies
  const token = req.cookies.authToken;

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  try {
    // Verify token and fetch user data
    const user = await verifyTokenAndGetUser(token);
    const dashboardData = await fetchDashboardData(user.id);

    return {
      props: {
        user,
        dashboardData,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
}
```

## Practical Implementation Questions

### 16. Create an SSR page for a blog post

**Answer:**

```javascript
// pages/blog/[slug].js
export async function getServerSideProps({ params, res }) {
  // Cache for 60 seconds
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=120"
  );

  try {
    const post = await fetchPostBySlug(params.slug);

    if (!post) {
      return { notFound: true };
    }

    return {
      props: {
        post,
        generatedAt: new Date().toISOString(),
      },
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return { notFound: true };
  }
}

export default function BlogPost({ post, generatedAt }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <p className="meta">
        By {post.author} on {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <footer>
        <small>Page generated at {generatedAt}</small>
      </footer>
    </article>
  );
}
```

### 17. Implement SSR with loading states

**Answer:**

```javascript
// Use React 18 Suspense for streaming
import { Suspense } from "react";

function LoadingSkeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton-header"></div>
      <div className="skeleton-body"></div>
    </div>
  );
}

export default function ProductPage() {
  return (
    <div>
      <h1>Product Details</h1>

      <Suspense fallback={<LoadingSkeleton />}>
        <ProductInfo />
      </Suspense>

      <Suspense fallback={<div>Loading reviews...</div>}>
        <ProductReviews />
      </Suspense>
    </div>
  );
}
```

### 18. Handle SSR with external APIs

**Answer:**

```javascript
export async function getServerSideProps() {
  try {
    // Set timeout for external API
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch("https://external-api.com/data", {
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();

    return {
      props: { data },
    };
  } catch (error) {
    console.error("API Error:", error);

    // Return fallback data
    return {
      props: {
        data: null,
        error: "Failed to load data",
      },
    };
  }
}

export default function Page({ data, error }) {
  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>{data?.content}</div>;
}
```

### 19. Implement SSR with SEO optimization

**Answer:**

```javascript
import Head from "next/head";

export async function getServerSideProps({ params }) {
  const product = await fetchProduct(params.id);

  return {
    props: { product },
  };
}

export default function ProductPage({ product }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description,
    sku: product.id,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <Head>
        <title>{product.name} - Our Store</title>
        <meta name="description" content={product.description} />

        {/* Open Graph */}
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:type" content="product" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.name} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={product.image} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <article>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>${product.price}</p>
      </article>
    </>
  );
}
```

### 20. Debug SSR issues

**Answer:**

**Common Issue 1: Hydration Mismatch**

```javascript
// ❌ Bad - Different on server vs client
function Component() {
  return <div>{new Date().toString()}</div>;
}

// ✅ Good - Consistent rendering
function Component() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return <div>{new Date().toString()}</div>;
}
```

**Common Issue 2: Browser APIs in Server**

```javascript
// ❌ Bad - window doesn't exist on server
function Component() {
  const width = window.innerWidth; // Error!
  return <div>Width: {width}</div>;
}

// ✅ Good - Check environment first
function Component() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  return <div>Width: {width}</div>;
}
```

## Comparison Questions

### 21. Compare SSR frameworks

**Answer:**

| Framework     | Language | Learning Curve | Performance | Ecosystem |
| ------------- | -------- | -------------- | ----------- | --------- |
| **Next.js**   | React    | Medium         | Excellent   | Large     |
| **Nuxt**      | Vue      | Easy           | Excellent   | Medium    |
| **SvelteKit** | Svelte   | Easy           | Excellent   | Growing   |
| **Remix**     | React    | Hard           | Excellent   | Growing   |

### 22. When to choose SSR over SSG?

**Answer:**

**Choose SSR when:**

- Data changes frequently (stock prices, live scores)
- Personalized content (user dashboards)
- Real-time data (news updates)
- User-generated content (social feeds)

**Choose SSG when:**

- Content is static (blog posts)
- Data doesn't change often (documentation)
- Same content for all users (landing pages)
- Build time is acceptable

**Example - SSR for E-commerce:**

```javascript
// Product stock changes frequently
export async function getServerSideProps({ params }) {
  const product = await getProduct(params.id);
  const liveStock = await getCurrentStock(params.id);

  return {
    props: {
      product,
      stock: liveStock, // Always fresh
    },
  };
}
```

**Example - SSG for Blog:**

```javascript
// Blog posts are static
export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);

  return {
    props: { post },
    revalidate: 3600, // Rebuild every hour if needed
  };
}
```

### 23. SSR vs Incremental Static Regeneration (ISR)?

**Answer:**

**SSR:**

- Renders on every request
- Always fresh data
- Higher server load
- Slower TTFB

**ISR:**

- Renders at build time + on-demand
- Mostly fresh data with fallback
- Lower server load
- Faster TTFB

```javascript
// ISR - Best of both worlds
export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: { products },
    revalidate: 60, // Regenerate every 60 seconds
  };
}
```

## Best Practices Questions

### 24. List SSR best practices

**Answer:**

**✅ DO:**

1. **Cache aggressively**

```javascript
res.setHeader(
  "Cache-Control",
  "public, s-maxage=60, stale-while-revalidate=120"
);
```

2. **Handle errors gracefully**

```javascript
try {
  // Fetch data
} catch (error) {
  return { notFound: true };
}
```

3. **Optimize database queries**

```javascript
// Use indexes, avoid N+1 queries
const data = await Promise.all([query1(), query2()]);
```

4. **Implement timeouts**

```javascript
const data = await fetchWithTimeout(url, 5000);
```

5. **Monitor performance**

```javascript
console.time("SSR");
// ... rendering logic
console.timeEnd("SSR");
```

**❌ DON'T:**

1. Don't use browser APIs on server
2. Don't make unnecessary API calls
3. Don't ignore memory leaks
4. Don't expose sensitive data
5. Don't skip error handling

### 25. How do you monitor SSR performance?

**Answer:**

```javascript
// 1. Add timing metrics
export async function getServerSideProps() {
  const startTime = Date.now();

  const data = await fetchData();

  const endTime = Date.now();
  const duration = endTime - startTime;

  // Log to monitoring service
  logMetric("ssr.duration", duration);

  if (duration > 1000) {
    console.warn("SSR took longer than 1 second:", duration);
  }

  return { props: { data } };
}

// 2. Monitor memory usage
if (global.gc) {
  global.gc();
  const memUsage = process.memoryUsage();
  logMetric("memory.heapUsed", memUsage.heapUsed);
}

// 3. Track errors
try {
  const data = await fetchData();
} catch (error) {
  logError("ssr.fetchError", error);
  throw error;
}
```

---

## Summary

Server-Side Rendering is a powerful technique that:

- **Improves SEO** - Search engines can read your content
- **Speeds up initial load** - Users see content immediately
- **Works on all devices** - Even low-end phones perform well
- **Enables social sharing** - Previews work perfectly

**Key Takeaways:**

1. Use SSR for dynamic, SEO-critical pages
2. Implement caching to reduce server load
3. Handle errors gracefully
4. Optimize database queries
5. Monitor performance metrics

**Next Steps:**

1. Practice implementing SSR in Next.js
2. Compare SSR vs SSG for your use cases
3. Learn about streaming SSR and React Server Components
4. Explore edge rendering with Vercel/Cloudflare
5. Master performance optimization techniques

Ready to build lightning-fast, SEO-friendly applications? Start implementing SSR! 🚀

---

Created by [aakku106](https://github.com/aakku106) - Making web development fun and accessible for everyone! 🚀
