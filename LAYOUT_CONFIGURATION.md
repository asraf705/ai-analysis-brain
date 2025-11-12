# 📐 Layout Configuration

## Header & Footer Visibility

### Current Setup

The application now uses **conditional rendering** for the Header and Footer components based on the current route.

---

## 🎯 Layout Behavior

### Public Pages (Header + Footer Visible)
- **Home** (`/`) - Full header and footer
- **About** (`/about`) - Full header and footer
- Any other public pages - Full header and footer

### Dashboard Pages (No Header/Footer)
- **All Dashboard Routes** (`/dashboard/*`) - Clean interface
- Only sidebar navigation shown
- No header or footer clutter
- Focused dashboard experience

---

## 🔧 Technical Implementation

### Root Layout (`app/layout.tsx`)

```tsx
'use client'

export default function RootLayout({ children }) {
  const pathname = usePathname()
  
  // Hide header and footer in dashboard
  const isDashboard = pathname.startsWith('/dashboard')

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col bg-dark-bg text-white">
          {!isDashboard && <Header />}
          <main className="flex-1">
            {children}
          </main>
          {!isDashboard && <Footer />}
        </div>
      </body>
    </html>
  )
}
```

**Key Features:**
- Uses `usePathname()` hook from Next.js
- Checks if current path starts with `/dashboard`
- Conditionally renders `<Header />` and `<Footer />`
- Made root layout a Client Component ('use client')

---

## 📄 Metadata Configuration

Since the root layout is now a Client Component, metadata has been moved to individual page files:

### Home Page (`app/page.tsx`)
```tsx
export const metadata: Metadata = {
  title: 'AI Analysis Brain - AI-Powered Data Analysis Platform',
  description: '...',
  keywords: [...]
}
```

### About Page (`app/about/page.tsx`)
```tsx
export const metadata: Metadata = {
  title: 'About Us - AI Analysis Brain',
  description: '...',
  keywords: [...]
}
```

### Dashboard Pages
Each dashboard page can have its own metadata:
```tsx
export const metadata: Metadata = {
  title: 'Dashboard - AI Analysis Brain',
  description: '...'
}
```

---

## 🎨 Visual Behavior

### Before Login / Public Pages:

```
┌──────────────────────────┐
│      Header (Nav)        │
├──────────────────────────┤
│                          │
│      Page Content        │
│                          │
├──────────────────────────┤
│      Footer              │
└──────────────────────────┘
```

### After Login / Dashboard:

```
┌─────┬────────────────────┐
│     │                    │
│ S   │   Page Content     │
│ i   │                    │
│ d   │                    │
│ e   │                    │
│ b   │                    │
│ a   │                    │
│ r   │                    │
│     │                    │
└─────┴────────────────────┘
```

No header or footer, just sidebar + content!

---

## ✨ Benefits

### For Dashboard Users:
1. **More Screen Space** - No wasted vertical space
2. **Focused Interface** - Clean, distraction-free
3. **Professional Look** - Dedicated app experience
4. **Better UX** - Dashboard-specific navigation
5. **Mobile Friendly** - More content visible

### For Developers:
1. **Clean Separation** - Public vs private areas
2. **Easy to Maintain** - Single condition to manage
3. **Flexible** - Easy to add more excluded routes
4. **Type Safe** - Full TypeScript support

---

## 🔄 Adding More Excluded Routes

To hide header/footer on additional routes:

```tsx
// In app/layout.tsx
const pathname = usePathname()

const hideHeaderFooter = 
  pathname.startsWith('/dashboard') ||
  pathname.startsWith('/admin') ||      // Add admin
  pathname.startsWith('/app')           // Add app

return (
  <>
    {!hideHeaderFooter && <Header />}
    <main>{children}</main>
    {!hideHeaderFooter && <Footer />}
  </>
)
```

---

## 🎯 Route Examples

### ✅ Header & Footer Shown:
- `/` - Home page
- `/about` - About page
- `/contact` - Contact page (if added)
- `/pricing` - Pricing page (if added)
- `/blog` - Blog pages (if added)

### ❌ Header & Footer Hidden:
- `/dashboard` - Dashboard overview
- `/dashboard/analytics` - Analytics page
- `/dashboard/activities` - Activities page
- `/dashboard/reports` - Reports page
- `/dashboard/export` - Export page
- `/dashboard/upload` - Upload page
- `/dashboard/settings` - Settings page
- `/dashboard/chat/global` - Global chat
- `/dashboard/chat/file/[id]` - File chat

---

## 💡 Best Practices

### When to Hide Header/Footer:

✅ **Should Hide:**
- Authenticated dashboard areas
- Admin panels
- Full-screen applications
- Focus-required interfaces
- Data-heavy pages

❌ **Should Show:**
- Marketing pages
- Public content
- Landing pages
- Blog posts
- Documentation

---

## 🐛 Troubleshooting

### Issue: Header/Footer Still Showing in Dashboard

**Solution:**
1. Check pathname detection: `pathname.startsWith('/dashboard')`
2. Verify Client Component directive: `'use client'`
3. Ensure `usePathname()` is imported correctly
4. Clear `.next` cache and rebuild

### Issue: Metadata Not Working

**Solution:**
- Metadata must be in Server Components
- Move metadata to individual page files
- Cannot use metadata in Client Components

---

## 📊 Performance Impact

- **Minimal** - Only adds a pathname check
- **Fast** - No extra API calls or data fetching
- **Efficient** - Components not rendered = not loaded
- **Better** - Reduced DOM size in dashboard

---

## ✅ Testing Checklist

- [x] Public pages show header and footer
- [x] Dashboard pages hide header and footer
- [x] Navigation works correctly
- [x] Mobile responsive behavior
- [x] Metadata displays correctly
- [x] No linting errors
- [x] TypeScript types correct

---

## 🎉 Summary

The layout now intelligently shows/hides the Header and Footer based on the current route:

- **Public pages** → Full header and footer
- **Dashboard** → Clean interface with sidebar only

This provides a professional, focused experience for dashboard users while maintaining the marketing header/footer for public pages.

---

**Your dashboard now has a clean, professional interface without header/footer clutter!** ✨

