<!-- @format -->

# Tailwind CSS - Utility-First CSS Framework | Practice Questions

## Basic Understanding

### 1. What is Tailwind CSS?

Explain what Tailwind CSS is and how it differs from traditional CSS frameworks.

**Your Answer:**

```text
[Write your answer here]
```

### 2. Utility-First vs Component-First

Compare these two approaches by completing the examples:

**Traditional CSS (Component-First):**

```css
.btn-primary {
  /* Write the CSS properties for a blue button */
}
```

**Tailwind CSS (Utility-First):**

```html
<!-- Write the Tailwind classes for the same blue button -->
<button class="">Click Me</button>
```

### 3. Class Identification

Identify what each Tailwind class does:

- `bg-blue-500` →
- `text-white` →
- `p-4` →
- `rounded-lg` →
- `hover:bg-blue-600` →
- `md:flex` →
- `justify-center` →
- `items-center` →

## Layout & Spacing Exercises

### 4. Flexbox Layout

Create a horizontal navigation bar using Tailwind CSS:

```html
<nav class="">
  <div class="">
    <div class="">AakkuTech</div>
    <div class="">
      <a href="#" class="">Home</a>
      <a href="#" class="">About</a>
      <a href="#" class="">Contact</a>
    </div>
  </div>
</nav>
```

**Requirements:**

- Dark blue background
- White text
- Logo on the left
- Navigation links on the right
- Proper spacing and alignment
- Links should have hover effects

### 5. CSS Grid Layout

Build a responsive card grid using Tailwind:

```html
<div class="">
  <div class="">Card 1</div>
  <div class="">Card 2</div>
  <div class="">Card 3</div>
  <div class="">Card 4</div>
  <div class="">Card 5</div>
  <div class="">Card 6</div>
</div>
```

**Requirements:**

- 1 column on mobile
- 2 columns on tablet
- 3 columns on desktop
- Proper gaps between cards
- Cards should have white background and shadow

### 6. Spacing System

Add appropriate spacing to this form:

```html
<form class="">
  <div class="">
    <label class="">Email</label>
    <input type="email" class="" />
  </div>

  <div class="">
    <label class="">Password</label>
    <input type="password" class="" />
  </div>

  <button type="submit" class="">Sign In</button>
</form>
```

**Requirements:**

- Proper spacing between form elements
- Padding inside inputs
- Button should be full width
- Form should have a maximum width

## Colors & Typography Exercises

### 7. Color System

Style this alert component with appropriate colors:

```html
<!-- Success Alert -->
<div class="">
  <p class="">✅ Operation completed successfully!</p>
</div>

<!-- Warning Alert -->
<div class="">
  <p class="">⚠️ Please check your input.</p>
</div>

<!-- Error Alert -->
<div class="">
  <p class="">❌ Something went wrong.</p>
</div>
```

**Requirements:**

- Use appropriate background and text colors for each alert type
- Include padding and rounded corners
- Make text easily readable

### 8. Typography Hierarchy

Create a blog post layout with proper typography:

```html
<article class="">
  <h1 class="">Main Blog Title</h1>
  <p class="">Published on March 15, 2024 by Aakku</p>

  <h2 class="">Section Heading</h2>
  <p class="">
    This is the main content paragraph. It should be easy to read with
    appropriate line height and font size.
  </p>

  <h3 class="">Subsection</h3>
  <p class="">Another paragraph with consistent styling.</p>

  <blockquote class="">
    "This is an important quote that should stand out."
  </blockquote>
</article>
```

**Requirements:**

- Clear hierarchy with different font sizes
- Proper line heights for readability
- Quote should be visually distinct
- Consistent spacing between elements

## Component Building Exercises

### 9. Button Components

Create a complete button system:

```html
<!-- Primary Button -->
<button class="">Primary Action</button>

<!-- Secondary Button -->
<button class="">Secondary Action</button>

<!-- Outline Button -->
<button class="">Outline Button</button>

<!-- Danger Button -->
<button class="">Delete</button>

<!-- Disabled Button -->
<button class="" disabled>Disabled</button>

<!-- Small Button -->
<button class="">Small</button>

<!-- Large Button -->
<button class="">Large Button</button>
```

**Requirements:**

- Different styles for each button type
- Hover and focus states
- Proper spacing and typography
- Disabled state styling

### 10. Card Component

Build a complete product card:

```html
<div class="">
  <img src="product.jpg" alt="Product" class="" />

  <div class="">
    <h3 class="">CCN Pro Laptop</h3>
    <p class="">High-performance laptop perfect for web development...</p>

    <div class="">
      <span class="">$99.99</span>
      <span class="">$149.99</span>
    </div>

    <div class="">
      <span class="">⭐⭐⭐⭐⭐</span>
      <span class="">(24 reviews)</span>
    </div>

    <button class="">Add to Cart</button>
  </div>
</div>
```

