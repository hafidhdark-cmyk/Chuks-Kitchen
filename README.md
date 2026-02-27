# Chuks Kitchen - Frontend Deliverable

**Intern:** hafidhdark-cmyk  
**Organization:** Trueminds Innovations Ltd  
**Period:** February 13 – February 27, 2025  
**GitHub:** https://github.com/hafidhdark-cmyk/Chuks-Kitchen

---

## 1. Project Overview

This project is a frontend implementation of a Food Ordering & Customer Management System for a client, Mr. Chukwudi Okorie (Chuks Kitchen). The system was designed to allow customers to browse meals, place orders, and complete payment online.

The UI/UX design team provided a Figma design, and my role as a Frontend Developer was to convert those screens into clean, functional, and responsive HTML/CSS webpages.

**No backend, no APIs, and no authentication were implemented — this is a static frontend only.**

### Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, layout, and responsiveness |
| Google Fonts | Typography (Island Moments, Inter, Roboto, Jost) |
| Font Awesome | Icons (email, lock, Google, Apple) |
| Git & GitHub | Version control and code hosting |

---

## 2. Project Structure

```
Chuks-Kitchen/
├── index.html      → Home/Landing page
├── login.html      → Login page
├── explore.html    → Menu/Food listing page
├── cart.html       → Cart page
├── order.html      → Order Summary page
├── payment.html    → Payment page
├── style.css       → All styling for every page
└── img/            → All images used across the project
```

### Key Files

- **index.html** — Entry point of the application. Contains the navbar, hero section with background food image, and search bar.
- **style.css** — Single stylesheet shared across all pages. Contains desktop styles and a mobile media query at the bottom (`@media max-width: 480px`).
- **img/** — All image assets used across the project including hero backgrounds and food card images.

---

## 3. Design Interpretation

The Figma design was translated into code screen by screen. Here is how each section was approached:

### Navbar
Built using Flexbox with `justify-content: space-between` to position the logo on the left, navigation links in the center, and the login button on the right. The Island Moments font was used for the logo to match the Figma cursive script style. On mobile, links and login button are hidden and a hamburger icon appears instead.

### Hero Section (Home Page)
The hero uses a CSS background image with an absolute-positioned dark overlay `rgba(0,0,0,0.4)` to dim the image. The text and button sit above the overlay using `z-index: 1`. A search bar sits directly below the hero section.

### Explore/Menu Page
The page includes a restaurant hero banner at the top, followed by category filter tabs and a food grid. Food items are displayed using CSS Grid with `grid-template-columns: repeat(3, 1fr)`. Category tabs are styled buttons with an `.active` class applying an orange background.

### Login Page
A two-column Flexbox layout — the left panel shows a food background image with an orange overlay, and the right panel contains the login form. On mobile, the left panel is hidden and the right panel takes full width, matching the Figma mobile design.

### Cart Page
Cart items are displayed in a white card centered on a light grey background. Each item shows a food image, name, description, quantity controls, price, and a delete button.

### Order Summary Page (order.html)
Displays a promo code input, itemized pricing breakdown (subtotal, delivery fee, service fee, tax, total), a delivery/pickup toggle, special instructions textarea, and a proceed to checkout button.

### Payment Page
A card-based payment form with radio buttons for payment method (Card, Bank, Transfer), card number, expiry date, CVV, save card checkbox, and a pay button.

### Footer
A consistent dark brown footer applied across all pages using Flexbox with four columns: branding, quick links, contact info, and social media links.

### Assumptions Made
- Some food images in the Figma were placeholders. Real Nigerian food photos were used to better represent the brand.
- The exact font weights for some text were not specified in the Figma, so standard weights (400, 600, 700) were applied based on visual judgment.
- The hamburger menu on mobile does not toggle open/close as this requires JavaScript which was outside the project scope.

---

## 4. Responsiveness

Mobile responsiveness was implemented using a single media query targeting screens `max-width: 480px`.

Key responsive changes include:
- Navbar links and login button hide on mobile; hamburger icon appears
- Hero section height adjusts and text resizes for smaller screens
- Login page left panel hides; right panel takes full width
- Food grid changes from 3 columns to 2 columns
- Footer stacks vertically instead of side by side
- Cart, Order Summary and Payment cards use `max-width: 100%` to prevent horizontal overflow

---

## 5. Limitations & Improvements

### Current Limitations
- Hamburger menu icon is visible on mobile but does not open a dropdown (requires JavaScript)
- No form validation on login or payment pages
- Food images are static — in a real project they would load dynamically from a backend
- Category tabs on the Explore page do not filter food items (requires JavaScript)
- Cart quantities cannot be updated interactively

### What I Would Improve With More Time
- Add JavaScript to make the hamburger menu fully functional
- Add smooth hover and transition animations on cards and buttons
- Implement form validation on login and payment pages
- Make category tabs on the Explore page filter food items dynamically
- Add a Delivery Details page to complete the full ordering flow
- Deploy the project live on Netlify or GitHub Pages

---

## 6. Pages Built

| Page | File | Description |
|---|---|---|
| Home | index.html | Landing page with hero image and search bar |
| Login | login.html | Login form with Google and Apple login options |
| Explore | explore.html | Menu page with food categories and food cards |
| Cart | cart.html | Cart items with quantity controls and delete button |
| Order Summary | order.html | Pricing breakdown, promo code, and checkout button |
| Payment | payment.html | Card payment form with payment method options |

---
