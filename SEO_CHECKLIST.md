# SEO Checklist

**Project:** UKLID PLUS PRAHA
**Domain:** https://uklidpluspraha.cz (placeholder)
**Target Market:** Prague, Czech Republic
**Primary Audience:** Expats, International residents, Airbnb hosts

---

## ✅ On-Page SEO (Implemented)

### Meta Tags
| Element | Status | Content |
|---------|--------|---------|
| Title | ✅ | UKLID PLUS PRAHA \| Premium Cleaning Services for Expats in Prague |
| Description | ✅ | 210 characters, keyword-rich |
| Keywords | ✅ | 10 targeted keywords |
| Robots | ✅ | index, follow |
| Author | ✅ | UKLID PLUS PRAHA |
| Viewport | ✅ | Responsive configured |

### Title Optimization
- Primary keyword: "cleaning services Prague"
- Secondary: "expat cleaning", "Prague apartment cleaning"
- Brand name: UKLID PLUS PRAHA
- Length: 60 characters (optimal)

### Heading Structure
| Level | Content | Status |
|-------|---------|--------|
| H1 | Premium Cleaning Services in Prague | ✅ Single H1 |
| H2 | Section titles (15 sections) | ✅ Proper hierarchy |
| H3 | Subsection titles | ✅ Proper use |

### Semantic HTML
| Element | Implementation | Status |
|---------|---------------|--------|
| `<header>` | Banner with nav | ✅ |
| `<main>` | Main content | ✅ |
| `<section>` | Content sections | ✅ |
| `<nav>` | Navigation | ✅ |
| `<footer>` | Content info | ✅ |
| ARIA labels | Buttons, links | ✅ |

---

## ✅ JSON-LD Structured Data (Implemented)

### LocalBusiness Schema
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "UKLID PLUS PRAHA",
  "url": "https://uklidpluspraha.cz",
  "telephone": "+420 XXX XXX XXX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Prague",
    "addressRegion": "Prague",
    "addressCountry": "CZ"
  },
  "areaServed": ["Prague 1", "Prague 2", "Prague 5", "Prague 6", "Prague 7"],
  "priceRange": "$$"
}
```

### Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "UKLID PLUS PRAHA",
  "url": "https://uklidpluspraha.cz",
  "logo": "https://uklidpluspraha.cz/images/logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+420 XXX XXX XXX",
    "contactType": "customer service",
    "availableLanguage": ["English", "Čeština", "Русский", "Українська"]
  }
}
```

### Available Schema Generators
| Schema | Function | Status |
|--------|----------|--------|
| Service | `generateServiceSchema()` | ✅ Ready |
| FAQ | `generateFAQSchema()` | ✅ Ready |
| Breadcrumb | `generateBreadcrumbSchema()` | ✅ Ready |

---

## ✅ Technical SEO (Implemented)

### robots.txt
```
User-agent: *
Allow: /

Sitemap: https://uklidpluspraha.cz/sitemap.xml
```

### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://uklidpluspraha.cz/</loc>
    <lastmod>2026-06-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Site Performance
| Metric | Status | Notes |
|--------|--------|-------|
| Bundle size | ✅ | ~128KB gzipped JS |
| CSS size | ✅ | 8.72KB gzipped |
| Build time | ✅ | ~363ms |
| Mobile-first | ✅ | Responsive design |

### Netlify Configuration
| Setting | Status |
|---------|--------|
| SPA redirects | ✅ Configured |
| Build command | ✅ npm run build |
| Publish dir | ✅ dist |

---

## ⚠️ Required Before Launch

### Domain Setup
- [ ] Update `siteUrl` in `src/config/seo.ts`
- [ ] Update sitemap URLs
- [ ] Configure DNS records
- [ ] Enable HTTPS on Netlify

### Open Graph Image
- [ ] Create `public/images/og-image.jpg` (1200x630)
- [ ] Update `ogImage` path in `src/config/seo.ts`

### Contact Information
- [ ] Update phone number in schema
- [ ] Update phone number in all configs
- [ ] Update WhatsApp number
- [ ] Update social media URLs

---

## 📋 Post-Launch SEO Tasks

### Google Search Console
- [ ] Verify site ownership
- [ ] Submit sitemap
- [ ] Monitor indexing status
- [ ] Check for crawl errors

### Google Business Profile
- [ ] Claim or create listing
- [ ] Verify business information
- [ ] Add photos
- [ ] Enable reviews
- [ ] Link to website

### Local SEO
- [ ] Add Google Business URL to config
- [ ] Consider Google Maps embed
- [ ] Add Prague-specific content
- [ ] Target Prague neighborhoods in content

---

## 🎯 Target Keywords

