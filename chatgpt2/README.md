# Ranjitha S — Interactive Portfolio

An original, responsive, single-page portfolio for **Ranjitha S**, created using information from two supplied resumes. The navigation and section sequence are *inspired by* the public site `https://mangalam.navisto.cloud/`, while all HTML, CSS, JavaScript, illustration SVGs, wording, and visual branding in this deliverable were made independently. Merely recoloring another person's site would not by itself prevent copyright problems; this project does not copy the reference site's source code, images, or prose.

## Run the website

**No installation is required.** Extract the ZIP, then open `index.html` in a modern browser. For the best experience, serve the folder as a static website:

```bash
cd ranjitha-portfolio
python -m http.server 8000
```

Visit **http://localhost:8000**. You can deploy the entire folder on GitHub Pages, Netlify, Cloudflare Pages or Vercel's static-site hosting; no build step or environment variables are needed.

## Included

- `index.html` — all eight sections and modal markup
- `styles.css` — desktop, tablet and mobile design, responsive motion and reduced-motion support
- `app.js` — intro, scroll navigation, pipeline demo, project selector, case studies, skills tabs, portfolio FAQ, contact mailto integration
- `assets/ranjitha-profile.webp` — portrait extracted from the first supplied resume, transformed to WebP
- `assets/project-*.svg` — custom vector project illustrations (not screenshots of live products)
- `assets/Ranjitha-S-Resume.pdf` — copy of the second, more recent resume, used by the resume link
- `assets/favicon.svg` — original RS favicon

## Portfolio content provenance

**First resume** (“Ranjitha S — Batch 2027 — B.E. — Computer Science & Engineering”): verified engineering CGPA 9.49/10; Samsung Innovation Campus (28 Nov 2024 – 25 Feb 2025); real-time ASL interpreter (Python, OpenCV, MediaPipe, CNN, TensorFlow/Keras, and team contribution); Events Management System frontend work; IIT Madras NPTEL “Demystifying Networking”; IEEE Consumer Technology Society Secretary and GDSC membership; profile photo.

**Second resume** (“Maersk Resume”): verified email `ranjithasgowda245@gmail.com`, GitHub URL `https://github.com/ranjitha-sridhar`, LinkedIn URL `https://www.linkedin.com/in/ranjitha-sridhar-a5b711311`, wider technical stack; MoodSync-AI project (May 2026–present) and CampusAR (2026); Samsung summary; other software-engineering fundamentals. Both resumes identify Ranjitha S and RNS Institute of Technology, Bengaluru (2023–2027).

**Note:** The two resumes use different dates and technical descriptions for sign-language projects; the portfolio does **not** assert that they are definitively the same project. The showcase primarily uses the more detailed ASL interpreter description from the first resume, without displaying a conflicting date.

### Project repository links

- **Sign Language Interpreter:** `https://github.com/PraveenKumarM17/Gesture` (as linked in the first resume). The repository is linked from the resume, but is *not independently verified as owned by Ranjitha*.
- **Events Management System:** `https://github.com/ssarveshr/DBMS-project-` (as linked in the first resume). Same caveat.
- **MoodSync-AI:** no repository or deployment URL was provided. The website explicitly shows “repo link pending” and links only to the verified GitHub **profile**.
- **CampusAR:** same as above.

If you have your personal project repos or live URLs, update the `repo` fields in the `PROJECTS` array in `app.js`. To add deployment links, include a second `demo` field in the data and a new button in the project UI.

## What works / limitations

- **Project experience:** switch between four projects; see challenge, approach, stack and case study modal; use Previous/Next and keyboard arrows in the open modal.
- **Pipeline:** conceptual five-stage MoodSync-AI system walkthrough with manual and automatic controls. It does not access the camera or run an AI model.
- **Ask Ranjitha:** local keyword-based FAQ answers based on the supplied resumes. No external AI API, internet request, message storage or knowledge beyond the authored information.
- **Contact:** validates name, email and message before creating a `mailto:` email draft. **No message is sent by the website.** To collect submissions from every visitor, add a trusted form backend or a hosted form service.
- **Resume:** PDF opens from included `assets/Ranjitha-S-Resume.pdf`.
- **Local time:** displays Bengaluru time from the browser via `Intl.DateTimeFormat`.
- **Animations:** preloader, scroll reveals, cycling hero role, scanline, ticker, portrait parallax, hover effects. Supports `prefers-reduced-motion`.
- **Fonts:** Google Fonts are loaded when online; system fallbacks are used offline.

## Privacy & customizations

The displayed email, phone number, GitHub and LinkedIn were obtained from the provided resumes. The site intentionally does **not** publish the private home address, birth date or other personal identifiers present in the documents. Since the attached PDF is also downloadable, review the resume before publishing: you may want to redact personal details or use a public-facing resume.

To change the color palette, edit the custom properties at the beginning of `styles.css`. To change content, edit `index.html` and the content arrays in `app.js`.

## Suggested launch checklist

1. Confirm the phone/email/social links are the intended public contacts.
2. Add final URLs for MoodSync-AI and CampusAR if you want direct project links.
3. Replace the profile image with a larger photograph if available (the original embedded image is only 200×200).
4. Confirm wording, project ownership and dates, then upload the folder to your hosting provider.
5. For a real contact form, configure a form service; the current version deliberately uses an email-draft handoff.
