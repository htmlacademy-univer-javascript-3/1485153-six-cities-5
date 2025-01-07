import type { City, Offer } from '../types/offer';

export function filterOffers(offers: Offer[], city: City | null): Offer[] {
  if (!city) {
    return [];
  }

  return offers.filter((offer) => offer.city.name === city.name);
}
