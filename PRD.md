Executive Summary
A high-performance, content-focused developer portfolio website built with Next.js 14+ App Router. The site prioritizes speed, readability, and maintainability over visual complexity. Every technical decision supports static-first rendering, zero unnecessary JavaScript, and a human-centered reading experience.
Core Philosophy: Less is more. Ship fast, load faster.

Goals & Success Metrics
Primary Goals

Showcase technical work with clarity and depth
Demonstrate engineering quality through the portfolio itself
Enable visitors to quickly assess fit and reach out
Maintain zero friction for content updates

Success Metrics

Performance: Lighthouse score 95+ across all categories
Engagement: Average session duration > 90 seconds
Technical: Time to Interactive (TTI) < 2 seconds
Accessibility: WCAG 2.1 AA compliance
SEO: First page ranking for "[Your Name] developer"


Target Audience
Primary

Hiring Managers: Evaluating technical competence and communication skills
Recruiters: Quickly scanning for skills, availability, and contact info
Potential Collaborators: Assessing project fit and working style

Secondary

Fellow Developers: Exploring work samples and technical approaches
Industry Peers: General networking and knowledge sharing

User Needs

Fast, mobile-friendly browsing
Clear project descriptions with visible outcomes
Easy contact mechanism
No visual noise or unnecessary animations
Professional but human tone


Technical Architecture
Core Stack
Framework:     Next.js 14+ (App Router)
Rendering:     Server Components (default), Static Site Generation
Styling:       Tailwind CSS (token-based design system)
Content:       Markdown/MDX with frontmatter
Hosting:       Vercel (Edge Network)
Font Loading:  next/font with preloading
Images:        next/image with blur placeholders
File Structure
/app
  /(routes)
    /page.tsx              # Home
    /about/page.tsx        # About
    /work/page.tsx         # Projects list
    /work/[slug]/page.tsx  # Project detail
    /contact/page.tsx      # Contact
  /layout.tsx              # Root layout
  /globals.css             # Tailwind + tokens

/content
  /projects
    /project-1.md
    /project-2.md
  /about.md

/components
  /ui
    /Navigation.tsx
    /ProjectCard.tsx
    /CopyEmail.tsx
  /layout
    /Header.tsx
    /Footer.tsx

/lib
  /markdown.ts             # MDX processor
  /utils.ts                # Helpers

/public
  /images
  /fonts
Rendering Strategy
PageRendering MethodRationaleHomeSSGStatic content, update monthlyAboutSSGStable narrative, rare updatesWork (list)SSGProject list, weekly updates maxWork (detail)SSG with dynamic routesCase studies, update per projectContactSSGStatic links, optional client form
Revalidation: ISR with 1-week revalidation period for content pages.

Feature Specifications
1. Navigation
Purpose: Enable quick site traversal and context awareness.
Requirements:

Sticky header on scroll (desktop only, static on mobile)
Active section highlighting based on scroll position
Smooth scroll behavior for anchor links
Keyboard navigation support (Tab, Enter, Escape)
Mobile hamburger menu (text links only, no icons)
Logo/name links back to home

Visual Behavior:

Desktop: Horizontal nav, 60px height, backdrop-blur-sm on scroll
Mobile: Full-screen overlay menu, fade-in transition
Active state: Underline current section (not color change)
Focus state: 2px outline with 4px offset

Content:
[Your Name] — Work — About — Contact
Technical Notes:

Client Component for scroll detection
Use IntersectionObserver for section tracking
Tailwind scroll-smooth globally
aria-current="page" for active links


2. Home / Introduction
Purpose: Immediately communicate who you are, what you do, and current availability.
Content Requirements:
Hero Section:
markdown# Hi, I'm [Your Name]

I build [your specialty] with [key technologies/approach].
Currently [current focus or availability status].
Example:
markdown# Hi, I'm Alex Chen

