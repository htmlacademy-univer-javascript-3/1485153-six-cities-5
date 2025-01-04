import type { CityName, Offer } from '../types/offer';

export function filterOffers(offers: Offer[], city: CityName): Offer[] {
  return offers.filter((offer) => offer.city.name === city);
}
