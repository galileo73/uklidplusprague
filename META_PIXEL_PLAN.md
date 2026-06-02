# Meta Pixel Integration Plan

**Project:** UKLID PLUS PRAHA
**Purpose:** Track Facebook/Instagram ad conversions and retargeting
**Timeline:** Implement when ready for paid advertising

---

## Overview

Meta Pixel (formerly Facebook Pixel) enables:
- Conversion tracking from Facebook/Instagram ads
- Audience building for retargeting
- Ad optimization based on conversions
- WhatsApp click tracking (primary conversion)

---

## When to Implement

**Recommended timing:**
- When you start Facebook/Instagram advertising
- NOT essential for organic launch
- Can be added after website is live

**Pre-requisites:**
- Facebook Business account
- Facebook Business Manager access
- Advertising budget allocated

---

## Step 1: Create Meta Pixel

### 1.1 Access Business Manager

1. Go to [business.facebook.com](https://business.facebook.com)
2. Sign in with your Facebook account
3. Select your business account

### 1.2 Create Pixel

1. Go to **Events Manager**
2. Click **Connect Data**
3. Select **Web**
4. Choose **Meta Pixel**
5. Click **Connect**
6. Enter pixel name: `UKLID PLUS PRAHA Website`
7. Click **Continue**

### 1.3 Get Pixel ID

**Pixel ID format:** `1234567890123456`

Save this ID - you'll need it for implementation.

---

## Step 2: Install Pixel Code

### Option A: Google Tag Manager (Recommended)

**Why GTM:** Easier to manage, no code changes needed after initial setup.

**Step 2.1: Create Custom HTML Tag**

1. In GTM, create new tag
2. Tag type: **Custom HTML**
3. Add Pixel base code:

```html
<!-- Meta Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>
</noscript>
<!-- End Meta Pixel Code -->
```

4. Replace `YOUR_PIXEL_ID` with actual pixel ID
5. Trigger: **All Pages**
6. Save and publish

### Option B: Direct Implementation

**Add to `index.html`** (inside `<head>`):

```html
<!-- Meta Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>
</noscript>
<!-- End Meta Pixel Code -->
```

**Important:** Replace `YOUR_PIXEL_ID` with your actual pixel ID.

---

## Step 3: Track Standard Events

### 3.1 Standard Events to Implement

| Event | Purpose | When to Fire |
|-------|---------|--------------|
| `PageView` | Basic tracking | Every page load (automatic) |
| `ViewContent` | Content views | Service section views |
| `Contact` | Form submissions | Contact form submit |
| `Lead` | Lead generation | WhatsApp click |

### 3.2 Create Event Tracking File

**Create `src/config/metaPixel.ts`:**

```typescript
/**
 * Meta Pixel Configuration
 */

// Replace with your Pixel ID
export const META_PIXEL_ID = 'YOUR_PIXEL_ID';

/**
 * Track Meta Pixel event
 */
export function trackMetaEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window !== 'undefined' && 'fbq' in window) {
    (window as Window & { fbq: (...args: unknown[]) => void }).fbq(
      'track',
      eventName,
      params
    );
  }
}

/**
 * Track WhatsApp click (Lead event)
 */
export function trackWhatsAppClick(location: string) {
  trackMetaEvent('Lead', {
    content_name: 'WhatsApp Inquiry',
    content_category: 'Cleaning Services',
    source: location,
  });
}

/**
 * Track contact form submission (Contact event)
 */
export function trackContactForm() {
  trackMetaEvent('Contact', {
    content_name: 'Contact Form Submission',
    content_category: 'Cleaning Services',
  });
}

/**
 * Track service view (ViewContent event)
 */
export function trackServiceView(serviceName: string) {
  trackMetaEvent('ViewContent', {
    content_name: serviceName,
    content_category: 'Service',
  });
}
```

### 3.3 Add Type Declarations

**Add to `src/types/global.d.ts`:**

```typescript
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export {};
```

---

## Step 4: Track Conversions

### 4.1 WhatsApp Click Tracking

**Update `src/components/layout/FloatingWhatsApp.tsx`:**

```typescript
import { trackWhatsAppClick } from '../../config/metaPixel';

// In the anchor component:
<a
  href={whatsappUrl}
  onClick={() => trackWhatsAppClick('floating_button')}
  target="_blank"
  rel="noopener noreferrer"
  // ... other props
>
```

### 4.2 Contact Form Tracking

**Update `src/components/sections/ContactSection.tsx`:**

```typescript
import { trackContactForm } from '../../config/metaPixel';

// In form submit:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // ... form logic
  trackContactForm();
};
```

### 4.3 Service View Tracking

**Add to `src/components/sections/ServicesSection.tsx`:**

```typescript
import { trackServiceView } from '../../config/metaPixel';

// When service card is clicked or viewed:
const handleServiceClick = (serviceName: string) => {
  trackServiceView(serviceName);
  // ... navigation logic
};
```

---

## Step 5: Set Up Custom Conversions

### 5.1 Create Custom Conversion for WhatsApp

1. In **Events Manager**, go to **Custom Conversions**
2. Click **Create Custom Conversion**
3. Name: `WhatsApp Click`
4. Definition:
   - Event: `Lead`
   - Parameter: `source`
   - Contains: (any value, or specific location)
5. Click **Create**

### 5.2 Create Custom Conversion for Form

1. Create another custom conversion
2. Name: `Contact Form Submit`
3. Definition:
   - Event: `Contact`
4. Click **Create**

---

## Step 6: Verify Pixel Installation

### 6.1 Use Meta Pixel Helper

1. Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkhdjledj) Chrome extension
2. Visit your website
3. Click the extension icon
4. Verify:
   - Pixel is detected
   - PageView event firing
   - No errors

