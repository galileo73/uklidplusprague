# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact.spec.ts >> Contact and WhatsApp >> WhatsApp button should have correct phone format
- Location: tests\e2e\contact.spec.ts:51:3

# Error details

```
Error: expect(received).toMatch(expected)

Expected pattern: /wa\.me\/\d+/
Received string:  "https://wa.me/?text=Hi!%20I'd%20like%20to%20inquire%20about%20cleaning%20services.%20What's%20your%20availability%3F"
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
        - button "Select language" [ref=e19]:
          - generic [ref=e20]: EN
          - img [ref=e21]
        - link "Book Now" [ref=e24] [cursor=pointer]:
          - /url: "#contact"
          - img [ref=e25]
          - text: Book Now
  - main [ref=e27]:
    - region "Premium Cleaning Services in Prague" [ref=e28]:
      - generic [ref=e32]:
        - generic [ref=e33]:
          - generic [ref=e35]: U+
          - generic [ref=e36]: UKLID PLUS PRAHA
        - heading "Premium Cleaning Services in Prague" [level=1] [ref=e37]:
          - generic [ref=e38]: Premium Cleaning Services
          - generic [ref=e39]: in Prague
        - paragraph [ref=e40]: Trusted by Expats, Professionals & Airbnb Hosts
        - generic [ref=e41]:
          - generic [ref=e42]:
            - img [ref=e43]
            - generic [ref=e45]: Reliable cleaners
          - generic [ref=e46]:
            - img [ref=e47]
            - generic [ref=e49]: Fast communication
          - generic [ref=e50]:
            - img [ref=e51]
            - generic [ref=e53]: Recurring home-care
        - generic [ref=e54]:
          - link "Book via WhatsApp" [ref=e55] [cursor=pointer]:
            - /url: "#contact"
            - img [ref=e56]
            - text: Book via WhatsApp
          - link "View Prices" [ref=e58] [cursor=pointer]:
            - /url: "#pricing"
      - link "Scroll" [ref=e60] [cursor=pointer]:
        - /url: "#pricing"
        - generic [ref=e61]: Scroll
        - img [ref=e62]
    - region "Why UKLID PLUS PRAHA" [ref=e64]:
      - generic [ref=e65]:
        - generic [ref=e66]:
          - heading "Why UKLID PLUS PRAHA" [level=2] [ref=e67]
          - paragraph [ref=e68]: Prague's trusted cleaning partner for expats, professionals, and Airbnb hosts
        - generic [ref=e69]:
          - generic [ref=e70]:
            - img [ref=e72]
            - heading "Professional Team" [level=3] [ref=e74]
            - paragraph [ref=e75]: All our cleaners are professionally trained, vetted, and insured. We use quality equipment and eco-friendly products.
          - generic [ref=e76]:
            - img [ref=e78]
            - heading "Reliable Service" [level=3] [ref=e80]
            - paragraph [ref=e81]: Punctual, trustworthy, and consistent. Your cleaner arrives on time, every time. Same cleaner for recurring clients.
          - generic [ref=e82]:
            - img [ref=e84]
            - heading "Flexible Scheduling" [level=3] [ref=e87]
            - paragraph [ref=e88]: Book when it suits you. Weekday, weekend, or evening slots available. Reschedule or cancel without hassle.
          - generic [ref=e89]:
            - img [ref=e91]
            - heading "Satisfaction Guaranteed" [level=3] [ref=e93]
            - paragraph [ref=e94]: Your happiness matters. Not 100% satisfied? We'll re-clean for free within 24 hours. No questions asked.
    - region "Why Choose Us" [ref=e95]:
      - generic [ref=e96]:
        - generic [ref=e97]:
          - heading "Why Choose Us" [level=2] [ref=e98]
          - paragraph [ref=e99]: What makes UKLID PLUS PRAHA the preferred choice
        - generic [ref=e100]:
          - generic [ref=e101]:
            - img [ref=e103]
            - heading "Expat-Focused Service" [level=3] [ref=e105]
            - paragraph [ref=e106]: Serving Prague's international community with professional cleaning services tailored for expats and international residents.
          - generic [ref=e107]:
            - img [ref=e109]
            - heading "Multilingual Communication" [level=3] [ref=e111]
            - paragraph [ref=e112]: Communicate in your language. Our team speaks English, Czech, Russian, and Ukrainian fluently. No language barriers.
          - generic [ref=e113]:
            - img [ref=e115]
            - heading "WhatsApp Booking" [level=3] [ref=e117]
            - paragraph [ref=e118]: Book your cleaning in minutes via WhatsApp. Quick, convenient, and confirmed within 2 hours. No phone calls needed.
          - generic [ref=e119]:
            - img [ref=e121]
            - heading "Recurring Cleaning Plans" [level=3] [ref=e123]
            - paragraph [ref=e124]: Set it and forget it. Weekly, bi-weekly, or monthly cleanings with the same cleaner. Enjoy discounts and priority scheduling.
        - generic [ref=e125]:
          - generic [ref=e126]:
            - img [ref=e128]
            - heading "Airbnb Host Support" [level=3] [ref=e130]
            - paragraph [ref=e131]: Specialized turnover service for Airbnb hosts. Fast response times, quality guaranteed, guest-ready properties.
          - generic [ref=e132]:
            - img [ref=e134]
            - heading "Transparent Pricing" [level=3] [ref=e136]
            - paragraph [ref=e137]: Clear, upfront pricing with no hidden fees. Free quotes provided before booking. Pay by card, cash, or invoice.
          - generic [ref=e138]:
            - img [ref=e140]
            - heading "Fast Response Time" [level=3] [ref=e142]
            - paragraph [ref=e143]: We respond within 2 hours during business hours. Same-day service available for emergencies. Always here when you need us.
    - region "How It Works" [ref=e144]:
      - generic [ref=e145]:
        - generic [ref=e146]:
          - heading "How It Works" [level=2] [ref=e147]
          - paragraph [ref=e148]: 5 simple steps to a spotless home
        - generic [ref=e151]:
          - generic [ref=e152]:
            - generic:
              - generic: "1"
            - heading "Contact Us" [level=3] [ref=e153]
            - paragraph [ref=e154]: Reach out via WhatsApp, phone, or our contact form. Tell us about your cleaning needs and preferred schedule.
          - generic [ref=e155]:
            - generic:
              - generic: "2"
            - heading "Get Your Quote" [level=3] [ref=e156]
            - paragraph [ref=e157]: Receive a clear, transparent quote within 2 hours. No hidden fees, no surprises. Confirm your booking when ready.
          - generic [ref=e158]:
            - generic:
              - generic: "3"
            - heading "Schedule Your Clean" [level=3] [ref=e159]
            - paragraph [ref=e160]: Pick a time that works for you. We offer flexible scheduling including weekends. Same-day service available.
          - generic [ref=e161]:
            - generic:
              - generic: "4"
            - heading "We Clean" [level=3] [ref=e162]
            - paragraph [ref=e163]: Our professional cleaner arrives on time with all necessary equipment. Sit back and enjoy your free time.
          - generic [ref=e164]:
            - generic:
              - generic: "5"
            - heading "Enjoy Your Clean Home" [level=3] [ref=e165]
            - paragraph [ref=e166]: Return to a spotless home. Not satisfied? Contact us within 24 hours for a free re-clean. Guaranteed.
            - link "Book via WhatsApp" [ref=e167] [cursor=pointer]:
              - /url: https://wa.me/?text=Hi!%20I'd%20like%20to%20inquire%20about%20cleaning%20services.%20What's%20your%20availability%3F
              - img [ref=e168]
              - text: Book via WhatsApp
    - region "Built for Expats" [ref=e170]:
      - generic [ref=e172]:
        - generic [ref=e173]:
          - generic [ref=e174]:
            - heading "Built for Expats" [level=2] [ref=e175]
            - paragraph [ref=e176]: We understand the challenges of living abroad
          - list [ref=e177]:
            - listitem [ref=e178]:
              - img [ref=e180]
              - generic [ref=e182]:
                - text: expats.benefits.english.title
                - generic [ref=e183]: "- expats.benefits.english.description"
            - listitem [ref=e184]:
              - img [ref=e186]
              - generic [ref=e188]:
                - text: expats.benefits.scheduling.title
                - generic [ref=e189]: "- expats.benefits.scheduling.description"
            - listitem [ref=e190]:
              - img [ref=e192]
              - generic [ref=e194]:
                - text: expats.benefits.trusted.title
                - generic [ref=e195]: "- expats.benefits.trusted.description"
            - listitem [ref=e196]:
              - img [ref=e198]
              - generic [ref=e200]:
                - text: expats.benefits.recurring.title
                - generic [ref=e201]: "- expats.benefits.recurring.description"
            - listitem [ref=e202]:
              - img [ref=e204]
              - generic [ref=e206]:
                - text: Fast Communication
                - generic [ref=e207]: "- WhatsApp booking, quick responses, and clear communication. No waiting, no confusion."
            - listitem [ref=e208]:
              - img [ref=e210]
              - generic [ref=e212]:
                - text: Quality Guarantee
                - generic [ref=e213]: "- Not satisfied? We'll re-clean for free within 24 hours. Your satisfaction is our priority."
          - link "Book Your First Clean" [ref=e215] [cursor=pointer]:
            - /url: "#contact"
            - img [ref=e216]
            - text: Book Your First Clean
        - generic [ref=e224]:
          - img [ref=e225]
          - paragraph [ref=e227]: Trusted by 2,500+ happy clients
    - region "Our Services" [ref=e229]:
      - generic [ref=e230]:
        - generic [ref=e231]:
          - heading "Our Services" [level=2] [ref=e232]
          - paragraph [ref=e233]: Professional cleaning services tailored to your needs
        - generic [ref=e234]:
          - generic [ref=e235]:
            - img [ref=e237]
            - heading "Standard Cleaning" [level=3] [ref=e239]
            - paragraph [ref=e240]: Regular cleaning service for your home or apartment. Includes dusting, vacuuming, mopping, and bathroom sanitization.
            - list [ref=e241]:
              - listitem [ref=e242]:
                - img [ref=e243]
                - generic [ref=e245]: Kitchen cleaning
              - listitem [ref=e246]:
                - img [ref=e247]
                - generic [ref=e249]: Bathroom sanitization
              - listitem [ref=e250]:
                - img [ref=e251]
                - generic [ref=e253]: Dusting and vacuuming
            - link "Get Quote" [ref=e254] [cursor=pointer]:
              - /url: /pricing#standard
          - generic [ref=e255]:
            - img [ref=e257]
            - heading "Deep Cleaning" [level=3] [ref=e259]
            - paragraph [ref=e260]: Thorough cleaning for move-in/move-out or seasonal refresh. Everything cleaned from top to bottom.
            - list [ref=e261]:
              - listitem [ref=e262]:
                - img [ref=e263]
                - generic [ref=e265]: All standard cleaning items
              - listitem [ref=e266]:
                - img [ref=e267]
                - generic [ref=e269]: Inside cabinets and drawers
              - listitem [ref=e270]:
                - img [ref=e271]
                - generic [ref=e273]: Appliance deep clean
            - link "Get Quote" [ref=e274] [cursor=pointer]:
              - /url: /pricing#deep
          - generic [ref=e275]:
            - img [ref=e277]
            - heading "Airbnb Turnover" [level=3] [ref=e279]
            - paragraph [ref=e280]: Fast, reliable turnover service for Airbnb hosts. Guest-ready properties guaranteed.
            - list [ref=e281]:
              - listitem [ref=e282]:
                - img [ref=e283]
                - generic [ref=e285]: Quick turnaround time
              - listitem [ref=e286]:
                - img [ref=e287]
                - generic [ref=e289]: Fresh linens setup
              - listitem [ref=e290]:
                - img [ref=e291]
                - generic [ref=e293]: Restock essentials
            - link "Learn More" [ref=e294] [cursor=pointer]:
              - /url: /airbnb-hosts
          - generic [ref=e295]:
            - img [ref=e297]
            - heading "Recurring Plans" [level=3] [ref=e300]
            - paragraph [ref=e301]: Scheduled cleaning at your convenience. Weekly, bi-weekly, or monthly options with exclusive benefits.
            - list [ref=e302]:
              - listitem [ref=e303]:
                - img [ref=e304]
                - generic [ref=e306]: Priority scheduling
              - listitem [ref=e307]:
                - img [ref=e308]
                - generic [ref=e310]: Consistent cleaner
              - listitem [ref=e311]:
                - img [ref=e312]
                - generic [ref=e314]: Discounted rates
            - link "View Plans" [ref=e315] [cursor=pointer]:
              - /url: /pricing#plans
          - generic [ref=e316]:
            - img [ref=e318]
            - heading "Ironing Service" [level=3] [ref=e320]
            - paragraph [ref=e321]: Professional ironing service to keep your wardrobe crisp and ready. Available as add-on or standalone.
            - list [ref=e322]:
              - listitem [ref=e323]:
                - img [ref=e324]
                - generic [ref=e326]: Expert ironing
              - listitem [ref=e327]:
                - img [ref=e328]
                - generic [ref=e330]: Steam treatment
              - listitem [ref=e331]:
                - img [ref=e332]
                - generic [ref=e334]: Hanging or folding
            - link "Get Quote" [ref=e335] [cursor=pointer]:
              - /url: /pricing#addons
          - generic [ref=e336]:
            - img [ref=e338]
            - heading "Office Cleaning" [level=3] [ref=e340]
            - paragraph [ref=e341]: Professional office and commercial space cleaning. Flexible scheduling to minimize disruption.
            - list [ref=e342]:
              - listitem [ref=e343]:
                - img [ref=e344]
                - generic [ref=e346]: Desk and surface cleaning
              - listitem [ref=e347]:
                - img [ref=e348]
                - generic [ref=e350]: Common area maintenance
              - listitem [ref=e351]:
                - img [ref=e352]
                - generic [ref=e354]: Kitchenette sanitization
            - link "Get Quote" [ref=e355] [cursor=pointer]:
              - /url: "#contact"
    - region "Recurring Cleaning Plans" [ref=e356]:
      - generic [ref=e357]:
        - generic [ref=e358]:
          - heading "Recurring Cleaning Plans" [level=2] [ref=e359]
          - paragraph [ref=e360]: Save time and money with regular cleaning
        - generic [ref=e361]:
          - generic [ref=e362]:
            - heading "Essential Care" [level=3] [ref=e363]
            - paragraph [ref=e364]: Bi-weekly cleaning with great savings
            - list [ref=e365]:
              - listitem [ref=e366]:
                - img [ref=e367]
                - generic [ref=e369]: Bi-weekly visits
              - listitem [ref=e370]:
                - img [ref=e371]
                - generic [ref=e373]: Same cleaner each time
              - listitem [ref=e374]:
                - img [ref=e375]
                - generic [ref=e377]: Priority scheduling
              - listitem [ref=e378]:
                - img [ref=e379]
                - generic [ref=e381]: recurring.plans.essential.features.3
              - listitem [ref=e382]:
                - img [ref=e383]
                - generic [ref=e385]: recurring.plans.essential.features.4
              - listitem [ref=e386]:
                - img [ref=e387]
                - generic [ref=e389]: recurring.plans.essential.features.5
            - link "Choose Plan" [ref=e390] [cursor=pointer]:
              - /url: "#contact?text=Hi!%20I'm%20interested%20in%20the%20Essential%20Care%20plan."
              - img [ref=e391]
              - text: Choose Plan
          - generic [ref=e393]:
            - generic [ref=e394]: Best Value
            - heading "Premium Care" [level=3] [ref=e395]
            - paragraph [ref=e396]: Weekly cleaning with maximum convenience
            - list [ref=e397]:
              - listitem [ref=e398]:
                - img [ref=e399]
                - generic [ref=e401]: Weekly visits
              - listitem [ref=e402]:
                - img [ref=e403]
                - generic [ref=e405]: Same cleaner each time
              - listitem [ref=e406]:
                - img [ref=e407]
                - generic [ref=e409]: Priority scheduling
              - listitem [ref=e410]:
                - img [ref=e411]
                - generic [ref=e413]: 15% off every visit
              - listitem [ref=e414]:
                - img [ref=e415]
                - generic [ref=e417]: recurring.plans.premium.features.4
              - listitem [ref=e418]:
                - img [ref=e419]
                - generic [ref=e421]: recurring.plans.premium.features.5
              - listitem [ref=e422]:
                - img [ref=e423]
                - generic [ref=e425]: recurring.plans.premium.features.6
            - link "Choose Plan" [ref=e426] [cursor=pointer]:
              - /url: "#contact?text=Hi!%20I'm%20interested%20in%20the%20Premium%20Care%20plan."
              - img [ref=e427]
              - text: Choose Plan
          - generic [ref=e429]:
            - heading "VIP Service" [level=3] [ref=e430]
            - paragraph [ref=e431]: Custom schedule with premium benefits
            - list [ref=e432]:
              - listitem [ref=e433]:
                - img [ref=e434]
                - generic [ref=e436]: Custom frequency
              - listitem [ref=e437]:
                - img [ref=e438]
                - generic [ref=e440]: Dedicated cleaner
              - listitem [ref=e441]:
                - img [ref=e442]
                - generic [ref=e444]: Priority booking
              - listitem [ref=e445]:
                - img [ref=e446]
                - generic [ref=e448]: recurring.plans.vip.features.3
              - listitem [ref=e449]:
                - img [ref=e450]
                - generic [ref=e452]: recurring.plans.vip.features.4
              - listitem [ref=e453]:
                - img [ref=e454]
                - generic [ref=e456]: recurring.plans.vip.features.5
              - listitem [ref=e457]:
                - img [ref=e458]
                - generic [ref=e460]: recurring.plans.vip.features.6
            - link "Choose Plan" [ref=e461] [cursor=pointer]:
              - /url: "#contact?text=Hi!%20I'm%20interested%20in%20the%20VIP%20Service%20plan."
              - img [ref=e462]
              - text: Choose Plan
    - region "Transparent Pricing" [ref=e464]:
      - generic [ref=e465]:
        - generic [ref=e466]:
          - heading "Transparent Pricing" [level=2] [ref=e467]
          - paragraph [ref=e468]: Clear rates for every apartment size
        - generic [ref=e470]:
          - button "Standard" [ref=e471]: Standard
          - button "Deep Clean" [ref=e473]
          - button "Add-ons" [ref=e474]
        - generic [ref=e477]:
          - paragraph [ref=e479]: Regular cleaning for your home. Includes all essentials.
          - table [ref=e481]:
            - rowgroup [ref=e482]:
              - row "Apartment Size From" [ref=e483]:
                - columnheader "Apartment" [ref=e484]
                - columnheader "Size" [ref=e485]
                - columnheader "From" [ref=e486]
            - rowgroup [ref=e487]:
              - row "1+kk (studio) ~35 m² 1,200 CZK" [ref=e488]:
                - cell "1+kk (studio)" [ref=e489]
                - cell "~35 m²" [ref=e490]
                - cell "1,200 CZK" [ref=e491]
              - row "1+1 (1 bedroom) ~45 m² 1,350 CZK" [ref=e492]:
                - cell "1+1 (1 bedroom)" [ref=e493]
                - cell "~45 m²" [ref=e494]
                - cell "1,350 CZK" [ref=e495]
              - row "2+kk ~55 m² 1,550 CZK" [ref=e496]:
                - cell "2+kk" [ref=e497]
                - cell "~55 m²" [ref=e498]
                - cell "1,550 CZK" [ref=e499]
              - row "2+1 ~65 m² 1,750 CZK" [ref=e500]:
                - cell "2+1" [ref=e501]
                - cell "~65 m²" [ref=e502]
                - cell "1,750 CZK" [ref=e503]
              - row "3+kk ~75 m² 1,950 CZK" [ref=e504]:
                - cell "3+kk" [ref=e505]
                - cell "~75 m²" [ref=e506]
                - cell "1,950 CZK" [ref=e507]
              - row "3+1 ~85 m² 2,050 CZK" [ref=e508]:
                - cell "3+1" [ref=e509]
                - cell "~85 m²" [ref=e510]
                - cell "2,050 CZK" [ref=e511]
              - row "3+2 ~95 m² 2,100 CZK" [ref=e512]:
                - cell "3+2" [ref=e513]
                - cell "~95 m²" [ref=e514]
                - cell "2,100 CZK" [ref=e515]
              - row "4+kk / larger 100+ m² from 2,190 CZK" [ref=e516]:
                - cell "4+kk / larger" [ref=e517]
                - cell "100+ m²" [ref=e518]
                - cell "from 2,190 CZK" [ref=e519]
        - generic [ref=e520]:
          - heading "Special Offers" [level=3] [ref=e521]
          - generic [ref=e522]:
            - generic [ref=e523]:
              - heading "Essential Care" [level=4] [ref=e524]
              - paragraph [ref=e525]: Bi-weekly cleaning with great savings
              - list [ref=e526]:
                - listitem [ref=e527]:
                  - img [ref=e528]
                  - generic [ref=e530]: Bi-weekly visits
                - listitem [ref=e531]:
                  - img [ref=e532]
                  - generic [ref=e534]: Same cleaner each time
                - listitem [ref=e535]:
                  - img [ref=e536]
                  - generic [ref=e538]: Priority scheduling
                - listitem [ref=e539]:
                  - img [ref=e540]
                  - generic [ref=e542]: 50% off 5th visit
              - link "Get Started" [ref=e543] [cursor=pointer]:
                - /url: "#contact"
            - generic [ref=e544]:
              - generic [ref=e545]: Most Popular
              - heading "Premium Care" [level=4] [ref=e546]
              - paragraph [ref=e547]: Weekly cleaning with maximum convenience
              - list [ref=e548]:
                - listitem [ref=e549]:
                  - img [ref=e550]
                  - generic [ref=e552]: Weekly visits
                - listitem [ref=e553]:
                  - img [ref=e554]
                  - generic [ref=e556]: Same cleaner each time
                - listitem [ref=e557]:
                  - img [ref=e558]
                  - generic [ref=e560]: Priority scheduling
                - listitem [ref=e561]:
                  - img [ref=e562]
                  - generic [ref=e564]: 15% off every visit
              - link "Get Started" [ref=e565] [cursor=pointer]:
                - /url: "#contact"
        - generic [ref=e566]:
          - paragraph [ref=e567]: Need a custom quote?
          - link "Get Free Quote" [ref=e568] [cursor=pointer]:
            - /url: https://wa.me/?text=Hi!%20I'd%20like%20to%20get%20a%20quote%20for%20cleaning%20services.
            - img [ref=e569]
            - text: Get Free Quote
    - region "Airbnb Host Partner" [ref=e571]:
      - generic [ref=e573]:
        - generic [ref=e574]:
          - generic [ref=e575]:
            - heading "Airbnb Host Partner" [level=2] [ref=e576]
            - paragraph [ref=e577]: Professional turnover service for Prague hosts
          - list [ref=e578]:
            - listitem [ref=e579]:
              - img [ref=e581]
              - generic [ref=e583]:
                - text: Fast Turnover
                - generic [ref=e584]: "- Same-day turnover service available. We respond within 2 hours for urgent requests."
            - listitem [ref=e585]:
              - img [ref=e587]
              - generic [ref=e589]:
                - text: Express Service
                - generic [ref=e590]: "- Need it fast? Express cleaning within 24 hours available for urgent situations."
            - listitem [ref=e591]:
              - img [ref=e593]
              - generic [ref=e595]:
                - text: Same-Day Booking
                - generic [ref=e596]: "- Book in the morning, we clean by evening. Perfect for unexpected guest arrivals."
            - listitem [ref=e597]:
              - img [ref=e599]
              - generic [ref=e601]:
                - text: Key Handling
                - generic [ref=e602]: "- Key collection and return service available. Flexible access arrangements for hosts."
            - listitem [ref=e603]:
              - img [ref=e605]
              - generic [ref=e607]:
                - text: Quality Guarantee
                - generic [ref=e608]: "- Not satisfied? We'll re-clean for free within 24 hours. Your guests deserve the best."
            - listitem [ref=e609]:
              - img [ref=e611]
              - generic [ref=e613]:
                - text: Priority Scheduling
                - generic [ref=e614]: "- As a host partner, you get priority booking and dedicated support."
          - link "Partner With Us" [ref=e616] [cursor=pointer]:
            - /url: "#contact"
            - img [ref=e617]
            - text: Partner With Us
        - generic [ref=e625]:
          - img [ref=e626]
          - paragraph [ref=e628]: Trusted by 50+ Airbnb hosts
    - region "Our Work & After" [ref=e630]:
      - generic [ref=e631]:
        - generic [ref=e632]:
          - heading "Our Work & After" [level=2] [ref=e633]
          - paragraph [ref=e634]: See the difference professional cleaning makes
        - generic [ref=e635]:
          - button "All Projects" [pressed] [ref=e636]
          - button "Standard Cleaning" [ref=e637]
          - button "Deep Cleaning" [ref=e638]
          - button "Airbnb Turnover" [ref=e639]
          - button "Office Cleaning" [ref=e640]
          - button "Add-on Services" [ref=e641]
        - generic [ref=e642]:
          - generic [ref=e643]:
            - generic [ref=e644]:
              - generic [ref=e647]:
                - img [ref=e649]
                - text: Before
              - generic [ref=e653]:
                - img [ref=e655]
                - text: After
              - button "View After" [ref=e657]
              - generic [ref=e658]: Before
            - generic [ref=e659]:
              - heading "Kitchen Deep Clean" [level=3] [ref=e660]
              - paragraph [ref=e661]: Deep Cleaning
          - generic [ref=e662]:
            - generic [ref=e663]:
              - generic [ref=e666]:
                - img [ref=e668]
                - text: Before
              - generic [ref=e672]:
                - img [ref=e674]
                - text: After
              - button "View After" [ref=e676]
              - generic [ref=e677]: Before
            - generic [ref=e678]:
              - heading "Bathroom Sanitization" [level=3] [ref=e679]
              - paragraph [ref=e680]: Deep Cleaning
          - generic [ref=e681]:
            - generic [ref=e682]:
              - generic [ref=e685]:
                - img [ref=e687]
                - text: Before
              - generic [ref=e691]:
                - img [ref=e693]
                - text: After
              - button "View After" [ref=e695]
              - generic [ref=e696]: Before
            - generic [ref=e697]:
              - heading "Living Room Standard Clean" [level=3] [ref=e698]
              - paragraph [ref=e699]: Standard Cleaning
          - generic [ref=e700]:
            - generic [ref=e701]:
              - generic [ref=e704]:
                - img [ref=e706]
                - text: Before
              - generic [ref=e710]:
                - img [ref=e712]
                - text: After
              - button "View After" [ref=e714]
              - generic [ref=e715]: Before
            - generic [ref=e716]:
              - heading "Bedroom Refresh" [level=3] [ref=e717]
              - paragraph [ref=e718]: Standard Cleaning
          - generic [ref=e719]:
            - generic [ref=e720]:
              - generic [ref=e723]:
                - img [ref=e725]
                - text: Before
              - generic [ref=e729]:
                - img [ref=e731]
                - text: After
              - button "View After" [ref=e733]
              - generic [ref=e734]: Before
            - generic [ref=e735]:
              - heading "Airbnb Turnover Service" [level=3] [ref=e736]
              - paragraph [ref=e737]: Airbnb Turnover
          - generic [ref=e738]:
            - generic [ref=e739]:
              - generic [ref=e742]:
                - img [ref=e744]
                - text: Before
              - generic [ref=e748]:
                - img [ref=e750]
                - text: After
              - button "View After" [ref=e752]
              - generic [ref=e753]: Before
            - generic [ref=e754]:
              - heading "Office Cleaning" [level=3] [ref=e755]
              - paragraph [ref=e756]: Office Cleaning
          - generic [ref=e757]:
            - generic [ref=e758]:
              - generic [ref=e761]:
                - img [ref=e763]
                - text: Before
              - generic [ref=e767]:
                - img [ref=e769]
                - text: After
              - button "View After" [ref=e771]
              - generic [ref=e772]: Before
            - generic [ref=e773]:
              - heading "Oven Deep Clean" [level=3] [ref=e774]
              - paragraph [ref=e775]: Add-on Services
          - generic [ref=e776]:
            - generic [ref=e777]:
              - generic [ref=e780]:
                - img [ref=e782]
                - text: Before
              - generic [ref=e786]:
                - img [ref=e788]
                - text: After
              - button "View After" [ref=e790]
              - generic [ref=e791]: Before
            - generic [ref=e792]:
              - heading "Window Cleaning" [level=3] [ref=e793]
              - paragraph [ref=e794]: Add-on Services
    - region "Google Reviews" [ref=e795]:
      - generic [ref=e796]:
        - generic [ref=e797]:
          - heading "Google Reviews" [level=2] [ref=e798]
          - paragraph [ref=e799]: What our clients say about us
        - generic [ref=e801]:
          - img [ref=e802]
          - generic [ref=e807]:
            - generic [ref=e808]:
              - generic [ref=e809]:
                - img [ref=e810]
                - img [ref=e812]
                - img [ref=e814]
                - img [ref=e816]
                - img [ref=e818]
              - generic [ref=e820]: "4.9"
            - paragraph [ref=e821]: Based on 10 reviews
            - link "See all reviews on Google" [ref=e822] [cursor=pointer]:
              - /url: https://g.page/r/CXXXXX/review
              - generic [ref=e823]: See all reviews on Google
              - img [ref=e824]
        - generic [ref=e826]:
          - generic [ref=e827]:
            - generic [ref=e828]:
              - generic [ref=e829]:
                - generic [ref=e831]: J
                - generic [ref=e832]: John D.
              - generic [ref=e833]:
                - img [ref=e834]
                - img [ref=e836]
                - img [ref=e838]
                - img [ref=e840]
                - img [ref=e842]
            - paragraph [ref=e844]: “Exceptional service! The team was professional, punctual, and thorough. My apartment has never been cleaner. Highly recommend UKLID PLUS for anyone in Prague.”
            - paragraph [ref=e845]: January 15, 2024
          - generic [ref=e846]:
            - generic [ref=e847]:
              - generic [ref=e848]:
                - generic [ref=e850]: M
                - generic [ref=e851]: Maria S.
              - generic [ref=e852]:
                - img [ref=e853]
                - img [ref=e855]
                - img [ref=e857]
                - img [ref=e859]
                - img [ref=e861]
            - paragraph [ref=e863]: “Best cleaning service I've used in Prague. They speak English, show up on time, and do a fantastic job. The WhatsApp booking is so convenient!”
            - paragraph [ref=e864]: January 10, 2024
          - generic [ref=e865]:
            - generic [ref=e866]:
              - generic [ref=e867]:
                - generic [ref=e869]: P
                - generic [ref=e870]: Petr K.
              - generic [ref=e871]:
                - img [ref=e872]
                - img [ref=e874]
                - img [ref=e876]
                - img [ref=e878]
                - img [ref=e880]
            - paragraph [ref=e882]: “Skvělá služba! Vždy včas, důkladné úklid a příjemný personál. Rozhodně doporučuji.”
            - paragraph [ref=e883]: January 8, 2024
        - generic [ref=e885]:
          - generic [ref=e886]:
            - img [ref=e887]
            - generic [ref=e889]: Growing Our Reputation
          - paragraph [ref=e890]: We're building our reputation! Help us grow by leaving a review after your cleaning.
        - generic [ref=e891]:
          - link "See All Reviews" [ref=e892] [cursor=pointer]:
            - /url: https://g.page/r/CXXXXX/review
            - generic [ref=e893]: See All Reviews
            - img [ref=e894]
          - link "Leave a Review" [ref=e896] [cursor=pointer]:
            - /url: https://facebook.com/uklidpluspraha
            - generic [ref=e897]: Leave a Review
            - img [ref=e898]
    - region "Client Testimonials" [ref=e900]:
      - generic [ref=e901]:
        - generic [ref=e902]:
          - heading "Client Testimonials" [level=2] [ref=e903]
          - paragraph [ref=e904]: Hear from our satisfied clients
        - generic [ref=e905]:
          - generic [ref=e906]:
            - img [ref=e908]
            - generic [ref=e910]:
              - img [ref=e911]
              - img [ref=e913]
              - img [ref=e915]
              - img [ref=e917]
              - img [ref=e919]
            - blockquote [ref=e921]: “I've been using UKLID PLUS for my apartment in Prague 2 for over a year. Their service is impeccable, and I love that I can communicate in English. The recurring plan has made my life so much easier.”
            - generic [ref=e922]:
              - generic [ref=e924]: S
              - generic [ref=e925]:
                - paragraph [ref=e926]: Sarah M.
                - paragraph [ref=e927]: Marketing Manager, Prague 2
          - generic [ref=e928]:
            - img [ref=e930]
            - generic [ref=e932]:
              - img [ref=e933]
              - img [ref=e935]
              - img [ref=e937]
              - img [ref=e939]
              - img [ref=e941]
            - blockquote [ref=e943]: “As an Airbnb host, I need reliable turnover cleaning. UKLID PLUS always delivers - quick response, thorough cleaning, and my guests always comment on how clean the apartment is. Highly recommend!”
            - generic [ref=e944]:
              - generic [ref=e946]: M
              - generic [ref=e947]:
                - paragraph [ref=e948]: Michael T.
                - paragraph [ref=e949]: Airbnb Superhost, Prague 1
          - generic [ref=e950]:
            - img [ref=e952]
            - generic [ref=e954]:
              - img [ref=e955]
              - img [ref=e957]
              - img [ref=e959]
              - img [ref=e961]
              - img [ref=e963]
            - blockquote [ref=e965]: “Moving to Prague from the UK, I was worried about finding services in English. UKLID PLUS made everything easy. Their deep cleaning service prepared my new apartment perfectly. Professional and friendly.”
            - generic [ref=e966]:
              - generic [ref=e968]: J
              - generic [ref=e969]:
                - paragraph [ref=e970]: James H.
                - paragraph [ref=e971]: Software Developer, Prague 5
    - region "Frequently Asked Questions" [ref=e972]:
      - generic [ref=e974]:
        - generic [ref=e975]:
          - heading "Frequently Asked Questions" [level=2] [ref=e976]
          - paragraph [ref=e977]: Find answers to common questions
        - generic [ref=e979]:
          - generic [ref=e980]:
            - button "How do I book a cleaning service?" [expanded] [ref=e981]:
              - generic [ref=e982]: How do I book a cleaning service?
              - img [ref=e983]
            - paragraph [ref=e987]: You can book easily via WhatsApp, phone, or our contact form. Send us a message with your cleaning needs, and we'll respond within 2 hours with a quote and available time slots.
          - button "How much does cleaning cost?" [ref=e989]:
            - generic [ref=e990]: How much does cleaning cost?
            - img [ref=e991]
          - button "Is there a minimum booking time?" [ref=e994]:
            - generic [ref=e995]: Is there a minimum booking time?
            - img [ref=e996]
          - button "Do you offer same-day service?" [ref=e999]:
            - generic [ref=e1000]: Do you offer same-day service?
            - img [ref=e1001]
          - button "What payment methods do you accept?" [ref=e1004]:
            - generic [ref=e1005]: What payment methods do you accept?
            - img [ref=e1006]
          - button "What's included in standard cleaning?" [ref=e1009]:
            - generic [ref=e1010]: What's included in standard cleaning?
            - img [ref=e1011]
          - button "What's the difference between standard and deep cleaning?" [ref=e1014]:
            - generic [ref=e1015]: What's the difference between standard and deep cleaning?
            - img [ref=e1016]
        - generic [ref=e1018]:
          - paragraph [ref=e1019]: Still have questions? Contact us via WhatsApp for quick answers.
          - link "Contact on WhatsApp" [ref=e1020] [cursor=pointer]:
            - /url: "#contact"
            - img [ref=e1021]
            - text: Contact on WhatsApp
    - region "Service Areas" [ref=e1023]:
      - generic [ref=e1024]:
        - generic [ref=e1025]:
          - heading "Service Areas" [level=2] [ref=e1026]
          - paragraph [ref=e1027]: We serve Prague and surrounding areas
        - generic [ref=e1028]:
          - generic [ref=e1029]:
            - heading "Prague 1" [level=3] [ref=e1030]
            - list [ref=e1031]:
              - listitem [ref=e1032]:
                - img [ref=e1033]
                - generic [ref=e1036]: Old Town (Staré Město)
              - listitem [ref=e1037]:
                - img [ref=e1038]
                - generic [ref=e1041]: New Town (Nové Město)
              - listitem [ref=e1042]:
                - img [ref=e1043]
                - generic [ref=e1046]: Lesser Town (Malá Strana)
              - listitem [ref=e1047]:
                - img [ref=e1048]
                - generic [ref=e1051]: Hradčany
              - listitem [ref=e1052]:
                - img [ref=e1053]
                - generic [ref=e1056]: Josefov
          - generic [ref=e1057]:
            - heading "Prague 2" [level=3] [ref=e1058]
            - list [ref=e1059]:
              - listitem [ref=e1060]:
                - img [ref=e1061]
                - generic [ref=e1064]: Vinohrady
              - listitem [ref=e1065]:
                - img [ref=e1066]
                - generic [ref=e1069]: Vyšehrad
              - listitem [ref=e1070]:
                - img [ref=e1071]
                - generic [ref=e1074]: Parts of New Town
          - generic [ref=e1075]:
            - heading "Prague 5" [level=3] [ref=e1076]
            - list [ref=e1077]:
              - listitem [ref=e1078]:
                - img [ref=e1079]
                - generic [ref=e1082]: Smíchov
              - listitem [ref=e1083]:
                - img [ref=e1084]
                - generic [ref=e1087]: Anděl
              - listitem [ref=e1088]:
                - img [ref=e1089]
                - generic [ref=e1092]: Klárov
              - listitem [ref=e1093]:
                - img [ref=e1094]
                - generic [ref=e1097]: Malvazinky
          - generic [ref=e1098]:
            - heading "Prague 6" [level=3] [ref=e1099]
            - list [ref=e1100]:
              - listitem [ref=e1101]:
                - img [ref=e1102]
                - generic [ref=e1105]: Dejvice
              - listitem [ref=e1106]:
                - img [ref=e1107]
                - generic [ref=e1110]: Bubeneč
              - listitem [ref=e1111]:
                - img [ref=e1112]
                - generic [ref=e1115]: Střešovice
              - listitem [ref=e1116]:
                - img [ref=e1117]
                - generic [ref=e1120]: Hradčany
              - listitem [ref=e1121]:
                - img [ref=e1122]
                - generic [ref=e1125]: Veleslavín
          - generic [ref=e1126]:
            - heading "Prague 7" [level=3] [ref=e1127]
            - list [ref=e1128]:
              - listitem [ref=e1129]:
                - img [ref=e1130]
                - generic [ref=e1133]: Letná
              - listitem [ref=e1134]:
                - img [ref=e1135]
                - generic [ref=e1138]: Holešovice
              - listitem [ref=e1139]:
                - img [ref=e1140]
                - generic [ref=e1143]: Bubny
        - generic [ref=e1144]:
          - paragraph [ref=e1145]: Other areas available on request
          - link "Contact Us for Other Areas" [ref=e1146] [cursor=pointer]:
            - /url: https://wa.me/?text=Hi!%20I'd%20like%20to%20inquire%20about%20cleaning%20services%20in%20my%20area.
            - img [ref=e1147]
            - text: Contact Us for Other Areas
    - region "Get in Touch" [ref=e1149]:
      - generic [ref=e1150]:
        - generic [ref=e1151]:
          - heading "Get in Touch" [level=2] [ref=e1152]
          - paragraph [ref=e1153]: Ready to book your cleaning? Contact us via your preferred channel
        - generic [ref=e1154]:
          - generic [ref=e1155]:
            - generic [ref=e1158]:
              - img [ref=e1161]
              - generic [ref=e1163]:
                - generic [ref=e1164]:
                  - heading "WhatsApp" [level=3] [ref=e1165]
                  - generic [ref=e1166]: Fastest response
                - paragraph [ref=e1167]: Message us directly for quick booking and instant replies
                - link "Send Message" [ref=e1169] [cursor=pointer]:
                  - /url: "#contact?text=Hi!%20I'd%20like%20to%20book%20a%20cleaning%20service.%20Please%20let%20me%20know%20your%20availability."
                  - img [ref=e1170]
                  - generic [ref=e1172]: Send Message
            - generic [ref=e1173]:
              - link "Messenger Chat with us on Facebook" [ref=e1174] [cursor=pointer]:
                - /url: https://m.me/uklidpluspraha
                - generic [ref=e1175]:
                  - img [ref=e1177]
                  - generic [ref=e1179]:
                    - heading "Messenger" [level=4] [ref=e1180]
                    - paragraph [ref=e1181]: Chat with us on Facebook
              - link "Instagram See our work & reviews" [ref=e1182] [cursor=pointer]:
                - /url: https://www.instagram.com/uklid.plus.praha/
                - generic [ref=e1183]:
                  - img [ref=e1185]
                  - generic [ref=e1187]:
                    - heading "Instagram" [level=4] [ref=e1188]
                    - paragraph [ref=e1189]: See our work & reviews
            - generic [ref=e1190]:
              - generic [ref=e1191]:
                - generic [ref=e1192]:
                  - img [ref=e1193]
                  - heading "Service Area" [level=4] [ref=e1196]
                - paragraph [ref=e1197]: We serve Prague and surrounding areas
              - generic [ref=e1198]:
                - generic [ref=e1199]:
                  - img [ref=e1200]
                  - heading "Languages" [level=4] [ref=e1202]
                - paragraph [ref=e1203]: English, Czech, Russian, Ukrainian
          - generic [ref=e1205]:
            - heading "Send us a Message" [level=3] [ref=e1206]
            - generic [ref=e1207]:
              - generic [ref=e1208]:
                - generic [ref=e1209]: Your Name
                - textbox "Your Name" [ref=e1210]:
                  - /placeholder: Enter your name
              - generic [ref=e1211]:
                - generic [ref=e1212]: Email Address
                - textbox "Email Address" [ref=e1213]:
                  - /placeholder: Enter your email
              - generic [ref=e1214]:
                - generic [ref=e1215]: Message
                - textbox "Message" [ref=e1216]:
                  - /placeholder: Tell us about your cleaning needs...
              - button "Send Message" [ref=e1217]
  - contentinfo [ref=e1218]:
    - generic [ref=e1219]:
      - generic [ref=e1220]:
        - generic [ref=e1221]:
          - generic [ref=e1222]:
            - generic [ref=e1224]: U+
            - generic [ref=e1225]: UKLID PLUS PRAHA
          - paragraph [ref=e1226]: Professional cleaning agency serving Prague's international community. Multilingual support in English, Czech, Russian, and Ukrainian.
          - generic [ref=e1227]:
            - link "Follow us on Instagram" [ref=e1228] [cursor=pointer]:
              - /url: https://www.instagram.com/uklid.plus.praha/
              - img [ref=e1229]
            - link "Contact us on WhatsApp" [ref=e1231] [cursor=pointer]:
              - /url: https://wa.me/
              - img [ref=e1232]
            - link "Message us on Messenger" [ref=e1234] [cursor=pointer]:
              - /url: https://m.me/uklidpluspraha
              - img [ref=e1235]
        - generic [ref=e1237]:
          - heading "Navigation" [level=3] [ref=e1238]
          - list [ref=e1239]:
            - listitem [ref=e1240]:
              - link "Home" [ref=e1241] [cursor=pointer]:
                - /url: /
            - listitem [ref=e1242]:
              - link "Services" [ref=e1243] [cursor=pointer]:
                - /url: /#services
            - listitem [ref=e1244]:
              - link "Pricing" [ref=e1245] [cursor=pointer]:
                - /url: /#pricing
            - listitem [ref=e1246]:
              - link "Privacy Policy" [ref=e1247] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e1248]:
              - link "Terms of Service" [ref=e1249] [cursor=pointer]:
                - /url: /terms
        - generic [ref=e1250]:
          - heading "Contact" [level=3] [ref=e1251]
          - list [ref=e1252]:
            - listitem [ref=e1253]:
              - link "WhatsApp" [ref=e1254] [cursor=pointer]:
                - /url: https://wa.me/
                - img [ref=e1255]
                - text: WhatsApp
            - listitem [ref=e1257]:
              - link "info@uklidpluspraha.cz" [ref=e1258] [cursor=pointer]:
                - /url: mailto:info@uklidpluspraha.cz
                - img [ref=e1259]
                - text: info@uklidpluspraha.cz
            - listitem [ref=e1261]:
              - link "Instagram" [ref=e1262] [cursor=pointer]:
                - /url: https://www.instagram.com/uklid.plus.praha/
                - img [ref=e1263]
                - text: Instagram
      - generic [ref=e1266]:
        - paragraph [ref=e1267]: © 2026 UKLID PLUS PRAHA. All rights reserved.
        - paragraph [ref=e1268]: Professional cleaning services for expats in Prague
  - link "Chat with us on WhatsApp":
    - /url: "#contact?text=Hi!%20I%20would%20like%20to%20book%20a%20cleaning%20service."
    - generic: Chat Now
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Contact and WhatsApp', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('/');
  6  |   });
  7  | 
  8  |   test('should have WhatsApp link', async ({ page }) => {
  9  |     // Find WhatsApp link
  10 |     const whatsappLink = page.locator('a[href*="wa.me"], a[href*="whatsapp"]');
  11 | 
  12 |     if (await whatsappLink.count() > 0) {
  13 |       await expect(whatsappLink.first()).toBeVisible();
  14 |       const href = await whatsappLink.first().getAttribute('href');
  15 |       expect(href).toContain('wa.me');
  16 |     }
  17 |   });
  18 | 
  19 |   test('should have phone number link', async ({ page }) => {
  20 |     // Find phone link
  21 |     const phoneLink = page.locator('a[href^="tel:"]');
  22 | 
  23 |     if (await phoneLink.count() > 0) {
  24 |       await expect(phoneLink.first()).toBeVisible();
  25 |       const href = await phoneLink.first().getAttribute('href');
  26 |       expect(href).toContain('tel:');
  27 |     }
  28 |   });
  29 | 
  30 |   test('should have email contact', async ({ page }) => {
  31 |     // Find email link
  32 |     const emailLink = page.locator('a[href^="mailto:"]');
  33 | 
  34 |     if (await emailLink.count() > 0) {
  35 |       const href = await emailLink.first().getAttribute('href');
  36 |       expect(href).toContain('mailto:');
  37 |     }
  38 |   });
  39 | 
  40 |   test('should display contact section', async ({ page }) => {
  41 |     // Scroll to contact or find contact section
  42 |     const contactSection = page.locator('section').filter({
  43 |       hasText: /kontakt|contact/i
  44 |     });
  45 | 
  46 |     if (await contactSection.count() > 0) {
  47 |       await expect(contactSection.first()).toBeVisible();
  48 |     }
  49 |   });
  50 | 
  51 |   test('WhatsApp button should have correct phone format', async ({ page }) => {
  52 |     const whatsappLink = page.locator('a[href*="wa.me"]');
  53 | 
  54 |     if (await whatsappLink.count() > 0) {
  55 |       const href = await whatsappLink.first().getAttribute('href');
  56 |       // Should contain phone number in international format
> 57 |       expect(href).toMatch(/wa\.me\/\d+/);
     |                    ^ Error: expect(received).toMatch(expected)
  58 |     }
  59 |   });
  60 | 
  61 |   test('should have working contact form if present', async ({ page }) => {
  62 |     await page.goto('/contact');
  63 | 
  64 |     const form = page.locator('form');
  65 | 
  66 |     if (await form.count() > 0) {
  67 |       // Check form has required fields
  68 |       const nameInput = form.locator('input[name*="name"], input[placeholder*="jmén"], input[placeholder*="name"]');
  69 |       const emailInput = form.locator('input[type="email"], input[name*="email"], input[placeholder*="email"]');
  70 |       const submitButton = form.locator('button[type="submit"]');
  71 | 
  72 |       if (await nameInput.count() > 0) {
  73 |         await expect(nameInput.first()).toBeVisible();
  74 |       }
  75 |       if (await emailInput.count() > 0) {
  76 |         await expect(emailInput.first()).toBeVisible();
  77 |       }
  78 |       if (await submitButton.count() > 0) {
  79 |         await expect(submitButton).toBeVisible();
  80 |       }
  81 |     }
  82 |   });
  83 | 
  84 |   test('contact information should be visible in footer', async ({ page }) => {
  85 |     // Scroll to bottom
  86 |     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  87 |     await page.waitForTimeout(300);
  88 | 
  89 |     // Footer should contain contact info
  90 |     const footer = page.locator('footer');
  91 |     await expect(footer).toBeVisible();
  92 | 
  93 |     // Should have some contact information
  94 |     const contactInfo = footer.locator('text=/\\+420|@|Praha/i');
  95 |     if (await contactInfo.count() > 0) {
  96 |       await expect(contactInfo.first()).toBeVisible();
  97 |     }
  98 |   });
  99 | });
```