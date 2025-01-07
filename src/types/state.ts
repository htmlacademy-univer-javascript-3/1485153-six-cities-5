import type { City, Offer } from './offer';

export type OffersSortType = 'popularity' | 'priceDesc' | 'priceAsc' | 'ratingDesc';

export interface SixCitiesState {
  selectedCity: City | null;
  offers: Offer[];
  offersSortType: OffersSortType;
  highlightedOffer: Offer | null;
  selectedOffer: Offer | null;
}
