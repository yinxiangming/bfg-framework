# BFG Framework

BFG is an open-source, pluggable backend and admin frontend for e-commerce and SaaS: Django (API, multi-tenant, RBAC) + Next.js (admin UI, storefront themes, CMS blocks).

## Repo layout

- **server/** — Django backend (BFG core: common, shop, web, delivery, marketing, finance, support, inbox). No business-specific `apps.*`.
- **client/** — Next.js admin + storefront (MUI, i18n, dynamic routes).
- **docs/** — Documentation site (VitePress). Run: `cd docs && npm install && npm run dev` then open http://localhost:5173.

## Quick start with Docker

From repo root:

```bash
cp server/.env.example server/.env
# Edit server/.env: set SECRET_KEY, DATABASE_URL (see below), FRONTEND_URL=http://localhost:3000

docker compose up -d
# Then run DB migrations and create superuser:
docker compose exec web python manage.py migrate
docker compose exec web python manage.py createsuperuser
```

- **API:** http://localhost:8000  
- **API docs (Swagger):** http://localhost:8000/api/docs/  
- **Admin UI:** run client locally (see [server/README.md](server/README.md) and [client/README.md](client/README.md)).

## Quick start without Docker

1. **Backend:** `cd server && python -m venv venv && source venv/bin/activate && pip install -r requirements.txt && cp .env.example .env && python manage.py migrate && python manage.py runserver 0.0.0.0:8000`
2. **Frontend:** `cd client && npm install && echo "NEXT_PUBLIC_API_URL=http://localhost:8000" >> .env.local && npm run dev`
3. Open http://localhost:3000 and log in (create superuser in server first).

## Environment

- **Server:** `server/.env.example` — `DATABASE_URL`, `SECRET_KEY`, `FRONTEND_URL`, `SITE_NAME`, Redis/Celery.
- **Client:** `NEXT_PUBLIC_API_URL` (e.g. `http://localhost:8000`), optional `NEXT_PUBLIC_MEDIA_URL`, `NEXT_PUBLIC_WORKSPACE_ID`.

## Enterprise support & custom development

We offer custom development, integration, and support on top of BFG. Contact: [your-contact-placeholder].

## License

[Choose: MIT / Apache 2.0]
