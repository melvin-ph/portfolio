# Premium Developer Portfolio - Deployment Instructions

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
```

## Production Build

```bash
# Build for production
npm run build

# Test production build locally
npm start
```

## Deployment Options

### Option 1: Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Option 2: Netlify

```bash
npm run build
# Upload the '.next' folder to Netlify
```

### Option 3: Self-Hosted

```bash
npm run build
npm start
```

## Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## File Structure

```
src/
├── app/
│   ├── globals.css
│   ├─�� layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── shared.tsx
│   ├── backgrounds/
│   │   └── GridBackground.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Stats.tsx
│       ├── Skills.tsx
│       ├── FeaturedProjects.tsx
│       ├── AdditionalProjects.tsx
│       ├── Automation.tsx
│       ├── Agency.tsx
│       ├── Strengths.tsx
│       └── Contact.tsx
```

## Customization Guide

### 1. Update Content

Edit files in `src/components/sections/` to update:
- Hero section intro
- About section text
- Project details
- Skill categories
- Contact information

### 2. Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    cyan: '#00d9ff',      // Primary accent
    blue: '#0099ff',      // Secondary accent
    purple: '#a78bfa',    // Tertiary accent
  }
}
```

### 3. Update Links

Update in multiple sections:
- `Navbar.tsx` - Navigation links
- `Footer.tsx` - Social links
- `Contact.tsx` - Email and social links
- `sections/*` - Project links

### 4. Add Projects

Edit `FeaturedProjects.tsx` and `AdditionalProjects.tsx` with:
- Project titles
- Descriptions
- Tech stack
- Links

## Performance Tips

1. **Images**: Use Next.js Image component for optimization
2. **Fonts**: Already optimized with `next/font`
3. **Animations**: Framer Motion is production-optimized
4. **CSS**: TailwindCSS purges unused styles automatically

## SEO Optimization

- Meta tags in `src/app/layout.tsx`
- Open Graph configured
- Twitter card configured
- Semantic HTML used throughout

## Mobile Responsive

- Mobile-first design approach
- Tested on all breakpoints
- Touch-friendly interactions
- Optimized navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Build Issues

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Port Already in Use

```bash
npm run dev -- -p 3001
```

### Dependencies Issue

```bash
rm -rf node_modules package-lock.json
npm install
```

## Performance Metrics

Target metrics:
- Lighthouse: 95+
- Core Web Vitals: All green
- First Contentful Paint: < 1s
- Time to Interactive: < 2s

## Support & Questions

For issues or questions:
- Check Next.js docs: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion/
- TailwindCSS: https://tailwindcss.com/docs

---

Built with ❤️ - Premium Developer Portfolio