**Requirements:**

- Responsive image
- Proper card styling with shadow
- Price with original crossed out
- Star rating display
- Call-to-action button

### 11. Navigation Component

Create a responsive navigation with mobile menu:

```html
<nav class="">
  <div class="">
    <!-- Logo -->
    <div class="">
      <a href="#" class="">AakkuTech</a>
    </div>

    <!-- Desktop Menu -->
    <div class="">
      <a href="#" class="">Home</a>
      <a href="#" class="">Products</a>
      <a href="#" class="">About</a>
      <a href="#" class="">Contact</a>
    </div>

    <!-- Mobile Menu Button -->
    <button class="">
      <span class="">☰</span>
    </button>
  </div>

  <!-- Mobile Menu (Hidden by default) -->
  <div class="">
    <a href="#" class="">Home</a>
    <a href="#" class="">Products</a>
    <a href="#" class="">About</a>
    <a href="#" class="">Contact</a>
  </div>
</nav>
```

**Requirements:**

- Show desktop menu on large screens
- Hide desktop menu on mobile
- Show hamburger button on mobile
- Proper hover states
- Mobile menu should be hidden initially

## Responsive Design Exercises

### 12. Responsive Hero Section

Create a hero section that adapts to different screen sizes:

```html
<section class="">
  <div class="">
    <div class="">
      <h1 class="">Build Amazing Websites</h1>
      <p class="">
        Learn modern web development with our comprehensive courses.
      </p>
      <div class="">
        <button class="">Get Started</button>
        <button class="">Learn More</button>
      </div>
    </div>

    <div class="">
      <img src="hero-image.jpg" alt="Hero" class="" />
    </div>
  </div>
</section>
```

**Requirements:**

- Stack vertically on mobile
- Side-by-side on desktop
- Different text sizes for different screens
- Responsive image
- Button layout changes on mobile

### 13. Responsive Grid Layout

Build a dashboard layout:

```html
<div class="">
  <!-- Sidebar -->
  <aside class="">
    <nav class="">
      <a href="#" class="">Dashboard</a>
      <a href="#" class="">Users</a>
      <a href="#" class="">Settings</a>
    </nav>
  </aside>

  <!-- Main Content -->
  <main class="">
    <header class="">
      <h1 class="">Dashboard</h1>
    </header>

    <!-- Stats Grid -->
    <div class="">
      <div class="">
        <h3 class="">Total Users</h3>
        <p class="">1,234</p>
      </div>
      <div class="">
        <h3 class="">Revenue</h3>
        <p class="">$12,345</p>
      </div>
      <div class="">
        <h3 class="">Orders</h3>
        <p class="">567</p>
      </div>
    </div>
  </main>
</div>
```

**Requirements:**

- Sidebar hidden on mobile
- Full-width on mobile
- Stats cards: 1 column mobile, 3 columns desktop
- Proper spacing and typography

## Advanced Challenges

### 14. Custom Component with @apply

Create a reusable button component using @apply directive:

```css
/* In your CSS file */
.btn {
  /* Use @apply to combine Tailwind utilities */
}

.btn-primary {
  /* Extend .btn with primary styles */
}

.btn-secondary {
  /* Extend .btn with secondary styles */
}
```

Then use in HTML:

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
```

### 15. Dark Mode Implementation

Add dark mode support to this component:

```html
<div class="">
  <h2 class="">Settings</h2>

  <div class="">
    <label class="">
      <input type="checkbox" class="" />
      Enable notifications
    </label>
  </div>

  <div class="">
    <label class="">Theme</label>
    <select class="">
      <option>Light</option>
      <option>Dark</option>
      <option>Auto</option>
    </select>
  </div>

  <button class="">Save Settings</button>
</div>
```

**Requirements:**

- Add dark mode variants for all elements
- Ensure good contrast in both modes
- Smooth transitions between modes

### 16. Animation and Interactions

Add animations to this card component:

```html
<div class="">
  <div class="">
    <img src="adarasha-avatar.jpg" alt="Adarasha Profile" class="" />
  </div>

  <div class="">
    <h3 class="">Adarasha</h3>
    <p class="">Full Stack Developer</p>

    <div class="">
      <button class="">Follow</button>
      <button class="">Message</button>
    </div>
  </div>
