# PartyShare start-from-scratch runbook

This runbook captures the exact setup flow to connect a fresh Sharetribe Web Template fork with
Sharetribe Console + Stripe + Vercel.

## 1) Create a clean GitHub fork

1. Open `https://github.com/sharetribe/web-template`.
2. Click **Fork** and create `PartyShare` in your GitHub account or org.
3. Clone your fork and connect upstream:

```bash
git clone git@github.com:<your-account>/PartyShare.git
cd PartyShare
git remote add upstream git@github.com:sharetribe/web-template.git
git remote -v
```

4. Install dependencies:

```bash
yarn install
```

## 2) Configure Sharetribe marketplace app credentials

Based on the provided screenshots:

- **Dev marketplace app (Marketplace UI)** client ID is: `367190f6-8499-4fa0-99d6-3ef5678eec27`
- Client secret is not visible in screenshots and must be created/retrieved in **Build → Advanced →
  Applications**.

Create a local `.env` from `.env-template`:

```bash
cp .env-template .env
```

Set at minimum:

```ini
REACT_APP_SHARETRIBE_SDK_CLIENT_ID=367190f6-8499-4fa0-99d6-3ef5678eec27
SHARETRIBE_SDK_CLIENT_SECRET=<marketplace-ui-client-secret>
REACT_APP_STRIPE_PUBLISHABLE_KEY=<stripe-publishable-key-test-or-live>
REACT_APP_MAPBOX_ACCESS_TOKEN=<mapbox-token>
REACT_APP_MARKETPLACE_ROOT_URL=http://localhost:3000
```

Then run the template config helper if needed:

```bash
yarn run config
```

## 3) Connect Stripe in Sharetribe Console

1. In Sharetribe Console go to **Build → Integrations → Payments**.
2. Set Stripe publishable and secret keys (test keys in dev/test modes).
3. Verify Stripe API version supported by Sharetribe.
4. Mirror the publishable key in `REACT_APP_STRIPE_PUBLISHABLE_KEY`.

## 4) Local verification

Run:

```bash
yarn run dev
```

Expected: app opens on `http://localhost:3000` without Maintenance Mode error.

## 5) Deploy to Vercel

1. Import your GitHub fork in Vercel.
2. Framework preset: **Other** (Node buildpack style from package scripts).
3. Add environment variables for **Preview** and **Production**:
   - `REACT_APP_SHARETRIBE_SDK_CLIENT_ID`
   - `SHARETRIBE_SDK_CLIENT_SECRET`
   - `REACT_APP_STRIPE_PUBLISHABLE_KEY`
   - `REACT_APP_MAPBOX_ACCESS_TOKEN`
   - `REACT_APP_MARKETPLACE_ROOT_URL`
4. Deploy and verify login, listing browse/search, and checkout flow.

## 6) Additional required connection

In addition to Sharetribe + GitHub + Vercel, this template requires at least one map provider:

- Preferred: **Mapbox** (`REACT_APP_MAPBOX_ACCESS_TOKEN`)
- Alternative: Google Maps (`REACT_APP_GOOGLE_MAPS_API_KEY`)

## 7) Suggested hardening checklist

- Enable branch protection on `main`.
- Use GitHub Actions or CI checks on pull requests.
- Store secrets only in Vercel and local `.env` (never commit secrets).
- Keep `upstream` remote to regularly sync template improvements.
