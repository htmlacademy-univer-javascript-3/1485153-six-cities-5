import type { City, Offer } from '../types/offer';
import type { OffersSortType } from '../types/state';

export function filterOffers(offers: Offer[], city: City | null): Offer[] {
  if (!city) {
    return [];
  }

  return offers.filter((offer) => offer.city.name === city.name);
}

export function sortOffers(a: Offer, b: Offer, sortType: OffersSortType): number {
  switch (sortType) {
    case 'popularity':
      return 0;
    case 'priceDesc': {
      if (a.price === b.price) {
        return 0;
      }

      return a.price < b.price ? 1 : -1;
    }
    case 'priceAsc': {
      if (a.price === b.price) {
        return 0;
      }

      return a.price < b.price ? -1 : 1;
    }
    case 'ratingDesc': {
      if (a.rating === b.rating) {
        return 0;
      }

      return a.rating < b.rating ? 1 : -1;
    }
    default:
      return 0; // TODO: exhaustiveCheck()
  }
}
