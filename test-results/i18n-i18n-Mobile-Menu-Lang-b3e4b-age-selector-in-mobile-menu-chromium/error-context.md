# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: i18n.spec.ts >> i18n Mobile Menu Language Selector >> should have language selector in mobile menu
- Location: tests\e2e\i18n.spec.ts:272:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.count: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - navigation "Main navigation" [ref=e5]:
      - link "UKLID PLUS PRAHA - Home" [ref=e6] [cursor=pointer]:
        - /url: /
        - generic [ref=e9]: U+
      - button "Open menu" [active] [ref=e11]
  - dialog "Mobile navigation menu" [ref=e17]:
    - button "Close menu" [ref=e19]:
      - img [ref=e20]
    - navigation "Mobile navigation" [ref=e22]:
      - list [ref=e23]:
        - listitem [ref=e24]:
          - link "Home" [ref=e25] [cursor=pointer]:
            - /url: /
        - listitem [ref=e26]:
          - link "Services" [ref=e27] [cursor=pointer]:
            - /url: /#services
        - listitem [ref=e28]:
          - link "Pricing" [ref=e29] [cursor=pointer]:
            - /url: /#pricing
        - listitem [ref=e30]:
          - link "About" [ref=e31] [cursor=pointer]:
            - /url: /#about
        - listitem [ref=e32]:
          - link "Contact" [ref=e33] [cursor=pointer]:
            - /url: /#contact
    - generic [ref=e34]:
      - paragraph [ref=e35]: Language
      - generic [ref=e36]:
        - button "English" [pressed] [ref=e37]: EN
        - button "Čeština" [ref=e38]: CZ
        - button "Русский" [ref=e39]: RU
        - button "Українська" [ref=e40]: UA
    - link "Book Now" [ref=e42] [cursor=pointer]:
      - /url: "#contact"
      - img [ref=e43]
      - text: Book Now
    - paragraph [ref=e46]: We respond within 2 hours
  - main [ref=e47]:
    - region "Premium Cleaning Services in Prague" [ref=e48]:
      - generic [ref=e52]:
        - generic [ref=e53]:
          - generic [ref=e55]: U+
          - generic [ref=e56]: UKLID PLUS PRAHA
        - heading "Premium Cleaning Services in Prague" [level=1] [ref=e57]:
          - generic [ref=e58]: Premium Cleaning Services
          - generic [ref=e59]: in Prague
        - paragraph [ref=e60]: Trusted by Expats, Professionals & Airbnb Hosts
        - generic [ref=e61]:
          - generic [ref=e62]:
            - img [ref=e63]
            - generic [ref=e65]: Reliable cleaners
          - generic [ref=e66]:
            - img [ref=e67]
            - generic [ref=e69]: Fast communication
          - generic [ref=e70]:
            - img [ref=e71]
            - generic [ref=e73]: Recurring home-care
        - generic [ref=e74]:
          - link "Book via WhatsApp" [ref=e75] [cursor=pointer]:
            - /url: "#contact"
            - img [ref=e76]
            - text: Book via WhatsApp
          - link "View Prices" [ref=e78] [cursor=pointer]:
            - /url: "#pricing"
      - link "hero.scroll" [ref=e80] [cursor=pointer]:
        - /url: "#pricing"
        - generic [ref=e81]: hero.scroll
        - img [ref=e82]
    - region "Why UKLID PLUS PRAHA" [ref=e84]:
      - generic [ref=e85]:
        - generic [ref=e86]:
          - heading "Why UKLID PLUS PRAHA" [level=2] [ref=e87]
          - paragraph [ref=e88]: Prague's trusted cleaning partner for expats, professionals, and Airbnb hosts
        - generic [ref=e89]:
          - generic [ref=e90]:
            - img [ref=e92]
            - heading "Professional Team" [level=3] [ref=e94]
            - paragraph [ref=e95]: All our cleaners are professionally trained, vetted, and insured. We use quality equipment and eco-friendly products.
          - generic [ref=e96]:
            - img [ref=e98]
            - heading "Reliable Service" [level=3] [ref=e100]
            - paragraph [ref=e101]: Punctual, trustworthy, and consistent. Your cleaner arrives on time, every time. Same cleaner for recurring clients.
          - generic [ref=e102]:
            - img [ref=e104]
            - heading "Flexible Scheduling" [level=3] [ref=e107]
            - paragraph [ref=e108]: Book when it suits you. Weekday, weekend, or evening slots available. Reschedule or cancel without hassle.
          - generic [ref=e109]:
            - img [ref=e111]
            - heading "Satisfaction Guaranteed" [level=3] [ref=e113]
            - paragraph [ref=e114]: Your happiness matters. Not 100% satisfied? We'll re-clean for free within 24 hours. No questions asked.
    - region "Why Choose Us" [ref=e115]:
      - generic [ref=e116]:
        - generic [ref=e117]:
          - heading "Why Choose Us" [level=2] [ref=e118]
          - paragraph [ref=e119]: What makes UKLID PLUS PRAHA the preferred choice
        - generic [ref=e120]:
          - generic [ref=e121]:
            - img [ref=e123]
            - heading "Expat-Focused Service" [level=3] [ref=e125]
            - paragraph [ref=e126]: Serving Prague's international community with professional cleaning services tailored for expats and international residents.
          - generic [ref=e127]:
            - img [ref=e129]
            - heading "Multilingual Communication" [level=3] [ref=e131]
            - paragraph [ref=e132]: Communicate in your language. Our team speaks English, Czech, Russian, and Ukrainian fluently. No language barriers.
          - generic [ref=e133]:
            - img [ref=e135]
            - heading "WhatsApp Booking" [level=3] [ref=e137]
            - paragraph [ref=e138]: Book your cleaning in minutes via WhatsApp. Quick, convenient, and confirmed within 2 hours. No phone calls needed.
          - generic [ref=e139]:
            - img [ref=e141]
            - heading "Recurring Cleaning Plans" [level=3] [ref=e143]
            - paragraph [ref=e144]: Set it and forget it. Weekly, bi-weekly, or monthly cleanings with the same cleaner. Enjoy discounts and priority scheduling.
        - generic [ref=e145]:
          - generic [ref=e146]:
            - img [ref=e148]
            - heading "Airbnb Host Support" [level=3] [ref=e150]
            - paragraph [ref=e151]: Specialized turnover service for Airbnb hosts. Fast response times, quality guaranteed, guest-ready properties.
          - generic [ref=e152]:
            - img [ref=e154]
            - heading "Transparent Pricing" [level=3] [ref=e156]
            - paragraph [ref=e157]: Clear, upfront pricing with no hidden fees. Free quotes provided before booking. Pay by card, cash, or invoice.
          - generic [ref=e158]:
            - img [ref=e160]
            - heading "Fast Response Time" [level=3] [ref=e162]
            - paragraph [ref=e163]: We respond within 2 hours during business hours. Same-day service available for emergencies. Always here when you need us.
    - region "How It Works" [ref=e164]:
      - generic [ref=e165]:
        - generic [ref=e166]:
          - heading "How It Works" [level=2] [ref=e167]
          - paragraph [ref=e168]: 5 simple steps to a spotless home
        - generic [ref=e171]:
          - generic [ref=e172]:
            - generic:
              - generic: "1"
            - heading "Contact Us" [level=3] [ref=e173]
            - paragraph [ref=e174]: Reach out via WhatsApp, phone, or our contact form. Tell us about your cleaning needs and preferred schedule.
          - generic [ref=e175]:
            - generic:
              - generic: "2"
            - heading "Get Your Quote" [level=3] [ref=e176]
            - paragraph [ref=e177]: Receive a clear, transparent quote within 2 hours. No hidden fees, no surprises. Confirm your booking when ready.
          - generic [ref=e178]:
            - generic:
              - generic: "3"
            - heading "Schedule Your Clean" [level=3] [ref=e179]
            - paragraph [ref=e180]: Pick a time that works for you. We offer flexible scheduling including weekends. Same-day service available.
          - generic [ref=e181]:
            - generic:
              - generic: "4"
            - heading "We Clean" [level=3] [ref=e182]
            - paragraph [ref=e183]: Our professional cleaner arrives on time with all necessary equipment. Sit back and enjoy your free time.
          - generic [ref=e184]:
            - generic:
              - generic: "5"
            - heading "Enjoy Your Clean Home" [level=3] [ref=e185]
            - paragraph [ref=e186]: Return to a spotless home. Not satisfied? Contact us within 24 hours for a free re-clean. Guaranteed.
            - link "Book via WhatsApp" [ref=e187] [cursor=pointer]:
              - /url: https://wa.me/?text=Hi!%20I'd%20like%20to%20inquire%20about%20cleaning%20services.%20What's%20your%20availability%3F
              - img [ref=e188]
              - text: Book via WhatsApp
    - region "Built for Expats" [ref=e190]:
      - generic [ref=e192]:
        - generic [ref=e193]:
          - generic [ref=e194]:
            - heading "Built for Expats" [level=2] [ref=e195]
            - paragraph [ref=e196]: We understand the challenges of living abroad
          - list [ref=e197]:
            - listitem [ref=e198]:
              - img [ref=e200]
              - generic [ref=e202]:
                - text: expats.benefits.english.title
                - generic [ref=e203]: "- expats.benefits.english.description"
            - listitem [ref=e204]:
              - img [ref=e206]
              - generic [ref=e208]:
                - text: expats.benefits.scheduling.title
                - generic [ref=e209]: "- expats.benefits.scheduling.description"
            - listitem [ref=e210]:
              - img [ref=e212]
              - generic [ref=e214]:
                - text: expats.benefits.trusted.title
                - generic [ref=e215]: "- expats.benefits.trusted.description"
            - listitem [ref=e216]:
              - img [ref=e218]
              - generic [ref=e220]:
                - text: expats.benefits.recurring.title
                - generic [ref=e221]: "- expats.benefits.recurring.description"
            - listitem [ref=e222]:
              - img [ref=e224]
              - generic [ref=e226]:
                - text: Fast Communication
                - generic [ref=e227]: "- WhatsApp booking, quick responses, and clear communication. No waiting, no confusion."
            - listitem [ref=e228]:
              - img [ref=e230]
              - generic [ref=e232]:
                - text: Quality Guarantee
                - generic [ref=e233]: "- Not satisfied? We'll re-clean for free within 24 hours. Your satisfaction is our priority."
          - link "Book Your First Clean" [ref=e235] [cursor=pointer]:
            - /url: "#contact"
            - img [ref=e236]
            - text: Book Your First Clean
        - generic [ref=e244]:
          - img [ref=e245]
          - paragraph [ref=e247]: Trusted by 2,500+ happy clients
    - region "Our Services" [ref=e249]:
      - generic [ref=e250]:
        - generic [ref=e251]:
          - heading "Our Services" [level=2] [ref=e252]
          - paragraph [ref=e253]: Professional cleaning services tailored to your needs
        - generic [ref=e254]:
          - generic [ref=e255]:
            - img [ref=e257]
            - heading "Standard Cleaning" [level=3] [ref=e259]
            - paragraph [ref=e260]: Regular cleaning service for your home or apartment. Includes dusting, vacuuming, mopping, and bathroom sanitization.
            - list [ref=e261]:
              - listitem [ref=e262]:
                - img [ref=e263]
                - generic [ref=e265]: Kitchen cleaning
              - listitem [ref=e266]:
                - img [ref=e267]
                - generic [ref=e269]: Bathroom sanitization
              - listitem [ref=e270]:
                - img [ref=e271]
                - generic [ref=e273]: Dusting and vacuuming
            - link "Get Quote" [ref=e274] [cursor=pointer]:
              - /url: /pricing#standard
          - generic [ref=e275]:
            - img [ref=e277]
            - heading "Deep Cleaning" [level=3] [ref=e279]
            - paragraph [ref=e280]: Thorough cleaning for move-in/move-out or seasonal refresh. Everything cleaned from top to bottom.
            - list [ref=e281]:
              - listitem [ref=e282]:
                - img [ref=e283]
                - generic [ref=e285]: All standard cleaning items
              - listitem [ref=e286]:
                - img [ref=e287]
                - generic [ref=e289]: Inside cabinets and drawers
              - listitem [ref=e290]:
                - img [ref=e291]
                - generic [ref=e293]: Appliance deep clean
            - link "Get Quote" [ref=e294] [cursor=pointer]:
              - /url: /pricing#deep
          - generic [ref=e295]:
            - img [ref=e297]
            - heading "Airbnb Turnover" [level=3] [ref=e299]
            - paragraph [ref=e300]: Fast, reliable turnover service for Airbnb hosts. Guest-ready properties guaranteed.
            - list [ref=e301]:
              - listitem [ref=e302]:
                - img [ref=e303]
                - generic [ref=e305]: Quick turnaround time
              - listitem [ref=e306]:
                - img [ref=e307]
                - generic [ref=e309]: Fresh linens setup
              - listitem [ref=e310]:
                - img [ref=e311]
                - generic [ref=e313]: Restock essentials
            - link "Learn More" [ref=e314] [cursor=pointer]:
              - /url: /airbnb-hosts
          - generic [ref=e315]:
            - img [ref=e317]
            - heading "Recurring Plans" [level=3] [ref=e320]
            - paragraph [ref=e321]: Scheduled cleaning at your convenience. Weekly, bi-weekly, or monthly options with exclusive benefits.
            - list [ref=e322]:
              - listitem [ref=e323]:
                - img [ref=e324]
                - generic [ref=e326]: Priority scheduling
              - listitem [ref=e327]:
                - img [ref=e328]
                - generic [ref=e330]: Consistent cleaner
              - listitem [ref=e331]:
                - img [ref=e332]
                - generic [ref=e334]: Discounted rates
            - link "View Plans" [ref=e335] [cursor=pointer]:
              - /url: /pricing#plans
          - generic [ref=e336]:
            - img [ref=e338]
            - heading "Ironing Service" [level=3] [ref=e340]
            - paragraph [ref=e341]: Professional ironing service to keep your wardrobe crisp and ready. Available as add-on or standalone.
            - list [ref=e342]:
              - listitem [ref=e343]:
                - img [ref=e344]
                - generic [ref=e346]: Expert ironing
              - listitem [ref=e347]:
                - img [ref=e348]
                - generic [ref=e350]: Steam treatment
              - listitem [ref=e351]:
                - img [ref=e352]
                - generic [ref=e354]: Hanging or folding
            - link "Get Quote" [ref=e355] [cursor=pointer]:
              - /url: /pricing#addons
          - generic [ref=e356]:
            - img [ref=e358]
            - heading "Office Cleaning" [level=3] [ref=e360]
            - paragraph [ref=e361]: Professional office and commercial space cleaning. Flexible scheduling to minimize disruption.
            - list [ref=e362]:
              - listitem [ref=e363]:
                - img [ref=e364]
                - generic [ref=e366]: Desk and surface cleaning
              - listitem [ref=e367]:
                - img [ref=e368]
                - generic [ref=e370]: Common area maintenance
              - listitem [ref=e371]:
                - img [ref=e372]
                - generic [ref=e374]: Kitchenette sanitization
            - link "Get Quote" [ref=e375] [cursor=pointer]:
              - /url: "#contact"
    - region "Recurring Cleaning Plans" [ref=e376]:
      - generic [ref=e377]:
        - generic [ref=e378]:
          - heading "Recurring Cleaning Plans" [level=2] [ref=e379]
          - paragraph [ref=e380]: Save time and money with regular cleaning
        - generic [ref=e381]:
          - generic [ref=e382]:
            - heading "Essential Care" [level=3] [ref=e383]
            - paragraph [ref=e384]: Bi-weekly cleaning with great savings
            - list [ref=e385]:
              - listitem [ref=e386]:
                - img [ref=e387]
                - generic [ref=e389]: Bi-weekly visits
              - listitem [ref=e390]:
                - img [ref=e391]
                - generic [ref=e393]: Same cleaner each time
              - listitem [ref=e394]:
                - img [ref=e395]
                - generic [ref=e397]: Priority scheduling
              - listitem [ref=e398]:
                - img [ref=e399]
                - generic [ref=e401]: recurring.plans.essential.features.3
              - listitem [ref=e402]:
                - img [ref=e403]
                - generic [ref=e405]: recurring.plans.essential.features.4
              - listitem [ref=e406]:
                - img [ref=e407]
                - generic [ref=e409]: recurring.plans.essential.features.5
            - link "Choose Plan" [ref=e410] [cursor=pointer]:
              - /url: "#contact?text=Hi!%20I'm%20interested%20in%20the%20Essential%20Care%20plan."
              - img [ref=e411]
              - text: Choose Plan
          - generic [ref=e413]:
            - generic [ref=e414]: Best Value
            - heading "Premium Care" [level=3] [ref=e415]
            - paragraph [ref=e416]: Weekly cleaning with maximum convenience
            - list [ref=e417]:
              - listitem [ref=e418]:
                - img [ref=e419]
                - generic [ref=e421]: Weekly visits
              - listitem [ref=e422]:
                - img [ref=e423]
                - generic [ref=e425]: Same cleaner each time
              - listitem [ref=e426]:
                - img [ref=e427]
                - generic [ref=e429]: Priority scheduling
              - listitem [ref=e430]:
                - img [ref=e431]
                - generic [ref=e433]: 15% off every visit
              - listitem [ref=e434]:
                - img [ref=e435]
                - generic [ref=e437]: recurring.plans.premium.features.4
              - listitem [ref=e438]:
                - img [ref=e439]
                - generic [ref=e441]: recurring.plans.premium.features.5
              - listitem [ref=e442]:
                - img [ref=e443]
                - generic [ref=e445]: recurring.plans.premium.features.6
            - link "Choose Plan" [ref=e446] [cursor=pointer]:
              - /url: "#contact?text=Hi!%20I'm%20interested%20in%20the%20Premium%20Care%20plan."
              - img [ref=e447]
              - text: Choose Plan
          - generic [ref=e449]:
            - heading "VIP Service" [level=3] [ref=e450]
            - paragraph [ref=e451]: Custom schedule with premium benefits
            - list [ref=e452]:
              - listitem [ref=e453]:
                - img [ref=e454]
                - generic [ref=e456]: Custom frequency
              - listitem [ref=e457]:
                - img [ref=e458]
                - generic [ref=e460]: Dedicated cleaner
              - listitem [ref=e461]:
                - img [ref=e462]
                - generic [ref=e464]: Priority booking
              - listitem [ref=e465]:
                - img [ref=e466]
                - generic [ref=e468]: recurring.plans.vip.features.3
              - listitem [ref=e469]:
                - img [ref=e470]
                - generic [ref=e472]: recurring.plans.vip.features.4
              - listitem [ref=e473]:
                - img [ref=e474]
                - generic [ref=e476]: recurring.plans.vip.features.5
              - listitem [ref=e477]:
                - img [ref=e478]
                - generic [ref=e480]: recurring.plans.vip.features.6
            - link "Choose Plan" [ref=e481] [cursor=pointer]:
              - /url: "#contact?text=Hi!%20I'm%20interested%20in%20the%20VIP%20Service%20plan."
              - img [ref=e482]
              - text: Choose Plan
    - region "Transparent Pricing" [ref=e484]:
      - generic [ref=e485]:
        - generic [ref=e486]:
          - heading "Transparent Pricing" [level=2] [ref=e487]
          - paragraph [ref=e488]: Clear rates for every apartment size
        - generic [ref=e490]:
          - button "Standard" [ref=e491]: Standard
          - button "Deep Clean" [ref=e493]
          - button "Add-ons" [ref=e494]
        - generic [ref=e497]:
          - paragraph [ref=e499]: Regular cleaning for your home. Includes all essentials.
          - table [ref=e501]:
            - rowgroup [ref=e502]:
              - row "Apartment Size From" [ref=e503]:
                - columnheader "Apartment" [ref=e504]
                - columnheader "Size" [ref=e505]
                - columnheader "From" [ref=e506]
            - rowgroup [ref=e507]:
              - row "pricing.categories.standard.items.0.apartment ~35 m² 1,200 CZK" [ref=e508]:
                - cell "pricing.categories.standard.items.0.apartment" [ref=e509]
                - cell "~35 m²" [ref=e510]
                - cell "1,200 CZK" [ref=e511]
              - row "pricing.categories.standard.items.1.apartment ~45 m² 1,350 CZK" [ref=e512]:
                - cell "pricing.categories.standard.items.1.apartment" [ref=e513]
                - cell "~45 m²" [ref=e514]
                - cell "1,350 CZK" [ref=e515]
              - row "pricing.categories.standard.items.2.apartment ~55 m² 1,550 CZK" [ref=e516]:
                - cell "pricing.categories.standard.items.2.apartment" [ref=e517]
                - cell "~55 m²" [ref=e518]
                - cell "1,550 CZK" [ref=e519]
              - row "pricing.categories.standard.items.3.apartment ~65 m² 1,750 CZK" [ref=e520]:
                - cell "pricing.categories.standard.items.3.apartment" [ref=e521]
                - cell "~65 m²" [ref=e522]
                - cell "1,750 CZK" [ref=e523]
              - row "pricing.categories.standard.items.4.apartment ~75 m² 1,950 CZK" [ref=e524]:
                - cell "pricing.categories.standard.items.4.apartment" [ref=e525]
                - cell "~75 m²" [ref=e526]
                - cell "1,950 CZK" [ref=e527]
              - row "pricing.categories.standard.items.5.apartment ~85 m² 2,050 CZK" [ref=e528]:
                - cell "pricing.categories.standard.items.5.apartment" [ref=e529]
                - cell "~85 m²" [ref=e530]
                - cell "2,050 CZK" [ref=e531]
              - row "pricing.categories.standard.items.6.apartment ~95 m² 2,100 CZK" [ref=e532]:
                - cell "pricing.categories.standard.items.6.apartment" [ref=e533]
                - cell "~95 m²" [ref=e534]
                - cell "2,100 CZK" [ref=e535]
              - row "pricing.categories.standard.items.7.apartment 100+ m² from 2,190 CZK" [ref=e536]:
                - cell "pricing.categories.standard.items.7.apartment" [ref=e537]
                - cell "100+ m²" [ref=e538]
                - cell "from 2,190 CZK" [ref=e539]
        - generic [ref=e540]:
          - heading "Special Offers" [level=3] [ref=e541]
          - generic [ref=e542]:
            - generic [ref=e543]:
              - heading "Essential Care" [level=4] [ref=e544]
              - paragraph [ref=e545]: Bi-weekly cleaning with great savings
              - list [ref=e546]:
                - listitem [ref=e547]:
                  - img [ref=e548]
                  - generic [ref=e550]: Bi-weekly visits
                - listitem [ref=e551]:
                  - img [ref=e552]
                  - generic [ref=e554]: Same cleaner each time
                - listitem [ref=e555]:
                  - img [ref=e556]
                  - generic [ref=e558]: Priority scheduling
                - listitem [ref=e559]:
                  - img [ref=e560]
                  - generic [ref=e562]: 50% off 5th visit
              - link "Get Started" [ref=e563] [cursor=pointer]:
                - /url: "#contact"
            - generic [ref=e564]:
              - generic [ref=e565]: Most Popular
              - heading "Premium Care" [level=4] [ref=e566]
              - paragraph [ref=e567]: Weekly cleaning with maximum convenience
              - list [ref=e568]:
                - listitem [ref=e569]:
                  - img [ref=e570]
                  - generic [ref=e572]: Weekly visits
                - listitem [ref=e573]:
                  - img [ref=e574]
                  - generic [ref=e576]: Same cleaner each time
                - listitem [ref=e577]:
                  - img [ref=e578]
                  - generic [ref=e580]: Priority scheduling
                - listitem [ref=e581]:
                  - img [ref=e582]
                  - generic [ref=e584]: 15% off every visit
              - link "Get Started" [ref=e585] [cursor=pointer]:
                - /url: "#contact"
        - generic [ref=e586]:
          - paragraph [ref=e587]: Need a custom quote?
          - link "Get Free Quote" [ref=e588] [cursor=pointer]:
            - /url: https://wa.me/?text=Hi!%20I'd%20like%20to%20get%20a%20quote%20for%20cleaning%20services.
            - img [ref=e589]
            - text: Get Free Quote
    - region "Airbnb Host Partner" [ref=e591]:
      - generic [ref=e593]:
        - generic [ref=e594]:
          - generic [ref=e595]:
            - heading "Airbnb Host Partner" [level=2] [ref=e596]
            - paragraph [ref=e597]: Professional turnover service for Prague hosts
          - list [ref=e598]:
            - listitem [ref=e599]:
              - img [ref=e601]
              - generic [ref=e603]:
                - text: airbnb.benefits.turnover.title
                - generic [ref=e604]: "- airbnb.benefits.turnover.description"
            - listitem [ref=e605]:
              - img [ref=e607]
              - generic [ref=e609]:
                - text: airbnb.benefits.express.title
                - generic [ref=e610]: "- airbnb.benefits.express.description"
            - listitem [ref=e611]:
              - img [ref=e613]
              - generic [ref=e615]:
                - text: airbnb.benefits.sameday.title
                - generic [ref=e616]: "- airbnb.benefits.sameday.description"
            - listitem [ref=e617]:
              - img [ref=e619]
              - generic [ref=e621]:
                - text: Key Handling
                - generic [ref=e622]: "- Key collection and return service available. Flexible access arrangements."
            - listitem [ref=e623]:
              - img [ref=e625]
              - generic [ref=e627]:
                - text: airbnb.benefits.guarantee.title
                - generic [ref=e628]: "- airbnb.benefits.guarantee.description"
            - listitem [ref=e629]:
              - img [ref=e631]
              - generic [ref=e633]:
                - text: airbnb.benefits.priority.title
                - generic [ref=e634]: "- airbnb.benefits.priority.description"
          - link "Partner With Us" [ref=e636] [cursor=pointer]:
            - /url: "#contact"
            - img [ref=e637]
            - text: Partner With Us
        - generic [ref=e645]:
          - img [ref=e646]
          - paragraph [ref=e648]: Trusted by 50+ Airbnb hosts
    - region "Our Work & After" [ref=e650]:
      - generic [ref=e651]:
        - generic [ref=e652]:
          - heading "Our Work & After" [level=2] [ref=e653]
          - paragraph [ref=e654]: See the difference professional cleaning makes
        - generic [ref=e655]:
          - button "All Projects" [pressed] [ref=e656]
          - button "Standard Cleaning" [ref=e657]
          - button "Deep Cleaning" [ref=e658]
          - button "Airbnb Turnover" [ref=e659]
          - button "Office Cleaning" [ref=e660]
          - button "Add-on Services" [ref=e661]
        - generic [ref=e662]:
          - generic [ref=e663]:
            - generic [ref=e664]:
              - generic [ref=e667]:
                - img [ref=e669]
                - text: Before
              - generic [ref=e673]:
                - img [ref=e675]
                - text: After
              - button "View After" [ref=e677]
              - generic [ref=e678]: Before
            - generic [ref=e679]:
              - heading "Kitchen Deep Clean" [level=3] [ref=e680]
              - paragraph [ref=e681]: Deep Cleaning
          - generic [ref=e682]:
            - generic [ref=e683]:
              - generic [ref=e686]:
                - img [ref=e688]
                - text: Before
              - generic [ref=e692]:
                - img [ref=e694]
                - text: After
              - button "View After" [ref=e696]
              - generic [ref=e697]: Before
            - generic [ref=e698]:
              - heading "Bathroom Sanitization" [level=3] [ref=e699]
              - paragraph [ref=e700]: Deep Cleaning
          - generic [ref=e701]:
            - generic [ref=e702]:
              - generic [ref=e705]:
                - img [ref=e707]
                - text: Before
              - generic [ref=e711]:
                - img [ref=e713]
                - text: After
              - button "View After" [ref=e715]
              - generic [ref=e716]: Before
            - generic [ref=e717]:
              - heading "Living Room Standard Clean" [level=3] [ref=e718]
              - paragraph [ref=e719]: Standard Cleaning
          - generic [ref=e720]:
            - generic [ref=e721]:
              - generic [ref=e724]:
                - img [ref=e726]
                - text: Before
              - generic [ref=e730]:
                - img [ref=e732]
                - text: After
              - button "View After" [ref=e734]
              - generic [ref=e735]: Before
            - generic [ref=e736]:
              - heading "Bedroom Refresh" [level=3] [ref=e737]
              - paragraph [ref=e738]: Standard Cleaning
          - generic [ref=e739]:
            - generic [ref=e740]:
              - generic [ref=e743]:
                - img [ref=e745]
                - text: Before
              - generic [ref=e749]:
                - img [ref=e751]
                - text: After
              - button "View After" [ref=e753]
              - generic [ref=e754]: Before
            - generic [ref=e755]:
              - heading "Airbnb Turnover Service" [level=3] [ref=e756]
              - paragraph [ref=e757]: Airbnb Turnover
          - generic [ref=e758]:
            - generic [ref=e759]:
              - generic [ref=e762]:
                - img [ref=e764]
                - text: Before
              - generic [ref=e768]:
                - img [ref=e770]
                - text: After
              - button "View After" [ref=e772]
              - generic [ref=e773]: Before
            - generic [ref=e774]:
              - heading "Office Cleaning" [level=3] [ref=e775]
              - paragraph [ref=e776]: Office Cleaning
          - generic [ref=e777]:
            - generic [ref=e778]:
              - generic [ref=e781]:
                - img [ref=e783]
                - text: Before
              - generic [ref=e787]:
                - img [ref=e789]
                - text: After
              - button "View After" [ref=e791]
              - generic [ref=e792]: Before
            - generic [ref=e793]:
              - heading "Oven Deep Clean" [level=3] [ref=e794]
              - paragraph [ref=e795]: Add-on Services
          - generic [ref=e796]:
            - generic [ref=e797]:
              - generic [ref=e800]:
                - img [ref=e802]
                - text: Before
              - generic [ref=e806]:
                - img [ref=e808]
                - text: After
              - button "View After" [ref=e810]
              - generic [ref=e811]: Before
            - generic [ref=e812]:
              - heading "Window Cleaning" [level=3] [ref=e813]
              - paragraph [ref=e814]: Add-on Services
    - region "Google Reviews" [ref=e815]:
      - generic [ref=e816]:
        - generic [ref=e817]:
          - heading "Google Reviews" [level=2] [ref=e818]
          - paragraph [ref=e819]: What our clients say about us
        - generic [ref=e821]:
          - img [ref=e822]
          - generic [ref=e827]:
            - generic [ref=e828]:
              - generic [ref=e829]:
                - img [ref=e830]
                - img [ref=e832]
                - img [ref=e834]
                - img [ref=e836]
                - img [ref=e838]
              - generic [ref=e840]: "4.9"
            - paragraph [ref=e841]: Based on 10 reviews
            - link "See all reviews on Google" [ref=e842] [cursor=pointer]:
              - /url: https://g.page/r/CXXXXX/review
              - generic [ref=e843]: See all reviews on Google
              - img [ref=e844]
        - generic [ref=e846]:
          - generic [ref=e847]:
            - generic [ref=e848]:
              - generic [ref=e849]:
                - generic [ref=e851]: J
                - generic [ref=e852]: John D.
              - generic [ref=e853]:
                - img [ref=e854]
                - img [ref=e856]
                - img [ref=e858]
                - img [ref=e860]
                - img [ref=e862]
            - paragraph [ref=e864]: “Exceptional service! The team was professional, punctual, and thorough. My apartment has never been cleaner. Highly recommend UKLID PLUS for anyone in Prague.”
            - paragraph [ref=e865]: January 15, 2024
          - generic [ref=e866]:
            - generic [ref=e867]:
              - generic [ref=e868]:
                - generic [ref=e870]: M
                - generic [ref=e871]: Maria S.
              - generic [ref=e872]:
                - img [ref=e873]
                - img [ref=e875]
                - img [ref=e877]
                - img [ref=e879]
                - img [ref=e881]
            - paragraph [ref=e883]: “Best cleaning service I've used in Prague. They speak English, show up on time, and do a fantastic job. The WhatsApp booking is so convenient!”
            - paragraph [ref=e884]: January 10, 2024
          - generic [ref=e885]:
            - generic [ref=e886]:
              - generic [ref=e887]:
                - generic [ref=e889]: P
                - generic [ref=e890]: Petr K.
              - generic [ref=e891]:
                - img [ref=e892]
                - img [ref=e894]
                - img [ref=e896]
                - img [ref=e898]
                - img [ref=e900]
            - paragraph [ref=e902]: “Skvělá služba! Vždy včas, důkladné úklid a příjemný personál. Rozhodně doporučuji.”
            - paragraph [ref=e903]: January 8, 2024
        - generic [ref=e905]:
          - generic [ref=e906]:
            - img [ref=e907]
            - generic [ref=e909]: Growing Our Reputation
          - paragraph [ref=e910]: We're building our reputation! Help us grow by leaving a review after your cleaning.
        - generic [ref=e911]:
          - link "See All Reviews" [ref=e912] [cursor=pointer]:
            - /url: https://g.page/r/CXXXXX/review
            - generic [ref=e913]: See All Reviews
            - img [ref=e914]
          - link "Leave a Review" [ref=e916] [cursor=pointer]:
            - /url: https://facebook.com/uklidpluspraha
            - generic [ref=e917]: Leave a Review
            - img [ref=e918]
    - region "Client Testimonials" [ref=e920]:
      - generic [ref=e921]:
        - generic [ref=e922]:
          - heading "Client Testimonials" [level=2] [ref=e923]
          - paragraph [ref=e924]: Hear from our satisfied clients
        - generic [ref=e925]:
          - generic [ref=e926]:
            - img [ref=e928]
            - generic [ref=e930]:
              - img [ref=e931]
              - img [ref=e933]
              - img [ref=e935]
              - img [ref=e937]
              - img [ref=e939]
            - blockquote [ref=e941]: “I've been using UKLID PLUS for my apartment in Prague 2 for over a year. Their service is impeccable, and I love that I can communicate in English. The recurring plan has made my life so much easier.”
            - generic [ref=e942]:
              - generic [ref=e944]: S
              - generic [ref=e945]:
                - paragraph [ref=e946]: Sarah M.
                - paragraph [ref=e947]: Marketing Manager, Prague 2
          - generic [ref=e948]:
            - img [ref=e950]
            - generic [ref=e952]:
              - img [ref=e953]
              - img [ref=e955]
              - img [ref=e957]
              - img [ref=e959]
              - img [ref=e961]
            - blockquote [ref=e963]: “As an Airbnb host, I need reliable turnover cleaning. UKLID PLUS always delivers - quick response, thorough cleaning, and my guests always comment on how clean the apartment is. Highly recommend!”
            - generic [ref=e964]:
              - generic [ref=e966]: M
              - generic [ref=e967]:
                - paragraph [ref=e968]: Michael T.
                - paragraph [ref=e969]: Airbnb Superhost, Prague 1
          - generic [ref=e970]:
            - img [ref=e972]
            - generic [ref=e974]:
              - img [ref=e975]
              - img [ref=e977]
              - img [ref=e979]
              - img [ref=e981]
              - img [ref=e983]
            - blockquote [ref=e985]: “Moving to Prague from the UK, I was worried about finding services in English. UKLID PLUS made everything easy. Their deep cleaning service prepared my new apartment perfectly. Professional and friendly.”
            - generic [ref=e986]:
              - generic [ref=e988]: J
              - generic [ref=e989]:
                - paragraph [ref=e990]: James H.
                - paragraph [ref=e991]: Software Developer, Prague 5
    - region "Frequently Asked Questions" [ref=e992]:
      - generic [ref=e994]:
        - generic [ref=e995]:
          - heading "Frequently Asked Questions" [level=2] [ref=e996]
          - paragraph [ref=e997]: Find answers to common questions
        - generic [ref=e999]:
          - generic [ref=e1000]:
            - button "How do I book a cleaning service?" [expanded] [ref=e1001]:
              - generic [ref=e1002]: How do I book a cleaning service?
              - img [ref=e1003]
            - paragraph [ref=e1007]: You can book easily via WhatsApp, phone, or our contact form. Send us a message with your cleaning needs, and we'll respond within 2 hours with a quote and available time slots.
          - button "How much does cleaning cost?" [ref=e1009]:
            - generic [ref=e1010]: How much does cleaning cost?
            - img [ref=e1011]
          - button "Is there a minimum booking time?" [ref=e1014]:
            - generic [ref=e1015]: Is there a minimum booking time?
            - img [ref=e1016]
          - button "Do you offer same-day service?" [ref=e1019]:
            - generic [ref=e1020]: Do you offer same-day service?
            - img [ref=e1021]
          - button "What payment methods do you accept?" [ref=e1024]:
            - generic [ref=e1025]: What payment methods do you accept?
            - img [ref=e1026]
          - button "What's included in standard cleaning?" [ref=e1029]:
            - generic [ref=e1030]: What's included in standard cleaning?
            - img [ref=e1031]
          - button "What's the difference between standard and deep cleaning?" [ref=e1034]:
            - generic [ref=e1035]: What's the difference between standard and deep cleaning?
            - img [ref=e1036]
        - generic [ref=e1038]:
          - paragraph [ref=e1039]: Still have questions? Contact us via WhatsApp for quick answers.
          - link "Contact on WhatsApp" [ref=e1040] [cursor=pointer]:
            - /url: "#contact"
            - img [ref=e1041]
            - text: Contact on WhatsApp
    - region "Service Areas" [ref=e1043]:
      - generic [ref=e1044]:
        - generic [ref=e1045]:
          - heading "Service Areas" [level=2] [ref=e1046]
          - paragraph [ref=e1047]: We serve Prague and surrounding areas
        - generic [ref=e1048]:
          - generic [ref=e1049]:
            - heading "Prague 1" [level=3] [ref=e1050]
            - list [ref=e1051]:
              - listitem [ref=e1052]:
                - img [ref=e1053]
                - generic [ref=e1056]: Old Town (Staré Město)
              - listitem [ref=e1057]:
                - img [ref=e1058]
                - generic [ref=e1061]: New Town (Nové Město)
              - listitem [ref=e1062]:
                - img [ref=e1063]
                - generic [ref=e1066]: Lesser Town (Malá Strana)
              - listitem [ref=e1067]:
                - img [ref=e1068]
                - generic [ref=e1071]: Hradčany
              - listitem [ref=e1072]:
                - img [ref=e1073]
                - generic [ref=e1076]: Josefov
          - generic [ref=e1077]:
            - heading "Prague 2" [level=3] [ref=e1078]
            - list [ref=e1079]:
              - listitem [ref=e1080]:
                - img [ref=e1081]
                - generic [ref=e1084]: Vinohrady
              - listitem [ref=e1085]:
                - img [ref=e1086]
                - generic [ref=e1089]: Vyšehrad
              - listitem [ref=e1090]:
                - img [ref=e1091]
                - generic [ref=e1094]: Parts of New Town
          - generic [ref=e1095]:
            - heading "Prague 5" [level=3] [ref=e1096]
            - list [ref=e1097]:
              - listitem [ref=e1098]:
                - img [ref=e1099]
                - generic [ref=e1102]: Smíchov
              - listitem [ref=e1103]:
                - img [ref=e1104]
                - generic [ref=e1107]: Anděl
              - listitem [ref=e1108]:
                - img [ref=e1109]
                - generic [ref=e1112]: Klárov
              - listitem [ref=e1113]:
                - img [ref=e1114]
                - generic [ref=e1117]: Malvazinky
          - generic [ref=e1118]:
            - heading "Prague 6" [level=3] [ref=e1119]
            - list [ref=e1120]:
              - listitem [ref=e1121]:
                - img [ref=e1122]
                - generic [ref=e1125]: Dejvice
              - listitem [ref=e1126]:
                - img [ref=e1127]
                - generic [ref=e1130]: Bubeneč
              - listitem [ref=e1131]:
                - img [ref=e1132]
                - generic [ref=e1135]: Střešovice
              - listitem [ref=e1136]:
                - img [ref=e1137]
                - generic [ref=e1140]: Hradčany
              - listitem [ref=e1141]:
                - img [ref=e1142]
                - generic [ref=e1145]: Veleslavín
          - generic [ref=e1146]:
            - heading "Prague 7" [level=3] [ref=e1147]
            - list [ref=e1148]:
              - listitem [ref=e1149]:
                - img [ref=e1150]
                - generic [ref=e1153]: Letná
              - listitem [ref=e1154]:
                - img [ref=e1155]
                - generic [ref=e1158]: Holešovice
              - listitem [ref=e1159]:
                - img [ref=e1160]
                - generic [ref=e1163]: Bubny
        - generic [ref=e1164]:
          - paragraph [ref=e1165]: Other areas available on request
          - link "Contact Us for Other Areas" [ref=e1166] [cursor=pointer]:
            - /url: https://wa.me/?text=Hi!%20I'd%20like%20to%20inquire%20about%20cleaning%20services%20in%20my%20area.
            - img [ref=e1167]
            - text: Contact Us for Other Areas
    - region "Get in Touch" [ref=e1169]:
      - generic [ref=e1170]:
        - generic [ref=e1171]:
          - heading "Get in Touch" [level=2] [ref=e1172]
          - paragraph [ref=e1173]: Ready to book your cleaning? Contact us via your preferred channel
        - generic [ref=e1174]:
          - generic [ref=e1175]:
            - generic [ref=e1178]:
              - img [ref=e1181]
              - generic [ref=e1183]:
                - generic [ref=e1184]:
                  - heading "WhatsApp" [level=3] [ref=e1185]
                  - generic [ref=e1186]: Fastest response
                - paragraph [ref=e1187]: Message us directly for quick booking and instant replies
                - link "Send Message" [ref=e1189] [cursor=pointer]:
                  - /url: "#contact?text=Hi!%20I'd%20like%20to%20book%20a%20cleaning%20service.%20Please%20let%20me%20know%20your%20availability."
                  - img [ref=e1190]
                  - generic [ref=e1192]: Send Message
            - generic [ref=e1193]:
              - link "Messenger Chat with us on Facebook" [ref=e1194] [cursor=pointer]:
                - /url: https://m.me/uklidpluspraha
                - generic [ref=e1195]:
                  - img [ref=e1197]
                  - generic [ref=e1199]:
                    - heading "Messenger" [level=4] [ref=e1200]
                    - paragraph [ref=e1201]: Chat with us on Facebook
              - link "Instagram See our work & reviews" [ref=e1202] [cursor=pointer]:
                - /url: https://www.instagram.com/uklid.plus.praha/
                - generic [ref=e1203]:
                  - img [ref=e1205]
                  - generic [ref=e1207]:
                    - heading "Instagram" [level=4] [ref=e1208]
                    - paragraph [ref=e1209]: See our work & reviews
            - generic [ref=e1210]:
              - generic [ref=e1211]:
                - generic [ref=e1212]:
                  - img [ref=e1213]
                  - heading "Service Area" [level=4] [ref=e1216]
                - paragraph [ref=e1217]: We serve Prague and surrounding areas
              - generic [ref=e1218]:
                - generic [ref=e1219]:
                  - img [ref=e1220]
                  - heading "Languages" [level=4] [ref=e1222]
                - paragraph [ref=e1223]: English, Czech, Russian, Ukrainian
          - generic [ref=e1225]:
            - heading "Send us a Message" [level=3] [ref=e1226]
            - generic [ref=e1227]:
              - generic [ref=e1228]:
                - generic [ref=e1229]: Your Name
                - textbox "Your Name" [ref=e1230]:
                  - /placeholder: Enter your name
              - generic [ref=e1231]:
                - generic [ref=e1232]: Email Address
                - textbox "Email Address" [ref=e1233]:
                  - /placeholder: Enter your email
              - generic [ref=e1234]:
                - generic [ref=e1235]: Message
                - textbox "Message" [ref=e1236]:
                  - /placeholder: Tell us about your cleaning needs...
              - button "Send Message" [ref=e1237]
  - contentinfo [ref=e1238]:
    - generic [ref=e1239]:
      - generic [ref=e1240]:
        - generic [ref=e1241]:
          - generic [ref=e1242]:
            - generic [ref=e1244]: U+
            - generic [ref=e1245]: UKLID PLUS PRAHA
          - paragraph [ref=e1246]: Professional cleaning agency serving Prague's international community. Multilingual support in English, Czech, Russian, and Ukrainian.
          - generic [ref=e1247]:
            - link "Follow us on Instagram" [ref=e1248] [cursor=pointer]:
              - /url: https://www.instagram.com/uklid.plus.praha/
              - img [ref=e1249]
            - link "Contact us on WhatsApp" [ref=e1251] [cursor=pointer]:
              - /url: https://wa.me/
              - img [ref=e1252]
            - link "Message us on Messenger" [ref=e1254] [cursor=pointer]:
              - /url: https://m.me/uklidpluspraha
              - img [ref=e1255]
        - generic [ref=e1257]:
          - heading "Navigation" [level=3] [ref=e1258]
          - list [ref=e1259]:
            - listitem [ref=e1260]:
              - link "Home" [ref=e1261] [cursor=pointer]:
                - /url: /
            - listitem [ref=e1262]:
              - link "Services" [ref=e1263] [cursor=pointer]:
                - /url: /#services
            - listitem [ref=e1264]:
              - link "Pricing" [ref=e1265] [cursor=pointer]:
                - /url: /#pricing
            - listitem [ref=e1266]:
              - link "nav.privacy" [ref=e1267] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e1268]:
              - link "nav.terms" [ref=e1269] [cursor=pointer]:
                - /url: /terms
        - generic [ref=e1270]:
          - heading "Contact" [level=3] [ref=e1271]
          - list [ref=e1272]:
            - listitem [ref=e1273]:
              - link "WhatsApp" [ref=e1274] [cursor=pointer]:
                - /url: https://wa.me/
                - img [ref=e1275]
                - text: WhatsApp
            - listitem [ref=e1277]:
              - link "info@uklidpluspraha.cz" [ref=e1278] [cursor=pointer]:
                - /url: mailto:info@uklidpluspraha.cz
                - img [ref=e1279]
                - text: info@uklidpluspraha.cz
            - listitem [ref=e1281]:
              - link "Instagram" [ref=e1282] [cursor=pointer]:
                - /url: https://www.instagram.com/uklid.plus.praha/
                - img [ref=e1283]
                - text: Instagram
        - generic [ref=e1285]:
          - heading "Language" [level=3] [ref=e1286]
          - generic [ref=e1287]:
            - button "Switch to English" [ref=e1288]: EN
            - button "Switch to Čeština" [ref=e1289]: CZ
            - button "Switch to Русский" [ref=e1290]: RU
            - button "Switch to Українська" [ref=e1291]: UA
      - generic [ref=e1293]:
        - paragraph [ref=e1294]: © 2026 UKLID PLUS PRAHA. All rights reserved.
        - paragraph [ref=e1295]: Professional cleaning services for expats in Prague
  - link "Chat with us on WhatsApp" [ref=e1296] [cursor=pointer]:
    - /url: "#contact?text=Hi!%20I%20would%20like%20to%20book%20a%20cleaning%20service."
    - img [ref=e1298]
