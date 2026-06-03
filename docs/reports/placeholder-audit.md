# Placeholder Audit Report

**Generated:** 2026-06-03
**Status:** Ready for Production Content

---

## Summary

All placeholders are centralized in `src/config/business.ts`. Before production deployment, replace the placeholder values with actual business data.

---

## Placeholder Values

### Contact Information

| Placeholder | File | Current Value | Replacement Needed | Priority |
|-------------|------|---------------|-------------------|----------|
| `phone` | `src/config/business.ts` | `+420 XXX XXX XXX` | Actual phone number | High |
| `whatsapp` | `src/config/business.ts` | `+420XXXXXXXXX` | Actual WhatsApp number | High |
| `email` | `src/config/business.ts` | `info@uklidpluspraha.cz` | Verify or update | Medium |
| `messenger` | `src/config/business.ts` | `https://m.me/uklidpluspraha` | Actual Messenger link | Medium |
| `instagram` | `src/config/business.ts` | `https://instagram.com/uklidpluspraha` | Verify Instagram URL | Medium |
| `facebook` | `src/config/business.ts` | `https://facebook.com/uklidpluspraha` | Verify Facebook URL | Medium |

### Business Information

| Placeholder | File | Current Value | Replacement Needed | Priority |
|-------------|------|---------------|-------------------|----------|
| `founded` | `src/config/business.ts` | `2015` | Verify founding year | Low |
| `logo` | `src/config/business.ts` | `/images/logo.svg` | Create and add logo | High |

### Images

| Placeholder | Location | Status | Priority |
|-------------|----------|--------|----------|
| Logo | `public/images/logo.svg` | Missing - create branded logo | High |
| OG Image | `public/images/og-image.jpg` | Missing - create social sharing image | Medium |
| Gallery images | `src/config/gallery.ts` | Using placeholder URLs | Medium |
| Testimonial photos | Components | Using default avatars | Low |

### Reviews

| Placeholder | File | Current Value | Replacement Needed | Priority |
|-------------|------|---------------|-------------------|----------|
| Google Reviews | `src/config/reviews.ts` | Placeholder reviews | Import from Google Business | Medium |
| Review count | `src/config/reviews.ts` | `50+` | Update with actual count | Low |
| Average rating | `src/config/reviews.ts` | `4.9` | Update with actual rating | Low |

### SEO

| Placeholder | File | Current Value | Replacement Needed | Priority |
|-------------|------|---------------|-------------------|----------|
| `siteUrl` | `src/config/seo.ts` | `https://uklidpluspraha.cz` | Verify domain | Medium |
| `ogImage` | `src/config/seo.ts` | `/images/og-image.jpg` | Create OG image | Medium |
| Twitter handle | `src/config/seo.ts` | `@uklidpluspraha` | Verify or set | Low |

---

## File Locations for Updates

1. **Business Config:** `src/config/business.ts`
2. **SEO Config:** `src/config/seo.ts`
3. **Reviews Config:** `src/config/reviews.ts`
4. **Gallery Config:** `src/config/gallery.ts`
5. **Logo Image:** `public/images/logo.svg`
6. **OG Image:** `public/images/og-image.jpg`

---

## Notes

- All WhatsApp links now use the centralized `getWhatsAppLink()` helper from `src/utils/whatsapp.ts`
- Changing the WhatsApp number in `src/config/business.ts` will update all WhatsApp links site-wide
- Image placeholders have fallback handling in gallery components
- Reviews can be imported from Google Business API or manually updated

---

## Next Steps

1. Gather actual business contact information
2. Create brand logo (recommended: SVG format)
3. Create social sharing image (1200x630px for OG)
4. Import or add real testimonials
5. Update Google Business URL in reviews config