### Primary Keywords
| Keyword | Search Intent | Priority |
|---------|--------------|----------|
| cleaning services Prague | Transactional | High |
| expat cleaning Prague | Transactional | High |
| apartment cleaning Prague | Transactional | High |
| Prague cleaning company | Informational | High |

### Secondary Keywords
| Keyword | Search Intent | Priority |
|---------|--------------|----------|
| deep cleaning Prague | Transactional | Medium |
| Airbnb cleaning Prague | Transactional | Medium |
| recurring cleaning Prague | Transactional | Medium |
| office cleaning Prague | Transactional | Medium |
| English speaking cleaners Prague | Informational | Medium |

### Long-Tail Keywords
| Keyword | Priority |
|---------|----------|
| professional cleaning services for expats in Prague | Medium |
| reliable apartment cleaning Prague 2 | Medium |
| Airbnb turnover cleaning service Prague | Medium |
| recurring home cleaning plans Prague | Low |

### Czech Keywords (Future i18n)
| Keyword | English Equivalent |
|---------|-------------------|
| úklid Praha | cleaning Prague |
| úklidové služby Praha | cleaning services Prague |
| čištění bytů Praha | apartment cleaning Prague |

---

## 📊 SEO Schema Implementation Status

| Schema Type | Status | Location |
|-------------|--------|----------|
| LocalBusiness | ✅ Implemented | App.tsx |
| Organization | ✅ Implemented | seo.ts |
| Service | ✅ Generator ready | seo.ts |
| FAQPage | ✅ Generator ready | seo.ts |
| BreadcrumbList | ✅ Generator ready | seo.ts |
| Review | ⚠️ Future | - |
| AggregateRating | ⚠️ Future | - |

---

## 📈 Content SEO Checklist

### Homepage Content
- [x] H1 with primary keyword
- [x] Keyword in first 100 words
- [x] Location-specific content (Prague districts)
- [x] Service descriptions with keywords
- [x] FAQ section with common questions
- [x] Testimonials for trust signals

### Service Pages (Future)
- [ ] Individual service pages
- [ ] Service-specific keywords
- [ ] Service schema markup
- [ ] Internal linking

### Blog (Future Enhancement)
- [ ] Blog architecture
- [ ] Cleaning tips articles
- [ ] Prague expat guides
- [ ] Prague neighborhood guides

---

## 🔍 SEO Audit Commands

### Lighthouse SEO Audit
```bash
npm run build
npm run preview
# Open Chrome DevTools > Lighthouse > SEO
```

### Manual Checks
- [ ] View page source - verify meta tags
- [ ] Check structured data with Google Rich Results Test
- [ ] Verify mobile responsiveness
- [ ] Check page speed with PageSpeed Insights
- [ ] Validate HTML with W3C validator

---

## 📱 Mobile SEO

### Mobile-First Indexing
| Requirement | Status |
|-------------|--------|
| Responsive design | ✅ Implemented |
| Viewport meta tag | ✅ Configured |
| Touch-friendly buttons | ✅ Min 44px |
| Readable text | ✅ 16px minimum |
| No horizontal scroll | ✅ Verified |

### Mobile Performance
| Metric | Target | Status |
|--------|--------|--------|
| First Contentful Paint | < 1.8s | ✅ Expected |
| Largest Contentful Paint | < 2.5s | ✅ Expected |
| Cumulative Layout Shift | < 0.1 | ✅ Expected |

---

## 🔗 Link Building Opportunities

### Local Directories
- [ ] Google Business Profile
- [ ] Firmy.cz (Czech business directory)
- [ ] Zlatá stránka (Yellow Pages CZ)
- [ ] Prague expat directories

### Niche Directories
- [ ] Airbnb host resources
- [ ] Expat relocation guides
- [ ] Prague living websites

### Content Marketing
- [ ] Guest posts on Prague expat blogs
- [ ] Collaborations with relocation agencies
- [ ] Partnerships with property management companies

---

## ✅ Summary

### Currently Implemented
- ✅ Title and meta tags
- ✅ Semantic HTML structure
- ✅ JSON-LD schemas (LocalBusiness, Organization)
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ Mobile-responsive design
- ✅ Fast build times
- ✅ SPA routing configured

### Required Before Launch
- 🔴 Update domain URL
- 🔴 Create OG image
- 🔴 Update contact info in schemas
- 🟡 Submit to Google Search Console
- 🟡 Set up Google Business Profile

### Future Enhancements
- ⚪ Blog section
- ⚪ Service-specific pages
- ⚪ Full i18n for Czech/Russian/Ukrainian
- ⚪ Review schema markup
- ⚪ Breadcrumb navigation