# Mobile Menu Root Cause Fix Report

**Date:** 2026-06-05
**Status:** ✅ Complete
**Build:** Passing
**Tests:** 130/130 E2E tests passing

---

## Root Cause Analysis

The mobile menu appeared not to work (wouldn't stay open after clicking hamburger button) due to a **React useCallback dependency issue**.

### The Bug Chain

1. **App.tsx**: `toggleMobileMenu` and `closeMobileMenu` functions were recreated on every render
2. **MobileMenu.tsx**: `useEffect` had `onClose` in its dependency array: `useEffect(() => { onClose(); }, [location.pathname, onClose])`
3. **Problem**: When user clicks hamburger → App re-renders → `onClose` changes identity → `useEffect` runs → menu closes immediately

### Why It Happened

```tsx
// BEFORE (App.tsx) - functions recreated every render
const toggleMobileMenu = () => { ... };
const closeMobileMenu = () => { ... };

// BEFORE (MobileMenu.tsx) - unstable dependency
useEffect(() => {
  onClose();
}, [location.pathname, onClose]); // onClose changes every parent render!
```

When the hamburger button was clicked:
1. `setIsMobileMenuOpen(true)` triggered App re-render
2. App re-render created NEW `closeMobileMenu` function (different identity)
3. MobileMenu's `useEffect` saw `onClose` dependency change
4. `useEffect` ran, calling `onClose()`, closing the menu immediately

---

## Files Changed

| File | Change |
|------|--------|
| `src/App.tsx` | Wrapped `toggleMobileMenu` and `closeMobileMenu` in `useCallback` with empty deps |
| `src/components/layout/MobileMenu.tsx` | Fixed useEffect to use `useRef` for pathname tracking, increased z-index to z-[9998]/z-[9999], added `useNavigate` for proper routing |

---

## Technical Changes

### App.tsx - useCallback for Stable References

```tsx
// AFTER (App.tsx) - stable function references
import { useState, useEffect, useCallback } from 'react';

const closeMobileMenu = useCallback(() => {
  setIsMobileMenuOpen(false);
  document.body.style.overflow = '';
}, []);

const toggleMobileMenu = useCallback(() => {
  setIsMobileMenuOpen((prev) => {
    const next = !prev;
    document.body.style.overflow = next ? 'hidden' : '';
    return next;
  });
}, []);
```

### MobileMenu.tsx - Multiple Fixes

**1. Route Change Detection (Fixed useEffect)**

```tsx
// AFTER - only close on actual route change
const prevPathnameRef = useRef(location.pathname);

useEffect(() => {
  // Only close if pathname actually changed (user navigated)
  if (prevPathnameRef.current !== location.pathname) {
    prevPathnameRef.current = location.pathname;
    onClose();
  }
}, [location.pathname, onClose]);
```

**2. Proper Navigation with useNavigate**

```tsx
// AFTER - use react-router's navigate for SPA routing
import { useLocation, useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  onClose();

  if (href.startsWith('/#')) {
    // Hash link - scroll to section (navigate to home first if needed)
    const sectionId = href.substring(2);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  } else if (href.startsWith('/')) {
    // Real route - use react-router navigate
    navigate(href);
  }
};
```

**3. Z-Index Increased**

```tsx
// AFTER - very high z-index for overlay
className="fixed inset-0 bg-dark-primary/80 backdrop-blur-sm z-[9998]"  // Backdrop
className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-dark-secondary z-[9999]"  // Panel
```

---

## Tests Added

12 new E2E tests added in `tests/e2e/navigation.spec.ts`:

### Mobile Menu Navigation Tests (390x844)
1. **hamburger button should be visible on mobile** - Verifies hamburger visibility and aria-controls
2. **click hamburger shows mobile menu with all navigation links** - Verifies all expected links exist
3. **click Work with us navigates to /work-with-us and closes menu** - Real route navigation test
4. **click Services hash link scrolls to section and closes menu** - Hash link navigation test
5. **click About hash link scrolls to section and closes menu** - Hash link navigation test

### Mobile Menu Navigation Tests (430x932)
6. **hamburger button should be visible on tablet-sized mobile** - Tablet viewport visibility
7. **mobile menu opens and closes correctly** - Open/close cycle test
8. **navigate to privacy page from mobile menu** - Route navigation test

### Footer Duplication Verification
9. **home page has exactly one footer** - Footer count verification
10. **privacy page has exactly one footer** - Footer count verification
11. **terms page has exactly one footer** - Footer count verification
12. **work-with-us page has exactly one footer** - Footer count verification

---

## Validation Results

```
✅ Build:       SUCCESS
✅ TypeScript:  PASSED
✅ E2E Tests:   130/130 PASSED
```

---

## Verification Checklist

| Item | Status |
|------|--------|
| Hamburger button visible on mobile (390x844) | ✅ |
| Hamburger button visible on tablet (430x932) | ✅ |
| Mobile menu opens when hamburger clicked | ✅ |
| Mobile menu contains all nav links | ✅ |
| Work with us navigation works (real route) | ✅ |
| Services hash link scrolls to section | ✅ |
| About hash link scrolls to section | ✅ |
| Mobile menu closes after navigation | ✅ |
| Mobile menu closes on backdrop click | ✅ |
| Mobile menu closes on X button click | ✅ |
| Exactly one footer on home | ✅ |
| Exactly one footer on privacy | ✅ |
| Exactly one footer on terms | ✅ |
| Exactly one footer on work-with-us | ✅ |
| useCallback prevents recreation on render | ✅ |
| useEffect only closes on actual route change | ✅ |

---

## Lessons Learned

1. **React useCallback is essential for props passed to useEffect dependencies**
   - Without useCallback, functions are recreated on every render
   - This triggers useEffect hooks that depend on those functions
   - Result: unexpected side effects (menu closing immediately)

2. **useRef for tracking previous values**
   - When comparing values in useEffect, use useRef to track previous state
   - Only trigger side effects when the value actually changes semantically
   - Not when the function reference changes due to parent re-render

3. **Mobile menu z-index must be extremely high**
   - z-[9998]/z-[9999] ensures overlay is above everything
   - Lower values can conflict with fixed headers, modals, etc.

4. **React Router navigation in mobile menus**
   - Use `useNavigate()` for SPA routing
   - Don't rely on `<a href>` alone for real routes
   - Hash links need special handling for cross-page navigation

---

*Report generated: 2026-06-05*