```

# Test source

```ts
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
  235 |     // Get page content
  236 |     const content = await page.content();
  237 | 
  238 |     // Should not contain raw translation keys like "hero.heading" or "services.title"
  239 |     // Translation keys typically follow pattern: namespace.key or namespace.key.subkey
  240 |     const hasRawKeys = /['"]?[a-z]+\.[a-z]+(\.[a-z0-9_-]+)*['"]?/i.test(content);
  241 | 
  242 |     // This is a loose check - we verify no obvious translation key patterns
  243 |     // appear as visible content
  244 |     expect(hasRawKeys).toBe(false);
  245 |   });
  246 | 
  247 |   test('should display translated text for all sections', async ({ page }) => {
  248 |     await page.goto('/');
  249 | 
  250 |     // Scroll through the page to trigger lazy-loaded content
  251 |     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  252 |     await page.waitForTimeout(500);
  253 |     await page.evaluate(() => window.scrollTo(0, 0));
  254 | 
  255 |     // Check main sections have content
  256 |     const sections = ['#hero', '#why-us', '#services', '#pricing', '#contact'];
  257 | 
  258 |     for (const section of sections) {
  259 |       const sectionEl = page.locator(section);
  260 |       if (await sectionEl.count() > 0) {
  261 |         const text = await sectionEl.textContent();
  262 |         // Section should have substantial text content (translated)
  263 |         expect(text?.length).toBeGreaterThan(50);
  264 |       }
  265 |     }
  266 |   });
  267 | });
  268 | 
  269 | test.describe('i18n Mobile Menu Language Selector', () => {
  270 |   test.use({ viewport: { width: 375, height: 667 } });
  271 | 
  272 |   test('should have language selector in mobile menu', async ({ page }) => {
  273 |     await page.goto('/');
  274 | 
  275 |     // Open mobile menu
  276 |     const menuButton = page.locator('button[aria-label*="menu"]').or(
  277 |       page.locator('button[aria-label*="Menu"]')
  278 |     ).or(
  279 |       page.locator('button').filter({ hasText: /^☰$/ })
  280 |     );
  281 | 
  282 |     if (await menuButton.count() > 0) {
  283 |       await menuButton.first().click();
  284 | 
  285 |       // Check for language options in mobile menu
  286 |       const mobileMenu = page.locator('[role="dialog"]').or(page.locator('[data-testid="mobile-menu"]'));
  287 | 
  288 |       // Mobile menu should have language selector or options
  289 |       const langOptions = mobileMenu.locator('button:has-text("EN")').or(
  290 |         mobileMenu.locator('button:has-text("CZ")')
  291 |       );
  292 | 
> 293 |       if (await langOptions.count() > 0) {
      |                             ^ Error: locator.count: Test timeout of 30000ms exceeded.
  294 |         await expect(langOptions.first()).toBeVisible();
  295 |       }
  296 |     }
  297 |   });
  298 | });
```