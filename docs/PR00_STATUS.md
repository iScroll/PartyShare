# PR00 Verification Notes

This document captures baseline verification for PR00 (no feature implementation).

## 1) Local project run status

- Created `.env` from `.env-template` to satisfy mandatory variable name checks.
- `yarn run config-check` passes with template env keys present.
- `yarn dev` starts both frontend and backend successfully:
  - frontend dev server starts
  - API server listens on port `3500`

## 2) Transaction process baseline

- Booking process constant is present as `default-booking` in `src/transactions/transaction.js`.
- Booking process alias `default-booking/release-1` is defined in transaction process implementation.

## 3) Checkout/cart route baseline

- A checkout route exists in route configuration:
  - `path: '/l/:slug/:id/checkout'` (`CheckoutPage`)
- No `/cart` route was found in route configuration.

Result: "no checkout/cart routes exist" is currently **not true** because checkout route still exists.

## 4) QA checklist presence

- `QA_CHECKLIST.md` exists at repository root.

## 5) Staging deployment instructions (Vercel)

### Prerequisites
1. Vercel project connected to this repository.
2. Environment variables configured in Vercel (Staging/Preview):
   - `REACT_APP_SHARETRIBE_SDK_CLIENT_ID`
   - `REACT_APP_STRIPE_PUBLISHABLE_KEY`
   - `REACT_APP_MARKETPLACE_ROOT_URL`
   - `REACT_APP_ENV`
   - map provider key (`REACT_APP_MAPBOX_ACCESS_TOKEN` or `REACT_APP_GOOGLE_MAPS_API_KEY`)

### Deploy steps
1. Push branch and open PR.
2. Verify Vercel Preview deployment triggers for the PR.
3. Confirm build command is `yarn build` and install command is `yarn install --frozen-lockfile`.
4. After deploy, open preview URL and run smoke tests:
   - login
   - add payment method
   - open listing and submit booking request
5. If smoke test passes, mark PR ready.

## Smoke test status for PR00

- Local app startup: PASS (dev services start).
- Login + booking request screen: BLOCKED in this environment due missing real marketplace credentials/listings for full end-to-end verification.
