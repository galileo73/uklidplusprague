# Netlify Deployment Procedure

**Project:** UKLID PLUS PRAHA
**Platform:** Netlify
**Repository:** [Your Git Repository]
**Timeline:** Deploy within 30 minutes

---

## Pre-Deployment Checklist

### ✅ Content Ready
- [ ] Phone number replaced
- [ ] WhatsApp number replaced
- [ ] Logo uploaded
- [ ] Gallery images uploaded
- [ ] OG image created
- [ ] Social URLs updated

### ✅ Technical Ready
- [ ] `npm run build` passes locally
- [ ] No TypeScript errors
- [ ] All assets in `public/` folder
- [ ] Domain ready (or using Netlify subdomain)

---

## Step 1: Prepare Repository

### 1.1 Commit All Changes

```bash
# Stage all changes
git add .

# Commit with message
git commit -m "Prepare for deployment: content updates and assets"

# Push to remote
git push origin main
```

### 1.2 Verify Build Locally

```bash
# Clean install
rm -rf node_modules
npm install

# Build for production
npm run build

# Preview build
npm run preview
```

### 1.3 Check Build Output

```bash
# List dist folder
ls -la dist/

# Expected output:
# dist/
# ├── index.html
# ├── favicon.ico
# ├── robots.txt
# ├── sitemap.xml
# ├── assets/
# │   ├── index-*.css
# │   └── index-*.js
# └── images/
#     └── gallery/
```

---

## Step 2: Create Netlify Account

### 2.1 Sign Up

