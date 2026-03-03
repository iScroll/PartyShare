# CODEX EXECUTION RULES — PARTYSHARE

## Scope locks (MVP-safe)
1. Booking-only. No cart. No checkout.
2. Single account model: same user can rent and list.
3. Payment method required BEFORE sending a booking request (everyone must add card).
4. Stripe Connect payout onboarding required ONLY to publish listings.
5. No listing variants. Separate listings instead.
6. Waiver text is template-based (admin-controlled). Vendor selects template per listing.
7. Deposits are charged at acceptance and refunded manually in MVP (no auth holds).
8. Vendor response expectation is 24 hours (display + copy only, no auto-expire in MVP).
9. Homepage “Popular” is admin-curated or most-viewed (no most-booked aggregation in MVP).

## Engineering rules
1. One PR = one purpose.
2. Deploy to staging on every PR.
3. Smoke test after every PR:
   - Login
   - Add payment method
   - Request booking
   - Provider accepts
   - Charge succeeds
   - Inbox/messages
4. Avoid privileged endpoints (login-as, transition-privileged) unless explicitly approved.