</div>
```

**Requirements:**

- Hover effects on the entire card
- Button hover animations
- Image hover effects
- Smooth transitions
- Scale or transform effects

## Real-World Projects

### 17. Landing Page Section

Build a complete pricing section:

```html
<section class="">
  <div class="">
    <h2 class="">Choose Your Plan</h2>
    <p class="">Select the perfect plan for your needs</p>

    <div class="">
      <!-- Basic Plan -->
      <div class="">
        <h3 class="">Basic</h3>
        <div class="">
          <span class="">$</span>
          <span class="">9</span>
          <span class="">/month</span>
        </div>
        <ul class="">
          <li class="">✓ 5 Projects</li>
          <li class="">✓ 10GB Storage</li>
          <li class="">✓ Email Support</li>
        </ul>
        <button class="">Get Started</button>
      </div>

      <!-- Pro Plan -->
      <div class="">
        <div class="">Most Popular</div>
        <h3 class="">Pro</h3>
        <div class="">
          <span class="">$</span>
          <span class="">19</span>
          <span class="">/month</span>
        </div>
        <ul class="">
          <li class="">✓ Unlimited Projects</li>
          <li class="">✓ 100GB Storage</li>
          <li class="">✓ Priority Support</li>
          <li class="">✓ Advanced Features</li>
        </ul>
        <button class="">Get Started</button>
      </div>

      <!-- Enterprise Plan -->
      <div class="">
        <h3 class="">Enterprise</h3>
        <div class="">
          <span class="">Custom</span>
        </div>
        <ul class="">
          <li class="">✓ Everything in Pro</li>
          <li class="">✓ Unlimited Storage</li>
          <li class="">✓ 24/7 Phone Support</li>
          <li class="">✓ Custom Integrations</li>
        </ul>
        <button class="">Contact Sales</button>
      </div>
    </div>
  </div>
</section>
```

**Requirements:**

- Responsive grid layout
- "Most Popular" badge styling
- Hover effects on cards
- Different button styles
- Proper typography hierarchy

### 18. Contact Form

Create a complete contact form with validation styles:

```html
<form class="">
  <h2 class="">Get in Touch</h2>

  <div class="">
    <div class="">
      <label class="">First Name</label>
      <input type="text" class="" placeholder="Aakku" required />
    </div>

    <div class="">
      <label class="">Last Name</label>
      <input type="text" class="" placeholder="Gaihre" required />
    </div>
  </div>

  <div class="">
    <label class="">Email</label>
    <input
      type="email"
      class=""
      placeholder="adarasha.gaihre106@gmail.com"
      required />
  </div>

  <div class="">
    <label class="">Subject</label>
    <select class="">
      <option>General Inquiry</option>
      <option>Support</option>
      <option>Sales</option>
    </select>
  </div>

  <div class="">
    <label class="">Message</label>
    <textarea class="" rows="4" required></textarea>
  </div>

  <div class="">
    <label class="">
      <input type="checkbox" class="" required />
      I agree to the terms and conditions
    </label>
  </div>

  <button type="submit" class="">Send Message</button>
</form>
```

**Requirements:**

- Responsive form layout
- Focus styles for inputs
- Error state styling
- Proper spacing and alignment
- Accessible form labels

## Answer Guidelines

### Key Concepts to Remember

1. **Mobile-First Approach**: Always start with mobile styles, then add larger screen modifications
2. **Spacing Scale**: Use consistent spacing (4, 8, 12, 16, 20, 24, 32, 40px = 1, 2, 3, 4, 5, 6, 8, 10)
3. **Color Scale**: 50 (lightest) to 950 (darkest) for each color
4. **Responsive Prefixes**: sm: (640px+), md: (768px+), lg: (1024px+), xl: (1280px+)
5. **State Variants**: hover:, focus:, active:, disabled:
6. **Flexbox**: Use `flex`, `justify-*`, `items-*` for alignment
7. **Grid**: Use `grid`, `grid-cols-*`, `gap-*` for layouts

### Common Patterns

- **Container**: `container mx-auto px-4`
- **Card**: `bg-white rounded-lg shadow-md p-6`
- **Button**: `bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded`
- **Input**: `w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`
- **Center Content**: `flex justify-center items-center`
- **Responsive Text**: `text-sm md:text-base lg:text-lg`

## References

- [Tailwind CSS Official Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Installation Guide](https://tailwindcss.com/docs/installation)
- [Tailwind CSS Utility-First Fundamentals](https://tailwindcss.com/docs/utility-first)
- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Tailwind CSS Customization](https://tailwindcss.com/docs/configuration)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/best-practices)
- [Tailwind UI Components](https://tailwindui.com/)

---

**Created by Aakku**  
[GitHub Profile](https://github.com/aakku106)

Making Web Development simple, fun and accessible for everyone!
