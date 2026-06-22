# AEON India Launch Build — No Payment Gateway

This zip is the lowest-risk Vercel launch version.

## What is included

- Vite + React storefront
- Home page
- Shop page
- Product pages
- Cart using localStorage
- Wishlist using localStorage
- Checkout form
- WhatsApp order handoff
- About page
- Contact / FAQ page
- Sitemap and robots.txt

## What has been removed/postponed

- Razorpay
- Stripe
- Supabase auth
- Account pages
- Order history database
- Newsletter database
- Wishlist account sync
- Discounts
- Inventory automation
- Admin dashboard

## Environment variables

None required.

Your Vercel Environment Variables section can stay empty.

## Important before accepting real orders

Open this file:

`src/routes/checkout.tsx`

Replace:

`const WHATSAPP_NUMBER = "910000000000";`

with your real WhatsApp number in international format.

Example:

`const WHATSAPP_NUMBER = "919876543210";`

Do not include `+`, spaces, or dashes.

## Vercel settings

Framework Preset: Vite

Build Command:

`npm run build`

Output Directory:

`dist`

## Later upgrade path

After the site is live, you can add:

1. Razorpay or Instamojo payments
2. Order database
3. Customer accounts
4. Inventory management
5. Discount codes
