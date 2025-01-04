import type { Offer } from '../../types/offer';
import { OfferCard } from '../OfferCard/OfferCard';

interface OffersListProps {
  offers: Offer[];
  nearby: boolean;
  // activeOffer?: Offer;
}

export const OffersList = ({
  offers,
  nearby,
  // activeOffer,
}: OffersListProps) => (
  <div className={nearby ? 'near-places__list places__list' : 'cities__places-list places__list tabs__content'}>
    {offers.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
        nearby={nearby}
      />
    ))}
  </div>
);
