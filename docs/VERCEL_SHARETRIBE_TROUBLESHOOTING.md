# Vercel + Sharetribe deployment troubleshooting

This checklist is for deploying the SSR Sharetribe Web Template on Vercel.

## 1) Verify Vercel build/runtime compatibility

- Node version should be set to `22.x` in Vercel project settings.
- Package manager should stay on Yarn Classic (`1.22.x`) so `yarn.lock` v1 is respected.
- Build command: `yarn build`
- Install command: `yarn install --frozen-lockfile`

## 2) Required environment variables (Vercel)

Set these in Vercel for each environment (Preview/Production):

- `REACT_APP_SHARETRIBE_SDK_CLIENT_ID`
- `SHARETRIBE_SDK_CLIENT_SECRET`
- `REACT_APP_MARKETPLACE_ROOT_URL`
- `REACT_APP_MARKETPLACE_NAME`
- `REACT_APP_STRIPE_PUBLISHABLE_KEY`
- `REACT_APP_ENV` (usually `production`)
- One map provider key:
  - `REACT_APP_MAPBOX_ACCESS_TOKEN`, or
  - `REACT_APP_GOOGLE_MAPS_API_KEY`

Optional but commonly needed behind Vercel proxy:

- `REACT_APP_SHARETRIBE_USING_SSL=true`
- `SERVER_SHARETRIBE_TRUST_PROXY=true`

## 3) Sharetribe Console checks

In Sharetribe Console > Advanced > Applications:

- Use the **Integration API** application credentials as
  `REACT_APP_SHARETRIBE_SDK_CLIENT_ID` + `SHARETRIBE_SDK_CLIENT_SECRET`.
- Ensure credentials belong to the same Sharetribe environment (dev/test/live) as your marketplace data.
- If you rotated credentials, update both Vercel env vars and redeploy.

In Sharetribe Console > Build > Content/Design/Users/etc:

- Publish latest pending changes ("Go live") so hosted assets match the deployed web app.

## 4) Common failure symptoms

- **Build fails with lockfile errors**: Yarn 4 was used accidentally. Pin to Yarn 1 and reinstall.
- **500 at runtime with missing env**: server exits when required vars are absent.
- **Maintenance mode UI**: hosted Sharetribe assets/config are missing/unpublished for the selected env.
- **OAuth/login callback issues**: root URL mismatch between deployment domain and configured marketplace root URL.

## 5) Post-deploy verification

- Open `https://<your-domain>/_status.json` and confirm `{"status":"ok"}`.
- Load homepage and a listing page.
- Verify login and checkout flows against Sharetribe test data.
