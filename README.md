# UKLID PLUS PRAHA Website

Premium cleaning services website for expats in Prague. A modern, responsive single-page application built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 19** - UI library
- **TypeScript 6** - Type safety
- **Vite 8** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library

## Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd uklidplusprague
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Build

Build for production:
```bash
npm run build
```

Preview production build locally:
```bash
npm run preview
```

## Deployment (Netlify)

### Automatic Deployment

1. Connect your repository to Netlify
2. Netlify will automatically detect the build settings from `netlify.toml`
3. Deploy on every push to main branch

### Manual Deployment

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

## Project Structure

```
uklidplusprague/
├── public/                 # Static assets
│   ├── robots.txt         # Search engine directives
│   ├── sitemap.xml        # Site map for SEO
│   └── favicon.ico        # Site favicon (placeholder)
├── src/
│   ├── assets/            # Images, fonts, icons
│   ├── components/
│   │   ├── layout/        # Header, Footer, MobileMenu
│   │   ├── sections/      # Page sections (Hero, Services, etc.)
│   │   └── ui/            # Reusable UI components
│   ├── config/            # Business config, theme, content
│   ├── data/              # Static data (FAQ, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── i18n/              # Internationalization
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── netlify.toml           # Netlify configuration
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Dependencies and scripts
```

## Configuration Files

### Business Configuration (`src/config/business.ts`)
- Business name, tagline, description
- Contact information (phone, email, social links)
- Business hours
- Supported languages

### Theme Configuration (`src/config/theme.ts`)
- Color palette (primary, secondary, accent, neutral)
- Typography settings
- Spacing scale
- Breakpoints
- Animation timing
- Shadows and border radius

### Other Configurations
- `services.ts` - Service offerings
- `pricing.ts` - Pricing plans
- `testimonials.ts` - Customer testimonials
- `areas.ts` - Service areas
- `seo.ts` - SEO metadata

## Customization Guide

### Changing Business Information

Edit `src/config/business.ts`:
```typescript
export const businessInfo: BusinessInfo = {
  name: 'YOUR BUSINESS NAME',
  tagline: 'Your tagline here',
  description: 'Your description...',
  // ...
};

export const contactInfo: ContactInfo = {
  phone: '+420 XXX XXX XXX',
  whatsapp: '+420XXXXXXXXX',
  email: 'your@email.com',
  // ...
};
```

### Changing Colors

Edit `src/config/theme.ts`:
```typescript
export const colors = {
  primary: {
    50: '#eff6ff',
    // ... customize your color palette
  },
  // ...
};
```

The color values follow Tailwind's color scale (50-950).

### Adding/Modifying Services

Edit `src/config/services.ts` to add or modify service offerings:
```typescript
export const services: Service[] = [
  {
    id: 'your-service',
    title: { en: 'Service Name' },
    description: { en: 'Service description...' },
    // ...
  },
];
```

### Adding Testimonials

Edit `src/config/testimonials.ts`:
```typescript
export const testimonials: Testimonial[] = [
  {
    id: 'unique-id',
    name: 'Customer Name',
    role: 'Customer Role',
    quote: { en: 'Testimonial text...' },
    rating: 5,
    // ...
  },
];
```

### Modifying Pricing Plans

Edit `src/config/pricing.ts` to adjust pricing tiers and features.

### Internationalization

The site supports multiple languages. Add translations in `src/config/` files using the language code:
```typescript
{
  en: 'English text',
  cs: 'Czech text',
  ru: 'Russian text',
  uk: 'Ukrainian text',
}
```

## SEO

- `public/robots.txt` - Search engine crawling directives
- `public/sitemap.xml` - Site structure for search engines
- Meta tags configured in `src/config/seo.ts`

**Note:** Update the sitemap URL and robots.txt with your actual domain before deployment.

## Performance Optimizations

- Code splitting with manual chunks for React and Framer Motion
- Tailwind CSS for minimal CSS bundle
- Optimized images (add to `src/assets/`)
- Gzip compression (handled by Netlify)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - All rights reserved.

## Support

For issues or questions, contact the development team.