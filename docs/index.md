# BFG Framework

**BFG** is an open-source backend and admin stack for e-commerce and SaaS: **Django** (API, multi-tenant, RBAC, CMS) and **Next.js** (admin UI, storefront themes, dynamic blocks).

## Features

- **Multi-tenant (workspace)** — Data and config scoped by workspace; domain or header-based resolution.
- **RBAC** — Roles and permissions; staff and customers.
- **E-commerce core** — Products, variants, orders, carts, stores, categories.
- **Web/CMS** — Sites, themes, pages, posts, menus, media, block-based content.
- **Delivery & finance** — Warehouses, carriers, payments, invoices, tax.
- **Marketing & support** — Campaigns, coupons, gift cards, tickets, inbox.
- **Pluggable** — Add backend Django apps and frontend extensions without forking.

## Quick Start

```bash
git clone https://github.com/your-org/bfg-framework.git
cd bfg-framework
cp server/.env.example server/.env
# Edit server/.env (SECRET_KEY, DATABASE_URL, FRONTEND_URL)
docker compose up -d
docker compose exec web python manage.py migrate
docker compose exec web python manage.py createsuperuser
```

- **API:** http://localhost:8000  
- **API docs:** http://localhost:8000/api/docs/  
- Run the **client** (see [Quick Start](guide/quickstart.md)).

### Reset migrations and re-init

From `server/`: clear bfg migrations, drop DB tables, regenerate and migrate:

```bash
make reset-migrations
python manage.py init
```

`init` runs migrate, then creates a workspace and admin user (default slug `default`, username `admin`; overridable via `--workspace-name`, `--workspace-slug`, `--admin`). You are prompted for the admin password. It then prompts to import seed_data and load site config (e.g. web/design/site-config-xmart.json) unless you pass `--seed-data` or `--no-seed-data`. Use `--no-migrate` to skip migrate.

## Docs

- [Quick Start](guide/quickstart.md) — Run server and client locally or with Docker.
- [Architecture](guide/architecture.md) — Modules, dependencies, and data model.
- [Building a Plugin](guide/plugin.md) — Add a new backend module and admin UI.

## Enterprise Support & Custom Development

We provide **custom development**, **integration**, and **support** on top of BFG for your organization. [Contact us →](/enterprise)
