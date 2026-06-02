# Google Analytics 4 Integration Plan

**Project:** UKLID PLUS PRAHA
**Purpose:** Track website performance, conversions, and user behavior
**Timeline:** Implement before launch or immediately after

---

## Overview

Google Analytics 4 (GA4) will track:
- Website traffic and user acquisition
- WhatsApp click conversions (primary KPI)
- Form submissions (secondary KPI)
- User journey through sections
- Geographic distribution (Prague vs. other)
- Device and browser analytics

---

## Step 1: Create GA4 Property

### 1.1 Access Google Analytics
1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in with your Google account
3. Click **Admin** (gear icon, bottom left)

### 1.2 Create New Property
1. Click **Create Account** or use existing account
2. Account name: `UKLID PLUS PRAHA`
3. Property name: `UKLID PLUS PRAHA Website`
4. Reporting time zone: `Czech Republic` (GMT+1)
5. Currency: `Czech Koruna (CZK)`
6. Click **Next**

### 1.3 Business Information
- Business category: `Business and Industrial Services > Cleaning Service`
- Business size: `Small (1-10 employees)`
- Click **Create**

### 1.4 Data Stream Setup
1. Select **Web** platform
2. Website URL: `https://uklidpluspraha.cz`
3. Stream name: `Main Website`
4. Click **Create stream**
5. **Copy the Measurement ID** (format: `G-XXXXXXXXXX`)

---

## Step 2: Implement GA4 Tracking

### 2.1 Install Google Tag Manager (Recommended)

**Why GTM?** Easier to manage tracking codes without code changes.

**Option A: GTM Implementation (Recommended)**

