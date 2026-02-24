# Quick Start

## With Docker

From the repo root:

```bash
cp server/.env.example server/.env
# Set in server/.env: SECRET_KEY, FRONTEND_URL=http://localhost:3000
# DATABASE_URL is overridden by docker-compose to use the mysql service

docker compose up -d
docker compose exec web python manage.py migrate
docker compose exec web python manage.py createsuperuser
```

- **API:** http://localhost:8000  
- **Swagger:** http://localhost:8000/api/docs/

Run the client locally (see below) and set `NEXT_PUBLIC_API_URL=http://localhost:8000` in `client/.env.local`.

## Without Docker

### Backend

```bash
cd server
python3 -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env: DATABASE_URL (MySQL), SECRET_KEY, FRONTEND_URL

python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

### Frontend

```bash
cd client
npm install
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" >> .env.local
npm run dev
```

Open http://localhost:3000 and log in with the superuser you created.

## Environment

| Variable | Where | Description |
|----------|--------|-------------|
| `DATABASE_URL` | server | MySQL URL, e.g. `mysql://user:pass@localhost:3306/bfg` |
| `SECRET_KEY` | server | Django secret |
| `FRONTEND_URL` | server | Base URL of the client (e.g. for password reset emails) |
| `NEXT_PUBLIC_API_URL` | client | Base URL of the API (e.g. `http://localhost:8000`) |
| `NEXT_PUBLIC_MEDIA_URL` | client | Optional; media base URL (default `/media`) |
