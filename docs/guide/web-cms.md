# Web / CMS Module

The `bfg.web` module provides a full-featured CMS layer for managing sites, pages, posts, media, menus, and more. It powers both the admin UI and the public storefront.

## Data model

| Model | Purpose |
|-------|---------|
| `Site` | A site/domain within a workspace |
| `Theme` | Visual theme assigned to a site |
| `Language` | Supported languages for a site |
| `Page` | Static or block-based pages (hierarchy supported) |
| `Post` | Blog/news posts with categories and tags |
| `Media` | Uploaded images and files |
| `Menu` / `MenuItem` | Navigation menus |
| `Inquiry` | Contact/lead forms submitted by visitors |
| `BookingTimeSlot` | Time slots available for booking |
| `Booking` | Visitor bookings against a time slot |
| `NewsletterSubscription` | Email opt-ins |
| `NewsletterTemplate` | Reusable email templates |
| `NewsletterSend` | Bulk send campaigns |

## Pages

Pages support hierarchical structure (parent/child) and block-based content.

### Permissions

| Action | Who |
|--------|-----|
| List / retrieve / render | Public (published pages only) |
| Create / update / publish / delete | Workspace staff |

### API endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/web/pages/` | List published pages (public) or all pages (staff) |
| `POST` | `/web/pages/` | Create a page |
| `GET` | `/web/pages/{slug}/` | Get page detail |
| `PUT/PATCH` | `/web/pages/{slug}/` | Update page |
| `DELETE` | `/web/pages/{slug}/` | Delete page |
| `POST` | `/web/pages/{slug}/publish/` | Publish a draft page |
| `PUT` | `/web/pages/{slug}/blocks/` | Update block configuration |
| `GET` | `/web/pages/{slug}/rendered/` | Rendered page with resolved blocks (public) |
| `GET` | `/web/pages/tree/` | Hierarchical page tree |
| `GET` | `/web/pages/{slug}/export/` | Export page config as JSON |
| `POST` | `/web/pages/import/` | Import page config from JSON |

### Query params

- `?lang=en` — filter by language (omit to list all languages, e.g. in admin)
- `?parent=<id>` — filter by parent page

### Block-based content

Pages can store structured block data alongside raw HTML content. Use `PUT /web/pages/{slug}/blocks/` to update blocks; use `/rendered/` to get fully resolved block output for the storefront.

### Export / Import

```bash
# Export a page config
GET /web/pages/about/export/

# Import into a different workspace
POST /web/pages/import/
{
  "config": { ... },   // JSON from export
  "slug": "about"      // optional slug override
}
```

## Posts (Blog)

Posts support categories, tags, and language filtering.

### API endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/web/posts/` | List posts |
| `POST` | `/web/posts/` | Create post |
| `GET` | `/web/posts/{slug}/` | Get post detail |
| `PUT/PATCH` | `/web/posts/{slug}/` | Update post |
| `POST` | `/web/posts/{slug}/publish/` | Publish draft post |
| `GET` | `/web/categories/` | List categories |
| `GET` | `/web/tags/` | List tags |

## Media

Upload and manage images and files.

```bash
POST /web/media/          # upload (multipart/form-data)
GET  /web/media/          # list media
DELETE /web/media/{id}/   # delete
```

## Menus

Navigation menus are workspace-scoped and filterable by language and location.

```bash
GET  /web/menus/?lang=en&location=header
POST /web/menus/          # create menu with items
PUT  /web/menus/{id}/     # update menu + items
```

## Inquiry (Contact Forms)

Visitors can submit inquiries via public forms; staff manage them in the admin.

```bash
# Public: submit an inquiry
POST /web/inquiries/
{
  "name": "Alice",
  "email": "alice@example.com",
  "subject": "Question about pricing",
  "message": "...",
  "inquiry_type": "inquiry"  // inquiry | quote | support | booking
}

# Staff: list, assign, update status
GET  /web/inquiries/
POST /web/inquiries/{id}/assign/         # { "user_id": 5 }
POST /web/inquiries/{id}/update-status/  # { "status": "resolved", "notes": "..." }
GET  /web/inquiries/stats/               # summary statistics
```

## Booking

Time-slot-based booking for services or appointments.

```bash
# Public: view available slots
GET /web/booking-slots/available/?type=appointment&date=2026-03-20

# Staff: manage slots and bookings
POST /web/booking-slots/
GET  /web/bookings/
POST /web/bookings/{id}/confirm/
POST /web/bookings/{id}/cancel/
```

## Newsletter

Manage subscriptions, templates, and send campaigns.

```bash
# Public: subscribe
POST /web/newsletter/subscriptions/   { "email": "...", "language": "en" }

# Staff: manage + send
GET  /web/newsletter/subscriptions/
POST /web/newsletter/sends/           # trigger a send campaign
GET  /web/newsletter/sends/{id}/logs/ # delivery logs
```

## Site Config

Export and import your entire site configuration (Site, Theme, Pages, Menus) as JSON.

```bash
# Export current workspace site config
GET /web/sites/export/

# Import site config into a fresh workspace
POST /web/sites/import/
{
  "config": { ... }
}
```

This is useful for seeding new workspaces, staging environments, or sharing a theme. See `server/bfg2/bfg/web/design/` for example configs.
