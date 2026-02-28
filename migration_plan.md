# Implementation Plan: Maximoat Next.js Migration (SEO-Focused)

This plan outlines the strategic migration of `job_booster.html` and `apply.html` into a high-performance, SEO-optimized Next.js application using shadcn/ui and Tailwind CSS.

## 1. Project Foundation & Architecture
- **Framework**: Next.js 14+ (App Router) for superior routing and Server Components.
- **Styling**: Tailwind CSS for rapid, utility-first styling with neo-brutalist design tokens.
- **Components**: shadcn/ui for accessible, standardized base components.
- **Animations**: `framer-motion` for micro-interactions and `GSAP` for complex scroll-driven storytelling.

## 2. SEO & Performance Strategy (Core Priority)
- **Metadata API**: Dynamic metadata generation for each route (`title`, `description`, `openGraph`, `twitter`).
- **Semantic HTML**: Refactoring monolithic structures into `<section>`, `<article>`, and `<aside>` to improve crawler readability.
- **Image Optimization**: Migrating all assets to `next/image` with proper `priority`, `alt` tags, and WebP/AVIF formats.
- **Core Web Vitals**: Aiming for 95+ Lighthouse scores via:
    - **Server-Side Rendering (SSR)** for faster Time to First Byte (TTFB).
    - **Font Optimization**: Using `next/font/google` to eliminate Layout Shift (CLS).
- **Structured Data**: Injecting JSON-LD for "Product" (OTP Program) and "FAQPage" to secure rich snippets in Google search results.

## 3. Component Migration Roadmap

### Phase 1: Global Setup & Design Tokens
- [ ] Initialize Next.js project in `/maximoat-next`.
- [ ] Setup `tailwind.config.ts` with Maximoat colors (`mint`, `pro-green`, `slate-900`).
- [ ] Implement `VerifiedBadge.tsx` and global typography styles.

### Phase 2: Index Landing (transformed from job_booster.html)
- [ ] **Hero Section**: Implement `SparklesText` with optimized LCP images.
- [ ] **Trust Stat Bar**: Create interactive `TrustToolbar.tsx`.
- [ ] **Interactive Scorer**: Build `ScoreChallenge.tsx` using Client-side state.
- [ ] **Roadmap**: Port the horizontal GSAP scroll into a dedicated `ProcessRoadmap.tsx`.

### Phase 3: Application Funnel (`apply/page.tsx`)
- [ ] **Split Layout**: Create `SplitScreenLayout.tsx`.
- [ ] **Form Logic**: Rebuild with `react-hook-form` and `Zod` validation.
- [ ] **Dynamic Pricing**: Link pricing selection from landing page to form state.

## 4. Responsiveness & Mobile-First Strategy
- **Mobile-First Development**: Leveraging Tailwind's prefix-based system (`md:`, `lg:`) to build for the 360px viewport first and scale up.
- **Fluid UI**: 
    - Implementing `clamp()` based fluid typography and spacing to eliminate "jumps" between breakpoints.
    - Using `vw` (viewport width) relative units for hero elements to maintain visual balance across all screen sizes.
- **Adaptive Components**:
    - **Navigation**: Transforming the horizontal nav into a mobile-friendly slide-out or sticky bottom bar.
    - **Split Screen**: Ensuring the `apply.html` split-view stacks logically, prioritizing the form on small screens.
    - **Touch Optimization**: Ensuring all interactive elements (buttons, scrubber handles) have a minimum 44px hit area.
- **Micro-Responsiveness**: Using `shadcn/ui`'s responsive primitives (like `Drawer` for mobile vs `Dialog` for desktop) to ensure context-aware UX.

## 5. Analytics & Conversion Tracking
- [ ] Integration of Google Analytics 4 (GA4) / Meta Pixel via Next.js Third Parties.
- [ ] Conversion events for form submissions and "Check Eligibility" clicks.

## 6. Deployment Workflow
- **Vercel Deployment**: Automated CI/CD with preview deployments.
- **Sitemap/Robots**: Automatic generation via `next-sitemap` or Next.js metadata routes.
