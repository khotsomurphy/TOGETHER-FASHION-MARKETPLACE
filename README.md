# Together — Fashion Marketplace

A mobile-friendly PWA starter for a South African clothing marketplace.

## Included in this prototype
- Together branding and shopping trolley logo
- Responsive shopping homepage and product categories
- Sample products and search
- Demo seller product listing form
- Automatic 20% markup calculation (customer price = seller original price × 1.20)
- Cart summary showing seller price, platform markup and total
- Sponsor/advertising placeholder
- PWA manifest and basic offline cache

## Run locally
Open `index.html` in a browser, or serve this folder with any static web server. For PWA installation and service-worker support, use HTTPS (GitHub Pages works) or localhost.

## Deploy with GitHub Pages
1. Create a separate public GitHub repository named `TOGETHER-FASHION-MARKETPLACE`.
2. Upload all files and folders from this project to the repository root.
3. In **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
4. Wait for the Pages deployment to finish and open the published URL.

## Important: prototype, not production commerce
This starter does **not** process payments, transfer seller payouts, verify sellers, manage inventory across devices, provide secure accounts, or handle real orders. Browser storage is only for local demonstration. Before accepting real orders, add a secure backend, seller onboarding and verification, a payment provider that supports marketplace payouts, server-side pricing validation, refund/chargeback workflows, privacy and security controls, and South African legal/tax review. Do not collect card details in this static app.

## Pricing model
The current demo displays a 20% markup over seller-entered original price. Make the arrangement clear to sellers and customers. Delivery and payment processing are not included in the demo calculation.
