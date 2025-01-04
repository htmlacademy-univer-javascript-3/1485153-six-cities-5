import type { CityName, Offer } from './offer';

export interface SixCitiesState {
  selectedCity: CityName;
  offers: Offer[];
}
