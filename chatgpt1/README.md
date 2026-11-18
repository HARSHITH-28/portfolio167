# Ranjitha S — Creative Developer Portfolio

A complete, responsive, one-page portfolio site built from the two provided resumes. It takes **structural inspiration** from the reference portfolio's editorial storytelling and interactive system explainer, but has its own look, illustrations, animations, and copy.

## Contents

- `index.html` — all page sections and SEO metadata
- `styles.css` — custom design system, scroll transitions, responsive layouts
- `data.js` — **all project descriptions, skills, and link placeholders**
- `script.js` — filtering, project detail dialogs, interactive pipeline, skills tabs, accessibility, contact actions
- `assets/` — original, locally included SVG project artwork, favicon, social image, supplied-resume portrait, and a public-safe resume PDF
- `make_public_resume.py` — optional script to rebuild the downloadable resume PDF using ReportLab

## Run locally

No npm, React, backend, API keys, accounts, build process, or paid services needed.

1. Extract the ZIP to a folder.
2. Double-click `index.html` to open it; or (recommended) run a local server:
   ```bash
   cd ranjitha_portfolio
   python -m http.server 8080
   ```
3. Open `http://localhost:8080` in your browser.

## Replace repository and deployment placeholders

Open `data.js` and find each project by its `id`. Replace the `null` values:

```js
repoUrl: 'https://github.com/YOUR_USERNAME/YOUR_PROJECT',
liveUrl: 'https://your-project.example',
```

When a URL is `null`, the case-study dialog shows a clearly labeled "link pending" state instead of leading visitors to a broken URL. The following **team repositories** appear in the supplied academic resume and may be used if you confirm they are the desired links:

- ASL interpreter: `https://github.com/PraveenKumarM17/Gesture`
- Events Management System: `https://github.com/ssarveshr/DBMS-project-`

Project deployment URLs and the other repository URLs were not included in the source resumes, so none were invented.

## Make changes

- **Name, email, social URLs:** edit the copy in `index.html`; also update `email` and `linkedin` in `data.js` (used by interactive features) and the schema.org metadata in the HTML.
- **Project descriptions and stacks:** edit `data.js`. The project grid, filters, modal, and interactive architecture explorer use this data.
- **Photo:** replace `assets/ranjitha-portrait.png` with a higher-resolution professional headshot of the same filename (or update its path in `index.html`). The included image is extracted from the supplied academic resume at 200 × 200 pixels.
- **Résumé:** replace `assets/ranjitha-public-resume.pdf` with your preferred public résumé. The included PDF is a privacy-conscious summary of the two source resumes. It omits the home address, date of birth, and phone number.
- **Theme:** edit CSS variables at the beginning of `styles.css`.
- **Project visual art:** replace the custom `assets/project-*.svg` images and update image paths in `data.js`.
- **Contact:** the contact form opens a prefilled email draft via `mailto:`. It does **not** send mail on its own or require any secret API key. If you want direct web form delivery, integrate a form provider or server endpoint before changing the form's messaging.

## Deployment

This is a plain static website and can be hosted on:

- **Netlify:** drag the unzipped folder into Netlify's static deploy UI.
- **Vercel:** import the folder/repository as an "Other" static project (no build command; output root).
- **GitHub Pages:** publish the root directory on the `main` branch or publish via Actions.

For social sharing, replace the relative `og:image` in `index.html` with an absolute HTTPS URL after you know your deployed domain.

## Accessibility and quality

Semantic HTML, skip link, keyboard-accessible native modal and skills tabs, reduced-motion support, focus states, aria-labels, lazy images, no fake submission success, and no dependency on an external JS framework. Google Fonts are optional; fallbacks are present if they do not load.

## Resume source notes

Content comes from both attached resumes and is edited only for concise web presentation. Information included: B.E. CSE, CGPA 9.49, Samsung Innovation Campus training, MoodSync-AI, CampusAR, real-time sign-language recognition, Events Management System, technical tools, IEEE secretary role, GDSC membership, NPTEL networking certificate (78%), and interests. No unverified project performance or impact percentages are claimed. The two resumes differ in dates for the gesture-recognition project, so the website presents the consistent **year** only.
