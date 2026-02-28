# Client Project Portal

**Flipr Placement Drive – 4th Year Full Stack Task**

Lead Generation Landing Page with Projects, Clients, Contact Form & Newsletter.

## Tech Stack

- **Frontend:** React, React Router, Axios
- **Backend:** Node.js, Express, MongoDB, Multer
- **Assets:** From `4th year full stack Assets.zip` (icons, images, shapes)

## Project Structure

```
client-project-portal/
├── backend/                 # Express API
│   ├── config/db.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── Middleware(multer)/upload.js
│   └── Server.js
├── frontend/
   ├── public/
   │   └── assets/          # From 4th year full stack Assets
   │       ├── icons/       # home, Linkedin, circle-dollar-sign, etc.
   │       ├── images/      # logo, pexels photos
   │       └── shapes/
   └── src/
       ├── components/
       ├── pages/
       └── api.js

```

## Assets (from 4th year full stack Assets.zip)

| Folder | Contents |
|--------|----------|
| `public/assets/icons/` | home.svg, Linkedin.svg, circle-dollar-sign.svg, paintbrush-2.svg, etc. |
| `public/assets/images/` | logo.svg, pexels-*.svg (project images) |
| `public/assets/shapes/` | Ellipses, Rectangles for layout |

## Setup

### 1. Backend `.env`

Create `backend/.env`:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 2. Install & Run

**Option A – Start both (recommended):**

```bash
npm install
cd backend && npm install
cd ../frontend && npm install
cd ..
npm start
```

This starts backend (port 5000) and frontend (port 3000) together.

**Option B – Start separately:**

Terminal 1 (backend):

```bash
cd backend
npm install
npm start
```

Terminal 2 (frontend):

```bash
cd frontend
npm install
npm start
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api

### Fixing `ECONNREFUSED` / `Proxy error`

**Error:** `Could not proxy request /api/projects from localhost:3000 to http://localhost:5000 (ECONNREFUSED)`

**Cause:** The backend is not running. The frontend proxy forwards API calls to port 5000, but nothing is listening there.

**Fix:** Start the backend. Use one of these:

1. **Double-click `START.bat`** (Windows) – starts both backend and frontend
2. **From project root:** `npm start` – starts both
3. **Manual:** Open two terminals. In the first: `cd backend` then `npm start`. In the second: `cd frontend` then `npm start`

## Features

- **Landing Page:** Hero, Projects, Clients, Contact Form, Newsletter
- **Admin Panel:** Add Projects, Add Clients, View Contacts, View Subscribers
- **Design:** Lead Generation style using provided assets (#217BF4, #192A68)