I build design systems and component libraries that scale.
Currently exploring edge computing and available for consulting.
```

**Optional Subsections:**
- Recent highlight (one project or achievement)
- Scroll indicator (subtle arrow or text)

**Layout:**
- Desktop: Centered, max-width 640px
- Mobile: Full-width with 24px padding
- Vertical rhythm: 32px between heading and body

**Typography:**
- H1: 48px (desktop), 32px (mobile), font-weight 700
- Body: 20px (desktop), 18px (mobile), font-weight 400
- Line height: 1.6 for body text

**Technical Implementation:**
- Server Component
- Content from `/content/home.md`
- Static frontmatter for availability flag
- Zero client JavaScript

---

### 3. About

**Purpose:** Provide depth beyond resume bullets—philosophy, values, working style.

**Content Structure:**

**Section 1: Narrative** (300-500 words)
- Your journey into development
- What drives your work
- How you approach problems

**Section 2: Current Focus** (100-150 words)
- What you're learning/building now
- Technologies you're exploring
- Professional goals this year

**Section 3: Working Style** (Optional, 100-200 words)
- Collaboration preferences
- Communication style
- Tools and workflows

**Layout:**
- Desktop: Two-column (60/40 split for Narrative + Sidebar)
- Mobile: Single column, stacked sections
- Sidebar contains: Photo (optional), Quick facts, Links

**Quick Facts Example:**
```
Location: San Francisco
Languages: JavaScript, TypeScript, Python
Focus: Design Systems, Web Performance
Technical Implementation:

Server Component
MDX for rich text (bold, links, lists)
next/image for photo with blur placeholder
Responsive grid: grid-cols-1 lg:grid-cols-[2fr_1fr]

Frontmatter Schema:
yamltitle: About
description: My background and approach to software development
photo: /images/profile.jpg
location: San Francisco, CA

4. Work / Projects List
Purpose: Showcase depth and variety of technical work with scannable summaries.
Content Requirements:
Per Project:

Title: Clear, descriptive (not clever)
One-line summary: What it is and who it's for
Tech stack: 3-5 key technologies
Year: Completion or launch year
Link: Case study page or live demo (optional)

Example Card:
markdown## Component Library Migration
Rebuilt legacy Bootstrap components in React with TypeScript, 
reducing bundle size by 40%.

**Stack:** React, TypeScript, Storybook, Vite
**Year:** 2024
→ View case study
Sorting: Reverse chronological (newest first)
Layout:

Single column list
Divider between projects (border-t in Tailwind)
Hover state: Subtle background change (bg-gray-50 dark:bg-gray-900)
Padding: 32px vertical per card

Filtering (Optional, Phase 2):

By technology (e.g., "Show React projects")
Client-side filtering with URL params
Preserve static generation

Technical Implementation:

