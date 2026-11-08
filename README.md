# Imad Hassan Portfolio

Static site (HTML + CSS + JS), no build step.

## Files
- `index.html`: portfolio content and contact form preview
- `style.css`: design, responsive layout, and animations
- `script.js`: typing, count-up, scroll reveals, and contact form demo behavior
- `assets/imad.webp`: hero photo

## Run locally
Open `index.html` in a browser, or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Contact form
The form is a front-end preview only. Submitting it does not send or store the entered information.

## Deploy
This is a static site and needs no build step.

### Vercel
Import this repository in Vercel, keep the project root at the repository root, select the `Other` framework preset, and leave the build command empty.

### GitHub Pages
In the repository settings, open **Pages**, select **Deploy from a branch**, choose the `main` branch and `/ (root)` folder, then save.
