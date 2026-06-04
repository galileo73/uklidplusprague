# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact.spec.ts >> Contact and WhatsApp >> should have working contact form if present
- Location: tests\e2e\contact.spec.ts:61:3

# Error details

```
Test timeout of 30000ms exceeded.
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
  - contentinfo [ref=e27]:
    - generic [ref=e28]:
      - generic [ref=e29]:
        - generic [ref=e30]:
          - generic [ref=e31]:
            - generic [ref=e33]: U+
            - generic [ref=e34]: UKLID PLUS PRAHA
          - paragraph [ref=e35]: Professional cleaning agency serving Prague's international community. Multilingual support in English, Czech, Russian, and Ukrainian.
          - generic [ref=e36]:
            - link "Follow us on Instagram" [ref=e37] [cursor=pointer]:
              - /url: https://www.instagram.com/uklid.plus.praha/
              - img [ref=e38]
            - link "Contact us on WhatsApp" [ref=e40] [cursor=pointer]:
              - /url: https://wa.me/
              - img [ref=e41]
            - link "Message us on Messenger" [ref=e43] [cursor=pointer]:
              - /url: https://m.me/uklidpluspraha
              - img [ref=e44]
        - generic [ref=e46]:
          - heading "Navigation" [level=3] [ref=e47]
          - list [ref=e48]:
            - listitem [ref=e49]:
              - link "Home" [ref=e50] [cursor=pointer]:
                - /url: /
            - listitem [ref=e51]:
              - link "Services" [ref=e52] [cursor=pointer]:
                - /url: /#services
            - listitem [ref=e53]:
              - link "Pricing" [ref=e54] [cursor=pointer]:
                - /url: /#pricing
            - listitem [ref=e55]:
              - link "Privacy Policy" [ref=e56] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e57]:
              - link "Terms of Service" [ref=e58] [cursor=pointer]:
                - /url: /terms
        - generic [ref=e59]:
          - heading "Contact" [level=3] [ref=e60]
          - list [ref=e61]:
            - listitem [ref=e62]:
              - link "WhatsApp" [ref=e63] [cursor=pointer]:
                - /url: https://wa.me/
                - img [ref=e64]
                - text: WhatsApp
            - listitem [ref=e66]:
              - link "info@uklidpluspraha.cz" [ref=e67] [cursor=pointer]:
                - /url: mailto:info@uklidpluspraha.cz
                - img [ref=e68]
                - text: info@uklidpluspraha.cz
            - listitem [ref=e70]:
              - link "Instagram" [ref=e71] [cursor=pointer]:
                - /url: https://www.instagram.com/uklid.plus.praha/
                - img [ref=e72]
                - text: Instagram
      - generic [ref=e75]:
        - paragraph [ref=e76]: © 2026 UKLID PLUS PRAHA. All rights reserved.
        - paragraph [ref=e77]: Professional cleaning services for expats in Prague
  - link "Chat with us on WhatsApp":
    - /url: "#contact?text=Hi!%20I%20would%20like%20to%20book%20a%20cleaning%20service."
    - generic: Chat Now
```