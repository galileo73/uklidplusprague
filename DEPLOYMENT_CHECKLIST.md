# Deployment Checklist

**Project:** UKLID PLUS PRAHA
**Platform:** Netlify
**Build System:** Vite
**Last Updated:** 2026-06-02

---

## Pre-Deployment Checklist

### 🔴 Critical - Must Complete

#### Contact Information
- [ ] Replace phone number in `src/config/business.ts`
- [ ] Replace WhatsApp number in `src/config/business.ts`
- [ ] Verify email address in `src/config/business.ts`
- [ ] Update social media URLs

#### Domain Configuration
- [ ] Purchase/register domain
- [ ] Update `siteUrl` in `src/config/seo.ts`
- [ ] Update sitemap URLs

#### Branding Assets
- [ ] Add logo to `public/images/logo.svg`
- [ ] Create OG image `public/images/og-image.jpg` (1200x630)
- [ ] Replace favicon `public/favicon.ico`

#### Verification
- [ ] Run `npm run build` locally
- [ ] Run `npm run preview` to test production build
- [ ] Test all WhatsApp links
- [ ] Test all navigation links
- [ ] Test on mobile device
- [ ] Verify responsive breakpoints

---

## Netlify Setup

### Initial Setup

1. **Connect Repository**
   - [ ] Log in to Netlify
   - [ ] Click "Add new site" > "Import an existing project"
   - [ ] Connect Git provider (GitHub/GitLab/Bitbucket)
   - [ ] Select repository

2. **Configure Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   Node version: 18 (or higher)
   ```

3. **Environment Variables** (if needed)
   - [ ] No environment variables required for static deployment

### Domain Configuration

1. **Custom Domain**
   - [ ] Go to Site settings > Domain management
   - [ ] Add custom domain
   - [ ] Configure DNS records:
     ```
     Type: A
     Name: @
     Value: [Netlify's load balancer IP]
     
     Type: CNAME
     Name: www
     Value: [your-site].netlify.app
     ```

2. **HTTPS**
   - [ ] Enable HTTPS (automatic with Netlify)
   - [ ] Force HTTPS redirects

3. **DNS Verification**
   - [ ] Wait for DNS propagation (up to 48 hours)
   - [ ] Verify domain is serving correctly

### Netlify Configuration File

The `netlify.toml` is already configured:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Build Commands

### Development
```bash
npm run dev        # Start development server
npm run build      # Production build
npm run preview    # Preview production build
```

### Build Verification
```bash
# 1. Run TypeScript check
npx tsc --noEmit

# 2. Build for production
npm run build

# 3. Preview locally
npm run preview
```

### Expected Build Output
```
dist/
├── index.html          # Entry point
├── favicon.ico         # Favicon
├── robots.txt          # SEO robots
├── sitemap.xml         # SEO sitemap
├── assets/
│   ├── index-*.css     # Styles
│   └── index-*.js      # JavaScript bundles
└── images/              # Static images (if any)
```

---

## Post-Deployment Checklist

### 🔴 Critical

- [ ] Verify site loads at custom domain
- [ ] Test HTTPS is working
- [ ] Verify all pages load correctly
- [ ] Test WhatsApp links on mobile
- [ ] Test contact form submission
- [ ] Verify favicon displays
- [ ] Check OG image on social sharing

### 🟡 High Priority

- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt is accessible
- [ ] Test responsive design on real devices
- [ ] Check page load speed
- [ ] Verify all images load

### 🟢 Medium Priority

- [ ] Set up Netlify analytics
- [ ] Configure form notifications
- [ ] Add Google Analytics (optional)
- [ ] Add Facebook Pixel (optional)
- [ ] Set up error tracking (Sentry, etc.)

---

## DNS Configuration

### Recommended DNS Setup

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 75.2.60.5 | 3600 |
| CNAME | www | [site].netlify.app | 3600 |
| MX | @ | [email provider] | 3600 |
| TXT | @ | v=spf1 include:... | 3600 |

### DNS Propagation
- Check propagation at: https://dnschecker.org/
- Wait time: 5 minutes to 48 hours

---

## Performance Optimization

### Netlify-Side Optimizations

- [ ] Enable Netlify's asset optimization
  - [ ] Go to Site settings > Build & deploy > Post processing
  - [ ] Enable "Bundle CSS"
  - [ ] Enable "Minify HTML"
  - [ ] Enable "Minify JS"

### Pre-Deploy Optimizations

Already implemented:
- ✅ Code splitting (React vendor, Motion)
- ✅ Tailwind CSS purging
- ✅ Font preconnect
- ✅ Optimized bundle size

---

## Monitoring Setup

### Netlify Analytics
- [ ] Enable Netlify Analytics
- [ ] Configure bandwidth alerts
- [ ] Set up deploy notifications

### External Monitoring (Optional)
- [ ] Google Analytics
- [ ] Google Tag Manager
- [ ] Hotjar (heatmaps)
- [ ] Sentry (error tracking)

### Uptime Monitoring
- [ ] Set up uptime monitoring (Pingdom, UptimeRobot)
- [ ] Configure alert channels

---

## Rollback Procedure

### If Deployment Fails

1. **Check Build Log**
   - Go to Deploys > [failed deploy]
   - Review build log for errors

2. **Manual Rollback**
   - Go to Deploys
   - Find last successful deploy
   - Click "Publish deploy"

3. **Common Issues**
   - TypeScript errors → Run `npx tsc --noEmit` locally
   - Missing dependencies → Run `npm install`
   - Build timeout → Check bundle size

---

## CI/CD Pipeline (Future)

### Automatic Deployments

Current: Netlify auto-deploys from main branch

### Recommended Branch Strategy
```
main        → Production (auto-deploy)
staging     → Staging environment
develop     → Development preview
```

### Pull Request Previews
- [ ] Enable Netlify PR previews
- [ ] Configure branch deploys

---

## Security Checklist

- [ ] HTTPS enabled (automatic with Netlify)
- [ ] No sensitive data in repository
- [ ] Environment variables not hardcoded
- [ ] Form spam protection (Netlify honeypot)
- [ ] No API keys in client code
- [ ] Dependencies up to date

---

## Launch Day Checklist

### Pre-Launch (1 hour before)
- [ ] Final build verification
- [ ] Check all content is correct
- [ ] Verify contact information
- [ ] Test WhatsApp links
- [ ] Test on mobile device

### Launch
- [ ] Deploy to production
- [ ] Verify site is live
- [ ] Submit sitemap to Google
- [ ] Announce launch

### Post-Launch (first 24 hours)
- [ ] Monitor for errors
- [ ] Check Google Search Console
- [ ] Test all forms
- [ ] Verify social sharing
- [ ] Monitor performance

---

## Support Contacts

### Netlify Support
- Documentation: https://docs.netlify.com
- Community: https://answers.netlify.com
- Status: https://www.netlifystatus.com

### Domain Registrar
- Update contact information for domain registrar
- Keep DNS records documented

---

## Quick Reference Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npx tsc --noEmit

# Check bundle size
npm run build && ls -la dist/assets/
```

---

## Deployment Timeline

| Phase | Duration | Tasks |
|-------|----------|-------|
| Pre-deployment | 1-2 hours | Content replacement, verification |
| Netlify setup | 15-30 min | Connect repo, configure build |
| DNS setup | 5 min + propagation | Configure domain |
| Testing | 30 min | Verify all features |
| Go live | Immediate | Deploy button |
| Post-launch | 1-2 hours | SEO submission, monitoring |

**Total estimated time: 3-5 hours** (content ready)