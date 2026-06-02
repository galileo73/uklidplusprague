# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Project type:** Commercial cleaning service website for Uklid Plus Prague

**Main goal:** Create a professional website for a cleaning company serving Prague and surrounding areas

**Business objective:** Generate leads through online presence, showcase services, enable booking inquiries, and establish trust with potential customers

## Architecture

**Frontend:** React 19 + Tailwind CSS + shadcn/ui + Framer Motion
**Backend:** FastAPI + MongoDB (for contact forms, booking requests)
**Build:** Create React App with Craco
**Deployment:** Netlify (frontend) + cloud backend

### Key Files (to be created)

- `frontend/src/config/company.js` - Company info, services, pricing, contact, SEO meta
- `frontend/src/config/theme.js` - Colors, fonts, spacing, shadows
- `frontend/src/config/env.js` - Environment validation and config
- `frontend/src/context/LanguageContext.js` - i18n translations (cs, en)
- `backend/server.py` - FastAPI backend with contact/booking API

### Environment Variables

**Frontend** (`frontend/.env`):
```
REACT_APP_BACKEND_URL=http://localhost:8000
REACT_APP_GOOGLE_MAPS_KEY=your_key_here (optional)
```

**Backend** (`backend/.env`):
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=uklidplusprague_dev
CORS_ORIGINS=http://localhost:3000
```

### Commands

```bash
# Frontend
cd frontend && npm start      # Development server (localhost:3000)
cd frontend && npm run build  # Production build

# Backend
cd backend && python -m uvicorn server:app --reload --port 8000
```

## Expected Client Features

- Landing page with hero, services overview, trust indicators
- Services section (regular cleaning, deep cleaning, move-in/out, office cleaning)
- Pricing calculator or price list
- Online booking/request form
- Contact page with map and service area
- WhatsApp/contact button
- Reviews/testimonials
- Gallery of before/after photos
- FAQ section
- Local SEO (JSON-LD schema, meta tags)
- Mobile-first responsive design
- Bilingual support (Czech, English)

## Development Rules

1. **Configuration over hardcoding**: All content in config files
2. **Use translations**: All UI text via LanguageContext
3. **Keep components modular**: Reusable sections in `components/sections/`
4. **Preserve build stability**: Test `npm run build` before commits
5. **Mobile-first**: Test responsive behavior
6. **SEO-ready**: Use SEO component for meta tags
7. **Trust signals**: Emphasize reliability, insurance, reviews
8. **Clear CTAs**: Booking/contact buttons prominent

## Customization Points

For similar cleaning service clients, edit:

1. `frontend/src/config/company.js` - Name, address, service areas, contact
2. `frontend/src/config/services.js` - Service offerings and pricing
3. `frontend/public/index.html` - Replace placeholders before build
4. `frontend/public/sitemap.xml` - Replace `%SITE_URL%` with domain
5. `backend/.env` - Database connection
6. Images in config - Replace URLs with client images

## Commercial Direction

This website serves as both a production site for Uklid Plus Prague and a potential template for other cleaning service businesses. Target: reusable architecture with client-specific content in config files.