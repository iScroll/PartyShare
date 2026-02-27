# TEST Environment Setup

This guide helps you validate deployment readiness for a TEST environment without changing runtime behavior.

## 1) Required environment variables

Set these variables in your TEST environment configuration (names only, no values in source control):

- `REACT_APP_SHARETRIBE_SDK_CLIENT_ID`
- `REACT_APP_STRIPE_PUBLISHABLE_KEY`
- `REACT_APP_MARKETPLACE_ROOT_URL`
- `REACT_APP_ENV`
- One map provider key:
  - `REACT_APP_MAPBOX_ACCESS_TOKEN`, or
  - `REACT_APP_GOOGLE_MAPS_API_KEY`

You can use `.env-template` as a reference for additional optional settings.

## 2) Install dependencies

```bash
yarn install --frozen-lockfile
```

## 3) Run against TEST configuration locally

1. Export required environment variables in your shell or `.env.local`.
2. Ensure `REACT_APP_ENV` is set to the TEST target value used by your deployment process.
3. Run the app locally:

```bash
yarn dev
```

## 4) Run readiness check

Use the repository healthcheck before deploy:

```bash
yarn healthcheck
```

The healthcheck will:

- Print Node and Yarn versions.
- Validate required environment variable names are present.
- Run a smoke build (`yarn build`).
