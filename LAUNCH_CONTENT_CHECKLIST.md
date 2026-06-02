# Launch Content Checklist

**Project:** UKLID PLUS PRAHA
**Last Updated:** 2026-06-02

---

## 🔴 Critical - Must Replace Before Launch

### Contact Information
- [ ] **Phone Number** - `src/config/business.ts:20`
  - Current: `+420 XXX XXX XXX`
  - Replace with: `+420 [ACTUAL NUMBER]`
  
- [ ] **WhatsApp Number** - `src/config/business.ts:21`
  - Current: `+420XXXXXXXXX`
  - Replace with: `+420[ACTUAL NUMBER]` (no spaces, no +)

### Branding Assets
- [ ] **Logo** - `src/config/business.ts:11` + create file
  - Current: `/images/logo.svg` (placeholder)
  - Create: `public/images/logo.svg`
  - Recommended: SVG format, optimized
  
- [ ] **Favicon** - `public/favicon.ico`
  - Current: Placeholder icon
  - Replace with: Branded favicon

### Social Media URLs
- [ ] **Facebook URL** - `src/config/business.ts:57`
  - Current: `https://facebook.com/uklidpluspraha`
  - Replace with: Actual Facebook page URL

- [ ] **Instagram URL** - `src/config/business.ts:56`
  - Current: `https://instagram.com/uklidpluspraha`
  - Replace with: Actual Instagram profile URL

- [ ] **Messenger URL** - `src/config/business.ts:58`
  - Current: `https://m.me/uklidpluspraha`
  - Replace with: Actual Messenger link

---

## 🟡 High Priority - Replace Before Launch

### Gallery Images
Create all gallery images in `public/images/gallery/`:

- [ ] `kitchen-before.jpg` - Kitchen before deep clean
- [ ] `kitchen-after.jpg` - Kitchen after deep clean
- [ ] `bathroom-before.jpg` - Bathroom before
- [ ] `bathroom-after.jpg` - Bathroom after
- [ ] `living-before.jpg` - Living room before
- [ ] `living-after.jpg` - Living room after
- [ ] `bedroom-before.jpg` - Bedroom before
- [ ] `bedroom-after.jpg` - Bedroom after
- [ ] `airbnb-before.jpg` - Airbnb property before
- [ ] `airbnb-after.jpg` - Airbnb property after
- [ ] `office-before.jpg` - Office before
- [ ] `office-after.jpg` - Office after
- [ ] `oven-before.jpg` - Oven before cleaning
- [ ] `oven-after.jpg` - Oven after cleaning
- [ ] `windows-before.jpg` - Windows before
- [ ] `windows-after.jpg` - Windows after

**Image Requirements:**
- Format: JPG or WebP
- Resolution: Min 1200px width
- Aspect ratio: 4:3 or 16:9
- File size: Under 500KB each
- Style: European apartment aesthetics
- Content: Real Prague properties

### Open Graph Image
- [ ] **OG Image** - Create `public/images/og-image.jpg`
  - Dimensions: 1200 x 630 pixels
  - Include: Logo, tagline, premium visual
  - Format: JPG or PNG

### Domain Configuration
- [ ] **Site URL** - `src/config/seo.ts:24`
  - Current: `https://uklidpluspraha.cz`
  - Update to actual domain

---

## 🟢 Medium Priority - Update After Launch

### Testimonials
Current testimonials in `src/config/testimonials.ts` are realistic placeholders.
Consider replacing with real customer quotes if available.

- [ ] Review and update testimonial quotes
- [ ] Add real customer names (or initials)
- [ ] Update roles/locations if needed

### Google Business Profile
- [ ] Add Google Business Profile URL to config
- [ ] Link Google Reviews widget
- [ ] Add Google Business embed if desired

### Email Address
- [ ] **Email** - `src/config/business.ts:24`
  - Current: `info@uklidpluspraha.cz`
  - Verify actual email address

---

## 📋 Content Review

### Pricing Accuracy
Review all pricing in `src/config/pricing.ts`:

- [ ] Standard cleaning prices
- [ ] Deep cleaning prices  
- [ ] Addon service prices
- [ ] Recurring plan descriptions

### Service Descriptions
Review services in `src/config/services.ts`:

- [ ] Service titles
- [ ] Service descriptions
- [ ] Feature lists
- [ ] CTA labels

### Service Areas
Review areas in `src/config/areas.ts`:

- [ ] Primary areas (Prague 1, 2, 5, 6, 7)
- [ ] Additional neighborhoods
- [ ] Area descriptions

### FAQ Content
Review FAQs in `src/data/faq.ts`:

- [ ] Questions are relevant
- [ ] Answers are accurate
- [ ] Categories are appropriate

---

## ✅ Already Complete

- [x] Business name configured
- [x] Tagline set
- [x] Description written
- [x] Founded year (2015)
- [x] Business hours defined
- [x] Languages supported (EN/CZ/RU/UA)
- [x] All sections implemented
- [x] WhatsApp pre-filled messages
- [x] SEO meta tags
- [x] JSON-LD schemas

---

## File Locations Quick Reference

| Content Type | File Location |
|-------------|---------------|
| Business info | `src/config/business.ts` |
| Contact info | `src/config/business.ts` |
| Social links | `src/config/business.ts` |
| SEO config | `src/config/seo.ts` |
| Services | `src/config/services.ts` |
| Pricing | `src/config/pricing.ts` |
| Testimonials | `src/config/testimonials.ts` |
| Gallery | `src/config/gallery.ts` |
| Service areas | `src/config/areas.ts` |
| FAQs | `src/data/faq.ts` |
| Logo file | `public/images/logo.svg` |
| Gallery images | `public/images/gallery/` |
| OG image | `public/images/og-image.jpg` |

---

## Post-Launch Updates

After launch, consider adding:
- [ ] Google Analytics integration
- [ ] Google Tag Manager
- [ ] Facebook Pixel
- [ ] Customer review integration
- [ ] Blog section for SEO
- [ ] Full i18n implementation