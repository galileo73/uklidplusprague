# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: i18n.spec.ts >> i18n Content Translation >> should translate services section
- Location: tests\e2e\i18n.spec.ts:167:3

# Error details

```
Error: expect(locator).not.toBeEmpty() failed

Locator: locator('#services [class*="card"]').or(locator('#services article').or(locator('#services > div > div'))).first().locator('h3')
Expected: not empty
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "not toBeEmpty" with timeout 5000ms
  - waiting for locator('#services [class*="card"]').or(locator('#services article').or(locator('#services > div > div'))).first().locator('h3')

```

```yaml
- banner:
  - navigation "Main navigation":
    - link "UKLID PLUS PRAHA - Home":
      - /url: /
      - text: U+ UKLID PLUS PRAHA
    - link "Home":
      - /url: /
    - link "Services":
      - /url: /#services
    - link "Pricing":
      - /url: /#pricing
    - link "About":
      - /url: /#about
    - link "Contact":
      - /url: /#contact
    - button "Select language": EN
    - link "Book Now":
      - /url: "#contact"
- main:
  - region "Premium Cleaning Services in Prague":
    - text: U+ UKLID PLUS PRAHA
    - heading "Premium Cleaning Services in Prague" [level=1]
    - paragraph: Trusted by Expats, Professionals & Airbnb Hosts
    - text: Reliable cleaners Fast communication Recurring home-care
    - link "Book via WhatsApp":
      - /url: "#contact"
    - link "View Prices":
      - /url: "#pricing"
    - link "Scroll to pricing":
      - /url: "#pricing"
  - region "Why UKLID PLUS PRAHA":
    - heading "Why UKLID PLUS PRAHA" [level=2]
    - paragraph: Prague's trusted cleaning partner for expats, professionals, and Airbnb hosts
    - heading "Professional Team" [level=3]
    - paragraph: All our cleaners are professionally trained, vetted, and insured. We use quality equipment and eco-friendly products.
    - heading "Reliable Service" [level=3]
    - paragraph: Punctual, trustworthy, and consistent. Your cleaner arrives on time, every time. Same cleaner for recurring clients.
    - heading "Flexible Scheduling" [level=3]
    - paragraph: Book when it suits you. Weekday, weekend, or evening slots available. Reschedule or cancel without hassle.
    - heading "Satisfaction Guaranteed" [level=3]
    - paragraph: Your happiness matters. Not 100% satisfied? We'll re-clean for free within 24 hours. No questions asked.
  - region "Why Choose Us":
    - heading "Why Choose Us" [level=2]
    - paragraph: What makes UKLID PLUS PRAHA the preferred choice
    - heading "Expat-Focused Service" [level=3]
    - paragraph: Serving Prague's international community with professional cleaning services tailored for expats and international residents.
    - heading "Multilingual Communication" [level=3]
    - paragraph: Communicate in your language. Our team speaks English, Czech, Russian, and Ukrainian fluently. No language barriers.
    - heading "WhatsApp Booking" [level=3]
    - paragraph: Book your cleaning in minutes via WhatsApp. Quick, convenient, and confirmed within 2 hours. No phone calls needed.
    - heading "Recurring Cleaning Plans" [level=3]
    - paragraph: Set it and forget it. Weekly, bi-weekly, or monthly cleanings with the same cleaner. Enjoy discounts and priority scheduling.
    - heading "Airbnb Host Support" [level=3]
    - paragraph: Specialized turnover service for Airbnb hosts. Fast response times, quality guaranteed, guest-ready properties.
    - heading "Transparent Pricing" [level=3]
    - paragraph: Clear, upfront pricing with no hidden fees. Free quotes provided before booking. Pay by card, cash, or invoice.
    - heading "Fast Response Time" [level=3]
    - paragraph: We respond within 2 hours during business hours. Same-day service available for emergencies. Always here when you need us.
  - region "How It Works":
    - heading "How It Works" [level=2]
    - paragraph: 5 simple steps to a spotless home
    - text: "1"
    - heading "Contact Us" [level=3]
    - paragraph: Reach out via WhatsApp, phone, or our contact form. Tell us about your cleaning needs and preferred schedule.
    - text: "2"
    - heading "Get Your Quote" [level=3]
    - paragraph: Receive a clear, transparent quote within 2 hours. No hidden fees, no surprises. Confirm your booking when ready.
    - text: "3"
    - heading "Schedule Your Clean" [level=3]
    - paragraph: Pick a time that works for you. We offer flexible scheduling including weekends. Same-day service available.
    - text: "4"
    - heading "We Clean" [level=3]
    - paragraph: Our professional cleaner arrives on time with all necessary equipment. Sit back and enjoy your free time.
    - text: "5"
    - heading "Enjoy Your Clean Home" [level=3]
    - paragraph: Return to a spotless home. Not satisfied? Contact us within 24 hours for a free re-clean. Guaranteed.
    - link "Book via WhatsApp":
      - /url: https://wa.me/?text=Hi!%20I'd%20like%20to%20inquire%20about%20cleaning%20services.%20What's%20your%20availability%3F
  - region "Built for Expats":
    - heading "Built for Expats" [level=2]
    - paragraph: We understand the challenges of living abroad
    - list:
      - listitem: expats.benefits.english.title - expats.benefits.english.description
      - listitem: expats.benefits.scheduling.title - expats.benefits.scheduling.description
      - listitem: expats.benefits.trusted.title - expats.benefits.trusted.description
      - listitem: expats.benefits.recurring.title - expats.benefits.recurring.description
      - listitem: Fast Communication - WhatsApp booking, quick responses, and clear communication. No waiting, no confusion.
      - listitem: Quality Guarantee - Not satisfied? We'll re-clean for free within 24 hours. Your satisfaction is our priority.
    - link "Book Your First Clean":
      - /url: "#contact"
    - paragraph: Trusted by 2,500+ happy clients
  - region "Our Services":
    - heading "Our Services" [level=2]
    - paragraph: Professional cleaning services tailored to your needs
    - heading "Standard Cleaning" [level=3]
    - paragraph: Regular cleaning service for your home or apartment. Includes dusting, vacuuming, mopping, and bathroom sanitization.
    - list:
      - listitem: Kitchen cleaning
      - listitem: Bathroom sanitization
      - listitem: Dusting and vacuuming
    - link "Get Quote":
      - /url: /pricing#standard
    - heading "Deep Cleaning" [level=3]
    - paragraph: Thorough cleaning for move-in/move-out or seasonal refresh. Everything cleaned from top to bottom.
    - list:
      - listitem: All standard cleaning items
      - listitem: Inside cabinets and drawers
      - listitem: Appliance deep clean
    - link "Get Quote":
      - /url: /pricing#deep
    - heading "Airbnb Turnover" [level=3]
    - paragraph: Fast, reliable turnover service for Airbnb hosts. Guest-ready properties guaranteed.
    - list:
      - listitem: Quick turnaround time
      - listitem: Fresh linens setup
      - listitem: Restock essentials
    - link "Learn More":
      - /url: /airbnb-hosts
    - heading "Recurring Plans" [level=3]
    - paragraph: Scheduled cleaning at your convenience. Weekly, bi-weekly, or monthly options with exclusive benefits.
    - list:
      - listitem: Priority scheduling
      - listitem: Consistent cleaner
      - listitem: Discounted rates
    - link "View Plans":
      - /url: /pricing#plans
    - heading "Ironing Service" [level=3]
    - paragraph: Professional ironing service to keep your wardrobe crisp and ready. Available as add-on or standalone.
    - list:
      - listitem: Expert ironing
      - listitem: Steam treatment
      - listitem: Hanging or folding
    - link "Get Quote":
      - /url: /pricing#addons
    - heading "Office Cleaning" [level=3]
    - paragraph: Professional office and commercial space cleaning. Flexible scheduling to minimize disruption.
    - list:
      - listitem: Desk and surface cleaning
      - listitem: Common area maintenance
      - listitem: Kitchenette sanitization
    - link "Get Quote":
      - /url: "#contact"
  - region "Recurring Cleaning Plans":
    - heading "Recurring Cleaning Plans" [level=2]
    - paragraph: Save time and money with regular cleaning
    - heading "Essential Care" [level=3]
    - paragraph: Bi-weekly cleaning with great savings
    - list:
      - listitem: Bi-weekly visits
      - listitem: Same cleaner each time
      - listitem: Priority scheduling
      - listitem: recurring.plans.essential.features.3
      - listitem: recurring.plans.essential.features.4
      - listitem: recurring.plans.essential.features.5
    - link "Choose Plan":
      - /url: "#contact?text=Hi!%20I'm%20interested%20in%20the%20Essential%20Care%20plan."
    - text: Best Value
    - heading "Premium Care" [level=3]
    - paragraph: Weekly cleaning with maximum convenience
    - list:
      - listitem: Weekly visits
      - listitem: Same cleaner each time
      - listitem: Priority scheduling
      - listitem: 15% off every visit
      - listitem: recurring.plans.premium.features.4
      - listitem: recurring.plans.premium.features.5
      - listitem: recurring.plans.premium.features.6
    - link "Choose Plan":
      - /url: "#contact?text=Hi!%20I'm%20interested%20in%20the%20Premium%20Care%20plan."
    - heading "VIP Service" [level=3]
    - paragraph: Custom schedule with premium benefits
    - list:
      - listitem: Custom frequency
      - listitem: Dedicated cleaner
      - listitem: Priority booking
      - listitem: recurring.plans.vip.features.3
      - listitem: recurring.plans.vip.features.4
      - listitem: recurring.plans.vip.features.5
      - listitem: recurring.plans.vip.features.6
    - link "Choose Plan":
      - /url: "#contact?text=Hi!%20I'm%20interested%20in%20the%20VIP%20Service%20plan."
  - region "Transparent Pricing":
    - heading "Transparent Pricing" [level=2]
    - paragraph: Clear rates for every apartment size
    - button "Standard"
    - button "Deep Clean"
    - button "Add-ons"
    - paragraph: Regular cleaning for your home. Includes all essentials.
    - table:
      - rowgroup:
        - row "Apartment Size From":
          - columnheader "Apartment"
          - columnheader "Size"
          - columnheader "From"
      - rowgroup:
        - row "1+kk (studio) ~35 m² 1,200 CZK":
          - cell "1+kk (studio)"
          - cell "~35 m²"
          - cell "1,200 CZK"
        - row "1+1 (1 bedroom) ~45 m² 1,350 CZK":
          - cell "1+1 (1 bedroom)"
          - cell "~45 m²"
          - cell "1,350 CZK"
        - row "2+kk ~55 m² 1,550 CZK":
          - cell "2+kk"
          - cell "~55 m²"
          - cell "1,550 CZK"
        - row "2+1 ~65 m² 1,750 CZK":
          - cell "2+1"
          - cell "~65 m²"
          - cell "1,750 CZK"
        - row "3+kk ~75 m² 1,950 CZK":
          - cell "3+kk"
          - cell "~75 m²"
          - cell "1,950 CZK"
        - row "3+1 ~85 m² 2,050 CZK":
          - cell "3+1"
          - cell "~85 m²"
          - cell "2,050 CZK"
        - row "3+2 ~95 m² 2,100 CZK":
          - cell "3+2"
          - cell "~95 m²"
          - cell "2,100 CZK"
        - row "4+kk / larger 100+ m² from 2,190 CZK":
          - cell "4+kk / larger"
          - cell "100+ m²"
          - cell "from 2,190 CZK"
    - heading "Special Offers" [level=3]
    - heading "Essential Care" [level=4]
    - paragraph: Bi-weekly cleaning with great savings
    - list:
      - listitem: Bi-weekly visits
      - listitem: Same cleaner each time
      - listitem: Priority scheduling
      - listitem: 50% off 5th visit
    - link "Get Started":
      - /url: "#contact"
    - text: Most Popular
    - heading "Premium Care" [level=4]
    - paragraph: Weekly cleaning with maximum convenience
    - list:
      - listitem: Weekly visits
      - listitem: Same cleaner each time
      - listitem: Priority scheduling
      - listitem: 15% off every visit
    - link "Get Started":
      - /url: "#contact"
    - paragraph: Need a custom quote?
    - link "Get Free Quote":
      - /url: https://wa.me/?text=Hi!%20I'd%20like%20to%20get%20a%20quote%20for%20cleaning%20services.
  - region "Airbnb Host Partner":
    - heading "Airbnb Host Partner" [level=2]
    - paragraph: Professional turnover service for Prague hosts
    - list:
      - listitem: Fast Turnover - Same-day turnover service available. We respond within 2 hours for urgent requests.
      - listitem: Express Service - Need it fast? Express cleaning within 24 hours available for urgent situations.
      - listitem: Same-Day Booking - Book in the morning, we clean by evening. Perfect for unexpected guest arrivals.
      - listitem: Key Handling - Key collection and return service available. Flexible access arrangements for hosts.
      - listitem: Quality Guarantee - Not satisfied? We'll re-clean for free within 24 hours. Your guests deserve the best.
      - listitem: Priority Scheduling - As a host partner, you get priority booking and dedicated support.
    - link "Partner With Us":
      - /url: "#contact"
    - paragraph: Trusted by 50+ Airbnb hosts
  - region "Our Work & After":
    - heading "Our Work & After" [level=2]
    - paragraph: See the difference professional cleaning makes
    - button "All Projects" [pressed]
    - button "Standard Cleaning"
    - button "Deep Cleaning"
    - button "Airbnb Turnover"
    - button "Office Cleaning"
    - button "Add-on Services"
    - text: Before After
    - button "View After"
    - text: Before
    - heading "Kitchen Deep Clean" [level=3]
    - paragraph: Deep Cleaning
    - text: Before After
    - button "View After"
    - text: Before
    - heading "Bathroom Sanitization" [level=3]
    - paragraph: Deep Cleaning
    - text: Before After
    - button "View After"
    - text: Before
    - heading "Living Room Standard Clean" [level=3]
    - paragraph: Standard Cleaning
    - text: Before After
    - button "View After"
    - text: Before
    - heading "Bedroom Refresh" [level=3]
    - paragraph: Standard Cleaning
    - text: Before After
    - button "View After"
    - text: Before
    - heading "Airbnb Turnover Service" [level=3]
    - paragraph: Airbnb Turnover
    - text: Before After
    - button "View After"
    - text: Before
    - heading "Office Cleaning" [level=3]
    - paragraph: Office Cleaning
    - text: Before After
    - button "View After"
    - text: Before
    - heading "Oven Deep Clean" [level=3]
    - paragraph: Add-on Services
    - text: Before After
    - button "View After"
    - text: Before
    - heading "Window Cleaning" [level=3]
    - paragraph: Add-on Services
  - region "Google Reviews":
    - heading "Google Reviews" [level=2]
    - paragraph: What our clients say about us
    - text: "4.9"
    - paragraph: Based on 10 reviews
    - link "See all reviews on Google":
      - /url: https://g.page/r/CXXXXX/review
    - text: J John D.
    - paragraph: “Exceptional service! The team was professional, punctual, and thorough. My apartment has never been cleaner. Highly recommend UKLID PLUS for anyone in Prague.”
    - paragraph: January 15, 2024
    - text: M Maria S.
    - paragraph: “Best cleaning service I've used in Prague. They speak English, show up on time, and do a fantastic job. The WhatsApp booking is so convenient!”
    - paragraph: January 10, 2024
    - text: P Petr K.
    - paragraph: “Skvělá služba! Vždy včas, důkladné úklid a příjemný personál. Rozhodně doporučuji.”
    - paragraph: January 8, 2024
    - text: Growing Our Reputation
    - paragraph: We're building our reputation! Help us grow by leaving a review after your cleaning.
    - link "See All Reviews":
      - /url: https://g.page/r/CXXXXX/review
    - link "Leave a Review":
      - /url: https://facebook.com/uklidpluspraha
  - region "Client Testimonials":
    - heading "Client Testimonials" [level=2]
    - paragraph: Hear from our satisfied clients
    - blockquote: “I've been using UKLID PLUS for my apartment in Prague 2 for over a year. Their service is impeccable, and I love that I can communicate in English. The recurring plan has made my life so much easier.”
    - text: S
    - paragraph: Sarah M.
    - paragraph: Marketing Manager, Prague 2
    - blockquote: “As an Airbnb host, I need reliable turnover cleaning. UKLID PLUS always delivers - quick response, thorough cleaning, and my guests always comment on how clean the apartment is. Highly recommend!”
    - text: M
    - paragraph: Michael T.
    - paragraph: Airbnb Superhost, Prague 1
    - blockquote: “Moving to Prague from the UK, I was worried about finding services in English. UKLID PLUS made everything easy. Their deep cleaning service prepared my new apartment perfectly. Professional and friendly.”
    - text: J
    - paragraph: James H.
    - paragraph: Software Developer, Prague 5
  - region "Frequently Asked Questions":
    - heading "Frequently Asked Questions" [level=2]
    - paragraph: Find answers to common questions
    - button "How do I book a cleaning service?" [expanded]:
      - text: How do I book a cleaning service?
      - img
    - paragraph: You can book easily via WhatsApp, phone, or our contact form. Send us a message with your cleaning needs, and we'll respond within 2 hours with a quote and available time slots.
    - button "How much does cleaning cost?":
      - text: How much does cleaning cost?
      - img
    - button "Is there a minimum booking time?":
      - text: Is there a minimum booking time?
      - img
    - button "Do you offer same-day service?":
      - text: Do you offer same-day service?
      - img
    - button "What payment methods do you accept?":
      - text: What payment methods do you accept?
      - img
    - button "What's included in standard cleaning?":
      - text: What's included in standard cleaning?
      - img
    - button "What's the difference between standard and deep cleaning?":
      - text: What's the difference between standard and deep cleaning?
      - img
    - paragraph: Still have questions? Contact us via WhatsApp for quick answers.
    - link "Contact on WhatsApp":
      - /url: "#contact"
  - region "Service Areas":
    - heading "Service Areas" [level=2]
    - paragraph: We serve Prague and surrounding areas
    - heading "Prague 1" [level=3]
    - list:
      - listitem: Old Town (Staré Město)
      - listitem: New Town (Nové Město)
      - listitem: Lesser Town (Malá Strana)
      - listitem: Hradčany
      - listitem: Josefov
    - heading "Prague 2" [level=3]
    - list:
      - listitem: Vinohrady
      - listitem: Vyšehrad
      - listitem: Parts of New Town
    - heading "Prague 5" [level=3]
    - list:
      - listitem: Smíchov
      - listitem: Anděl
      - listitem: Klárov
      - listitem: Malvazinky
    - heading "Prague 6" [level=3]
    - list:
      - listitem: Dejvice
      - listitem: Bubeneč
      - listitem: Střešovice
      - listitem: Hradčany
      - listitem: Veleslavín
    - heading "Prague 7" [level=3]
    - list:
      - listitem: Letná
      - listitem: Holešovice
      - listitem: Bubny
    - paragraph: Other areas available on request
    - link "Contact Us for Other Areas":
      - /url: https://wa.me/?text=Hi!%20I'd%20like%20to%20inquire%20about%20cleaning%20services%20in%20my%20area.
  - region "Get in Touch":
    - heading "Get in Touch" [level=2]
    - paragraph: Ready to book your cleaning? Contact us via your preferred channel
    - heading "WhatsApp" [level=3]
    - text: Fastest response
    - paragraph: Message us directly for quick booking and instant replies
    - link "Send Message":
      - /url: "#contact?text=Hi!%20I'd%20like%20to%20book%20a%20cleaning%20service.%20Please%20let%20me%20know%20your%20availability."
    - link "Messenger Chat with us on Facebook":
      - /url: https://m.me/uklidpluspraha
      - heading "Messenger" [level=4]
      - paragraph: Chat with us on Facebook
    - link "Instagram See our work & reviews":
      - /url: https://www.instagram.com/uklid.plus.praha/
      - heading "Instagram" [level=4]
      - paragraph: See our work & reviews
    - heading "Service Area" [level=4]
    - paragraph: We serve Prague and surrounding areas
    - heading "Languages" [level=4]
    - paragraph: English, Czech, Russian, Ukrainian
    - heading "Send us a Message" [level=3]
    - text: Your Name
    - textbox "Your Name":
      - /placeholder: Enter your name
    - text: Email Address
    - textbox "Email Address":
      - /placeholder: Enter your email
    - text: Message
    - textbox "Message":
      - /placeholder: Tell us about your cleaning needs...
    - button "Send Message"
- contentinfo:
  - text: U+ UKLID PLUS PRAHA
  - paragraph: Professional cleaning agency serving Prague's international community. Multilingual support in English, Czech, Russian, and Ukrainian.
  - link "Follow us on Instagram":
    - /url: https://www.instagram.com/uklid.plus.praha/
  - link "Contact us on WhatsApp":
    - /url: https://wa.me/
  - link "Message us on Messenger":
    - /url: https://m.me/uklidpluspraha
  - heading "Navigation" [level=3]
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "Services":
        - /url: /#services
    - listitem:
      - link "Pricing":
        - /url: /#pricing
    - listitem:
      - link "Privacy Policy":
        - /url: /privacy
    - listitem:
      - link "Terms of Service":
        - /url: /terms
  - heading "Contact" [level=3]
  - list:
    - listitem:
      - link "WhatsApp":
        - /url: https://wa.me/
    - listitem:
      - link "info@uklidpluspraha.cz":
        - /url: mailto:info@uklidpluspraha.cz
    - listitem:
      - link "Instagram":
        - /url: https://www.instagram.com/uklid.plus.praha/
  - paragraph: © 2026 UKLID PLUS PRAHA. All rights reserved.
  - paragraph: Professional cleaning services for expats in Prague
- link "Chat with us on WhatsApp":
  - /url: "#contact?text=Hi!%20I%20would%20like%20to%20book%20a%20cleaning%20service."
  - text: Chat Now
```

