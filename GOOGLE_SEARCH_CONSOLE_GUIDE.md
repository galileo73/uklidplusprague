# Google Search Console Setup Guide

**Project:** UKLID PLUS PRAHA
**Purpose:** Monitor search performance, indexing status, and SEO health
**Timeline:** Set up within 24 hours of launch

---

## Overview

Google Search Console (GSC) provides:
- Search performance metrics (impressions, clicks, rankings)
- Indexing status and errors
- Sitemap submission
- Mobile usability issues
- Core Web Vitals data
- Manual action notifications

---

## Step 1: Access Google Search Console

### 1.1 Navigate to GSC
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Sign in with your Google account (same as GA4)

### 1.2 Add Property
1. Click **Add property** (top left dropdown)
2. Select **URL-prefix** property type
3. Enter URL: `https://uklidpluspraha.cz`
4. Click **Continue**

---

## Step 2: Verify Ownership

### Option A: HTML File Upload (Recommended)

1. Download the verification file (e.g., `google1234567890abcdef.html`)
2. Upload to `public/` folder in your project
3. Redeploy website
4. Click **Verify** in GSC

**Implementation:**
```
public/
├── google1234567890abcdef.html  # GSC verification file
├── robots.txt
├── sitemap.xml
└── favicon.ico
```

### Option B: DNS Verification

1. Go to your domain registrar
2. Add TXT record:
   - Type: TXT
   - Name: @ (or leave blank)
   - Value: (provided by GSC)
   - TTL: 3600
3. Wait for DNS propagation (up to 48 hours)
4. Click **Verify** in GSC

### Option C: Google Analytics (If Already Installed)

1. If GA4 is already installed, you can verify using the same account
2. In GSC, select **Google Analytics** as verification method
3. Click **Verify**

---

## Step 3: Submit Sitemap

### 3.1 Verify Sitemap Exists

Your sitemap is at: `https://uklidpluspraha.cz/sitemap.xml`

Current content:
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

### 3.2 Submit to GSC

1. In GSC, go to **Sitemaps** (left sidebar)
2. Enter sitemap URL: `sitemap.xml`
3. Click **Submit**
4. Wait for processing (usually within 24 hours)

### 3.3 Update Sitemap After Launch

Update `public/sitemap.xml` with actual domain and current date:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://[YOUR-DOMAIN].cz/</loc>
    <lastmod>2026-06-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## Step 4: Request Indexing

### 4.1 URL Inspection Tool

1. In GSC, use the **URL Inspection** tool (top search bar)
2. Enter your homepage URL: `https://uklidpluspraha.cz`
3. Click **Request indexing**
4. Repeat for key pages (when added)

### 4.2 Indexing Timeline

| Stage | Timeframe |
|-------|-----------|
| Sitemap submission | Immediate |
| Initial crawl | 1-7 days |
| Full indexing | 1-4 weeks |
| Ranking stabilization | 4-12 weeks |

---

## Step 5: Configure Settings

### 5.1 Preferred Domain

1. Go to **Settings** > **Preferences**
2. Set preferred domain: `https://uklidpluspraha.cz`
3. Ensure HTTPS is enforced

### 5.2 Geographic Targeting

1. Go to **Settings** > **International targeting**
2. Set country: **Czech Republic**
3. This helps Google understand your target market

### 5.3 Crawl Rate

1. Go to **Settings** > **Crawl stats**
2. Monitor crawl rate
3. No changes needed initially (let Google decide)

---

## Step 6: Link with Google Analytics

### 6.1 Link Properties

1. In GA4, go to **Admin** > **Product Linking** > **Search Console**
2. Click **Link**
3. Select your GSC property
4. Enable **Search Console data in GA4**
5. Click **Link**

### 6.2 Benefits

- See search queries in GA4
- Track organic search performance
- Link landing pages to queries

---

## Step 7: Set Up Alerts

### 7.1 Critical Alerts

GSC sends automatic alerts for:
- Manual actions
- Indexing errors
- Security issues
- Core Web Vitals failures

### 7.2 Email Preferences

1. Go to **Settings** > **Preferences**
2. Enable email notifications
3. Recommended settings:
   - ✅ Critical issues
   - ✅ New issues
   - ✅ Monthly performance summary

---

## Step 8: Monitor Core Web Vitals

### 8.1 Access CWV Data

1. Go to **Experience** > **Core Web Vitals**
2. Review LCP, FID, CLS metrics
3. Address any issues

### 8.2 Target Metrics

| Metric | Good | Needs Work | Poor |
|--------|------|------------|------|
| LCP (Largest Contentful Paint) | ≤ 2.5s | 2.5s - 4s | > 4s |
| FID (First Input Delay) | ≤ 100ms | 100ms - 300ms | > 300ms |
| CLS (Cumulative Layout Shift) | ≤ 0.1 | 0.1 - 0.25 | > 0.25 |

