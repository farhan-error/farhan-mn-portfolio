# Farhan M N — Portfolio Website

A multi-file, production-ready personal portfolio for a Civil Engineer & Urban Planner.

---

## 📁 File Structure

```
portfolio/
├── index.html              ← Main entry point (open this in a browser)
│
├── css/
│   ├── variables.css       ← Design tokens, colours, buttons, modals, utilities
│   ├── nav.css             ← Navigation bar & mobile drawer
│   ├── hero.css            ← Hero section with city canvas animations
│   └── sections.css        ← About, Projects, Publications, Contact, Footer
│
├── js/
│   ├── canvas.js           ← All canvas animations (city skyline, transport network, thumbnails)
│   ├── nav.js              ← Scroll behaviour, hamburger, smooth scroll, active links
│   ├── modals.js           ← Modal system: project panels, publication panel, full sheets viewer
│   └── ui.js               ← Scroll reveal, hero entry animation, counter, typing effect, form
│
├── assets/
│   └── Farhan-MN-Resume.pdf  ← Place your resume PDF here (linked from "View Resume" button)
│
└── README.md
```

---

## 🚀 How to Use

1. **Open locally**: Just open `index.html` in any modern browser. No build step needed.
2. **Deploy**: Upload the entire folder to GitHub Pages, Netlify, Vercel, or any static host.

---

## ✏️ What to Replace (Placeholders)

### index.html
| Placeholder | What to add |
|---|---|
| `[Thesis Title Placeholder]` | Your actual thesis title |
| `[Dissertation Title Placeholder]` | Your actual dissertation title |
| `[Studio Project 1/2/3 Title Placeholder]` | Studio project titles |
| `[Publication Title Placeholder]` | Paper title |
| `[Journal Name Placeholder]` | Journal name |
| `[Volume] · [Issue] · [Year]` | Publication details |
| `[University Name]` | Your university |
| `[City, Country]` | Your location |
| `[your.email@example.com]` | Your email |
| `[+XX XXXXX XXXXX]` | Your phone |
| `linkedin.com/in/[your-handle]` | Your LinkedIn URL |
| `12°58′N · 77°33′E` | Your city's coordinates |
| Bio placeholder paragraphs | Your actual bio |

### js/modals.js — PROJECTS object
For each project key (`thesis`, `dissertation`, `studio1`, `studio2`, `studio3`):
- `title` — full title
- `subtitle` — university and year
- `tags` — keyword tags
- `description` — 3–4 sentence description
- `carouselSlides` — number of images you'll add
- `sheets` — number of sheets (for studio projects)

For `thesis`: set `showSheetBtn: true` and update `sheets` count.

### js/modals.js — PUBLICATIONS object
- Fill in `title`, `journal`, `meta`, `doi`, `description`
- Set `fullPaperUrl` to your paper's DOI link or PDF path

### assets/
- Place `Farhan-MN-Resume.pdf` in the `assets/` folder

---

## 🖼️ Adding Images

### Carousel slides (projects & publication)
In `modals.js`, replace the placeholder `carousel-slide` div content with:
```html
<img src="../assets/project-name/slide-01.jpg" alt="Description" style="width:100%;height:100%;object-fit:cover" />
```

### Sheet items (thesis sheets / studio sheets)
Replace `.sheet-item` placeholders with actual sheet images:
```html
<img src="../assets/thesis/sheet-01.jpg" alt="Sheet 1" style="width:100%;height:100%;object-fit:cover;border-radius:inherit" />
```

### Project card thumbnails
The card thumbnails are currently animated canvas sketches. To replace with real images, in `index.html` replace:
```html
<canvas id="thumb-thesis"></canvas>
```
with:
```html
<img src="assets/thesis/cover.jpg" alt="Thesis cover" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0" />
```
And remove the corresponding `initProjectThumb('thumb-thesis', ...)` call in `canvas.js`.

---

## 🎨 Customising Colours

All colours are in `css/variables.css` under `:root`:
- `--accent` (`#2B4B6F`) — Blueprint blue, the primary brand colour
- `--amber` (`#C8803A`) — Warm amber accent
- `--ivory` / `--cream` / `--warm-white` — Light backgrounds

---

## 📱 Responsive Breakpoints
- **≥ 1024px** — Full two-column hero, three-column project grid
- **768–1024px** — Two-column project grid, single-column about
- **≤ 768px** — Mobile: single column, hamburger nav, stacked everything

---

## ✅ Browser Support
Chrome, Firefox, Safari, Edge (all modern versions). Uses Canvas API, CSS custom properties, and IntersectionObserver — no polyfills needed for modern browsers.