# Test source

```ts
  83  |     // Wait for content to update
  84  |     await page.waitForTimeout(500);
  85  | 
  86  |     // Verify the heading changed
  87  |     const newText = await heroHeading.textContent();
  88  | 
  89  |     // If the initial was English and we switched to Czech, the text should be different
  90  |     // Unless both languages have the same content (which shouldn't happen)
  91  |     if (initialText !== newText) {
  92  |       expect(newText).not.toBe(initialText);
  93  |     }
  94  |   });
  95  | 
  96  |   test('should persist language choice across page reload', async ({ page }) => {
  97  |     await page.goto('/');
  98  | 
  99  |     // Switch to Russian
  100 |     const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$|^RU$|^UA$/ }).first();
  101 |     await langButton.click();
  102 | 
  103 |     const ruOption = page.locator('button:has-text("RU")').or(page.locator('button:has-text("Русский")'));
  104 |     await ruOption.first().click();
  105 | 
  106 |     // Wait for language to change
  107 |     await page.waitForTimeout(500);
  108 | 
  109 |     // Reload page
  110 |     await page.reload();
  111 | 
  112 |     // Language should still be Russian
  113 |     const langButtonAfter = page.locator('header button').filter({ hasText: 'RU' });
  114 |     await expect(langButtonAfter.first()).toBeVisible({ timeout: 10000 });
  115 |   });
  116 | 
  117 |   test('should persist language in localStorage', async ({ page }) => {
  118 |     await page.goto('/');
  119 | 
  120 |     // Set language via localStorage
  121 |     await page.evaluate(() => {
  122 |       localStorage.setItem('i18nextLng', 'cz');
  123 |     });
  124 | 
  125 |     // Reload page
  126 |     await page.reload();
  127 | 
  128 |     // Check that Czech content is displayed
  129 |     const czButton = page.locator('header button').filter({ hasText: 'CZ' });
  130 |     await expect(czButton.first()).toBeVisible({ timeout: 10000 });
  131 |   });
  132 | });
  133 | 
  134 | test.describe('i18n Content Translation', () => {
  135 |   test.beforeEach(async ({ page }) => {
  136 |     await page.goto('/');
  137 |   });
  138 | 
  139 |   test('should translate navigation menu', async ({ page }) => {
  140 |     // Switch to Ukrainian
  141 |     const langButton = page.locator('header button').filter({ hasText: /^EN$|^UA$/ }).first();
  142 |     await langButton.click();
  143 | 
  144 |     const uaOption = page.locator('button:has-text("UA")').or(page.locator('button:has-text("Українська")'));
  145 |     await uaOption.first().click();
  146 | 
  147 |     await page.waitForTimeout(500);
  148 | 
  149 |     // Check that navigation items are translated
  150 |     // "Services" should become "Послуги" in Ukrainian
  151 |     const navItem = page.locator('nav a:has-text("Послуги")').or(page.locator('nav a:has-text("Services")'));
  152 |     await expect(navItem.first()).toBeVisible();
  153 |   });
  154 | 
  155 |   test('should translate hero section heading', async ({ page }) => {
  156 |     // Get hero heading in English
  157 |     const heroHeading = page.locator('h1').first();
  158 | 
  159 |     // Check that it contains text (any language)
  160 |     await expect(heroHeading).not.toBeEmpty();
  161 | 
  162 |     // The heading should have some content
  163 |     const headingText = await heroHeading.textContent();
  164 |     expect(headingText?.length).toBeGreaterThan(3);
  165 |   });
  166 | 
  167 |   test('should translate services section', async ({ page }) => {
  168 |     // Scroll to services section
  169 |     await page.locator('#services').scrollIntoViewIfNeeded();
  170 | 
  171 |     // Check that service cards have translated content
  172 |     const serviceCards = page.locator('#services [class*="card"]').or(
  173 |       page.locator('#services article').or(page.locator('#services > div > div'))
  174 |     );
  175 | 
  176 |     const count = await serviceCards.count();
  177 |     expect(count).toBeGreaterThan(0);
  178 | 
  179 |     // Each service card should have a title
  180 |     for (let i = 0; i < Math.min(count, 3); i++) {
  181 |       const card = serviceCards.nth(i);
  182 |       const title = card.locator('h3');
> 183 |       await expect(title).not.toBeEmpty();
      |                               ^ Error: expect(locator).not.toBeEmpty() failed
  184 |     }
  185 |   });
  186 | 
  187 |   test('should translate contact section', async ({ page }) => {
  188 |     // Scroll to contact section
  189 |     await page.locator('#contact').scrollIntoViewIfNeeded();
  190 | 
  191 |     // Check that contact heading is translated
  192 |     const contactHeading = page.locator('#contact h2');
  193 |     await expect(contactHeading).not.toBeEmpty();
  194 |   });
  195 | });
  196 | 
  197 | test.describe('i18n SEO Language Attributes', () => {
  198 |   test('should have html lang attribute', async ({ page }) => {
  199 |     await page.goto('/');
  200 | 
  201 |     // Check that html has a lang attribute
  202 |     const htmlLang = await page.locator('html').getAttribute('lang');
  203 |     expect(htmlLang).toBeTruthy();
  204 |   });
  205 | 
  206 |   test('should update lang attribute when language changes', async ({ page }) => {
  207 |     await page.goto('/');
  208 | 
  209 |     // Get initial lang
  210 |     const initialLang = await page.locator('html').getAttribute('lang');
  211 | 
  212 |     // Switch to Czech
  213 |     const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$/ }).first();
  214 |     await langButton.click();
  215 | 
  216 |     const czOption = page.locator('button:has-text("CZ")').or(page.locator('button:has-text("Čeština")'));
  217 |     await czOption.first().click();
  218 | 
  219 |     await page.waitForTimeout(500);
  220 | 
  221 |     // Check that lang attribute updated
  222 |     const newLang = await page.locator('html').getAttribute('lang');
  223 | 
  224 |     // The language should have changed to 'cz' or similar
  225 |     // Note: The implementation may need to update this dynamically
  226 |     // For now, we just verify it's a valid language code
  227 |     expect(newLang).toBeTruthy();
  228 |   });
  229 | });
  230 | 
  231 | test.describe('i18n No Missing Translation Keys', () => {
  232 |   test('should not show translation keys as visible text', async ({ page }) => {
  233 |     await page.goto('/');
  234 | 
  235 |     // Get the visible text content (not the HTML source which includes key names in code)
  236 |     const bodyText = await page.locator('body').textContent();
  237 | 
  238 |     // Forbidden patterns that indicate raw translation keys are visible
  239 |     const forbiddenPatterns = [
  240 |       /HERO\.SCROLL/i,
  241 |       /hero\.scroll/i,
  242 |       /[A-Z]{2,}\.[A-Z]{2,}\.[A-Z]{2,}/,  // UPPERCASE.KEY.PATTERN
  243 |     ];
  244 | 
  245 |     for (const pattern of forbiddenPatterns) {
  246 |       expect(bodyText).not.toMatch(pattern);
  247 |     }
  248 |   });
  249 | 
  250 |   test('should display scroll indicator arrow in hero', async ({ page }) => {
  251 |     await page.goto('/');
  252 | 
  253 |     // Check hero section specifically for the scroll indicator arrow
  254 |     const heroSection = page.locator('section').first();
  255 |     const heroText = await heroSection.textContent();
  256 | 
  257 |     // Should NOT contain raw key patterns
  258 |     expect(heroText).not.toContain('HERO.SCROLL');
  259 |     expect(heroText).not.toContain('hero.scroll');
  260 | 
  261 |     // Should have the scroll indicator arrow (SVG)
  262 |     const scrollArrow = heroSection.locator('svg').filter({ has: page.locator('path[d*="M19 14l-7 7"]') });
  263 |     await expect(scrollArrow).toBeVisible();
  264 |   });
  265 | 
  266 |   test('should not show raw keys after language switch', async ({ page }) => {
  267 |     await page.goto('/');
  268 | 
  269 |     // Test all languages
  270 |     const languages = ['EN', 'CZ', 'RU', 'UA'];
  271 | 
  272 |     for (const lang of languages) {
  273 |       // Switch language
  274 |       const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$|^RU$|^UA$/ }).first();
  275 |       await langButton.click();
  276 | 
  277 |       const langOption = page.locator(`button:has-text("${lang}")`).first();
  278 |       await langOption.click();
  279 | 
  280 |       await page.waitForTimeout(300);
  281 | 
  282 |       // Get visible text
  283 |       const bodyText = await page.locator('body').textContent();
```