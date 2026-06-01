# BFG Framework

BFG is an open-source, pluggable backend and admin frontend for e-commerce and SaaS: Django (API, multi-tenant, RBAC) + Next.js (admin UI, storefront themes, CMS blocks).

> **This monorepo has been split into separate repositories.** Each component now lives in and is developed from its own repo. Please refer to the repository for the part you need:
>
> - **Server (Django):** [bfg-server-django](https://github.com/yinxiangming/bfg-server-django)
> - **Server (.NET):** [bfg-server-dotnet](https://github.com/yinxiangming/bfg-server-dotnet)
> - **Server (Node.js):** [bfg-server-nodejs](https://github.com/yinxiangming/bfg-server-nodejs)
> - **Client (Next.js):** [bfg-client-react](https://github.com/yinxiangming/bfg-client-react)
> - **HTTP API test suite:** [bfg-server-test](https://github.com/yinxiangming/bfg-server-test)

---

## Repositories

| Repo | Description |
|------|-------------|
| **[bfg-server-django](https://github.com/yinxiangming/bfg-server-django)** | Django backend — BFG core modules (common, web, shop, delivery, marketing, finance, support, inbox), multi-workspace, JWT auth, Celery, Platform extension. |
| **[bfg-server-dotnet](https://github.com/yinxiangming/bfg-server-dotnet)** | .NET backend implementation of the BFG API. |
| **[bfg-server-nodejs](https://github.com/yinxiangming/bfg-server-nodejs)** | Node.js backend implementation of the BFG API. |
| **[bfg-client-react](https://github.com/yinxiangming/bfg-client-react)** | Next.js 14 admin panel + storefront — MUI, next-intl, plugin/extension system, storefront themes. |
| **[bfg-server-test](https://github.com/yinxiangming/bfg-server-test)** | HTTP API integration tests run against a live BFG2 server (no ORM, real HTTP). |

---

# Server — bfg-server-django

Django backend for the BFG open-source e-commerce and SaaS framework. Ships the full BFG module suite (common, shop, web, delivery, marketing, finance, support, inbox) and supports local extension apps via `apps/`.

## Features

- **Multi-workspace** — one database, multiple isolated tenants via `X-Workspace-Id` header
- **JWT auth** — access + refresh tokens, token blacklist
- **Social login** — Google, Apple, Facebook via django-allauth
- **API key auth** — per-workspace or per-integration keys
- **Celery** — background task queue backed by Redis
- **Platform extension** — optional multi-tenant SaaS management layer (embedded or standalone)
- **OpenAPI docs** — Swagger UI at `/api/docs/`, ReDoc at `/api/redoc/`

## Quick Start

### Option A: Interactive bootstrap installer (recommended)

```bash
bash <(curl -fsSL "https://raw.githubusercontent.com/yinxiangming/bfg-server-django/main/bootstrap/install.sh")
```

This installer configures the **current BFG server repo** and will guide you through:

- setup mode (`single workspace` or `embedded platform`)
- site / instance name
- database choice (SQLite / MySQL / PostgreSQL)
- optional Docker-backed Redis / Mailpit services
- dependency installation
- migrations and initial setup

> Do **not** use `curl ... | bash` for this installer. It is interactive and expects terminal input.

### Option B: Manual setup

Prerequisites: Python 3.11+, MySQL 8+ (or PostgreSQL), Redis (for Celery).

```bash
git clone https://github.com/yinxiangming/bfg-server-django.git
cd bfg-server-django

# Create virtualenv
python3 -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env: set DATABASE_URL, SECRET_KEY at minimum

# Create database
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS mydb CHARACTER SET utf8mb4;"

# Migrate, create superuser, run
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver 0.0.0.0:8000
```

API docs: http://localhost:8000/api/docs/

## Environment Variables

Copy `.env.example` to `.env`. Key variables:

| Variable | Required | Description |
|----------|----------|-------------|
| `SECRET_KEY` | ✅ | Django secret key (generate with `django-admin generate-secret-key`) |
| `DATABASE_URL` | ✅ | MySQL/PostgreSQL connection string |
| `CELERY_BROKER_URL` | ✅ | Redis URL for Celery |
| `CELERY_RESULT_BACKEND` | ✅ | Redis URL for task results |
| `DEBUG` | — | `True` in dev, `False` in production (default: `True`) |
| `FRONTEND_URL` | — | Your frontend origin (used for CORS/redirects) |
| `LOCAL_APPS` | — | Comma-separated app names under `apps/` to load |
| `BFG_INSTANCE_TYPE` | — | `workspace` (default) or `platform` |
| `PLATFORM_WORKSPACE_SLUG` | — | Enables embedded Platform mode (see below) |

See `.env.example` for the full reference including email, social login, Stripe, AI keys, etc.

## Local Extension Apps

Place business-specific code under `apps/`:

```
apps/
├── myshop/          ← your custom app
│   ├── apps.py
│   ├── models.py
│   ├── urls.py
│   └── views.py
└── platform/        ← optional Platform extension
```

Then in `.env`:

```env
LOCAL_APPS=myshop,platform
```

Apps are auto-discovered and added to `INSTALLED_APPS`. Their URLs are mounted at `/api/v1/<app_name>/` automatically.

## Platform Extension

The Platform extension adds multi-tenant SaaS management: workspace lifecycle, subscriptions, billing, feature flags, SSO, and token exchange. It runs in two modes:

### Embedded Mode (recommended for self-hosted / small deployments)

One server handles both workspace API and platform admin. One workspace (e.g. `slug=admin`) acts as the management workspace.

```env
LOCAL_APPS=myapp,platform
BFG_INSTANCE_TYPE=workspace
PLATFORM_WORKSPACE_SLUG=admin      # slug of your management workspace
PLATFORM_API_KEY=shared-secret     # for inbound internal calls
```

### Standalone Mode (for large-scale / multi-region)

Platform runs as a separate BFG instance with its own database.

**Workspace server:**
```env
BFG_INSTANCE_TYPE=workspace
PLATFORM_API_KEY=shared-secret
PLATFORM_API_URL=http://platform-server:8011
```

**Platform server (separate deployment):**
```env
BFG_INSTANCE_TYPE=platform
LOCAL_APPS=platform
PLATFORM_API_KEY=shared-secret
WORKSPACE_API_URL=http://workspace-server:8000
```

## Running Celery

```bash
celery -A config.celery worker -l info        # Worker
celery -A config.celery beat -l info          # Beat scheduler (periodic tasks)
celery -A config.celery worker --beat -l info # Combined (dev only)
```

## Email in Development

Use [Mailpit](https://mailpit.axllent.org/) (recommended) or MailHog to catch all outgoing emails:

```bash
brew install mailpit
mailpit
# Web UI: http://localhost:8025, SMTP: localhost:1025
```

```env
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=127.0.0.1
EMAIL_PORT=1025
EMAIL_USE_TLS=False
```

## API Reference

| Endpoint | Description |
|----------|-------------|
| `GET /api/docs/` | Swagger UI |
| `GET /api/redoc/` | ReDoc |
| `POST /api/v1/auth/token/` | Get JWT (`email` + `password`) |
| `POST /api/v1/auth/token/refresh/` | Refresh JWT |
| `POST /api/v1/auth/register/` | Register new user |
| `GET /api/v1/workspaces/` | List workspaces for current user |
| `POST /api/v1/workspaces/` | Create workspace |
| `GET /api/v1/customers/` | Customer list (workspace-scoped) |

All workspace-scoped endpoints require `X-Workspace-Id: <id>` header.

Authentication: `Authorization: Bearer <access_token>`

## Project Structure

```
bfg-server-django/
├── config/                 # Django settings, URLs, auth, WSGI
│   ├── settings.py         # Main settings (reads from .env)
│   ├── dev.py              # Development settings override
│   ├── urls.py             # Root URL config
│   ├── authentication.py   # Custom JWT + API key authentication
│   ├── local_apps.py       # Auto-discovery of apps/ directory
│   └── views.py            # Internal endpoints (provision-user, etc.)
├── apps/                   # Local extension apps (git-ignored or custom)
│   ├── nexus/              # Example app
│   └── platform/           # Platform extension (optional)
├── bfg2/                   # BFG2 core modules (bfg/ package)
│   └── bfg/
│       ├── common/         # Users, Workspaces, StaffMembers, API keys
│       ├── shop/           # Products, Orders, Cart, Subscriptions
│       ├── delivery/       # Warehouses, Carriers, Consignments
│       ├── finance/        # Payments, Invoices, Wallets
│       ├── marketing/      # Campaigns, Coupons, Gift cards
│       ├── support/        # Tickets
│       ├── inbox/          # Notifications, Message templates
│       └── web/            # Website/CMS, Bookings
├── media/                  # Uploaded files (local dev)
├── templates/              # Django HTML templates
├── manage.py
├── requirements.txt
├── requirements-dev.txt
├── .env.example
└── Makefile
```

## Production Deployment

1. Set `DEBUG=False`, `SECRET_KEY` to a strong random value
2. Set `ALLOWED_HOSTS` in settings or use a reverse proxy (nginx)
3. Use `gunicorn` or `uvicorn`:
   ```bash
   gunicorn config.wsgi:application --bind 0.0.0.0:8000 --workers 4
   # or
   uvicorn config.asgi:application --host 0.0.0.0 --port 8000 --workers 4
   ```
4. Serve static files via WhiteNoise (already configured) or nginx
5. Use `MEDIA_PUBLIC_BASE_URL` to point media URLs at a CDN
6. Run Celery worker and beat as separate processes/services

---

# Client — bfg-client-react

Admin UI and storefront for the BFG open-source e-commerce and SaaS framework. Built with Next.js 14 (App Router), MUI v5, and next-intl.

Requires the BFG Django backend running (see **bfg-server-django** above).

## Features

- **Admin panel** — workspace settings, products, orders, customers, delivery, finance, marketing, support
- **Storefront** — product listing, cart, checkout, account pages
- **Multi-workspace** — JWT + workspace token exchange; URL-based or header-based tenant routing
- **Platform extension** — optional Platform admin UI (embedded or standalone mode)
- **i18n** — next-intl; English + Simplified Chinese out of the box
- **Plugin system** — per-workspace UI extensions auto-loaded from `src/plugins/`
- **Extension registry** — composable terminology, config, and hook overrides via `src/extensions/`

## Quick Start

Prerequisites: Node.js 18+, npm 9+ (or pnpm/yarn), BFG Django backend running at `http://localhost:8000`.

```bash
git clone https://github.com/yinxiangming/bfg-client-react.git
cd bfg-client-react
npm install
cp .env.example .env.local
# Edit .env.local: set NEXT_PUBLIC_API_URL=http://localhost:8000
npm run dev
```

Open http://localhost:3000.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Auto-generate plugin/extension loaders, then start Next.js dev server |
| `npm run build` | Auto-generate loaders, then build for production |
| `npm run start` | Start production server (run after `build`) |
| `npm run lint` | ESLint |

> `npm run dev` and `npm run build` both run `scripts/prepare.js` first to auto-discover plugins and regenerate `src/plugins/loaders.generated.ts`. You don't need to run this manually.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_API_URL` | ✅ | BFG API base URL. No trailing slash. e.g. `http://localhost:8000` |
| `NEXT_PUBLIC_WORKSPACE_API_URL` | — | Workspace server URL (standalone Platform mode only). Falls back to `NEXT_PUBLIC_API_URL` |
| `NEXT_PUBLIC_WORKSPACE_ID` | — | Pin to a specific workspace ID. Leave unset for dynamic token-exchange-based routing |
| `NEXT_PUBLIC_PLATFORM_LOGIN_URL` | — | If set, `/auth/login` redirects here (for workspaces managed by a Platform instance) |
| `NEXT_PUBLIC_ENABLED_PLUGINS` | — | Comma-separated plugin IDs to activate. Default: all plugins under `src/plugins/` |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | — | Google Maps API key for address autocomplete |
| `NEXT_PUBLIC_MEDIA_URL` | — | Media CDN base. Default: `NEXT_PUBLIC_API_URL/media` |
| `ALLOWED_DEV_ORIGINS` | — | Extra allowed origins for `next dev` (comma-separated) |
| `NEXT_FILE_TRACING_ROOT` | — | File tracing root for Docker deployments |

See `.env.example` for full documentation with examples.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (storefront)/       # Public storefront (product listing, cart, checkout)
│   ├── admin/              # Admin panel (workspace management)
│   ├── auth/               # Auth pages (login, register, reset password, etc.)
│   ├── account/            # Customer account (orders, addresses, etc.)
│   └── api/                # Next.js API routes
├── components/             # Shared UI components
├── views/                  # Page-level view components (admin/ storefront/ account/ common/)
├── services/               # API service layer (axios wrappers)
├── hooks/                  # React hooks
├── contexts/               # React context providers
├── utils/                  # Utilities (apiUrls.ts, authTokens.ts)
├── plugins/                # Workspace UI plugins (auto-loaded)
├── extensions/             # Composable extension registry (terminology, config, hooks)
├── configs/                # App-level configuration
├── i18n/                   # next-intl configuration
├── messages/               # Translation files (en.json, zh-hans.json)
├── types/                  # TypeScript types
├── styles/                 # Global styles
└── assets/                 # Static assets
```

## API URL Resolution

The client handles two API servers in Platform mode:

| Mode | `NEXT_PUBLIC_API_URL` | `NEXT_PUBLIC_WORKSPACE_API_URL` |
|------|-----------------------|---------------------------------|
| **Workspace-only** | Workspace server | — (not needed) |
| **Embedded Platform** | Same server for both | — (not needed) |
| **Standalone Platform** | Platform server | Workspace server |

`src/utils/apiUrls.ts` centralises all URL resolution; `src/utils/authTokens.ts` manages JWT storage (platform + per-server workspace tokens).

## Plugin System

Plugins add workspace-specific UI extensions. Each plugin lives under `src/plugins/<id>/` and exports a default plugin object. Running `npm run dev` or `npm run build` auto-discovers plugins and regenerates `src/plugins/loaders.generated.ts` — just add a directory, no manual registration.

To restrict which plugins load:
```env
NEXT_PUBLIC_ENABLED_PLUGINS=nexus,myapp
```

## i18n

Uses [next-intl](https://next-intl-docs.vercel.app/). Translation files are in `src/messages/` (`en.json`, `zh-hans.json`). To add a language: add `src/messages/<locale>.json`, register the locale in `src/i18n/request.ts`, and add it to `LANGUAGES` in the Django backend settings.

## Production Build

```bash
npm run build
npm run start
```

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV NEXT_FILE_TRACING_ROOT=/app
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
CMD ["node", "server.js"]
```

### Vercel

The repo includes `vercel.json`. Set environment variables in the Vercel dashboard, then `vercel --prod`.

## Common Issues

| Problem | Fix |
|---------|-----|
| `NEXT_PUBLIC_API_URL is not set` | Add `NEXT_PUBLIC_API_URL=http://localhost:8000` to `.env.local` |
| Login redirects to Platform login | Unset `NEXT_PUBLIC_PLATFORM_LOGIN_URL` for standalone workspace |
| Plugins not loading | Run `npm run prepare` or restart dev server |
| CORS errors from backend | Set `CORS_ALLOW_ALL_ORIGINS=True` in Django (dev only) or add your frontend origin |
| Media images 404 | Set `NEXT_PUBLIC_MEDIA_URL=http://localhost:8000/media` |
| Token exchange fails (Platform) | Ensure `PLATFORM_API_KEY` matches on both servers |

---

# Tests — bfg-server-test

HTTP API integration tests against a live BFG2 server. No Django ORM — every test uses the real HTTP API.

> Credentials use the `BFG2_E2E_*` environment variable prefix for historical compatibility with existing setups.

## Quick Start

```bash
git clone https://github.com/yinxiangming/bfg-server-test.git
cd bfg-server-test
pip install -r requirements.txt
cp .env.example .env      # fill in your credentials
BASE_URL=http://localhost:8000 pytest api/bfg_workspace/ -m api_integration -v
```

## Directory Layout

```
bfg-server-test/
├── conftest.py              # global fixtures (session bootstrap, workspace creation)
├── client_remote.py         # RemoteAPIClient (mimics DRF test client over HTTP)
├── .env                     # local credentials (git-ignored)
├── .env.example             # template
├── pytest.ini
├── requirements.txt
└── api/
    ├── bfg_workspace/       # Core BFG workspace API tests (test_01 … test_18, storefront, etc.)
    │   ├── test_01_registration.py
    │   ├── test_02_website_setup.py
    │   └── ...
    └── bfg_platform/        # Platform extension tests
        ├── embedded/        # Embedded mode (platform runs inside workspace server)
        │   ├── conftest.py
        │   └── test_embedded.py   # 20 tests
        └── standalone/      # Standalone mode (separate platform server)
            ├── conftest.py
            └── test_standalone.py # 21 tests
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `BASE_URL` | BFG server base URL | required |
| `BFG2_E2E_SUPERUSER_EMAIL` | Superuser email | `admin@test.com` |
| `BFG2_E2E_SUPERUSER_PASSWORD` | Superuser password | required |
| `BFG2_E2E_CUSTOMER_PASSWORD` | Password for test customer accounts | required |
| `BFG2_E2E_ADMIN_EMAIL` | Admin email (non-superuser bootstrap) | `admin@test.com` |

See `.env.example` for the full list.

## Running Tests

### Core workspace tests
```bash
BASE_URL=http://localhost:8000 pytest api/bfg_workspace/ -m api_integration -v
```

### Platform tests (both modes)
```bash
# Embedded mode
BASE_URL=http://localhost:8000 pytest api/bfg_platform/embedded/ -m api_integration -v

# Standalone mode
BASE_URL=http://localhost:8011 pytest api/bfg_platform/standalone/ -m api_integration -v
```

### Everything (workspace + platform)
```bash
pytest api/ -m api_integration -v
```

See **PLATFORM_API_INTEGRATION.md** for full setup instructions for both platform modes.

---

## Enterprise support & custom development

We offer custom development, integration, and support on top of BFG. Contact: [bfg@surlex.com](mailto:bfg@surlex.com).

## License

MIT
