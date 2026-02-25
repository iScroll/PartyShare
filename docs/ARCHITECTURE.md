# PartyShare Architecture

PartyShare is a Sharetribe Web Template application using React 18, Redux Toolkit, Express, and SSR.

## High-level structure
- `src/`: client app, shared components, routes, Redux ducks, and utilities.
- `server/`: Express server, API routes, CSP config, and SSR renderer.
- `public/`: static assets and HTML template.

## Runtime model
1. Express handles incoming requests.
2. Server-side data loading resolves page data via registered `loadData` functions.
3. React app is rendered server-side and hydrated on the client.
4. Marketplace data is fetched through Sharetribe SDK.

## Configuration model
- Local defaults live under `src/config`.
- Hosted assets from Sharetribe Console can override local config and translations.
