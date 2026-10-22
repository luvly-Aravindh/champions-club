# Champions Club (Southwards IELTS)

Landing page for the IELTS Champions Club (25-day Band 8+ program). React 19 + Vite + Tailwind CSS v3,
with Framer Motion animations, react-icons, and Wistia video embeds.

Live: https://southwardsielts.com/champions-club/

## Run

```bash
npm install
npm run dev       # dev server
npm run build     # production build (outputs to /dist)
npm run preview   # preview the production build locally
```

The site is served from `https://southwardsielts.com/champions-club/`, which is set as `base` in
`vite.config.js` (asset URLs in the build are absolute). Deploy the contents of `dist/` into the
`champions-club/` folder on the host.

## Structure

- `index.html` carries the Open Graph tags and the Meta Pixel.
- `public/thank-you.html` is the static post-signup page (fires the Meta Pixel `Lead` event).
- `src/App.jsx` composes the page sections in order.
- `src/components/`:
  - `HeroSection` (top strip, logo, Wistia intro video, CTA, dynamic spots counter)
  - `IntroSection` (club quote, "Before You Read Another Word", press-logo marquee)
  - `WhatIsSection`, `JourneySection` (25-day curriculum), `ForYouSection` (for / not for table)
  - `SuccessStories` (Wistia video carousel), `RealResults` (score card collage)
  - `Testimonials`, `ReviewsSection` (Google review cards)
  - `WhyThisProgramWorks`, `WhyTrustSection`, `StudentReviewsVideo`
  - `FAQSection`, `FinalCTA` (closing section + footer)
- `src/assets/` holds all images and icons.
- `src/index.css` holds the Google Fonts import, Tailwind directives, base font and the logo marquee animation.

## Notes

- The "spots left" number in `HeroSection` and `StudentReviewsVideo` is computed from the date
  (12 spots on 1 Jan 2026, one fewer every 4 days, never below 3). The other sections show a fixed "07".
- Every CTA links to the Calendly booking page; edit the URL in the section components to change it.
