# Building a Plugin

You can extend BFG with new backend modules and admin UI without forking.

## Backend (Django app)

1. Create a new app under `server/bfg2/bfg/` or (in product deployments) under `server/apps/`, e.g. `my_plugin`.
2. Define models in `models.py`, serializers, and viewset(s); register the viewset on a Router and include the router in your app’s `urls.py`.
3. Add the app to `INSTALLED_APPS` in `config/settings.py`.
4. Add the app’s URL include to `config/urls.py`, e.g. `path('my-plugin/', include('my_plugin.urls'))`.

Use `bfg.common` (Workspace, User, Customer) and other bfg modules as needed; avoid hardcoding env (use `settings` and `os.environ`).

## Frontend (Next.js)

1. **API client** — Add endpoints to `@/utils/api` (e.g. `bfgApi.myResource()`) or a dedicated API module that uses `getApiBaseUrl()` and `getApiHeaders()`.
2. **Admin pages** — Add routes under `client/src/app/admin/` (e.g. `[lang]/(dashboard)/my-plugin/page.tsx`) and list/ detail views under `client/src/views/admin/` as needed.
3. **Nav** — Register sidebar/nav entries via the extensions system (see `client/src/extensions`) so your plugin appears in the admin menu.
4. **Types** — Define TypeScript types for your API responses and use them in views and forms.

## Plugin template (reference)

A typical plugin has:

- Backend: `models.py`, `serializers.py`, `viewsets/` or `views.py`, `urls.py`.
- Frontend: `app/admin/.../page.tsx`, `views/admin/.../`, and entries in the API helper and nav extensions.

Use the existing BFG modules (e.g. `bfg.shop`, `bfg.common`) as reference for patterns (pagination, filters, permissions, workspace scoping).
