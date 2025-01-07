import type { City, Offer } from './offer';

export interface SixCitiesState {
  selectedCity: City | null;
  offers: Offer[];
}
