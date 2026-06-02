# Remaining Critical Items Before Launch

**Project:** UKLID PLUS PRAHA
**Status:** Technical implementation complete
**Blockers:** Content assets required
**Last Updated:** 2026-06-02

---

## Executive Summary

The UKLID PLUS PRAHA website is **technically complete and ready for staging deployment**. All 17 sections are implemented, build passes cleanly, and the configuration-first architecture is in place. 

**The only blockers are content assets** that need to be provided by the business.

---

## 🔴 Critical Blockers (Must Replace)

### 1. Phone Number
**File:** `src/config/business.ts:20`
**Current:** `+420 XXX XXX XXX`
**Action Required:** Replace with actual Czech phone number
**Format:** `+420 XXX XXX XXX`

```typescript
// Current placeholder
phone: '+420 XXX XXX XXX',

// Replace with actual number
phone: '+420 123 456 789',
```

### 2. WhatsApp Number
**File:** `src/config/business.ts:21`
**Current:** `+420XXXXXXXXX`
**Action Required:** Replace with actual WhatsApp number (no spaces, no +)
**Format:** `+420XXXXXXXXX` → `+420123456789`

```typescript
// Current placeholder
whatsapp: '+420XXXXXXXXX',

// Replace with actual number
whatsapp: '+420123456789',
```

### 3. Logo Image
**File:** Create `public/images/logo.svg`
**Current:** Placeholder text "U+" in header
**Action Required:** Add actual logo file

**Logo Requirements:**
- Format: SVG (preferred) or PNG
- Size: Works at 40x40px (header) and larger
- Background: Transparent
- Color: Works on #050505 dark background

**Files to create:**
```
public/
└── images/
    └── logo.svg    # Main logo file
```

---

## 🟡 High Priority (Should Replace)

### 4. Gallery Images
**File:** Create files in `public/images/gallery/`
**Current:** Placeholder paths configured
**Action Required:** Add before/after photos

**Required files:**
```
public/images/gallery/
├── kitchen-before.jpg
├── kitchen-after.jpg
├── bathroom-before.jpg
├── bathroom-after.jpg
├── living-before.jpg
├── living-after.jpg
├── bedroom-before.jpg
├── bedroom-after.jpg
├── airbnb-before.jpg
├── airbnb-after.jpg
├── office-before.jpg
├── office-after.jpg
├── oven-before.jpg
├── oven-after.jpg
├── windows-before.jpg
└── windows-after.jpg
```

**Image requirements:**
- Format: JPG or WebP
- Resolution: Min 1200px width
- Aspect ratio: 4:3 or 16:9
- Style: European apartment aesthetics
- Quality: Professional or high-quality amateur

### 5. Open Graph Image
**File:** Create `public/images/og-image.jpg`
**Current:** Path configured but file missing
**Action Required:** Create social sharing image

**Requirements:**
- Dimensions: 1200 x 630 pixels
- Include: Logo, tagline, premium visual
- Format: JPG or PNG
- File size: Under 1MB

### 6. Social Media URLs
**File:** `src/config/business.ts`
**Action Required:** Update to actual URLs

```typescript
// Current placeholders
facebook: 'https://facebook.com/uklidpluspraha',
instagram: 'https://instagram.com/uklidpluspraha',
messenger: 'https://m.me/uklidpluspraha',

// Replace with actual URLs
facebook: 'https://facebook.com/[actual-page]',
instagram: 'https://instagram.com/[actual-profile]',
messenger: 'https://m.me/[actual-page-id]',
```

---

## 🟢 Medium Priority (Can Launch Without)

### 7. Google Business Profile URL
**Status:** Not configured
**Action Required:** Add Google Business link to config

**Add to `src/config/business.ts`:**
```typescript
export const socialLinks = {
  instagram: 'https://instagram.com/uklidpluspraha',
  facebook: 'https://facebook.com/uklidpluspraha',
  messenger: 'https://m.me/uklidpluspraha',
  googleBusiness: 'https://g.page/uklidpluspraha', // Add this
};
```

