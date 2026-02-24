# Architecture

## Overview

BFG is split into:

- **Server (Django)** — REST API, multi-tenant (workspace), RBAC, and core modules.
- **Client (Next.js)** — Admin dashboard and storefront; consumes the API.

All API access is authenticated (JWT or session) and scoped by workspace via the `X-Workspace-ID` header or domain.

## Server modules (bfg.*)

| Module | Purpose |
|--------|---------|
| `bfg.core` | Base services, schema utilities, condition engine |
| `bfg.common` | Workspace, User, Customer, Address, Staff, Audit, Settings |
| `bfg.web` | Sites, themes, languages, pages, posts, menus, media, blocks |
| `bfg.shop` | Stores, products, variants, categories, orders, cart |
| `bfg.delivery` | Warehouses, carriers, packaging, freight, tracking |
| `bfg.marketing` | Campaigns, coupons, gift cards, referral programs |
| `bfg.finance` | Currencies, payments, invoices, payment gateways |
| `bfg.support` | Tickets |
| `bfg.inbox` | Message templates, notifications |

Business-specific apps (e.g. WMS, resale) live in `apps.*` in product deployments and are not part of the open-source core.

## Client structure

- **Admin** — Dashboard under `/admin`: products, orders, settings, etc. Uses MUI and `bfgApi` from `@/utils/api`.
- **Storefront** — Theme-based storefront; dynamic routes and CMS blocks from `bfg.web`.
- **Extensions** — Plugins can register nav items and routes (see [Building a Plugin](plugin.md)).

## Data model (high level)

- **Workspace** — Top-level tenant; has many Users (staff), Customers, Stores, Settings.
- **Store** — Belongs to a workspace; has Products, Orders, Cart.
- **Customer** — Can place orders; has Addresses, PaymentMethods.
- **Order** — OrderItems; linked to Payment, Delivery (packages, tracking).

Authentication: JWT (access + refresh). Password reset and email verification use `FRONTEND_URL` and `SITE_NAME` from env.