1. Go to [app.netlify.com](https://app.netlify.com)
2. Sign up options:
   - GitHub (recommended)
   - GitLab
   - Bitbucket
   - Email

### 2.2 Email Verification

1. Check email for verification
2. Click verification link
3. Complete profile setup

---

## Step 3: Connect Repository

### 3.1 Start New Site

1. Click **Add new site** > **Import an existing project**
2. Select your Git provider (GitHub/GitLab/Bitbucket)
3. Authorize Netlify to access repositories

### 3.2 Select Repository

1. Find `uklidplusprague` repository
2. Click to select

### 3.3 Configure Build Settings

| Setting | Value |
|---------|-------|
| Site name | `uklidpluspraha` (or custom) |
| Branch | `main` |
| Build command | `npm run build` |
| Publish directory | `dist` |

### 3.4 Environment Variables

Click **Advanced** > **New variable** (if needed):

| Key | Value | Notes |
|-----|-------|-------|
| `NODE_VERSION` | `18` | Optional, defaults to latest |

### 3.5 Deploy

1. Click **Deploy site**
2. Wait for build (usually 1-2 minutes)
3. Check deploy log for errors

---

## Step 4: Verify Deployment

### 4.1 Check Build Log

1. Go to **Deploys** tab
2. Click latest deploy
3. Verify build output:
   ```
   ✓ 454 modules transformed
   ✓ built in 363ms
   ```

### 4.2 Test Live Site

1. Click site URL (e.g., `https://uklidpluspraha.netlify.app`)
2. Verify:
   - Homepage loads
   - All sections visible
   - WhatsApp links work
   - Contact form appears
   - Mobile responsive
   - No console errors (F12)

### 4.3 Test Functionality

| Feature | Test |
|---------|------|
| Navigation | Click all nav links |
| WhatsApp buttons | Click all WhatsApp buttons |
| Contact form | Submit test form |
| Mobile menu | Open/close on mobile |
| Responsive | Check on different widths |

---

## Step 5: Configure Custom Domain

### 5.1 Add Custom Domain

1. Go to **Site settings** > **Domain management**
2. Click **Add custom domain**
3. Enter your domain: `uklidpluspraha.cz`
4. Click **Verify**

### 5.2 Configure DNS

**Option A: Using Netlify DNS (Recommended)**

1. Click **Set up Netlify DNS**
2. Copy Netlify nameservers:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```
3. Update nameservers at your domain registrar
4. Wait for propagation (up to 24 hours)

**Option B: Using External DNS**

1. At your registrar, add DNS records:

   **A Record (for apex domain):**
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   TTL: 3600
   ```

   **CNAME Record (for www):**
   ```
   Type: CNAME
   Name: www
   Value: [your-site].netlify.app
   TTL: 3600
   ```

### 5.3 Enable HTTPS

1. Netlify automatically provisions SSL
2. Wait for DNS propagation
3. SSL certificate issued automatically
4. Force HTTPS:
   - Go to **Domain management** > **HTTPS**
   - Enable **Force HTTPS**

---

## Step 6: Configure Site Settings

### 6.1 Site Information

1. Go to **Site settings** > **General**
2. Update:
   - Site name: `UKLID PLUS PRAHA`
   - Repository branch: `main`

### 6.2 Build Hooks (Optional)

Create deploy hook for CI/CD:

1. Go to **Site settings** > **Build & deploy** > **Build hooks**
2. Click **Add build hook**
3. Name: `Production Deploy`
4. Branch: `main`
5. Copy webhook URL

Use webhook to trigger deploys from external services.

### 6.3 Environment Variables

Add any environment variables:

1. Go to **Site settings** > **Environment variables**
2. Add variables as needed:

   | Key | Value | Environment |
   |-----|-------|-------------|
   | `NODE_VERSION` | `18` | Production |
   | `ANALYTICS_ID` | (future) | Production |

---

## Step 7: Configure Netlify Forms

### 7.1 Enable Form Handling

The contact form already has Netlify attributes:

```html
<form
  name="contact"
  method="POST"
  action="/success"
  data-netlify="true"
  netlify-honeypot="bot-field"
>
```

### 7.2 Add Success Page

Create `public/success.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You | UKLID PLUS PRAHA</title>
  <meta http-equiv="refresh" content="3;url=/">
</head>
<body>
  <h1>Thank You!</h1>
  <p>Your message has been sent. We'll get back to you within 2 hours.</p>
  <p>Redirecting to homepage...</p>
</body>
</html>
```

### 7.3 View Form Submissions

1. Go to **Forms** tab
2. View submissions
3. Set up notifications:
   - Email notifications
   - Slack notifications
   - Webhook notifications

---

## Step 8: Configure Notifications

### 8.1 Deploy Notifications

1. Go to **Site settings** > **Build & deploy** > **Deploy notifications**
2. Add notifications:
   - Email on deploy success
   - Email on deploy failure
   - Slack webhook (if applicable)

### 8.2 Form Notifications

1. Go to **Forms** > **Settings**
2. Add notification email:
   - Recipient: `info@uklidpluspraha.cz`
   - Subject: `New Contact Form Submission`

---

## Step 9: Performance Optimization

### 9.1 Enable Asset Optimization

1. Go to **Site settings** > **Build & deploy** > **Post processing**
2. Enable:
   - ✅ **Bundle CSS** (combine CSS files)
   - ✅ **Minify HTML**
   - ✅ **Minify JS**
3. Click **Save**

### 9.2 Enable Analytics (Optional)

1. Go to **Analytics** tab
2. Click **Enable analytics**
3. Choose plan:
   - Free tier available
   - Upgrade for advanced features

---

## Step 10: Set Up CI/CD

### 10.1 Automatic Deploys

Netlify automatically deploys on:
- Push to `main` branch
- Pull request previews
- Manual deploy triggers

### 10.2 Branch Deploys (Optional)

Create staging environment:

1. Go to **Site settings** > **Build & deploy** > **Branch deploys**
2. Add branch: `staging`
3. Access at: `staging--[site-name].netlify.app`

### 10.3 Deploy Previews

Automatically enabled for:
- Pull requests get preview URLs
- Preview URLs: `deploy-preview-123--[site-name].netlify.app`

---

## Troubleshooting

### Build Fails

**Common causes:**
1. TypeScript errors → Run `npx tsc --noEmit` locally
2. Missing dependencies → Run `npm install`
3. Node version mismatch → Set `NODE_VERSION` env var

**Debug steps:**
```bash
# Check local build
npm run build

# Check Node version
node --version  # Should be 18+

# Clear cache
rm -rf node_modules dist
npm install
npm run build
```

### 404 Errors on Routes

**Cause:** SPA routing not configured

**Solution:** Verify `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Forms Not Working

**Cause:** Missing Netlify attributes

**Solution:** Ensure form has:
```html
<form name="contact" data-netlify="true" netlify-honeypot="bot-field">
```

### SSL Certificate Pending

**Cause:** DNS not propagated

**Solution:**
1. Wait for DNS propagation (up to 24 hours)
2. Verify DNS settings
3. Contact Netlify support if stuck

---

## Deployment Checklist

### Pre-Deploy
- [ ] All content replaced
- [ ] Build passes locally
- [ ] Repository pushed
- [ ] Environment variables set

### Deploy
- [ ] Site created
- [ ] Build succeeds
- [ ] Site loads correctly
- [ ] All links work

### Post-Deploy
- [ ] Custom domain configured
- [ ] HTTPS enabled
- [ ] Forms working
- [ ] Notifications set up
- [ ] Performance optimized

---

## Cost Estimate

| Tier | Monthly Cost | Features |
|------|-------------|----------|
| Free | $0 | 100GB bandwidth, 300 build minutes, SSL |
| Pro | $19 | 400GB bandwidth, 1000 build minutes, analytics |
| Business | $99 | 1TB bandwidth, unlimited builds, advanced features |

**Recommendation:** Start with Free tier, upgrade as needed.

---

## Support Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify CLI](https://cli.netlify.com/)
- [Community Forum](https://answers.netlify.com/)
- [Status Page](https://www.netlifystatus.com/)

---

## Quick Commands

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Link site
netlify link

# Deploy manually
netlify deploy --prod

# Open site
netlify open:site
```

---

## Timeline

| Step | Time |
|------|------|
| Repository prep | 10 min |
| Netlify setup | 15 min |
| DNS configuration | 15 min |
| Testing | 15 min |
| Optimization | 15 min |

**Total: ~1 hour** (first time)