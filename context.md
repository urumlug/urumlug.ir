# Project Context & Design Philosophy

## Project Overview
A minimal, clean static website built with Astro and TailwindCSS focused on showcasing events with a simple, elegant design. The site is in **Farsi (Persian)** language with RTL (right-to-left) text direction support.

## Site Structure & Localization

### Language & Direction
- **Primary Language**: Farsi (Persian) - `fa-IR`
- **Text Direction**: RTL (Right-to-Left)
- **Font Requirements**: Persian web fonts (like Vazir, IRANSans, or system fonts supporting Persian)
- **Navigation**: RTL-aware navigation and layout

### Pages
1. **صفحه اصلی (`/`)** - Home: Single event showcase
   - Display the latest/featured event prominently
   - Huge, bold Persian title as the primary focus
   - Smaller descriptive Persian text below the title
   - Minimal, distraction-free layout
   - RTL text alignment

2. **رویدادها (`/events`)** - Events: Event listings
   - Clean grid or list of all events in Persian
   - Persian date formatting (Solar Hijri calendar support)
   - Easy navigation and browsing
   - Consistent RTL styling with home page

3. **درباره ما (`/about`)** - About Us: Organization information
   - Brief introduction and background about the organization in Persian
   - Team or organizational overview
   - Simple, readable RTL layout

4. **تماس (`/contact`)** - Contact: Contact information
   - Persian contact form labels
   - Contact details in Persian
   - Social links if applicable

### Components
- **Header/Navigation** - Simple, clean RTL navigation between pages with existing logo
- **Logo Integration** - Use existing logo design and maintain brand consistency
- **Footer** - Minimal RTL footer with essential Persian links and copyright
- **RSS Feed** - Automated feed generation for events (`/rss.xml`) with Persian content

## Design Philosophy

### Visual Design
- **Minimalist approach**: Focus on Persian content, reduce visual noise
- **Typography-focused**: Large, readable Persian fonts with clear hierarchy
- **RTL-aware design**: All layouts and components work naturally with right-to-left text
- **Clean spacing**: Generous white space for breathing room, adjusted for Persian text
- **Mobile-first**: Responsive RTL design that works on all devices
- **Logo integration**: Seamlessly incorporate existing logo while maintaining minimal aesthetic

### Persian Typography Guidelines
- **Primary Font**: Use web-safe Persian fonts (Vazir, IRANSans, or Tahoma fallback)
- **Line height**: Adjusted for Persian text readability (1.6-1.8)
- **Letter spacing**: Optimized for Persian characters
- **Text alignment**: RTL by default with proper Persian punctuation handling

### Color Palette
- **Primary Dark**: `#2e2e2eff` (Dark charcoal/near black)
  - Use for: Main text, primary UI elements, backgrounds
- **Accent Yellow**: `#fcc400ff` (Bright golden yellow)
  - Use for: Highlights, CTAs, links, accent elements
- **Supporting colors**: White/off-white for backgrounds and contrast

### Color Usage Guidelines
```css
/* TailwindCSS Custom Colors Configuration */
colors: {
  'primary-dark': '#2e2e2e',
  'accent-yellow': '#fcc400',
}

/* RTL Configuration */
html[dir="rtl"] {
  direction: rtl;
  text-align: right;
}
```

## Content Strategy & Localization

### Persian Content Guidelines
- **Event Titles**: Bold, large Persian headings with proper font weight
- **Dates**: Use Persian calendar (Solar Hijri) with appropriate formatting
- **Numbers**: Persian-Indic numerals (۰۱۲۳۴۵۶۷۸۹) where culturally appropriate
- **Typography hierarchy**: Adapted for Persian reading patterns

### Home Page Content (صفحه اصلی)
- **Hero Section**: Latest event with massive Persian title treatment
- **Subtitle/Description**: Brief event details in smaller, secondary Persian text
- **Logo placement**: Existing logo prominently displayed in header
- **Minimal UI**: Clean RTL navigation, no clutter

### Events Page Content (رویدادها)
- **Event Cards**: Persian titles, Persian dates, brief descriptions
- **Chronological ordering**: Most recent first (جدیدترین)
- **Persian labels**: All UI elements in Persian
- **Date formatting**: Persian calendar integration

## Technical Requirements

### Astro Features to Implement
- Static site generation for optimal performance
- RTL language support configuration
- RSS feed generation for Persian events
- Image optimization for event images and logo
- SEO-friendly Persian meta tags and structured data
- Persian font loading optimization

### RTL & Localization Support
```javascript
// astro.config.mjs
export default defineConfig({
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
```

### TailwindCSS Implementation
- Custom color configuration for brand colors
- RTL-aware responsive typography scales
- Persian font family configuration
- RTL utility classes and modifiers
- Logo responsive sizing and positioning
- Minimal, utility-first approach with RTL support

### Persian Font Configuration
```css
@font-face {
  font-family: 'Vazir';
  src: url('/fonts/Vazir-Regular.woff2') format('woff2');
  font-display: swap;
}

/* TailwindCSS Font Family */
fontFamily: {
  'persian': ['Vazir', 'Tahoma', 'Arial', 'sans-serif'],
}
```

## User Experience Goals
- **Fast loading**: Optimized static site with Persian font optimization
- **Easy RTL navigation**: Clear, intuitive Persian site structure
- **Content focus**: Design serves Persian content, maintaining existing logo prominence
- **Accessibility**: Proper semantic HTML and ARIA labels in Persian
- **RSS availability**: Persian language RSS feed for event updates
- **Cultural appropriateness**: Design respects Persian/Iranian design conventions

## Brand Personality & Identity
- **Professional yet approachable** (maintaining existing logo identity)
- **Clean and modern** with Persian cultural sensitivity
- **Content-driven** with respect for Persian typography
- **Efficient and purposeful** 
- **Logo consistency**: Seamlessly integrate existing logo across all pages

## Development Notes

### Persian/RTL Specific Requirements
- Set `dir="rtl"` on HTML element
- Use `lang="fa"` for proper language declaration
- Implement Persian number conversion where needed
- Handle Persian date formatting (Solar Hijri calendar)
- Ensure proper Persian punctuation and spacing
- Test with Persian screen readers for accessibility

### General Development Guidelines
- Keep JavaScript minimal - leverage Astro's static capabilities
- Use semantic HTML elements with RTL awareness
- Implement proper heading hierarchy (h1, h2, h3) for Persian content
- Include alt tags in Persian for images
- Include structured data for events with Persian language support
- Generate Persian language RSS feed automatically from event data
- Maintain existing logo quality and brand consistency across responsive breakpoints

### Logo Integration Notes
- Use existing logo assets (ensure high-quality formats available)
- Implement responsive logo sizing
- Consider logo placement in RTL layout context
- Maintain brand colors alongside specified color palette
- Ensure logo accessibility with proper alt text in Persian