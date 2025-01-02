import type { Offer } from '../../types/offer';
import { OfferCard } from '../OfferCard/OfferCard';

interface OffersListProps {
  offers: Offer[];
  activeOffer: Offer | null;
}

export const OffersList = ({
  offers,
  activeOffer,
}: OffersListProps) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
      />
    ))}
  </div>
);