1. Create GTM account at [tagmanager.google.com](https://tagmanager.google.com)
2. Account name: `UKLID PLUS PRAHA`
3. Container name: `uklidpluspraha.cz`
4. Target platform: **Web**
5. Copy the GTM ID (format: `GTM-XXXXXXX`)

**Add to `index.html`** (inside `<head>`):
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

**Add after opening `<body>` tag**:
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

**Option B: Direct GA4 Implementation (Simpler)**

Add to `index.html` (inside `<head>`):
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2.2 Create GA4 Config File

**Create `src/config/analytics.ts`:**
```typescript
/**
 * Google Analytics 4 Configuration
 */
export const analyticsConfig = {
  // Replace with your GA4 Measurement ID
  measurementId: 'G-XXXXXXXXXX',
  
  // Enable debug mode in development
  debugMode: import.meta.env.DEV,
  
  // Event names
  events: {
    WHATSAPP_CLICK: 'whatsapp_click',
    CONTACT_FORM_SUBMIT: 'contact_form_submit',
    PHONE_CLICK: 'phone_click',
    MESSENGER_CLICK: 'messenger_click',
    INSTAGRAM_CLICK: 'instagram_click',
    PRICING_VIEW: 'pricing_view',
    SERVICE_VIEW: 'service_view',
  },
  
  // Conversion events (for Google Ads)
  conversions: {
    WHATSAPP_CLICK: 'whatsapp_click',
    CONTACT_FORM_SUBMIT: 'contact_form_submit',
  },
};

/**
 * Track custom event
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as Window & { gtag: (...args: unknown[]) => void }).gtag('event', eventName, params);
  }
}

/**
 * Track WhatsApp click
 */
export function trackWhatsAppClick(location: string) {
  trackEvent(analyticsConfig.events.WHATSAPP_CLICK, {
    event_category: 'engagement',
    event_label: location,
    conversion: true,
  });
}

/**
 * Track contact form submission
 */
export function trackContactFormSubmit() {
  trackEvent(analyticsConfig.events.CONTACT_FORM_SUBMIT, {
    event_category: 'engagement',
    conversion: true,
  });
}
```

---

## Step 3: Set Up Conversion Tracking

### 3.1 Mark Events as Conversions

In GA4 Admin:
1. Go to **Events** > **Mark as conversion**
2. Mark these events as conversions:
   - `whatsapp_click` (PRIMARY)
   - `contact_form_submit` (SECONDARY)

### 3.2 Create Conversion Goals

1. Go to **Admin** > **Goals**
2. Create goal: `WhatsApp Inquiry`
   - Event: `whatsapp_click`
   - Mark as conversion
3. Create goal: `Contact Form Submission`
   - Event: `contact_form_submit`
   - Mark as conversion

---

## Step 4: Enhanced Tracking

### 4.1 WhatsApp Click Tracking

**Update `src/components/layout/FloatingWhatsApp.tsx`:**
```typescript
import { trackWhatsAppClick } from '../../config/analytics';

// In the anchor tag:
<a
  href={whatsappUrl}
  onClick={() => trackWhatsAppClick('floating_button')}
  // ... rest of props
>
```

**Update `src/components/sections/HeroSection.tsx`:**
```typescript
import { trackWhatsAppClick } from '../../config/analytics';

// In WhatsApp button:
<a
  href={whatsappUrlWithMessage}
  onClick={() => trackWhatsAppClick('hero')}
  // ... rest of props
>
```

### 4.2 Contact Form Tracking

**Update `src/components/sections/ContactSection.tsx`:**
```typescript
import { trackContactFormSubmit } from '../../config/analytics';

// In form submit handler:
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // ... form submission logic
  trackContactFormSubmit();
};
```

### 4.3 Scroll Depth Tracking

Add to `src/App.tsx` or create `src/utils/scrollTracking.ts`:
```typescript
import { trackEvent } from '../config/analytics';

export function initScrollTracking() {
  let tracked25 = false;
  let tracked50 = false;
  let tracked75 = false;
  let tracked100 = false;

  window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercent >= 25 && !tracked25) {
      trackEvent('scroll_depth', { percent: 25 });
      tracked25 = true;
    }
    if (scrollPercent >= 50 && !tracked50) {
      trackEvent('scroll_depth', { percent: 50 });
      tracked50 = true;
    }
    if (scrollPercent >= 75 && !tracked75) {
      trackEvent('scroll_depth', { percent: 75 });
      tracked75 = true;
    }
    if (scrollPercent >= 100 && !tracked100) {
      trackEvent('scroll_depth', { percent: 100 });
      tracked100 = true;
    }
  });
}
```

---

## Step 5: Link with Google Ads (Optional)

### 5.1 Link GA4 to Google Ads

1. Go to **GA4 Admin** > **Google Ads Linking**
2. Click **Link**
3. Select your Google Ads account
4. Enable data sharing
5. Click **Submit**

### 5.2 Import Conversions to Google Ads

1. In Google Ads, go to **Tools & Settings** > **Conversions**
2. Click **+ New conversion action**
3. Select **GA4 property**
4. Import `whatsapp_click` conversion

---

## Step 6: Set Up Dashboards

### 6.1 Key Metrics Dashboard

Create a dashboard with:
- Total users / New users
- Sessions per user
- Average engagement time
- WhatsApp clicks (conversion rate)
- Contact form submissions
- Traffic by source
- Users by country (focus: Czech Republic)

### 6.2 Real-Time Dashboard

Monitor:
- Active users
- Active pages
- Real-time conversions

---

## Step 7: Privacy Compliance

### 7.1 Cookie Consent (Required in EU)

**Recommended:** Use a cookie consent solution:
- Cookiebot
- OneTrust
- Osano (free tier available)

### 7.2 Privacy Policy Update

Add to privacy policy:
```
We use Google Analytics to understand how visitors interact with our website.
This data helps us improve our services. You can opt out by disabling cookies 
in your browser settings.
```

### 7.3 GA4 Privacy Settings

In GA4 Admin:
1. Go to **Data Settings** > **Data Collection**
2. Enable **Data deletion for EU users** if required
3. Set **Data retention** to appropriate period

---

## Implementation Timeline

| Step | Task | Time | When |
|------|------|------|------|
| 1 | Create GA4 property | 15 min | Before launch |
| 2 | Implement tracking code | 30 min | Before/after launch |
| 3 | Set up conversions | 10 min | After first data |
| 4 | Enhanced tracking | 30 min | After basic setup |
| 5 | Link Google Ads | 10 min | If running ads |
| 6 | Create dashboards | 20 min | After 1 week |
| 7 | Cookie consent | 30 min | Before launch |

**Total: 2-3 hours**

---

## Verification Checklist

After implementation:

- [ ] GA4 property created
- [ ] Measurement ID installed
- [ ] Real-time data showing in GA4
- [ ] WhatsApp clicks tracked
- [ ] Contact form submissions tracked
- [ ] Conversions marked
- [ ] Dashboard created
- [ ] Cookie consent implemented
- [ ] Privacy policy updated

---

## Key Metrics to Monitor

### Weekly Review
- New users
- Sessions
- WhatsApp conversion rate
- Top traffic sources
- Top landing pages
- Geographic distribution

### Monthly Review
- User acquisition trends
- Engagement trends
- Conversion rate trends
- Source/medium performance
- Device breakdown
- Page performance

---

## Support Resources

- [GA4 Documentation](https://developers.google.com/analytics)
- [GA4 Setup Assistant](https://support.google.com/analytics/answer/9744165)
- [GTM Documentation](https://developers.google.com/tag-manager)
- [Cookie Consent Solutions](https://cookiebot.com/)