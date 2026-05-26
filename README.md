# Languages Cube Website

Languages Cube is a premium, high-converting static website for a foreign language institute based in Kalyan West and online, offering certified courses in **German, French, Spanish, Japanese, Korean, and Russian**. 

Designed with modern glassmorphism aesthetics, responsive grid layouts, clean micro-interactions, and built-in search engine optimization (SEO), this website is ready for high-performance indexing and high-intent learner acquisitions.

---

## ✨ Features & Architecture

### 🎨 Visual & Layout Polish
* **Premium Typography**: Leverages Google Fonts **Outfit** (bold, geometric headings) and **Fustat** (legible, contemporary body text).
* **Glassmorphic Sticky Header**: A sticky navbar built with frosted glass translucent backing (`rgba(255, 255, 255, 0.72)`) and background blur filter. Automatically shrinks on scroll (`scripts.js`) for a compact reading viewport.
* **Full-Width Inquiry Stacking**: Restructured Contact section featuring a centered full-width lead inquiry form and bottom-stacked card layouts.
* **Circle Crop Brand Logo**: A custom-designed, circular-cropped frame (`.footer-logo-circle`) housing the official high-resolution logo `languages-cube-logo-main.png` in the footer.
* **Dynamic Cropping & Aspect Ratios**: Proportional responsive grids styled with aspect ratios and subject-aware `object-position` properties so student and classroom photos adapt to all devices without squishing faces.

### ⚡ Interactive Elements
* **Interactive FAQ Accordion**: Performance-optimized collapsible accordion list with cubic-bezier slide transitions.
* **Micro-Interactions**: Custom circular SVG wrappers (`.contact-icon-wrapper`) that flip backgrounds and path colors dynamically when cards are hovered.
* **Dynamic Flags**: Map standard two-letter country identifiers into high-quality circular SVG vectors.

### 🔍 Elite SEO & Social Metadata
* **Calibrated Meta Snippets**: Character-calibrated SEO titles (<60 characters) and meta descriptions (<160 characters) for maximum SERP relevance and click-through rates.
* **JSON-LD Schema Integration**:
  * **Homepage (`index.html`)**: Features a comprehensive `LanguageSchool` schema (geo-coordinates, local office timings, address, telephone, and social profiles).
  * **German Page (`german-course.html`)**: Incorporates a rich-snippet `Course` schema mapping curriculum levels (A1-B1) and Goethe exam preparation parameters.
* **Social Meta Tags**: Integrated standard Facebook/Instagram Open Graph (`og:*`) and X / Twitter Card (`twitter:*`) microdata schemas to display premium social share card previews.

---

## 📂 Project Structure

```bash
├── index.html                   # Homepage (All languages overview, methodology, contact form)
├── german-course.html           # Deep-dive certified course subpage (A1-B1, online/offline, Goethe prep)
├── styles.css                   # Core stylesheet containing the unified design system, fonts, & transitions
├── scripts.js                  # Lightweight scroll listeners, FAQ click triggers, and contact renders
├── site-data.js                 # Local static dataset feeding dynamic UI course, event, and gallery grids
├── serve.py                     # Custom development static server utilizing no-cache injection headers
├── .htmlhintrc                  # HTML5 markup standard lint constraints
├── images/                      # Real classroom, workshop, and graduate photography assets
│   ├── Navigartion-logo.png     # Primary navbar logo
│   └── languages-cube-logo-main.png # High-res brand logo asset
└── public/                      # Asset pack directory
    ├── images/
    │   ├── flags/               # Circular country flag SVGs (germany.svg, japan.svg, etc.)
    │   └── icons/               # SVG social icons (instagram.svg, facebook.svg, linkedin.svg)
```

---

## 🚀 Getting Started

### 1. Local Serving (With Auto Cache Clearing)
Browsers often aggressively cache static assets like CSS and JS. To bypass this, launch the local site using the customized cache-clear Python script located in the project root:

```bash
python3 serve.py
```

This starts a local instance at:
👉 **[http://localhost:8000](http://localhost:8000)**

*Note: The script overrides the standard HTTP header pipelines to force browsers to pull the latest file updates directly off the disk with every single page refresh.*

### 2. Markup Standards (Linter)
Validate code syntax, semantic tags, and file links against our preconfigured validation guidelines:

```bash
npx htmlhint index.html german-course.html
```

---

## 🛠️ Technology Stack
* **Markup**: Vanilla Semantic HTML5
* **Styling**: Vanilla Modern CSS (Baseline widely supported standard)
* **Scripts**: Plain Vanilla JavaScript (ES6 Modules compatibility)
* **Server**: Python3 Standard Library
