# Components Overview

This document provides a brief explanation of each main component in the portfolio website.

## Core Components

### Navbar (`components/Navbar.tsx`)
- **Purpose**: Fixed navigation bar at the top of every page
- **Features**:
  - Smooth scroll effect (background changes on scroll)
  - Active route highlighting
  - Responsive mobile menu with hamburger icon
  - Integrated theme toggle
  - Smooth transitions and animations

### Hero (`components/Hero.tsx`)
- **Purpose**: Main landing section on the home page
- **Features**:
  - Animated introduction with name and role
  - Gradient text effects
  - Call-to-action buttons (View Projects, Get In Touch)
  - Fade-in animations using Framer Motion
  - Responsive typography

### AboutSection (`components/AboutSection.tsx`)
- **Purpose**: Displays professional information, skills, and experience
- **Features**:
  - Professional summary/introduction
  - Skills organized by category (Frontend, Backend, Tools)
  - Work experience timeline with descriptions
  - Animated sections with staggered delays
  - Card-based layout for skills

### ProjectsSection (`components/ProjectsSection.tsx`)
- **Purpose**: Container for displaying portfolio projects
- **Features**:
  - Grid layout (responsive: 1 column mobile, 2 columns desktop)
  - Staggered animations for project cards
  - Uses ProjectCard component for each project

### ProjectCard (`components/ProjectCard.tsx`)
- **Purpose**: Reusable card component for displaying individual projects
- **Features**:
  - Project title and description
  - Tech stack badges
  - Live demo and GitHub repository links
  - Hover effects (lift animation)
  - Responsive design

### ContactSection (`components/ContactSection.tsx`)
- **Purpose**: Contact form and social media links
- **Features**:
  - Client-side form validation
  - Real-time error display
  - Success/error feedback messages
  - Social media links (Email, GitHub, LinkedIn)
  - Two-column layout (info + form)

### Footer (`components/Footer.tsx`)
- **Purpose**: Site footer with social links and copyright
- **Features**:
  - Social media icons (GitHub, LinkedIn, Email)
  - Copyright information
  - Responsive layout

### ThemeToggle (`components/ThemeToggle.tsx`)
- **Purpose**: Dark/light mode toggle button
- **Features**:
  - Persists theme preference in localStorage
  - Respects system preference on first visit
  - Smooth theme transitions
  - Sun/moon icons
  - Prevents hydration mismatch

## Utility Files

### `utils/validation.ts`
- Form validation functions
- Email format validation
- Field length validation
- Returns error messages for form fields

### `lib/projects.ts`
- Array of project data objects
- Contains project information (title, description, tech stack, URLs)

### `lib/skills.ts`
- Array of skill objects
- Categorized by type (frontend, backend, tools, other)

### `lib/experience.ts`
- Array of work experience objects
- Contains role, company, period, and description

### `types/index.ts`
- TypeScript interfaces for:
  - Project
  - Skill
  - Experience
  - FormData and FormErrors

## Page Components

### Home Page (`app/page.tsx`)
- Renders the Hero component
- Minimal, focused landing page

### About Page (`app/about/page.tsx`)
- Renders AboutSection component
- Includes SEO metadata

### Projects Page (`app/projects/page.tsx`)
- Renders ProjectsSection component
- Includes SEO metadata

### Contact Page (`app/contact/page.tsx`)
- Renders ContactSection component
- Includes SEO metadata

## Layout

### Root Layout (`app/layout.tsx`)
- Wraps all pages
- Includes Navbar and Footer
- Sets up SEO metadata
- Applies global styles
