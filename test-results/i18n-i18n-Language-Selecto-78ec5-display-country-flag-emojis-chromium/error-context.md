# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: i18n.spec.ts >> i18n Language Selector >> should NOT display country flag emojis
- Location: tests\e2e\i18n.spec.ts:52:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('[role="menu"]').or(locator('[data-testid="language-dropdown"]')) to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - navigation "Main navigation" [ref=e5]:
      - link "UKLID PLUS PRAHA - Home" [ref=e6] [cursor=pointer]:
        - /url: /
        - generic [ref=e7]:
          - generic [ref=e9]: U+
          - generic [ref=e10]: UKLID PLUS PRAHA
      - generic [ref=e11]:
        - link "Home" [ref=e12] [cursor=pointer]:
          - /url: /
        - link "Services" [ref=e13] [cursor=pointer]:
          - /url: /#services
        - link "Pricing" [ref=e14] [cursor=pointer]:
          - /url: /#pricing
        - link "About" [ref=e15] [cursor=pointer]:
          - /url: /#about
        - link "Contact" [ref=e16] [cursor=pointer]:
          - /url: /#contact
      - generic [ref=e17]:
        - generic [ref=e18]:
          - button "Select language" [expanded] [active] [ref=e19]:
            - generic [ref=e20]: EN
            - img [ref=e21]
          - listbox "Language options" [ref=e23]:
            - generic [ref=e24]:
              - option "English" [selected] [ref=e25]: EN
              - option "Čeština" [ref=e26]: CZ
              - option "Русский" [ref=e27]: RU
              - option "Українська" [ref=e28]: UA
        - link "Book Now" [ref=e30] [cursor=pointer]:
          - /url: "#contact"
          - img [ref=e31]
          - text: Book Now
  - main [ref=e33]:
    - region "Premium Cleaning Services in Prague" [ref=e34]:
      - generic [ref=e38]:
        - generic [ref=e39]:
          - generic [ref=e41]: U+
          - generic [ref=e42]: UKLID PLUS PRAHA
        - heading "Premium Cleaning Services in Prague" [level=1] [ref=e43]:
          - generic [ref=e44]: Premium Cleaning Services
          - generic [ref=e45]: in Prague
        - paragraph [ref=e46]: Trusted by Expats, Professionals & Airbnb Hosts
        - generic [ref=e47]:
          - generic [ref=e48]:
            - img [ref=e49]
            - generic [ref=e51]: Reliable cleaners
          - generic [ref=e52]:
            - img [ref=e53]
            - generic [ref=e55]: Fast communication
          - generic [ref=e56]:
            - img [ref=e57]
            - generic [ref=e59]: Recurring home-care
        - generic [ref=e60]:
          - link "Book via WhatsApp" [ref=e61] [cursor=pointer]:
            - /url: "#contact"
            - img [ref=e62]
            - text: Book via WhatsApp
          - link "View Prices" [ref=e64] [cursor=pointer]:
            - /url: "#pricing"
      - link "Scroll to pricing" [ref=e66] [cursor=pointer]:
        - /url: "#pricing"
        - img [ref=e67]
    - region "Why UKLID PLUS PRAHA" [ref=e69]:
      - generic [ref=e70]:
        - generic [ref=e71]:
          - heading "Why UKLID PLUS PRAHA" [level=2] [ref=e72]
          - paragraph [ref=e73]: Prague's trusted cleaning partner for expats, professionals, and Airbnb hosts
        - generic [ref=e74]:
          - generic [ref=e75]:
            - img [ref=e77]
            - heading "Professional Team" [level=3] [ref=e79]
            - paragraph [ref=e80]: All our cleaners are professionally trained, vetted, and insured. We use quality equipment and eco-friendly products.
          - generic [ref=e81]:
            - img [ref=e83]
            - heading "Reliable Service" [level=3] [ref=e85]
            - paragraph [ref=e86]: Punctual, trustworthy, and consistent. Your cleaner arrives on time, every time. Same cleaner for recurring clients.
          - generic [ref=e87]:
            - img [ref=e89]
            - heading "Flexible Scheduling" [level=3] [ref=e92]
            - paragraph [ref=e93]: Book when it suits you. Weekday, weekend, or evening slots available. Reschedule or cancel without hassle.
          - generic [ref=e94]:
            - img [ref=e96]
            - heading "Satisfaction Guaranteed" [level=3] [ref=e98]
            - paragraph [ref=e99]: Your happiness matters. Not 100% satisfied? We'll re-clean for free within 24 hours. No questions asked.
    - region "Why Choose Us" [ref=e100]:
      - generic [ref=e101]:
        - generic [ref=e102]:
          - heading "Why Choose Us" [level=2] [ref=e103]
          - paragraph [ref=e104]: What makes UKLID PLUS PRAHA the preferred choice
        - generic [ref=e105]:
          - generic [ref=e106]:
            - img [ref=e108]
            - heading "Expat-Focused Service" [level=3] [ref=e110]
            - paragraph [ref=e111]: Serving Prague's international community with professional cleaning services tailored for expats and international residents.
          - generic [ref=e112]:
            - img [ref=e114]
            - heading "Multilingual Communication" [level=3] [ref=e116]
            - paragraph [ref=e117]: Communicate in your language. Our team speaks English, Czech, Russian, and Ukrainian fluently. No language barriers.
          - generic [ref=e118]:
            - img [ref=e120]
            - heading "WhatsApp Booking" [level=3] [ref=e122]
            - paragraph [ref=e123]: Book your cleaning in minutes via WhatsApp. Quick, convenient, and confirmed within 2 hours. No phone calls needed.
          - generic [ref=e124]:
            - img [ref=e126]
            - heading "Recurring Cleaning Plans" [level=3] [ref=e128]
            - paragraph [ref=e129]: Set it and forget it. Weekly, bi-weekly, or monthly cleanings with the same cleaner. Enjoy discounts and priority scheduling.
        - generic [ref=e130]:
          - generic [ref=e131]:
            - img [ref=e133]
            - heading "Airbnb Host Support" [level=3] [ref=e135]
            - paragraph [ref=e136]: Specialized turnover service for Airbnb hosts. Fast response times, quality guaranteed, guest-ready properties.
          - generic [ref=e137]:
            - img [ref=e139]
            - heading "Transparent Pricing" [level=3] [ref=e141]
            - paragraph [ref=e142]: Clear, upfront pricing with no hidden fees. Free quotes provided before booking. Pay by card, cash, or invoice.
          - generic [ref=e143]:
            - img [ref=e145]
            - heading "Fast Response Time" [level=3] [ref=e147]
            - paragraph [ref=e148]: We respond within 2 hours during business hours. Same-day service available for emergencies. Always here when you need us.
    - region "How It Works" [ref=e149]:
      - generic [ref=e150]:
        - generic [ref=e151]:
          - heading "How It Works" [level=2] [ref=e152]
          - paragraph [ref=e153]: 5 simple steps to a spotless home
        - generic [ref=e156]:
          - generic [ref=e157]:
            - generic:
              - generic: "1"
            - heading "Contact Us" [level=3] [ref=e158]
            - paragraph [ref=e159]: Reach out via WhatsApp, phone, or our contact form. Tell us about your cleaning needs and preferred schedule.
          - generic [ref=e160]:
            - generic:
              - generic: "2"
            - heading "Get Your Quote" [level=3] [ref=e161]
            - paragraph [ref=e162]: Receive a clear, transparent quote within 2 hours. No hidden fees, no surprises. Confirm your booking when ready.
          - generic [ref=e163]:
            - generic:
              - generic: "3"
            - heading "Schedule Your Clean" [level=3] [ref=e164]
            - paragraph [ref=e165]: Pick a time that works for you. We offer flexible scheduling including weekends. Same-day service available.
          - generic [ref=e166]:
            - generic:
              - generic: "4"
            - heading "We Clean" [level=3] [ref=e167]
            - paragraph [ref=e168]: Our professional cleaner arrives on time with all necessary equipment. Sit back and enjoy your free time.
          - generic [ref=e169]:
            - generic:
              - generic: "5"
            - heading "Enjoy Your Clean Home" [level=3] [ref=e170]
            - paragraph [ref=e171]: Return to a spotless home. Not satisfied? Contact us within 24 hours for a free re-clean. Guaranteed.
            - link "Book via WhatsApp" [ref=e172] [cursor=pointer]:
              - /url: https://wa.me/?text=Hi!%20I'd%20like%20to%20inquire%20about%20cleaning%20services.%20What's%20your%20availability%3F
              - img [ref=e173]
              - text: Book via WhatsApp
    - region "Built for Expats" [ref=e175]:
      - generic [ref=e177]:
        - generic [ref=e178]:
          - generic [ref=e179]:
            - heading "Built for Expats" [level=2] [ref=e180]
            - paragraph [ref=e181]: We understand the challenges of living abroad
          - list [ref=e182]:
            - listitem [ref=e183]:
              - img [ref=e185]
              - generic [ref=e187]:
                - text: expats.benefits.english.title
                - generic [ref=e188]: "- expats.benefits.english.description"
            - listitem [ref=e189]:
              - img [ref=e191]
              - generic [ref=e193]:
                - text: expats.benefits.scheduling.title
                - generic [ref=e194]: "- expats.benefits.scheduling.description"
            - listitem [ref=e195]:
              - img [ref=e197]
              - generic [ref=e199]:
                - text: expats.benefits.trusted.title
                - generic [ref=e200]: "- expats.benefits.trusted.description"
            - listitem [ref=e201]:
              - img [ref=e203]
              - generic [ref=e205]:
                - text: expats.benefits.recurring.title
                - generic [ref=e206]: "- expats.benefits.recurring.description"
            - listitem [ref=e207]:
              - img [ref=e209]
              - generic [ref=e211]:
                - text: Fast Communication
                - generic [ref=e212]: "- WhatsApp booking, quick responses, and clear communication. No waiting, no confusion."
            - listitem [ref=e213]:
              - img [ref=e215]
              - generic [ref=e217]:
                - text: Quality Guarantee
                - generic [ref=e218]: "- Not satisfied? We'll re-clean for free within 24 hours. Your satisfaction is our priority."
          - link "Book Your First Clean" [ref=e220] [cursor=pointer]:
            - /url: "#contact"
            - img [ref=e221]
            - text: Book Your First Clean
        - generic [ref=e229]:
          - img [ref=e230]
          - paragraph [ref=e232]: Trusted by 2,500+ happy clients
    - region "Our Services" [ref=e234]:
      - generic [ref=e235]:
        - generic [ref=e236]:
          - heading "Our Services" [level=2] [ref=e237]
          - paragraph [ref=e238]: Professional cleaning services tailored to your needs
        - generic [ref=e239]:
          - generic [ref=e240]:
            - img [ref=e242]
            - heading "Standard Cleaning" [level=3] [ref=e244]
            - paragraph [ref=e245]: Regular cleaning service for your home or apartment. Includes dusting, vacuuming, mopping, and bathroom sanitization.
            - list [ref=e246]:
              - listitem [ref=e247]:
                - img [ref=e248]
                - generic [ref=e250]: Kitchen cleaning
              - listitem [ref=e251]:
                - img [ref=e252]
                - generic [ref=e254]: Bathroom sanitization
              - listitem [ref=e255]:
                - img [ref=e256]
                - generic [ref=e258]: Dusting and vacuuming
            - link "Get Quote" [ref=e259] [cursor=pointer]:
              - /url: /pricing#standard
          - generic [ref=e260]:
            - img [ref=e262]
            - heading "Deep Cleaning" [level=3] [ref=e264]
            - paragraph [ref=e265]: Thorough cleaning for move-in/move-out or seasonal refresh. Everything cleaned from top to bottom.
            - list [ref=e266]:
              - listitem [ref=e267]:
                - img [ref=e268]
                - generic [ref=e270]: All standard cleaning items
              - listitem [ref=e271]:
                - img [ref=e272]
                - generic [ref=e274]: Inside cabinets and drawers
              - listitem [ref=e275]:
                - img [ref=e276]
                - generic [ref=e278]: Appliance deep clean
            - link "Get Quote" [ref=e279] [cursor=pointer]:
              - /url: /pricing#deep
          - generic [ref=e280]:
            - img [ref=e282]
            - heading "Airbnb Turnover" [level=3] [ref=e284]
            - paragraph [ref=e285]: Fast, reliable turnover service for Airbnb hosts. Guest-ready properties guaranteed.
            - list [ref=e286]:
              - listitem [ref=e287]:
                - img [ref=e288]
                - generic [ref=e290]: Quick turnaround time
              - listitem [ref=e291]:
                - img [ref=e292]
                - generic [ref=e294]: Fresh linens setup
              - listitem [ref=e295]:
                - img [ref=e296]
                - generic [ref=e298]: Restock essentials
            - link "Learn More" [ref=e299] [cursor=pointer]:
              - /url: /airbnb-hosts
          - generic [ref=e300]:
            - img [ref=e302]
            - heading "Recurring Plans" [level=3] [ref=e305]
            - paragraph [ref=e306]: Scheduled cleaning at your convenience. Weekly, bi-weekly, or monthly options with exclusive benefits.
            - list [ref=e307]:
              - listitem [ref=e308]:
                - img [ref=e309]
                - generic [ref=e311]: Priority scheduling
              - listitem [ref=e312]:
                - img [ref=e313]
                - generic [ref=e315]: Consistent cleaner
              - listitem [ref=e316]:
                - img [ref=e317]
                - generic [ref=e319]: Discounted rates
            - link "View Plans" [ref=e320] [cursor=pointer]:
              - /url: /pricing#plans
          - generic [ref=e321]:
            - img [ref=e323]
            - heading "Ironing Service" [level=3] [ref=e325]
            - paragraph [ref=e326]: Professional ironing service to keep your wardrobe crisp and ready. Available as add-on or standalone.
            - list [ref=e327]:
              - listitem [ref=e328]:
                - img [ref=e329]
                - generic [ref=e331]: Expert ironing
              - listitem [ref=e332]:
                - img [ref=e333]
                - generic [ref=e335]: Steam treatment
              - listitem [ref=e336]:
                - img [ref=e337]
                - generic [ref=e339]: Hanging or folding
            - link "Get Quote" [ref=e340] [cursor=pointer]:
              - /url: /pricing#addons
          - generic [ref=e341]:
            - img [ref=e343]
            - heading "Office Cleaning" [level=3] [ref=e345]
            - paragraph [ref=e346]: Professional office and commercial space cleaning. Flexible scheduling to minimize disruption.
            - list [ref=e347]:
              - listitem [ref=e348]:
                - img [ref=e349]
                - generic [ref=e351]: Desk and surface cleaning
              - listitem [ref=e352]:
                - img [ref=e353]
                - generic [ref=e355]: Common area maintenance
              - listitem [ref=e356]:
                - img [ref=e357]
                - generic [ref=e359]: Kitchenette sanitization
            - link "Get Quote" [ref=e360] [cursor=pointer]:
              - /url: "#contact"
    - region "Recurring Cleaning Plans" [ref=e361]:
      - generic [ref=e362]:
        - generic [ref=e363]:
          - heading "Recurring Cleaning Plans" [level=2] [ref=e364]
          - paragraph [ref=e365]: Save time and money with regular cleaning
        - generic [ref=e366]:
          - generic [ref=e367]:
            - heading "Essential Care" [level=3] [ref=e368]
            - paragraph [ref=e369]: Bi-weekly cleaning with great savings
            - list [ref=e370]:
              - listitem [ref=e371]:
                - img [ref=e372]
                - generic [ref=e374]: Bi-weekly visits
              - listitem [ref=e375]:
                - img [ref=e376]
                - generic [ref=e378]: Same cleaner each time
              - listitem [ref=e379]:
                - img [ref=e380]
                - generic [ref=e382]: Priority scheduling
              - listitem [ref=e383]:
                - img [ref=e384]
                - generic [ref=e386]: recurring.plans.essential.features.3
              - listitem [ref=e387]:
                - img [ref=e388]
                - generic [ref=e390]: recurring.plans.essential.features.4
              - listitem [ref=e391]:
                - img [ref=e392]
                - generic [ref=e394]: recurring.plans.essential.features.5
            - link "Choose Plan" [ref=e395] [cursor=pointer]:
              - /url: "#contact?text=Hi!%20I'm%20interested%20in%20the%20Essential%20Care%20plan."
              - img [ref=e396]
              - text: Choose Plan
          - generic [ref=e398]:
            - generic [ref=e399]: Best Value
            - heading "Premium Care" [level=3] [ref=e400]
            - paragraph [ref=e401]: Weekly cleaning with maximum convenience
            - list [ref=e402]:
              - listitem [ref=e403]:
                - img [ref=e404]
                - generic [ref=e406]: Weekly visits
              - listitem [ref=e407]:
                - img [ref=e408]
                - generic [ref=e410]: Same cleaner each time
              - listitem [ref=e411]:
                - img [ref=e412]
                - generic [ref=e414]: Priority scheduling
              - listitem [ref=e415]:
                - img [ref=e416]
                - generic [ref=e418]: 15% off every visit
              - listitem [ref=e419]:
                - img [ref=e420]
                - generic [ref=e422]: recurring.plans.premium.features.4
              - listitem [ref=e423]:
                - img [ref=e424]
                - generic [ref=e426]: recurring.plans.premium.features.5
              - listitem [ref=e427]:
                - img [ref=e428]
                - generic [ref=e430]: recurring.plans.premium.features.6
            - link "Choose Plan" [ref=e431] [cursor=pointer]:
              - /url: "#contact?text=Hi!%20I'm%20interested%20in%20the%20Premium%20Care%20plan."
              - img [ref=e432]
              - text: Choose Plan
          - generic [ref=e434]:
            - heading "VIP Service" [level=3] [ref=e435]
            - paragraph [ref=e436]: Custom schedule with premium benefits
            - list [ref=e437]:
              - listitem [ref=e438]:
                - img [ref=e439]
                - generic [ref=e441]: Custom frequency
              - listitem [ref=e442]:
                - img [ref=e443]
                - generic [ref=e445]: Dedicated cleaner
              - listitem [ref=e446]:
                - img [ref=e447]
                - generic [ref=e449]: Priority booking
              - listitem [ref=e450]:
                - img [ref=e451]
                - generic [ref=e453]: recurring.plans.vip.features.3
              - listitem [ref=e454]:
                - img [ref=e455]
                - generic [ref=e457]: recurring.plans.vip.features.4
              - listitem [ref=e458]:
                - img [ref=e459]
                - generic [ref=e461]: recurring.plans.vip.features.5
              - listitem [ref=e462]:
                - img [ref=e463]
                - generic [ref=e465]: recurring.plans.vip.features.6
            - link "Choose Plan" [ref=e466] [cursor=pointer]:
              - /url: "#contact?text=Hi!%20I'm%20interested%20in%20the%20VIP%20Service%20plan."
              - img [ref=e467]
              - text: Choose Plan
    - region "Transparent Pricing" [ref=e469]:
      - generic [ref=e470]:
        - generic [ref=e471]:
          - heading "Transparent Pricing" [level=2] [ref=e472]
          - paragraph [ref=e473]: Clear rates for every apartment size
        - generic [ref=e475]:
          - button "Standard" [ref=e476]: Standard
          - button "Deep Clean" [ref=e478]
          - button "Add-ons" [ref=e479]
        - generic [ref=e482]:
          - paragraph [ref=e484]: Regular cleaning for your home. Includes all essentials.
          - table [ref=e486]:
            - rowgroup [ref=e487]:
              - row "Apartment Size From" [ref=e488]:
                - columnheader "Apartment" [ref=e489]
                - columnheader "Size" [ref=e490]
                - columnheader "From" [ref=e491]
            - rowgroup [ref=e492]:
              - row "1+kk (studio) ~35 m² 1,200 CZK" [ref=e493]:
                - cell "1+kk (studio)" [ref=e494]
                - cell "~35 m²" [ref=e495]
                - cell "1,200 CZK" [ref=e496]
              - row "1+1 (1 bedroom) ~45 m² 1,350 CZK" [ref=e497]:
                - cell "1+1 (1 bedroom)" [ref=e498]
                - cell "~45 m²" [ref=e499]
                - cell "1,350 CZK" [ref=e500]
              - row "2+kk ~55 m² 1,550 CZK" [ref=e501]:
                - cell "2+kk" [ref=e502]
                - cell "~55 m²" [ref=e503]
                - cell "1,550 CZK" [ref=e504]
              - row "2+1 ~65 m² 1,750 CZK" [ref=e505]:
                - cell "2+1" [ref=e506]
                - cell "~65 m²" [ref=e507]
                - cell "1,750 CZK" [ref=e508]
              - row "3+kk ~75 m² 1,950 CZK" [ref=e509]:
                - cell "3+kk" [ref=e510]
                - cell "~75 m²" [ref=e511]
                - cell "1,950 CZK" [ref=e512]
              - row "3+1 ~85 m² 2,050 CZK" [ref=e513]:
                - cell "3+1" [ref=e514]
                - cell "~85 m²" [ref=e515]
                - cell "2,050 CZK" [ref=e516]
              - row "3+2 ~95 m² 2,100 CZK" [ref=e517]:
                - cell "3+2" [ref=e518]
                - cell "~95 m²" [ref=e519]
                - cell "2,100 CZK" [ref=e520]
              - row "4+kk / larger 100+ m² from 2,190 CZK" [ref=e521]:
                - cell "4+kk / larger" [ref=e522]
                - cell "100+ m²" [ref=e523]
                - cell "from 2,190 CZK" [ref=e524]
        - generic [ref=e525]:
          - heading "Special Offers" [level=3] [ref=e526]
          - generic [ref=e527]:
            - generic [ref=e528]:
              - heading "Essential Care" [level=4] [ref=e529]
              - paragraph [ref=e530]: Bi-weekly cleaning with great savings
              - list [ref=e531]:
                - listitem [ref=e532]:
                  - img [ref=e533]
                  - generic [ref=e535]: Bi-weekly visits
                - listitem [ref=e536]:
                  - img [ref=e537]
                  - generic [ref=e539]: Same cleaner each time
                - listitem [ref=e540]:
                  - img [ref=e541]
                  - generic [ref=e543]: Priority scheduling
                - listitem [ref=e544]:
                  - img [ref=e545]
                  - generic [ref=e547]: 50% off 5th visit
              - link "Get Started" [ref=e548] [cursor=pointer]:
                - /url: "#contact"
            - generic [ref=e549]:
              - generic [ref=e550]: Most Popular
              - heading "Premium Care" [level=4] [ref=e551]
              - paragraph [ref=e552]: Weekly cleaning with maximum convenience
              - list [ref=e553]:
                - listitem [ref=e554]:
                  - img [ref=e555]
                  - generic [ref=e557]: Weekly visits
                - listitem [ref=e558]:
                  - img [ref=e559]
                  - generic [ref=e561]: Same cleaner each time
                - listitem [ref=e562]:
                  - img [ref=e563]
                  - generic [ref=e565]: Priority scheduling
                - listitem [ref=e566]:
                  - img [ref=e567]
                  - generic [ref=e569]: 15% off every visit
              - link "Get Started" [ref=e570] [cursor=pointer]:
                - /url: "#contact"
        - generic [ref=e571]:
          - paragraph [ref=e572]: Need a custom quote?
          - link "Get Free Quote" [ref=e573] [cursor=pointer]:
            - /url: https://wa.me/?text=Hi!%20I'd%20like%20to%20get%20a%20quote%20for%20cleaning%20services.
            - img [ref=e574]
            - text: Get Free Quote
    - region "Airbnb Host Partner" [ref=e576]:
      - generic [ref=e578]:
        - generic [ref=e579]:
          - generic [ref=e580]:
            - heading "Airbnb Host Partner" [level=2] [ref=e581]
            - paragraph [ref=e582]: Professional turnover service for Prague hosts
          - list [ref=e583]:
            - listitem [ref=e584]:
              - img [ref=e586]
              - generic [ref=e588]:
                - text: Fast Turnover
                - generic [ref=e589]: "- Same-day turnover service available. We respond within 2 hours for urgent requests."
            - listitem [ref=e590]:
              - img [ref=e592]
              - generic [ref=e594]:
                - text: Express Service
                - generic [ref=e595]: "- Need it fast? Express cleaning within 24 hours available for urgent situations."
            - listitem [ref=e596]:
              - img [ref=e598]
              - generic [ref=e600]:
                - text: Same-Day Booking
                - generic [ref=e601]: "- Book in the morning, we clean by evening. Perfect for unexpected guest arrivals."
            - listitem [ref=e602]:
              - img [ref=e604]
              - generic [ref=e606]:
                - text: Key Handling
                - generic [ref=e607]: "- Key collection and return service available. Flexible access arrangements for hosts."
            - listitem [ref=e608]:
              - img [ref=e610]
              - generic [ref=e612]:
                - text: Quality Guarantee
                - generic [ref=e613]: "- Not satisfied? We'll re-clean for free within 24 hours. Your guests deserve the best."
            - listitem [ref=e614]:
              - img [ref=e616]
              - generic [ref=e618]:
                - text: Priority Scheduling
                - generic [ref=e619]: "- As a host partner, you get priority booking and dedicated support."
          - link "Partner With Us" [ref=e621] [cursor=pointer]:
            - /url: "#contact"
            - img [ref=e622]
            - text: Partner With Us
        - generic [ref=e630]:
          - img [ref=e631]
          - paragraph [ref=e633]: Trusted by 50+ Airbnb hosts
    - region "Our Work & After" [ref=e635]:
      - generic [ref=e636]:
        - generic [ref=e637]:
          - heading "Our Work & After" [level=2] [ref=e638]
          - paragraph [ref=e639]: See the difference professional cleaning makes
        - generic [ref=e640]:
          - button "All Projects" [pressed] [ref=e641]
          - button "Standard Cleaning" [ref=e642]
          - button "Deep Cleaning" [ref=e643]
          - button "Airbnb Turnover" [ref=e644]
          - button "Office Cleaning" [ref=e645]
          - button "Add-on Services" [ref=e646]
        - generic [ref=e647]:
          - generic [ref=e648]:
            - generic [ref=e649]:
              - generic [ref=e652]:
                - img [ref=e654]
                - text: Before
              - generic [ref=e658]:
                - img [ref=e660]
                - text: After
              - button "View After" [ref=e662]
              - generic [ref=e663]: Before
            - generic [ref=e664]:
              - heading "Kitchen Deep Clean" [level=3] [ref=e665]
              - paragraph [ref=e666]: Deep Cleaning
          - generic [ref=e667]:
            - generic [ref=e668]:
              - generic [ref=e671]:
                - img [ref=e673]
                - text: Before
              - generic [ref=e677]:
                - img [ref=e679]
                - text: After
              - button "View After" [ref=e681]
              - generic [ref=e682]: Before
            - generic [ref=e683]:
              - heading "Bathroom Sanitization" [level=3] [ref=e684]
              - paragraph [ref=e685]: Deep Cleaning
          - generic [ref=e686]:
            - generic [ref=e687]:
              - generic [ref=e690]:
                - img [ref=e692]
                - text: Before
              - generic [ref=e696]:
                - img [ref=e698]
                - text: After
              - button "View After" [ref=e700]
              - generic [ref=e701]: Before
            - generic [ref=e702]:
              - heading "Living Room Standard Clean" [level=3] [ref=e703]
              - paragraph [ref=e704]: Standard Cleaning
          - generic [ref=e705]:
            - generic [ref=e706]:
              - generic [ref=e709]:
                - img [ref=e711]
                - text: Before
              - generic [ref=e715]:
                - img [ref=e717]
                - text: After
              - button "View After" [ref=e719]
              - generic [ref=e720]: Before
            - generic [ref=e721]:
              - heading "Bedroom Refresh" [level=3] [ref=e722]
              - paragraph [ref=e723]: Standard Cleaning
          - generic [ref=e724]:
            - generic [ref=e725]:
              - generic [ref=e728]:
                - img [ref=e730]
                - text: Before
              - generic [ref=e734]:
                - img [ref=e736]
                - text: After
              - button "View After" [ref=e738]
              - generic [ref=e739]: Before
            - generic [ref=e740]:
              - heading "Airbnb Turnover Service" [level=3] [ref=e741]
              - paragraph [ref=e742]: Airbnb Turnover
          - generic [ref=e743]:
            - generic [ref=e744]:
              - generic [ref=e747]:
                - img [ref=e749]
                - text: Before
              - generic [ref=e753]:
                - img [ref=e755]
                - text: After
              - button "View After" [ref=e757]
              - generic [ref=e758]: Before
            - generic [ref=e759]:
              - heading "Office Cleaning" [level=3] [ref=e760]
              - paragraph [ref=e761]: Office Cleaning
          - generic [ref=e762]:
            - generic [ref=e763]:
              - generic [ref=e766]:
                - img [ref=e768]
                - text: Before
              - generic [ref=e772]:
                - img [ref=e774]
                - text: After
              - button "View After" [ref=e776]
              - generic [ref=e777]: Before
            - generic [ref=e778]:
              - heading "Oven Deep Clean" [level=3] [ref=e779]
              - paragraph [ref=e780]: Add-on Services
          - generic [ref=e781]:
            - generic [ref=e782]:
              - generic [ref=e785]:
                - img [ref=e787]
                - text: Before
              - generic [ref=e791]:
                - img [ref=e793]
                - text: After
              - button "View After" [ref=e795]
              - generic [ref=e796]: Before
            - generic [ref=e797]:
              - heading "Window Cleaning" [level=3] [ref=e798]
              - paragraph [ref=e799]: Add-on Services
    - region "Google Reviews" [ref=e800]:
      - generic [ref=e801]:
        - generic [ref=e802]:
          - heading "Google Reviews" [level=2] [ref=e803]
          - paragraph [ref=e804]: What our clients say about us
        - generic [ref=e806]:
          - img [ref=e807]
          - generic [ref=e812]:
            - generic [ref=e813]:
              - generic [ref=e814]:
                - img [ref=e815]
                - img [ref=e817]
                - img [ref=e819]
                - img [ref=e821]
                - img [ref=e823]
              - generic [ref=e825]: "4.9"
            - paragraph [ref=e826]: Based on 10 reviews
            - link "See all reviews on Google" [ref=e827] [cursor=pointer]:
              - /url: https://g.page/r/CXXXXX/review
              - generic [ref=e828]: See all reviews on Google
              - img [ref=e829]
        - generic [ref=e831]:
          - generic [ref=e832]:
            - generic [ref=e833]:
              - generic [ref=e834]:
                - generic [ref=e836]: J
                - generic [ref=e837]: John D.
              - generic [ref=e838]:
                - img [ref=e839]
                - img [ref=e841]
                - img [ref=e843]
                - img [ref=e845]
                - img [ref=e847]
            - paragraph [ref=e849]: “Exceptional service! The team was professional, punctual, and thorough. My apartment has never been cleaner. Highly recommend UKLID PLUS for anyone in Prague.”
            - paragraph [ref=e850]: January 15, 2024
          - generic [ref=e851]:
            - generic [ref=e852]:
              - generic [ref=e853]:
                - generic [ref=e855]: M
                - generic [ref=e856]: Maria S.
              - generic [ref=e857]:
                - img [ref=e858]
                - img [ref=e860]
                - img [ref=e862]
                - img [ref=e864]
                - img [ref=e866]
            - paragraph [ref=e868]: “Best cleaning service I've used in Prague. They speak English, show up on time, and do a fantastic job. The WhatsApp booking is so convenient!”
            - paragraph [ref=e869]: January 10, 2024
          - generic [ref=e870]:
            - generic [ref=e871]:
              - generic [ref=e872]:
                - generic [ref=e874]: P
                - generic [ref=e875]: Petr K.
              - generic [ref=e876]:
                - img [ref=e877]
                - img [ref=e879]
                - img [ref=e881]
                - img [ref=e883]
                - img [ref=e885]
            - paragraph [ref=e887]: “Skvělá služba! Vždy včas, důkladné úklid a příjemný personál. Rozhodně doporučuji.”
            - paragraph [ref=e888]: January 8, 2024
        - generic [ref=e890]:
          - generic [ref=e891]:
            - img [ref=e892]
            - generic [ref=e894]: Growing Our Reputation
          - paragraph [ref=e895]: We're building our reputation! Help us grow by leaving a review after your cleaning.
        - generic [ref=e896]:
          - link "See All Reviews" [ref=e897] [cursor=pointer]:
            - /url: https://g.page/r/CXXXXX/review
            - generic [ref=e898]: See All Reviews
            - img [ref=e899]
          - link "Leave a Review" [ref=e901] [cursor=pointer]:
            - /url: https://facebook.com/uklidpluspraha
            - generic [ref=e902]: Leave a Review
            - img [ref=e903]
    - region "Client Testimonials" [ref=e905]:
      - generic [ref=e906]:
        - generic [ref=e907]:
          - heading "Client Testimonials" [level=2] [ref=e908]
          - paragraph [ref=e909]: Hear from our satisfied clients
        - generic [ref=e910]:
          - generic [ref=e911]:
            - img [ref=e913]
            - generic [ref=e915]:
              - img [ref=e916]
              - img [ref=e918]
              - img [ref=e920]
              - img [ref=e922]
              - img [ref=e924]
            - blockquote [ref=e926]: “I've been using UKLID PLUS for my apartment in Prague 2 for over a year. Their service is impeccable, and I love that I can communicate in English. The recurring plan has made my life so much easier.”
            - generic [ref=e927]:
              - generic [ref=e929]: S
              - generic [ref=e930]:
                - paragraph [ref=e931]: Sarah M.
                - paragraph [ref=e932]: Marketing Manager, Prague 2
          - generic [ref=e933]:
            - img [ref=e935]
            - generic [ref=e937]:
              - img [ref=e938]
              - img [ref=e940]
              - img [ref=e942]
              - img [ref=e944]
              - img [ref=e946]
            - blockquote [ref=e948]: “As an Airbnb host, I need reliable turnover cleaning. UKLID PLUS always delivers - quick response, thorough cleaning, and my guests always comment on how clean the apartment is. Highly recommend!”
            - generic [ref=e949]:
              - generic [ref=e951]: M
              - generic [ref=e952]:
                - paragraph [ref=e953]: Michael T.
                - paragraph [ref=e954]: Airbnb Superhost, Prague 1
          - generic [ref=e955]:
            - img [ref=e957]
            - generic [ref=e959]:
              - img [ref=e960]
              - img [ref=e962]
              - img [ref=e964]
              - img [ref=e966]
              - img [ref=e968]
            - blockquote [ref=e970]: “Moving to Prague from the UK, I was worried about finding services in English. UKLID PLUS made everything easy. Their deep cleaning service prepared my new apartment perfectly. Professional and friendly.”
            - generic [ref=e971]:
              - generic [ref=e973]: J
              - generic [ref=e974]:
                - paragraph [ref=e975]: James H.
                - paragraph [ref=e976]: Software Developer, Prague 5
    - region "Frequently Asked Questions" [ref=e977]:
      - generic [ref=e979]:
        - generic [ref=e980]:
          - heading "Frequently Asked Questions" [level=2] [ref=e981]
          - paragraph [ref=e982]: Find answers to common questions
        - generic [ref=e984]:
          - generic [ref=e985]:
            - button "How do I book a cleaning service?" [expanded] [ref=e986]:
              - generic [ref=e987]: How do I book a cleaning service?
              - img [ref=e988]
            - paragraph [ref=e992]: You can book easily via WhatsApp, phone, or our contact form. Send us a message with your cleaning needs, and we'll respond within 2 hours with a quote and available time slots.
          - button "How much does cleaning cost?" [ref=e994]:
            - generic [ref=e995]: How much does cleaning cost?
            - img [ref=e996]
          - button "Is there a minimum booking time?" [ref=e999]:
            - generic [ref=e1000]: Is there a minimum booking time?
            - img [ref=e1001]
          - button "Do you offer same-day service?" [ref=e1004]:
            - generic [ref=e1005]: Do you offer same-day service?
            - img [ref=e1006]
          - button "What payment methods do you accept?" [ref=e1009]:
            - generic [ref=e1010]: What payment methods do you accept?
            - img [ref=e1011]
          - button "What's included in standard cleaning?" [ref=e1014]:
            - generic [ref=e1015]: What's included in standard cleaning?
            - img [ref=e1016]
          - button "What's the difference between standard and deep cleaning?" [ref=e1019]:
            - generic [ref=e1020]: What's the difference between standard and deep cleaning?
            - img [ref=e1021]
        - generic [ref=e1023]:
          - paragraph [ref=e1024]: Still have questions? Contact us via WhatsApp for quick answers.
          - link "Contact on WhatsApp" [ref=e1025] [cursor=pointer]:
            - /url: "#contact"
            - img [ref=e1026]
            - text: Contact on WhatsApp
    - region "Service Areas" [ref=e1028]:
      - generic [ref=e1029]:
        - generic [ref=e1030]:
          - heading "Service Areas" [level=2] [ref=e1031]
          - paragraph [ref=e1032]: We serve Prague and surrounding areas
        - generic [ref=e1033]:
          - generic [ref=e1034]:
            - heading "Prague 1" [level=3] [ref=e1035]
            - list [ref=e1036]:
              - listitem [ref=e1037]:
                - img [ref=e1038]
                - generic [ref=e1041]: Old Town (Staré Město)
              - listitem [ref=e1042]:
                - img [ref=e1043]
                - generic [ref=e1046]: New Town (Nové Město)
              - listitem [ref=e1047]:
                - img [ref=e1048]
                - generic [ref=e1051]: Lesser Town (Malá Strana)
              - listitem [ref=e1052]:
                - img [ref=e1053]
                - generic [ref=e1056]: Hradčany
              - listitem [ref=e1057]:
                - img [ref=e1058]
                - generic [ref=e1061]: Josefov
          - generic [ref=e1062]:
            - heading "Prague 2" [level=3] [ref=e1063]
            - list [ref=e1064]:
              - listitem [ref=e1065]:
                - img [ref=e1066]
                - generic [ref=e1069]: Vinohrady
              - listitem [ref=e1070]:
                - img [ref=e1071]
                - generic [ref=e1074]: Vyšehrad
              - listitem [ref=e1075]:
                - img [ref=e1076]
                - generic [ref=e1079]: Parts of New Town
          - generic [ref=e1080]:
            - heading "Prague 5" [level=3] [ref=e1081]
            - list [ref=e1082]:
              - listitem [ref=e1083]:
                - img [ref=e1084]
                - generic [ref=e1087]: Smíchov
              - listitem [ref=e1088]:
                - img [ref=e1089]
                - generic [ref=e1092]: Anděl
              - listitem [ref=e1093]:
                - img [ref=e1094]
                - generic [ref=e1097]: Klárov
              - listitem [ref=e1098]:
                - img [ref=e1099]
                - generic [ref=e1102]: Malvazinky
          - generic [ref=e1103]:
            - heading "Prague 6" [level=3] [ref=e1104]
            - list [ref=e1105]:
              - listitem [ref=e1106]:
                - img [ref=e1107]
                - generic [ref=e1110]: Dejvice
              - listitem [ref=e1111]:
                - img [ref=e1112]
                - generic [ref=e1115]: Bubeneč
              - listitem [ref=e1116]:
                - img [ref=e1117]
                - generic [ref=e1120]: Střešovice
              - listitem [ref=e1121]:
                - img [ref=e1122]
                - generic [ref=e1125]: Hradčany
              - listitem [ref=e1126]:
                - img [ref=e1127]
                - generic [ref=e1130]: Veleslavín
          - generic [ref=e1131]:
            - heading "Prague 7" [level=3] [ref=e1132]
            - list [ref=e1133]:
              - listitem [ref=e1134]:
                - img [ref=e1135]
                - generic [ref=e1138]: Letná
              - listitem [ref=e1139]:
                - img [ref=e1140]
                - generic [ref=e1143]: Holešovice
              - listitem [ref=e1144]:
                - img [ref=e1145]
                - generic [ref=e1148]: Bubny
        - generic [ref=e1149]:
          - paragraph [ref=e1150]: Other areas available on request
          - link "Contact Us for Other Areas" [ref=e1151] [cursor=pointer]:
            - /url: https://wa.me/?text=Hi!%20I'd%20like%20to%20inquire%20about%20cleaning%20services%20in%20my%20area.
            - img [ref=e1152]
            - text: Contact Us for Other Areas
    - region "Get in Touch" [ref=e1154]:
      - generic [ref=e1155]:
        - generic [ref=e1156]:
          - heading "Get in Touch" [level=2] [ref=e1157]
          - paragraph [ref=e1158]: Ready to book your cleaning? Contact us via your preferred channel
        - generic [ref=e1159]:
          - generic [ref=e1160]:
            - generic [ref=e1163]:
              - img [ref=e1166]
              - generic [ref=e1168]:
                - generic [ref=e1169]:
                  - heading "WhatsApp" [level=3] [ref=e1170]
                  - generic [ref=e1171]: Fastest response
                - paragraph [ref=e1172]: Message us directly for quick booking and instant replies
                - link "Send Message" [ref=e1174] [cursor=pointer]:
                  - /url: "#contact?text=Hi!%20I'd%20like%20to%20book%20a%20cleaning%20service.%20Please%20let%20me%20know%20your%20availability."
                  - img [ref=e1175]
                  - generic [ref=e1177]: Send Message
            - generic [ref=e1178]:
              - link "Messenger Chat with us on Facebook" [ref=e1179] [cursor=pointer]:
                - /url: https://m.me/uklidpluspraha
                - generic [ref=e1180]:
                  - img [ref=e1182]
                  - generic [ref=e1184]:
                    - heading "Messenger" [level=4] [ref=e1185]
                    - paragraph [ref=e1186]: Chat with us on Facebook
              - link "Instagram See our work & reviews" [ref=e1187] [cursor=pointer]:
                - /url: https://www.instagram.com/uklid.plus.praha/
                - generic [ref=e1188]:
                  - img [ref=e1190]
                  - generic [ref=e1192]:
                    - heading "Instagram" [level=4] [ref=e1193]
                    - paragraph [ref=e1194]: See our work & reviews
            - generic [ref=e1195]:
              - generic [ref=e1196]:
                - generic [ref=e1197]:
                  - img [ref=e1198]
                  - heading "Service Area" [level=4] [ref=e1201]
                - paragraph [ref=e1202]: We serve Prague and surrounding areas
              - generic [ref=e1203]:
                - generic [ref=e1204]:
                  - img [ref=e1205]
                  - heading "Languages" [level=4] [ref=e1207]
                - paragraph [ref=e1208]: English, Czech, Russian, Ukrainian
          - generic [ref=e1210]:
            - heading "Send us a Message" [level=3] [ref=e1211]
            - generic [ref=e1212]:
              - generic [ref=e1213]:
                - generic [ref=e1214]: Your Name
                - textbox "Your Name" [ref=e1215]:
                  - /placeholder: Enter your name
              - generic [ref=e1216]:
                - generic [ref=e1217]: Email Address
                - textbox "Email Address" [ref=e1218]:
                  - /placeholder: Enter your email
              - generic [ref=e1219]:
                - generic [ref=e1220]: Message
                - textbox "Message" [ref=e1221]:
                  - /placeholder: Tell us about your cleaning needs...
              - button "Send Message" [ref=e1222]
  - contentinfo [ref=e1223]:
    - generic [ref=e1224]:
      - generic [ref=e1225]:
        - generic [ref=e1226]:
          - generic [ref=e1227]:
            - generic [ref=e1229]: U+
            - generic [ref=e1230]: UKLID PLUS PRAHA
          - paragraph [ref=e1231]: Professional cleaning agency serving Prague's international community. Multilingual support in English, Czech, Russian, and Ukrainian.
          - generic [ref=e1232]:
            - link "Follow us on Instagram" [ref=e1233] [cursor=pointer]:
              - /url: https://www.instagram.com/uklid.plus.praha/
              - img [ref=e1234]
            - link "Contact us on WhatsApp" [ref=e1236] [cursor=pointer]:
              - /url: https://wa.me/
              - img [ref=e1237]
            - link "Message us on Messenger" [ref=e1239] [cursor=pointer]:
              - /url: https://m.me/uklidpluspraha
              - img [ref=e1240]
        - generic [ref=e1242]:
          - heading "Navigation" [level=3] [ref=e1243]
          - list [ref=e1244]:
            - listitem [ref=e1245]:
              - link "Home" [ref=e1246] [cursor=pointer]:
                - /url: /
            - listitem [ref=e1247]:
              - link "Services" [ref=e1248] [cursor=pointer]:
                - /url: /#services
            - listitem [ref=e1249]:
              - link "Pricing" [ref=e1250] [cursor=pointer]:
                - /url: /#pricing
            - listitem [ref=e1251]:
              - link "Privacy Policy" [ref=e1252] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e1253]:
              - link "Terms of Service" [ref=e1254] [cursor=pointer]:
                - /url: /terms
        - generic [ref=e1255]:
          - heading "Contact" [level=3] [ref=e1256]
          - list [ref=e1257]:
            - listitem [ref=e1258]:
              - link "WhatsApp" [ref=e1259] [cursor=pointer]:
                - /url: https://wa.me/
                - img [ref=e1260]
                - text: WhatsApp
            - listitem [ref=e1262]:
              - link "info@uklidpluspraha.cz" [ref=e1263] [cursor=pointer]:
                - /url: mailto:info@uklidpluspraha.cz
                - img [ref=e1264]
                - text: info@uklidpluspraha.cz
            - listitem [ref=e1266]:
              - link "Instagram" [ref=e1267] [cursor=pointer]:
                - /url: https://www.instagram.com/uklid.plus.praha/
                - img [ref=e1268]
                - text: Instagram
      - generic [ref=e1271]:
        - paragraph [ref=e1272]: © 2026 UKLID PLUS PRAHA. All rights reserved.
        - paragraph [ref=e1273]: Professional cleaning services for expats in Prague
  - link "Chat with us on WhatsApp" [ref=e1274] [cursor=pointer]:
    - /url: "#contact?text=Hi!%20I%20would%20like%20to%20book%20a%20cleaning%20service."
    - img [ref=e1276]
    - generic [ref=e1278]: Chat Now
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | /**
  4   |  * i18n (Internationalization) E2E Tests
  5   |  * Tests language switching and content translation
  6   |  *
  7   |  * Note: Language is NOT persisted - always defaults to English on page load
  8   |  */
  9   | 
  10  | const LANGUAGES = [
  11  |   { code: 'en', name: 'English', label: 'EN' },
  12  |   { code: 'cz', name: 'Čeština', label: 'CZ' },
  13  |   { code: 'ru', name: 'Русский', label: 'RU' },
  14  |   { code: 'ua', name: 'Українська', label: 'UA' },
  15  | ];
  16  | 
  17  | test.describe('i18n Language Selector', () => {
  18  |   test.beforeEach(async ({ page }) => {
  19  |     await page.goto('/');
  20  |   });
  21  | 
  22  |   test('should display language selector in header', async ({ page }) => {
  23  |     // Check desktop language selector
  24  |     const langSelector = page.locator('header [data-testid="language-selector"]').or(
  25  |       page.locator('header button:has-text("EN")')
  26  |     );
  27  | 
  28  |     // Language selector should be visible on desktop
  29  |     await expect(langSelector.first()).toBeVisible({ timeout: 10000 });
  30  |   });
  31  | 
  32  |   test('should show language options when clicked', async ({ page }) => {
  33  |     // Find and click language selector button
  34  |     const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$|^RU$|^UA$/ }).first();
  35  |     await langButton.click();
  36  | 
  37  |     // Check that language options appear
  38  |     const dropdown = page.locator('[role="menu"]').or(page.locator('[data-testid="language-dropdown"]'));
  39  | 
  40  |     // Wait for dropdown to appear
  41  |     await expect(dropdown).toBeVisible({ timeout: 5000 });
  42  | 
  43  |     // Check that all language options are present
  44  |     for (const lang of LANGUAGES) {
  45  |       const option = dropdown.locator(`button:has-text("${lang.label}")`).or(
  46  |         dropdown.locator(`button:has-text("${lang.name}")`)
  47  |       );
  48  |       await expect(option).toBeVisible();
  49  |     }
  50  |   });
  51  | 
  52  |   test('should NOT display country flag emojis', async ({ page }) => {
  53  |     // Language options should use text labels, not flag emojis
  54  |     const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$|^RU$|^UA$/ }).first();
  55  |     await langButton.click();
  56  | 
  57  |     // Get the language selector content
  58  |     const dropdown = page.locator('[role="menu"]').or(page.locator('[data-testid="language-dropdown"]'));
