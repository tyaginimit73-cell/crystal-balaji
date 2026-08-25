# Crystal Balaji Industries — Premium Corporate Website

Premium full-stack platform for Crystal Balaji Industries Private Limited (CIN U15400UP2020PTC133900) — bio-energy, ethanol, DDGS, Liquid CO₂.

## Stack
- Frontend: React + Vite + Tailwind + Framer Motion + React Router + Recharts + Axios + RHF + Zod
- Backend: Node + Express + MongoDB + Mongoose + JWT + Helmet + CORS + Rate limiting

## Structure
```
crystal-balaji/
  frontend/  -> React app (port 5173)
  backend/   -> Express API (port 5000)
```

## Run
### Backend
```bash
cd backend
npm install
cp .env.example .env  # set MONGODB_URI, JWT_SECRET
npm run dev            # http://localhost:5000/api/health
```
Seed creates admin from ADMIN_EMAIL / ADMIN_PASSWORD and sample products/articles/jobs/leadership.

### Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm run dev            # http://localhost:5173
```

## API
- POST /api/auth/login
- GET /api/products , GET /api/products/:slug, POST/PUT/DELETE (protected)
- GET /api/articles , GET /api/articles/:slug, POST/PUT/DELETE (protected)
- POST /api/contact , GET /api/contact (protected)
- GET /api/jobs , POST /api/jobs (protected), POST /api/jobs/applications
- GET /api/documents, POST /api/documents
- GET /api/leadership
- GET /api/stats

Admin: /admin/login -> /admin (JWT in localStorage)

## Design
Deep forest #0f2a1d, gold #c9a86a, off-white #faf8f5, charcoal #1a1f1c. Instrument Serif + Inter. Cinematic hero, editorial splits, restrained motion.

## Notes
- Proposed expansion (400 KLPD / 12.5 MW / ₹383.14 Cr) is ALWAYS labelled "Proposed".
- No invented financials / certs / bios — marked "Data to be published" where unverified.
- Image placeholders are unsplash industrials — replace with official photography via `image` fields.
- Storage abstraction ready for S3/GCS for documents/resumes.
