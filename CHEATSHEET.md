# 🚀 Quick Reference Cheat Sheet

## 📦 Installation & Setup

```bash
npm install        # Install all dependencies
npm run dev        # Start development (localhost:3000)
npm run build      # Build for production
npm start          # Run production build
npm run lint       # Check for errors
```

---

## 🎨 Color Classes (Tailwind)

### Backgrounds
```css
bg-dark-bg          /* #0a0a0a - Main background */
bg-dark-surface     /* #141414 - Cards */
bg-dark-elevated    /* #1f1f1f - Elevated elements */
bg-dark-hover       /* #262626 - Hover state */
```

### Text Colors
```css
text-primary        /* #3b82f6 - Blue */
text-accent-purple  /* #a855f7 */
text-accent-cyan    /* #06b6d4 */
text-accent-green   /* #10b981 */
text-accent-orange  /* #f97316 */
```

### Borders
```css
border-dark-border  /* #2a2a2a */
```

### Special Effects
```css
glass-effect        /* Glassmorphism effect */
gradient-text       /* Blue to purple gradient text */
```

---

## 🧩 Component Quick Reference

### Button
```tsx
import { Button } from '@/components/ui/Button'

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Full width
<Button fullWidth>Full Width Button</Button>
```

### Card
```tsx
import { Card } from '@/components/ui/Card'

<Card className="hover:bg-dark-hover">
  <h3>Title</h3>
  <p>Content...</p>
</Card>
```

### Container
```tsx
import { Container } from '@/components/ui/Container'

<Container>
  <h1>Centered Content</h1>
</Container>
```

---

## 📁 File Locations

### Pages
```
app/page.tsx              → Home page
app/about/page.tsx        → About page
app/dashboard/page.tsx    → Dashboard page
app/layout.tsx            → Root layout
```

### Components
```
components/ui/            → Reusable UI components
components/layout/        → Header, Footer
components/home/          → Home page sections
```

### Styles
```
app/globals.css           → Global styles
tailwind.config.ts        → Theme configuration
```

---

## 🎯 Common Tasks

### Create New Page
```bash
# Create folder and file
app/new-page/page.tsx
```

```tsx
// app/new-page/page.tsx
import { Container } from '@/components/ui/Container'

export default function NewPage() {
  return (
    <Container>
      <h1>New Page</h1>
    </Container>
  )
}
```

### Create New Component
```tsx
// components/ui/NewComponent.tsx
interface NewComponentProps {
  title: string
  description?: string
}

export function NewComponent({ title, description }: NewComponentProps) {
  return (
    <div className="p-4 bg-dark-surface rounded-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      {description && <p className="text-gray-400">{description}</p>}
    </div>
  )
}
```

### Add New Route to Header
```tsx
// components/layout/Header.tsx
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'New Page', href: '/new-page' }, // Add this
]
```

---

## 🔍 Icons (Lucide React)

```tsx
import { 
  Brain, Zap, Shield, Menu, X,
  ArrowRight, Check, Search, User,
  Settings, Home, Mail, Phone
} from 'lucide-react'

<Brain className="w-6 h-6 text-primary" />
```

[Browse all icons](https://lucide.dev/icons/)

---

## 📱 Responsive Breakpoints

```css
/* Tailwind Breakpoints */
sm:   /* 640px  - Small tablets */
md:   /* 768px  - Tablets */
lg:   /* 1024px - Laptops */
xl:   /* 1280px - Desktops */
2xl:  /* 1536px - Large screens */

/* Example */
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

---

## 🎨 Common Patterns

### Grid Layout
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</div>
```

### Flex Layout
```tsx
<div className="flex items-center justify-between gap-4">
  <h1>Title</h1>
  <Button>Action</Button>
</div>
```

### Centered Section
```tsx
<section className="py-20">
  <Container>
    <div className="max-w-4xl mx-auto text-center">
      <h2>Centered Content</h2>
    </div>
  </Container>
</section>
```

### Gradient Background
```tsx
<div className="bg-gradient-to-br from-primary via-accent-purple to-accent-cyan">
  Gradient content
</div>
```

---

## 🐛 Troubleshooting

### Clear Build Cache
```bash
rm -rf .next
npm run build
```

### Reinstall Dependencies
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Check for Errors
```bash
npm run lint
```

---

## 📝 TypeScript Types

### Component Props
```tsx
interface MyComponentProps {
  title: string              // Required
  description?: string       // Optional
  count: number
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
}
```

### Event Handlers
```tsx
// Button click
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log('Clicked!')
}

// Input change
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value)
}
```

---

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Lucide Icons](https://lucide.dev)

---

## 💾 Git Commands

```bash
git add .
git commit -m "feat: add new feature"
git push origin main
```

### Commit Message Prefixes
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting
- `refactor:` - Code restructuring
- `test:` - Adding tests
- `chore:` - Maintenance

---

**Happy Coding! 🎉**