> 59  |     await dropdown.waitFor({ state: 'visible', timeout: 5000 });
      |                    ^ TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
  60  | 
  61  |     const content = await dropdown.textContent();
  62  | 
  63  |     // Should not contain flag emojis (flag emojis are 4-byte characters like 🇬🇧, 🇨🇿, 🇷🇺, 🇺🇦)
  64  |     // Flag emojis are regional indicator symbol pairs (two characters each)
  65  |     const hasFlagEmojis = /[\u{1F1E6}-\u{1F1FF}]{2}/u.test(content);
  66  |     expect(hasFlagEmojis).toBe(false);
  67  |   });
  68  | });
  69  | 
  70  | test.describe('i18n Language Switching', () => {
  71  |   test('should switch language and update content', async ({ page }) => {
  72  |     await page.goto('/');
  73  | 
  74  |     // Get initial heading (English is default)
  75  |     const heroHeading = page.locator('h1').first();
  76  |     const initialText = await heroHeading.textContent();
  77  | 
  78  |     // Switch to Czech
  79  |     const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$/ }).first();
  80  |     await langButton.click();
  81  | 
  82  |     const czOption = page.locator('button:has-text("CZ")').or(page.locator('button:has-text("Čeština")'));
  83  |     await czOption.first().click();
  84  | 
  85  |     // Wait for content to update
  86  |     await page.waitForTimeout(500);
  87  | 
  88  |     // Verify the heading changed
  89  |     const newText = await heroHeading.textContent();
  90  | 
  91  |     // If the initial was English and we switched to Czech, the text should be different
  92  |     if (initialText !== newText) {
  93  |       expect(newText).not.toBe(initialText);
  94  |     }
  95  |   });
  96  | 
  97  |   test('should reset to English on page reload', async ({ page }) => {
  98  |     await page.goto('/');
  99  | 
  100 |     // Verify initial language is English
  101 |     const enButton = page.locator('header button').filter({ hasText: 'EN' });
  102 |     await expect(enButton.first()).toBeVisible({ timeout: 5000 });
  103 | 
  104 |     // Switch to Czech
  105 |     const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$|^RU$|^UA$/ }).first();
  106 |     await langButton.click();
  107 | 
  108 |     const czOption = page.locator('button:has-text("CZ")').or(page.locator('button:has-text("Čeština")'));
  109 |     await czOption.first().click();
  110 | 
  111 |     // Wait for language to change
  112 |     await page.waitForTimeout(500);
  113 | 
  114 |     // Verify Czech is selected
  115 |     const czButton = page.locator('header button').filter({ hasText: 'CZ' });
  116 |     await expect(czButton.first()).toBeVisible({ timeout: 5000 });
  117 | 
  118 |     // Reload page
  119 |     await page.reload();
  120 | 
  121 |     // Language should reset to English
  122 |     const enButtonAfterReload = page.locator('header button').filter({ hasText: 'EN' });
  123 |     await expect(enButtonAfterReload.first()).toBeVisible({ timeout: 10000 });
  124 |   });
  125 | 
  126 |   test('should always start with English on fresh page load', async ({ page }) => {
  127 |     await page.goto('/');
  128 | 
  129 |     // Verify English is the default language
  130 |     const htmlLang = await page.locator('html').getAttribute('lang');
  131 |     expect(htmlLang).toBe('en');
  132 | 
  133 |     // Verify English is selected in the language selector
  134 |     const enButton = page.locator('header button').filter({ hasText: 'EN' });
  135 |     await expect(enButton.first()).toBeVisible({ timeout: 5000 });
  136 |   });
  137 | 
  138 |   test('should NOT persist language in localStorage', async ({ page }) => {
  139 |     await page.goto('/');
  140 | 
  141 |     // Verify no language is stored in localStorage
  142 |     const storedLang = await page.evaluate(() => localStorage.getItem('language'));
  143 |     expect(storedLang).toBeNull();
  144 | 
  145 |     // Switch to Czech
  146 |     const langButton = page.locator('header button').filter({ hasText: /^EN$|^CZ$/ }).first();
  147 |     await langButton.click();
  148 | 
  149 |     const czOption = page.locator('button:has-text("CZ")').or(page.locator('button:has-text("Čeština")'));
  150 |     await czOption.first().click();
  151 | 
  152 |     await page.waitForTimeout(500);
  153 | 
  154 |     // Verify language is still NOT stored in localStorage
  155 |     const storedLangAfterSwitch = await page.evaluate(() => localStorage.getItem('language'));
  156 |     expect(storedLangAfterSwitch).toBeNull();
  157 |   });
  158 | });
  159 | 
```