# Idlevo marketing site (`@resale/website-client`)

Next.js App Router app for the Stitch **Consign** marketing pages. Runs separately from `src/client` (BFG). Brand strings: `src/config/marketingSite.ts` (`brand`, `brandEmail`).

## Commands

- `npm run dev` — dev server on port **3001**
- `npm run build` / `npm start` — production

## Environment

Copy `.env.example` to `.env.local`. All public origins are read from env only (no hardcoded defaults); see `src/lib/env.ts`.

## Routes

Defined in `src/config/marketingSite.ts` (`routes`, `mainNav`, `footerColumns`, `brand`).
