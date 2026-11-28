# waffles website

The product site for [waffles](https://github.com/waffleparty/waffles), built with [Astro](https://astro.build) and served by GitHub Pages at https://waffleparty.ai/.

## Pages

| Path | Content |
| --- | --- |
| `/` | Headline, install commands, feature tiles, and the features-by-platform table |
| `/features` | One section and demo per feature: plan outline, modes, backlog, unattended runs, pull requests |
| `/skills` | Skills & Agents |

Reference docs are not copied here: pages link to `docs/` in the waffles repo.

## Development

Requirements: Node.js 22.23.4 or later (24 is used in CI).

```sh
npm ci
npm run dev       # http://localhost:4321/
npm run build     # type check, then build into dist/
npm run preview   # serve dist/
```

## Brand

Colors, type, and the light and dark themes are tokens in `src/styles/tokens.css`. The text color on the `#bada55` background is deep teal; gold has too little contrast on it and is used only on dark surfaces. The 3D logo is used at large sizes (`public/waffles-*.png`); the flat mark (`src/components/FlatMark.astro`, `public/favicon.svg`) is used at small sizes.

## Deploy

Each push to `main` runs `.github/workflows/deploy.yml`, which builds with `withastro/action` and publishes with `actions/deploy-pages`. The repo's Pages source must be set to GitHub Actions.

The custom domain `waffleparty.ai` is set in the repo's Pages settings, not in a `CNAME` file: Actions deploys ignore that file. DNS for it is on Cloudflare, DNS only (not proxied): 4 `A` and 4 `AAAA` records at the apex for the GitHub Pages addresses, and `www` as a `CNAME` to `waffleparty.github.io`.
