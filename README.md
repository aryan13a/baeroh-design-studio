# Baeroh Design Studio — Editorial Interior Design Portfolio

A single-page, responsive, and editorial portfolio website built for **Baeroh Design Studio** located in Raja Park, Jaipur, Rajasthan. The website showcases their signature projects using their local photo assets.

## Project Structure

```text
baeroh-design-studio/
├── index.html     # HTML structure with Jaipur location details and Google reviews badge
├── styles.css     # Responsive layouts, editorial typography, and transitions
├── app.js         # Navigation, project detail modal, testimonials slider, and scroll animations
├── assets/        # Copy of photo assets from the Desktop studio folder
└── README.md      # Project documentation
```

## Setup & Running Instructions

### Option 1: Direct File Launch
Double-click `index.html` to open it in your browser. Since the project uses vanilla HTML, CSS, and JS, no compilation or bundlers are required.

### Option 2: Live Local Server
Run a local development server in the root of the project directory:

```bash
# Using Python
python -m http.server 8000

# Using Node (npx)
npx live-server
```

Then visit [http://localhost:8000](http://localhost:8000) in your web browser.

---

## Design details

- **Color Palette:** Off-white (`#F7F5F0`), deep charcoal (`#1C1C1A`), warm bronze/copper (`#B07D5B`), and muted sage (`#8A9B8A`).
- **Typography:** Classical serif (*Cormorant Garamond*) for headlines; clean geometric sans-serif (*Jost*) for body.
- **Google Reviews Badge:** Displays the 5.0 rating (2 Google reviews) prominently in the About section.
- **Asymmetric Grid:** A visually interesting asymmetrical layout for project cards on desktop, adding a luxury print magazine aesthetic.
- **Micro-interactions:** Smooth scroll offsets, scroll-triggered fade-ins, sliding project details in modal overlays, and sticky navigation that switches styling on scroll down.
