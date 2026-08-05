# HyyAnk Portfolio

The source for [HyyAnk's portfolio](https://portfolio-navy-iota-86.vercel.app), centred on graphic and web design with supporting work in video editing, automation, and blockchain integration.

## Stack

- React 19 and React Router
- Vite 7
- Motion and Three.js
- Phosphor Icons and Simple Icons
- Self-hosted variable fonts through Fontsource
- Vercel deployment with generated static SEO route shells

## Local development

Node.js 20.19 or newer is required.

```bash
npm ci
npm run dev
```

Create and verify a production build with:

```bash
npm run check
npm run preview
```

## Repository structure

```text
public/      Static brand assets
scripts/     Build-time SEO route generation
src/         React source, styles, and production web assets
```

Runtime imagery belongs in `src/assets` and must either be imported by source code or match an intentional Vite asset glob. Original PDFs, working exports, screenshots, temporary renders, and generated `dist` files are kept outside version control.

## Deployment

`npm run build` creates the Vite bundle and then generates static HTML shells for every portfolio and skill route. Vercel deploys the repository from `main`.

Portfolio content and visual assets are copyright HyyAnk. The repository is not licensed for redistribution.
