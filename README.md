# Lampman

Lampman is an ecommerce site designed for selling single item Lamps antiques without the need for inventory management. 

Using Stripe API, items are removed from stock immediately after purchase via webhook and success page so that duplicate transactions cannot be made.

## Use

Create .env.local folder at root and provide following variables

```text
STRIPE_PUBLIC=
STRIPE_SECRET=

WEB3FORMS=

NEXT_PUBLIC_SITE_NAME=LampMan
BASE_URL=http://localhost:3000/

STRIPE_WEBHOOK_SECRET=

```