### 6.2 Test Events

1. In Events Manager, go to **Test Events**
2. Open your website
3. Perform actions:
   - Navigate pages (PageView)
   - Click WhatsApp button (Lead)
   - Submit contact form (Contact)
4. Verify events appear in Test Events

---

## Step 7: Configure Event Match Quality

### 7.1 Improve Match Quality

Higher match quality = better ad performance.

**Track additional parameters:**

```typescript
// Enhanced Lead tracking
export function trackWhatsAppClickEnhanced(location: string) {
  trackMetaEvent('Lead', {
    content_name: 'WhatsApp Inquiry',
    content_category: 'Cleaning Services',
    source: location,
    // Add these for better matching:
    currency: 'CZK',
    value: 0, // Unknown value at inquiry stage
  });
}
```

### 7.2 Customer Information Parameters

For form submissions, include (if available):

```typescript
trackMetaEvent('Contact', {
  em: 'hashed_email', // SHA256 hashed
  ph: 'hashed_phone', // SHA256 hashed
  // Don't send unhashed PII
});
```

---

## Step 8: Set Up Audiences

### 8.1 Website Custom Audience

1. In Business Manager, go to **Audiences**
2. Click **Create Audience** > **Custom Audience**
3. Select **Website**
4. Choose:
   - Pixel: Your pixel
   - Event: `Lead` (WhatsApp clicks)
   - Time: Last 30 days
5. Name: `WhatsApp Clickers - 30 Days`
6. Click **Create Audience**

### 8.2 Retargeting Audience

1. Create another custom audience
2. Select:
   - Pixel: Your pixel
   - Event: `ViewContent` (Service views)
   - Time: Last 7 days
3. Name: `Service Page Viewers - 7 Days`
4. Create

### 8.3 Exclude Converted Users

1. Create ad set
2. In targeting, exclude:
   - `WhatsApp Clickers - 30 Days`
3. This prevents showing ads to people who already contacted you

---

## Step 9: Use Pixel for Ads

### 9.1 Conversion Campaign

When running ads:
1. Campaign objective: **Leads**
2. Conversion location: **Website**
3. Pixel: Select your pixel
4. Conversion event: **Lead** (WhatsApp click)

### 9.2 Ad Optimization

Meta will optimize for:
- People most likely to click WhatsApp
- Users similar to past converters
- Best performing placements

---

## Privacy & Compliance

### 10.1 Cookie Consent

**Meta Pixel requires consent in EU:**

Ensure cookie consent is implemented before pixel loads:

```typescript
// Example consent check
if (typeof window !== 'undefined' && hasConsent('marketing')) {
  // Load Meta Pixel
  fbq('init', META_PIXEL_ID);
  fbq('track', 'PageView');
}
```

### 10.2 Privacy Policy Update

Add to privacy policy:

```
We use Meta Pixel to measure the effectiveness of our advertising on Facebook 
and Instagram. This tool collects information about your interactions with our 
website. You can opt out by disabling marketing cookies in your browser settings.
```

### 10.3 Data Processing Options

In Business Manager:
1. Go to **Data Processing Settings**
2. Enable **Limited Data Use** for EU/EEA users
3. Set country to Czech Republic

---

## Implementation Summary

### Files to Create/Modify

| File | Action |
|------|--------|
| `src/config/metaPixel.ts` | Create |
| `src/types/global.d.ts` | Create or update |
| `index.html` | Add pixel code (Option B) |
| `src/components/layout/FloatingWhatsApp.tsx` | Add tracking |
| `src/components/sections/ContactSection.tsx` | Add tracking |

### Events to Track

| Event | Trigger | Purpose |
|-------|---------|---------|
| PageView | Page load | Basic tracking |
| Lead | WhatsApp click | Primary conversion |
| Contact | Form submit | Secondary conversion |
| ViewContent | Service view | Retargeting |

---

## Troubleshooting

### Pixel Not Firing

**Check:**
1. Pixel ID is correct
2. Ad blocker is disabled
3. Cookie consent is given
4. Script loads without errors

### Events Not Appearing

**Check:**
1. Test Events tab in Events Manager
2. Pixel Helper shows events
3. Event name matches exactly (case-sensitive)

### Low Match Quality

**Improve:**
1. Hash customer data (email, phone)
2. Include more parameters
3. Use Conversions API (advanced)

---

## Support Resources

- [Meta Pixel Documentation](https://developers.facebook.com/docs/meta-pixel)
- [Events Manager Guide](https://www.facebook.com/business/help/168775715813533)
- [Pixel Helper Extension](https://chrome.google.com/webstore/detail/meta-pixel-helper)
- [Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api)

---

## Timeline

| Stage | Task | Time |
|-------|------|------|
| Setup | Create pixel, install code | 30 min |
| Testing | Verify events firing | 30 min |
| Audiences | Create custom audiences | 15 min |
| Ads | Configure ad campaign | 30 min |

**Total: ~2 hours** (when ready for advertising)

---

## Cost-Benefit

**Implement when:**
- ✅ Planning Facebook/Instagram ads
- ✅ Want retargeting capabilities
- ✅ Need conversion optimization

**Skip if:**
- ❌ No advertising budget
- ❌ Only organic traffic planned
- ❌ Privacy compliance not ready