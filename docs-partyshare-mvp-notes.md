# PartyShare MVP developer notes

## Field storage
- Listing-level fields are configured in `src/config/configListing.js` and stored in listing `publicData`:
  `category`, `rentalUnit`, `inventoryCount`, `minRentalDuration`, `deliveryAvailable`,
  `pickupAvailable`, `setupAvailable`, `breakdownAvailable`, `deliveryRadiusMiles`,
  `deliveryBaseFee`, `deliveryFeePerMile`.
- Vendor default delivery fields are configured in `src/config/configUser.js` and stored in user
  `publicData`: `deliveryRadiusMiles`, `deliveryBaseFee`, `deliveryFeePerMile`.
- Booking event details are collected in booking form and carried to checkout as `orderData`, then
  persisted to transaction `protectedData` on initiation:
  `eventDate`, `eventStartTime`, `eventEndTime`, `eventAddress`, `eventNotes`.

## Availability and inventory
- MVP uses standard Sharetribe booking availability for date range selection in booking form.
- Custom inventory concurrency checks for `inventoryCount > 1` are **not yet implemented** in this
  patch and require server-side availability aggregation before privileged initiate/transition.

## Environment variables
- Distance API-based delivery fee was not added in this patch. If you add Google Maps distance
  estimation later, add e.g. `REACT_APP_GOOGLE_MAPS_API_KEY` and a matching server-side key.
