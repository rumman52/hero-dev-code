# Hero Dev Code Portfolio

Static Next.js portfolio for Md Rumman Ali, exported for GitHub Pages at:

https://rumman52.github.io/hero-dev-code/

## Runtime

- Node.js 20 is required for CI/CD and recommended locally.
- npm is the package manager. Use the committed `package-lock.json` for deterministic installs.

## Local setup

```bash
npm install
# or, for a clean lockfile-based install:
npm ci
```

## Development

```bash
npm run dev
```

The local development build uses no base path. The GitHub Actions build automatically enables the `/hero-dev-code` base path through `GITHUB_ACTIONS=true`.

## Verification commands

```bash
npm run lint
npm run typecheck
npm run build
```

For a local simulation of the GitHub Pages export, run:

```bash
GITHUB_ACTIONS=true npm run build
```

The exported site is written to `out/` and is hosted under `/hero-dev-code/` in production.

## GitHub Pages deployment

The repository deploys with `.github/workflows/deploy-pages.yml`. In the repository settings, GitHub Pages must use **GitHub Actions** as the publishing source. Do not select a branch or the `docs/` folder as the Pages source.

If a deployment fails, open the repository **Actions** tab, select the failed **Deploy GitHub Pages** workflow run, and inspect the first failed step in the `build` or `deploy` job logs.
