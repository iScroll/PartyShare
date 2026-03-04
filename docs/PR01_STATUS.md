# PR01 Status — Booking-only routing and transaction cleanup

## Scope completed

- Replaced checkout route with booking-request route (`/l/:slug/:id/request-booking`).
- Updated booking forms and redirects to use `BookingRequestPage` route name.
- Removed default purchase process support from client-side transaction process registry.
- Preserved booking order panel flow (date picker, quantity/seats picker when enabled, request booking CTA, and booking request screen with message field).

## Local verification

- `yarn test --runInBand src/util/routes.test.js` ✅
- `yarn test --runInBand src/transactions/transaction.test.js src/util/routes.test.js` ✅

## Staging deployment

Status: **Blocked in this environment** (no deployment credentials/access configured in container).

## Smoke test results requested

- Login: **Blocked** (no staging URL/credentials in environment).
- Open listing: **Blocked** (no staging URL/test listing in environment).
- Select dates: **Blocked** (depends on listing on staging).
- Select quantity: **Blocked** (depends on listing availability/seats setup on staging).
- Reach booking request screen: **Blocked** (depends on authenticated staging flow).

## Next operator steps (outside this container)

1. Push branch and open PR.
2. Confirm staging/preview deploy is created.
3. Run smoke tests with a real test account and a booking listing:
   - login
   - open listing
   - select dates
   - select quantity
   - reach booking request screen
