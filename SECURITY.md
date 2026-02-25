# Security Policy

## Reporting a Vulnerability
If you discover a security issue in PartyShare, please report it privately to the maintainers.
Do not open a public issue with exploit details.

## Supported Versions
Security fixes are applied to the default branch and backported as needed.

## Secure Development Notes
- Keep dependencies updated via Dependabot.
- Avoid exposing secrets in client-side bundles.
- Validate all server/API inputs and sanitize user-provided content.
