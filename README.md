# liankevich.com

Personal site of Paulik Liankevich, product designer. Built with [Astro](https://astro.build) and deployed to GitHub Pages: https://lianksan.github.io

## Development

```bash
npm install
npx astro dev --port 4400
```

## Structure

- `src/pages` — Home, Shots gallery, Cases, Products
- `src/data` — site content: links, timeline, products, shots
- `src/assets` — images and videos (optimised at build time)
- `public/icons` — icons and favicons served as is

Pushing to `main` builds and deploys the site via `.github/workflows/deploy.yml`.
