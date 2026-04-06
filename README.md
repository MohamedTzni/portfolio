# Mohamed Touzani — Portfolio

Personal developer portfolio built with **Angular 20** (standalone components).

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Angular 20 (standalone) |
| i18n | Transloco (DE / EN) |
| Mailing | EmailJS |
| Styling | SCSS |
| Build | Angular CLI + esbuild |

---

## Features

- Hero section with marquee animation and custom cursor effect
- About Me, Skills, Projects, References & Contact sections
- Live project previews with dialog
- Infinite-scroll references carousel
- Responsive design with mobile burger menu
- Bilingual (DE / EN) — language persisted in localStorage
- Legal Notice & Privacy Policy pages

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server → http://localhost:4200
npm start

# Production build
npm run build

# Run unit tests
npm test
```

---

## i18n

Translation files: `public/assets/i18n/`

Add a new language by creating a matching JSON file and registering it in the Transloco config.
