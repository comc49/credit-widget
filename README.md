# Credit Score Widget

An embeddable, white-label credit score card built with **Svelte 5** and compiled to a native **Web Component**. It runs on any page, with any framework or none.

![Widget screenshot](./screenshot.png)

## Highlights

- **Shadow DOM isolation:** host page styles can't break it, and it can't leak styles out.
- **Partner theming** through CSS custom properties.
- **No framework runtime** to ship, since Svelte compiles it away.
- **Accessible:** labeled region, `aria-live` score updates, visible focus ring.

## Usage

```html
<script type="module" src="credit-widget.js"></script>
<credit-score-card score="728" partner-name="Acme Bank"></credit-score-card>
```

**Props:** `score` (number) and `partner-name` (string). You can also set them as properties: `widget.score = 650`.

**Event:** `view-details`, with `detail: { score }`. It's dispatched with `composed: true`, so the host page can listen for it.

## Theming

```css
credit-score-card {
  --widget-bg: #0f172a;
  --widget-text: #f8fafc;
  --widget-accent: #22c55e;
  --widget-radius: 4px;
  --widget-font: system-ui, sans-serif;
  --widget-focus: #f59e0b;
}
```

## Development

```bash
npm install
npm run dev     # demo partner page
npm run build   # outputs dist/credit-widget.js
```

**Tech:** Svelte 5 (runes), TypeScript, Vite, Custom Elements, Shadow DOM.