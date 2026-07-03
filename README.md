# Garrison Chen — Personal Site

Personal portfolio site for **Garrison Chen**, a Software Development & Automation Engineer. Built as a dependency-free, multi-page static site — no framework, no build step, just HTML, CSS, and vanilla JavaScript.

🔗 **Live site:** https://pikachuouo10.github.io/vibe_web/
*(requires GitHub Pages to be enabled on this repo — see [Deployment](#deployment))*

## Preview

| Home | Work | About | Blog |
| --- | --- | --- | --- |
| Hero with animated intro + mouse spotlight effect | Project cards & open-source links | Experience timeline & skills | "Coming soon" placeholder |

## Features

- **Multi-page site** — `index.html` (Home), `work.html`, `about.html`, `blog.html`, sharing one CSS/JS bundle
- **Animated hero** — staggered splash intro, word-by-word headline reveal, and a mouse-tracked "spotlight" effect that reveals a second image layer via an HTML `<canvas>` mask
- **Fully offline-capable** — Google Fonts (Inter) and all images are self-hosted under `assets/`, no external network calls at runtime
- **Responsive** — mobile-first layout with breakpoints at `768px`
- **Accessible by default** — respects `prefers-reduced-motion`, semantic landmarks, `aria-current` on active nav links
- **SEO-ready** — per-page `<title>`, meta description, and Open Graph / Twitter Card tags
- **Zero dependencies** — no `npm install`, no build tools; open the HTML files directly or serve as-is

## Tech Stack

| Layer | Choice |
| --- | --- |
| Markup | Semantic HTML5 |
| Styling | Vanilla CSS (`assets/css/style.css`) — custom properties-free, BEM-ish naming |
| Behavior | Vanilla JS (`assets/js/main.js`) — no libraries |
| Fonts | [Inter](https://rsms.me/inter/), self-hosted as static `.woff` files per weight |
| Hosting | [GitHub Pages](https://pages.github.com/) |

## Project Structure

```
.
├── index.html          # Home — hero, intro, CTA
├── work.html           # Work — project cards + open-source links
├── about.html          # About — bio, experience timeline, skills
├── blog.html           # Blog — coming soon placeholder
├── assets/
│   ├── css/
│   │   └── style.css   # Shared styles for all pages
│   ├── js/
│   │   └── main.js     # Shared behavior (nav, animations, spotlight effect)
│   ├── fonts/           # Self-hosted Inter (300–700) as .woff
│   └── images/          # Hero images + GC monogram logo/favicon
└── README.md
```

## Getting Started

No build step required.

```bash
git clone git@github.com:PikachuOuO10/vibe_web.git
cd vibe_web
open index.html            # macOS
# or serve locally for a closer-to-production experience:
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Deployment

This site is deployed with **GitHub Pages**, served directly from the `main` branch — no build/publish workflow needed since it's static HTML/CSS/JS.

To (re-)enable Pages on this repo:

1. Go to **Settings → Pages** on [github.com/PikachuOuO10/vibe_web](https://github.com/PikachuOuO10/vibe_web)
2. Under **Build and deployment**, set **Source** to `Deploy from a branch`
3. Select branch `main`, folder `/ (root)`, then **Save**
4. The site will be live at `https://pikachuouo10.github.io/vibe_web/` within a minute or two

Any push to `main` automatically redeploys.

## Customization

- **Hero photos** — replace `assets/images/hero-base.png` and `hero-reveal.png` with your own images (same filenames, any aspect ratio works but landscape photos look best)
- **Copy** — headline/tagline text lives directly in `index.html` (`#headline`'s `data-text` attribute) and the `<section class="page-hero">` blocks in `work.html` / `about.html` / `blog.html`
- **Projects** — add/edit `<article class="project-card">` blocks in `work.html`
- **Experience & skills** — add/edit `<div class="timeline-item">` and `.skill-pill` entries in `about.html`
- **Blog posts** — once ready, replace the placeholder in `blog.html` with real post links/content
- **Colors** — key colors are defined inline where used (`#75C5DE` accent, `#111111` dark, `#F4F1E8` cream, `#E4E4E4` background); a future refactor could promote these to CSS custom properties

## Browser Support

Targets evergreen browsers (Chrome, Firefox, Safari, Edge). Uses `backdrop-filter`, CSS `mask-image`, and `<canvas>` — all widely supported, with graceful fallback via `prefers-reduced-motion` for users who disable animations.

## Author

**Garrison Chen**
[GitHub](https://github.com/PikachuOuO10) · [LinkedIn](https://tw.linkedin.com/in/garrison-chen-938335220) · [pikachuouo10@gmail.com](mailto:pikachuouo10@gmail.com)

## License

This project is personal portfolio code. Feel free to use the structure/animations as a learning reference, but please don't republish the content (name, photos, resume copy) as your own.
