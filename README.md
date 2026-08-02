# Hero Dev Code Portfolio

Next.js portfolio for Md Rumman Ali, deployed on Vercel at:

https://hero-dev-code.vercel.app/

## Runtime

- Node.js 24 is used locally, in CI, and on Vercel.
- npm is the package manager. Clean environments should install the committed lockfile with `npm ci`.

## Local development

```bash
npm ci
npm run dev
```

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment

Vercel builds the `main` branch as a native Next.js application from the repository root. Use the Next.js framework preset, `npm ci` as the install command, and `npm run build` as the build command. Leave the output directory on its automatic setting; the application does not require environment variables.
