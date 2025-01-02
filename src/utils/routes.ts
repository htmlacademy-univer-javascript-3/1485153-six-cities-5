import type { Offer } from '../types/offer';
import type { SixCitiesRoute } from '../types/routes';

export function getRoute(route: SixCitiesRoute): SixCitiesRoute {
  return route;
}

export function getOfferRoute(offer: Offer): string {
  return `${getRoute('/offer')}/${offer.id}`;
}
