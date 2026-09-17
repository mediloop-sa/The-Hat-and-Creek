# The Hat & Creek — Website Mockup

A mockup site for The Hat & Creek, a restaurant in Hoedspruit, Limpopo, South Africa.
Built as a static site — plain HTML, CSS, and JavaScript, no build step required.

This is a **pitch mockup**, not yet built with or endorsed by the restaurant. See "Before you send this to the client" below.

## Project structure

```
hat-and-creek/
├── index.html          # all page content
├── css/
│   └── style.css        # all styling
├── js/
│   └── script.js        # nav, fairy lights, marquee, reveal animations, reservation form
├── images/              # empty — see "Adding photos" below
└── README.md
```

## Running it locally

No build tools, no dependencies. Just open `index.html` in a browser, or serve it properly:

```bash
# Option 1: just open it
open index.html

# Option 2: serve it (recommended, avoids some local-file browser quirks)
npx serve .
```

## Deploying to Vercel

1. Push this folder to a new GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new), import the repo
3. Framework preset: **Other** (it's a static site — no build command needed, output directory is `.`)
4. Deploy

That's it. No environment variables, no config needed.

## Adding photos

The design currently falls back to a styled placeholder (dark gradient + dot texture) everywhere a real photo should go, so the site looks intentional even with zero images added. To bring a tile to life, just drop a file into `images/` with the **exact filename** below — no code changes needed.

| Filename | Where it's used | Suggested search |
|---|---|---|
| `hero-terrace.jpg` | Statement collage + gallery hero tile | "outdoor restaurant terrace string lights night" |
| `dish-signature.jpg` | Masterpiece spotlight, menu photo | "grilled steak prawns plated fine dining" |
| `candlelight.jpg` | Statement collage, gallery, overlap accent | "candlelit table restaurant close up" |
| `garden-path.jpg` | Atmosphere gallery | "garden path string lights night" |
| `dish-plated.jpg` | Atmosphere gallery | "plated dinner service restaurant" |
| `under-trees.jpg` | Atmosphere gallery | "outdoor dining under trees evening" |
| `wine-terrace.jpg` | Atmosphere gallery | "wine glasses outdoor table night" |
| `private-dining.jpg` | Reservation section | "intimate private dining table candlelight" |
| `kitchen.jpg` | Story section | "restaurant kitchen chef cooking" |
| `plating.jpg` | Story section | "chef plating dish hands close up" |

Recommended: **1600px wide minimum**, landscape or square depending on the tile, JPG at ~80% quality (keeps page weight down).

Two good free, commercial-use-friendly sources: [unsplash.com](https://unsplash.com) and [pexels.com](https://www.pexels.com) — no attribution legally required on either, though it's a nice gesture.

**Once the restaurant is actually involved, replace all of these with their real photography.** Stock photos get this into a presentable state for a pitch; the real thing should be built on their own terrace, their own plates, their own evenings.

## Before you send this to the client

A few things worth resolving before this goes live for real:

- **Hours** — their Facebook listing showed "Opening Soon," which is unusual for an established restaurant. Confirm actual hours before publishing anything specific.
- **Reservation form** — currently opens a pre-filled email to `cheryl@thehatandcreek.co.za` via `mailto:`. Works with zero backend, but if they want it to land in an inbox reliably (not everyone has a mail client configured on their phone/browser), consider a simple form backend like Formspree or Web3Forms — both have free tiers and need only a couple of lines changed in `script.js`.
- **Map embed** — currently points at the address from their Facebook listing (R527, Main St, Hoedspruit). Worth confirming that's precisely correct before launch.
- **Menu content** — the three dishes shown are placeholders based on what was visible in their Facebook photos. Get their real, current menu from them.

## Credits

Design and copy: mockup, unaffiliated with The Hat & Creek at time of writing.
Fonts: Fraunces & Jost via Google Fonts (both free for commercial use).