Server Component for list
Load projects from /content/projects/*.md
Sort by frontmatter date field
Generate dynamic routes for detail pages

Frontmatter Schema:
yamltitle: Component Library Migration
summary: Rebuilt legacy Bootstrap components in React...
stack: [React, TypeScript, Storybook, Vite]
year: 2024
date: 2024-11-15
slug: component-library-migration
featured: true

5. Project Detail Page
Purpose: Provide in-depth case study for selected projects.
Content Structure:
Header:

Project title
Stack tags (pills, not badges)
Year and role

Sections:

Overview (100 words)

What the project is
Who it's for
Your role


Problem (150-200 words)

Context and constraints
Specific challenge addressed


Solution (300-500 words)

Technical approach
Key decisions and tradeoffs
Implementation details


Outcome (100-150 words)

Metrics or qualitative results
What you learned
Links to live site or code (if available)



Media:

2-4 screenshots or diagrams
Optimized with next/image
Alt text for accessibility
Caption below each image

Navigation:

Breadcrumb: Work > [Project Title]
Next/Previous project links at bottom

Layout:

Desktop: Max-width 720px, centered
Mobile: Full-width with padding
Images: Full-width within content column

Technical Implementation:

MDX for rich content
Dynamic route: /work/[slug]
Static generation with generateStaticParams
Metadata from frontmatter for SEO

Frontmatter Schema:
yamltitle: Component Library Migration
summary: Rebuilt legacy Bootstrap components...
stack: [React, TypeScript, Storybook, Vite]
year: 2024
date: 2024-11-15
role: Lead Frontend Engineer
team: 3 engineers
timeline: 4 months
outcome: 40% bundle reduction, 95% test coverage
images:
  - /images/project-1-hero.png
  - /images/project-1-diagram.png
links:
  demo: https://demo.example.com
  github: https://github.com/you/project

6. Contact
Purpose: Frictionless way for visitors to reach out.
Content Requirements:
Primary CTA:
markdown# Let's work together

The best way to reach me is email: [your@email.com]
I typically respond within 24 hours.
Secondary Links:

GitHub
LinkedIn
Twitter/X (optional)
Resume PDF (optional)

Optional Form (Phase 2):

Name, Email, Message fields
No CAPTCHA initially
Server action or email API (Resend, SendGrid)
Success/error states

Layout:

Desktop: Centered, max-width 640px
Email displayed as large text (24px)
Click-to-copy button (client component)
Social links as simple text list (no icons)

Technical Implementation:

Server Component for static content
Client Component for copy-to-clipboard
Use Clipboard API with fallback
Toast notification on copy success (optional)

Copy Email Component:
tsx'use client'
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  return (
    <button onClick={handleCopy}>
      {copied ? 'Copied!' : 'Copy email'}
    </button>
  )
}
```

---

## Design System

### Color Palette

**Light Mode:**
```
--background: hsl(0, 0%, 100%)      // #FFFFFF
--foreground: hsl(0, 0%, 10%)       // #1A1A1A
--muted: hsl(0, 0%, 96%)            // #F5F5F5
--border: hsl(0, 0%, 90%)           // #E5E5E5
--accent: hsl(220, 90%, 56%)        // #3B82F6 (for links/hover)
```

**Dark Mode:**
```
--background: hsl(0, 0%, 10%)       // #1A1A1A
--foreground: hsl(0, 0%, 95%)       // #F2F2F2
--muted: hsl(0, 0%, 15%)            // #262626
--border: hsl(0, 0%, 20%)           // #333333
--accent: hsl(220, 90%, 70%)        // #60A5FA
```

**Usage:**
- No gradients
- No shadows (except focus states)
- Dividers use `border` color
- Links use `accent` color
- Hover states use `muted` background

---

### Typography

**Font Stack:**
```
Primary: Inter (next/font/google)
Fallback: system-ui, sans-serif
Monospace: 'JetBrains Mono' (for code blocks)
```

**Scale:**
```
H1: 3rem (48px)    / 2rem (32px) mobile  | font-weight: 700
H2: 2rem (32px)    / 1.5rem (24px)       | font-weight: 600
H3: 1.5rem (24px)  / 1.25rem (20px)      | font-weight: 600
Body: 1.125rem (18px) / 1rem (16px)      | font-weight: 400
Small: 0.875rem (14px)                   | font-weight: 400
```

**Line Height:**
```
Headings: 1.2
Body: 1.6
Small: 1.5
```

**Font Loading:**
- Preload Inter with `next/font`
- Use `font-display: swap`
- Subset to Latin characters only

---

### Spacing Scale

**Base:** 4px
```
xs: 0.5rem   (8px)
sm: 1rem     (16px)
md: 1.5rem   (24px)
lg: 2rem     (32px)
xl: 3rem     (48px)
2xl: 4rem    (64px)
3xl: 6rem    (96px)
```

**Usage:**
- Section padding: `lg` mobile, `xl` desktop
- Component gap: `md`
- Text margin-bottom: `sm`
- Between sections: `2xl` desktop, `xl` mobile

---

### Layout Constraints

**Max Widths:**
```
Content: 720px (prose)
Container: 1200px (full layout)
```

**Responsive Breakpoints:**
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

**Grid System:**
- Use Tailwind's default 12-column grid
- Prefer semantic breakpoints over arbitrary values
- Mobile-first approach

---

### Component Patterns

**Button/Link:**
```
Base: Underline on hover
Accent: Blue underline, no background
Focus: 2px outline, 4px offset
```

**Card:**
```
Base: No border, divider between items
Hover: Subtle background shift
Padding: lg (32px)
```

**Navigation:**
```
Base: Transparent
Scrolled: Backdrop blur with border-bottom
Height: 60px desktop, 56px mobile

Dark Mode
Implementation
Library: next-themes
Behavior:

Respect system preference by default
Optional manual toggle (sun/moon icon or text)
Persist choice in localStorage
No flash on page load

Technical Setup:
tsx// app/providers.tsx
'use client'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  )
}
Toggle Component:
tsx'use client'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
```

**CSS Variables:**
- Define all colors as CSS custom properties
- Use Tailwind's dark variant: `dark:bg-background`

---

## Performance Requirements

### Lighthouse Targets

| Metric | Target | Critical Path |
|--------|--------|---------------|
| Performance | 95+ | Image optimization, minimal JS |
| Accessibility | 100 | Semantic HTML, ARIA labels |
| Best Practices | 100 | HTTPS, no console errors |
| SEO | 100 | Metadata, structured data |

### Core Web Vitals
```
LCP (Largest Contentful Paint): < 2.5s
FID (First Input Delay): < 100ms
CLS (Cumulative Layout Shift): < 0.1
Optimization Strategies
Images:

WebP format with PNG fallback
Responsive sizes with next/image
Blur placeholder for hero images
Lazy loading for below-fold content

Fonts:

Preload critical fonts
Font subsetting (Latin only)
Use font-display: swap

JavaScript:

Total bundle < 50KB (gzipped)
Code splitting for client components
Tree-shaking unused Tailwind utilities

CSS:

Purge unused Tailwind classes
Inline critical CSS
Total CSS < 20KB


Accessibility
WCAG 2.1 AA Compliance
Color Contrast:

Text: 4.5:1 minimum
Large text (18pt+): 3:1 minimum
Test all color combinations

Keyboard Navigation:

All interactive elements focusable
Visible focus indicators (2px outline)
Logical tab order
Skip-to-content link

Screen Reader Support:

Semantic HTML (<nav>, <main>, <article>)
ARIA labels for icon-only buttons
Alt text for all images (descriptive, not decorative)
aria-current for active nav items

Motion:

Respect prefers-reduced-motion
Disable animations for reduced-motion users
No auto-playing videos

Forms (if implemented):

Label all inputs with <label>
Error messages linked with aria-describedby
Required fields marked with aria-required

Testing Checklist

 axe DevTools: Zero violations
 Keyboard-only navigation test
 Screen reader test (NVDA/JAWS)
 Color contrast analyzer
 Test at 200% zoom


SEO & Metadata
Per-Page Metadata
Structure:
tsx// app/work/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const project = await getProject(params.slug)
  
  return {
    title: `${project.title} | Your Name`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.images[0]],
      type: 'article',
    },
  }
}
Required Fields:

title: 50-60 characters
description: 150-160 characters
og:image: 1200x630px
canonical: Absolute URL

Structured Data
Organization Schema (Global):
json{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "url": "https://yoursite.com",
  "jobTitle": "Software Engineer",
  "description": "Developer specializing in...",
  "sameAs": [
    "https://github.com/yourusername",
    "https://linkedin.com/in/yourusername"
  ]
}
Article Schema (Per Project):
json{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Project Title",
  "description": "Project summary...",
  "author": {
    "@type": "Person",
    "name": "Your Name"
  },
  "datePublished": "2024-11-15"
}
```

### Sitemap & Robots

**Generate sitemap.xml:**
- All static pages
- All project detail pages
- Update frequency: weekly
- Priority: Home (1.0), Projects (0.8), About (0.6)

**robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml

Content Management
File-Based Workflow
Creating a New Project:

Create /content/projects/new-project.md
Add frontmatter:

yaml   title: Project Title
   summary: One-line description
   stack: [Tech1, Tech2]
   year: 2024
   date: 2024-11-15
   slug: project-title

Write content in Markdown
Add images to /public/images/
Commit and push (Vercel auto-deploys)

Content Structure
Project Frontmatter (Required):
yamltitle: string
summary: string (max 150 chars)
stack: array of strings
year: number
date: YYYY-MM-DD
slug: string
Project Frontmatter (Optional):
yamlfeatured: boolean
role: string
team: string
timeline: string
outcome: string
images: array of paths
links:
  demo: url
  github: url
  case-study: url
Markdown Extensions (MDX)
Supported:

Bold, italic, links
Headings (H2-H4)
Lists (ordered, unordered)
Code blocks with syntax highlighting
Images
Blockquotes

Not Supported:

HTML inside Markdown (security)
Embedded videos (use links)
Tables (use lists or prose)


Development Workflow
Local Development
Setup:
bashgit clone [repo]
npm install
npm run dev
Environment Variables:
env# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
Scripts:
json{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "format": "prettier --write ."
}
```

### Code Quality

**Linting:**
- ESLint with Next.js config
- Prettier for formatting
- Pre-commit hooks with Husky

**Rules:**
- No unused variables
- No console.log in production
- Enforce component naming conventions

### Git Workflow

**Branches:**
- `main`: Production-ready code
- `develop`: Integration branch
- `feature/*`: New features
- `fix/*`: Bug fixes

**Commit Convention:**
```
feat: Add project detail page
fix: Correct mobile nav z-index
content: Add new project case study
style: Update color tokens
Testing (Optional, Phase 2)
Unit Tests:

Jest + React Testing Library
Test utility functions
Test MDX parser

E2E Tests:

Playwright
Test navigation flow
Test contact form submission


Deployment
Vercel Configuration
Build Settings:
json{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

**Environment Variables:**
```
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NODE_ENV=production
Deployment Workflow:

Push to main branch
Vercel auto-builds
Preview deployed to unique URL
Manual approval (optional)
Deploy to production domain

Performance Monitoring
Metrics to Track:

Vercel Analytics (built-in)
Core Web Vitals dashboard
Build time and bundle size
Error rate (Vercel logs)

Domain Setup
Custom Domain:

Add domain in Vercel dashboard
Update DNS records (A/CNAME)
Enable SSL (automatic with Vercel)
Redirect www → non-www (or vice versa)


Browser Support
Supported:

Chrome (last 2 versions)
Firefox (last 2 versions)
Safari (last 2 versions)
Edge (last 2 versions)

Mobile:

iOS Safari 14+
Chrome Android (latest)

Not Supported:

Internet Explorer
Opera Mini

Graceful Degradation:

Dark mode falls back to light if unsupported
Blur effects fall back to solid background
Modern CSS features with fallbacks


Phase 1 vs Phase 2
Phase 1 (MVP - Launch Ready)
Pages:

✅ Home
✅ About
✅ Work (list)
✅ Work (detail)
✅ Contact

Features:

✅ Static site generation
✅ Dark mode
✅ Responsive design
✅ Copy email to clipboard
✅ SEO metadata
✅ Accessibility compliance

Timeline: 2-3 weeks

Phase 2 (Enhancements)
Features:

 Contact form with email integration
 Project filtering by tech stack
 Blog section (optional)
 RSS feed
 Advanced animations (page transitions)
 Search functionality
 Reading time estimates
 View counter (privacy-respecting)
 Newsletter signup (optional)

Timeline: 4-6 weeks (post-launch)

Open Questions & Decisions Needed

Blog Section: Do you want a /blog route? If yes, same Markdown workflow?
Contact Form: Email API preference? (Resend, SendGrid, Mailgun)
Analytics: Beyond Vercel Analytics? (Plausible, Fathom, none)
Resume PDF: Host on site or external link?
Project Images: Optimize manually or use image CDN?
About Photo: Professional headshot or casual?
Domain: Already registered or need to purchase?


Appendix
Recommended Reading

Next.js App Router Documentation
Tailwind CSS Documentation
MDX Documentation
Web.dev Performance Guide

Tools & Resources

Design: Figma (optional wireframes)
Icons: Heroicons (if needed, sparingly)
Fonts: Google Fonts (Inter)
Images: TinyPNG for compression
Lighthouse: Chrome DevTools

Content Checklist

 Write home intro (50-100 words)
 Write about narrative (300-500 words)
 Document 3-5 projects with frontmatter
 Write 1-2 full case studies
 Prepare project images (2-4 per project)
 Finalize contact info and social links
 Optional: Professional photo for about page