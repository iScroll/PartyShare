# PartyShare Codex Canon

This document defines the baseline operating rules for AI-assisted changes in PartyShare.

## Scope
- Applies to all code and documentation changes in this repository.
- Prioritize small, reviewable commits and explicit reasoning in PR descriptions.

## Core Rules
1. Keep Sharetribe template conventions intact (SSR-safe data loading, Redux ducks, i18n).
2. Prefer existing local utilities and components over new dependencies.
3. Add or update tests/docs when behavior or developer workflow changes.
4. Do not modify transaction process definitions without explicit product approval.

## Change Quality Gate
- Run formatting and CI checks before requesting review.
- Document security-sensitive and operational changes in `SECURITY.md` and runbooks.

## Ownership
- CODEOWNERS in `.github/CODEOWNERS` is the source of truth for review routing.