**Current Expected Performance:**
- LCP: ~1.5s (good)
- FID: ~50ms (good)
- CLS: ~0.05 (good)

---

## Step 9: Monitor Key Reports

### 9.1 Performance Report

**Access:** Overview > Performance

**Key Metrics:**
- Total clicks
- Total impressions
- Average CTR
- Average position

**Filters to Check:**
- By query (search terms)
- By page (landing pages)
- By country (Czech Republic focus)
- By device (mobile vs. desktop)
- By date (trends over time)

### 9.2 Coverage Report

**Access:** Index > Pages

**Monitor:**
- Valid pages (green)
- Warnings (yellow)
- Errors (red)
- Excluded pages (gray)

### 9.3 Mobile Usability

**Access:** Experience > Mobile Usability

**Common Issues:**
- Text too small
- Touch elements too close
- Content wider than screen

### 9.4 Enhancements

**Access:** Experience > Enhancements

**Monitor:**
- Structured data (JSON-LD)
- Breadcrumbs (when added)
- FAQ snippets (when added)

---

## Step 10: Common Issues & Solutions

### 10.1 Site Not Indexed

**Symptoms:** 0 indexed pages after 2 weeks

**Solutions:**
1. Verify sitemap is submitted
2. Request indexing via URL Inspection
3. Check robots.txt isn't blocking
4. Build external links
5. Share on social media

### 10.2 Low Impressions

**Symptoms:** Few impressions despite indexing

**Solutions:**
1. Check keyword targeting
2. Improve meta descriptions
3. Add more content
4. Build backlinks
5. Improve page speed

### 10.3 Low CTR

**Symptoms:** Impressions but few clicks

**Solutions:**
1. Improve title tags
2. Write compelling meta descriptions
3. Add structured data for rich snippets
4. Target less competitive keywords

### 10.4 Mobile Usability Errors

**Symptoms:** Mobile usability issues reported

**Solutions:**
1. Increase font sizes (min 16px)
2. Increase touch target sizes (min 48x48px)
3. Ensure responsive design
4. Fix horizontal scroll issues

---

## Weekly Monitoring Checklist

### Monday: Quick Check
- [ ] Check for new errors
- [ ] Review performance overview
- [ ] Check for manual actions

### Wednesday: Deep Dive
- [ ] Review top queries
- [ ] Check click-through rates
- [ ] Review indexed pages

### Friday: Planning
- [ ] Compare week-over-week performance
- [ ] Note improvement opportunities
- [ ] Plan content updates

---

## Monthly Report Template

### Search Performance Summary

| Metric | This Month | Last Month | Change |
|--------|------------|------------|--------|
| Clicks | X | X | ±X% |
| Impressions | X | X | ±X% |
| CTR | X% | X% | ±X% |
| Avg Position | X.X | X.X | ±X.X |

### Top 10 Queries

| Query | Impressions | Clicks | CTR | Position |
|-------|-------------|--------|-----|----------|
| cleaning services Prague | X | X | X% | X.X |
| expat cleaning Prague | X | X | X% | X.X |

### Issues Found

| Issue | Status | Action |
|-------|--------|--------|
| [Issue description] | [New/In Progress/Resolved] | [Action taken] |

---

## Integration with Google Business Profile

### Link GSC to Google Business Profile

1. Go to [business.google.com](https://business.google.com)
2. Select your business
3. Go to **Info** > **Website**
4. Ensure website URL matches GSC property
5. Posts and updates will be indexed faster

---

## Advanced: Structured Data Testing

### Test JSON-LD Schemas

1. Use [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your URL
3. Verify schemas detected:
   - LocalBusiness
   - Organization
4. Fix any errors

### Current Schemas (Implemented)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "UKLID PLUS PRAHA",
  "areaServed": ["Prague 1", "Prague 2", "Prague 5", "Prague 6", "Prague 7"],
  "priceRange": "$$"
}
```

---

## Troubleshooting Checklist

| Issue | Check | Solution |
|-------|-------|----------|
| Not indexed | Sitemap submitted | Request indexing |
| Crawling errors | robots.txt | Fix directives |
| Low rankings | Content quality | Improve SEO |
| Mobile issues | Responsiveness | Fix layout |
| No rich snippets | Structured data | Add JSON-LD |

---

## Support Resources

- [GSC Help Center](https://support.google.com/webmasters/)
- [Search Console Training](https://support.google.com/webmasters/topic/9129575)
- [Google SEO Starter Guide](https://developers.google.com/search/docs)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## Timeline

| Day | Task | Time |
|-----|------|------|
| 1 | Create property, verify ownership | 15 min |
| 1 | Submit sitemap | 5 min |
| 1 | Request indexing | 10 min |
| 1-7 | Monitor indexing status | 5 min/day |
| 7-14 | Check performance data | 15 min |
| 14+ | Regular monitoring | 30 min/week |

**Initial setup: 30 minutes**
**Ongoing monitoring: 30 minutes/week**