### 8. Real Testimonials
**File:** `src/config/testimonials.ts`
**Current:** Realistic placeholder testimonials
**Action Required:** Replace with real customer quotes (optional)

**Note:** Current testimonials are professional and realistic. Can launch with them and replace later.

### 9. Domain
**File:** `src/config/seo.ts:24`
**Current:** `https://uklidpluspraha.cz`
**Action Required:** Update to actual domain

---

## File Locations Summary

| # | Item | File | Line | Priority |
|---|------|------|------|----------|
| 1 | Phone number | `src/config/business.ts` | 20 | 🔴 Critical |
| 2 | WhatsApp number | `src/config/business.ts` | 21 | 🔴 Critical |
| 3 | Logo | `public/images/logo.svg` | - | 🔴 Critical |
| 4 | Gallery images | `public/images/gallery/` | - | 🟡 High |
| 5 | OG image | `public/images/og-image.jpg` | - | 🟡 High |
| 6 | Facebook URL | `src/config/business.ts` | 57 | 🟡 High |
| 7 | Instagram URL | `src/config/business.ts` | 56 | 🟡 High |
| 8 | Domain URL | `src/config/seo.ts` | 24 | 🟡 High |

---

## Quick Replacement Guide

### Step 1: Contact Information (5 minutes)
```bash
# Edit src/config/business.ts
phone: '+420 [ACTUAL NUMBER]',
whatsapp: '+420[ACTUAL NUMBER]',
```

### Step 2: Logo (10 minutes)
```bash
# Create public/images/ directory if needed
mkdir -p public/images

# Add logo file
# Copy logo.svg to public/images/
```

### Step 3: Gallery Images (30-60 minutes)
```bash
# Create gallery directory
mkdir -p public/images/gallery

# Add all before/after images
# Copy images to public/images/gallery/
```

### Step 4: OG Image (15 minutes)
```bash
# Create OG image (1200x630)
# Copy to public/images/og-image.jpg
```

### Step 5: Social URLs (5 minutes)
```bash
# Edit src/config/business.ts
# Update facebook, instagram, messenger URLs
```

### Step 6: Rebuild and Deploy
```bash
npm run build
# Deploy to Netlify
```

---

## Estimated Time to Launch Ready

| Task | Time | Dependencies |
|------|------|--------------|
| Contact info update | 5 min | Business provides numbers |
| Logo creation | 10-30 min | Designer or business provides |
| Gallery images | 30-60 min | Photography or stock images |
| OG image creation | 15-30 min | Designer |
| Social URL updates | 5 min | Business provides URLs |
| Build and verify | 5 min | None |

**Total: 1-2 hours** (assuming assets are ready)

---

## What's Already Complete

✅ All 17 sections implemented
✅ React + Vite + Tailwind + TypeScript
✅ Responsive design (mobile, tablet, desktop)
✅ WhatsApp-first conversion flow
✅ SEO meta tags and JSON-LD schemas
✅ Configuration-first architecture
✅ Netlify deployment configuration
✅ Premium dark theme (#050505 + #00D6C6)
✅ Framer Motion animations
✅ Accessibility (ARIA, semantic HTML)
✅ Build passes with no errors
✅ TypeScript validation passes

---

## Next Steps

1. **Business provides:**
   - Phone number
   - WhatsApp number
   - Logo file
   - Before/after photos
   - Social media URLs
   - Domain choice

2. **Developer:**
   - Replace placeholder content
   - Run build verification
   - Deploy to staging
   - Test all features

3. **Business approval:**
   - Review staging site
   - Approve content
   - Deploy to production

---

## Contact for Questions

For technical questions about the implementation:
- Review `PRODUCTION_READINESS.md` for technical details
- Review `LAUNCH_CONTENT_CHECKLIST.md` for content requirements
- Review `BRANDING_ASSET_CHECKLIST.md` for brand assets
- Review `SEO_CHECKLIST.md` for SEO requirements
- Review `DEPLOYMENT_CHECKLIST.md` for deployment steps