# Frontend Developer Portfolio

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design, dark mode support, smooth animations, and is fully responsive.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Dark Mode**: Full dark mode support with theme persistence
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **SEO Optimized**: Proper metadata and semantic HTML
- **Contact Form**: Client-side validation and error handling
- **Reusable Components**: Clean, maintainable component architecture

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── projects/
│   │   └── page.tsx          # Projects page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Home page
├── components/
│   ├── AboutSection.tsx      # About section component
│   ├── ContactSection.tsx    # Contact form component
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero section component
│   ├── Navbar.tsx            # Navigation bar component
│   ├── ProjectCard.tsx       # Reusable project card
│   ├── ProjectsSection.tsx   # Projects section component
│   └── ThemeToggle.tsx       # Dark mode toggle
├── lib/
│   ├── experience.ts         # Experience data
│   ├── projects.ts           # Projects data
│   └── skills.ts             # Skills data
├── types/
│   └── index.ts              # TypeScript interfaces
└── utils/
    └── validation.ts         # Form validation utilities
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Update Personal Information

1. **Hero Section**: Edit `components/Hero.tsx` to update your name and intro text
2. **About Section**: Modify `lib/skills.ts` and `lib/experience.ts` with your information
3. **Projects**: Update `lib/projects.ts` with your actual projects
4. **Contact**: Update email and social links in `components/ContactSection.tsx` and `components/Footer.tsx`
5. **Metadata**: Update SEO metadata in `app/layout.tsx` and individual page files

### Styling

- Colors can be customized in `tailwind.config.ts`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind utility classes

## 🎨 Components Overview

### Navbar
- Fixed navigation bar with smooth scroll effect
- Active route highlighting
- Mobile-responsive hamburger menu
- Theme toggle integration

### Hero
- Animated hero section with gradient text
- Call-to-action buttons
- Smooth fade-in animations

### AboutSection
- Professional summary
- Skills organized by category
- Work experience timeline

### ProjectsSection
- Grid layout of project cards
- Staggered animations
- Filter and search ready (can be extended)

### ProjectCard
- Reusable card component
- Hover effects
- Tech stack badges
- Live demo and GitHub links

### ContactSection
- Contact form with validation
- Social media links
- Success/error feedback

### Footer
- Social media icons
- Copyright information
- Responsive layout

## 🚢 Build for Production

```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!
