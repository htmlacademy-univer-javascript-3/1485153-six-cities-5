import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import type { Offer } from '../../types/offer';
import { getOfferRoute } from '../../utils/routes';
import { useAppDispatch } from '../../hooks/redux';
import { setHighlightedOffer } from '../../stores/actions';

interface OfferCardProps {
  offer: Offer;
  nearby: boolean;
}

export const OfferCard = ({ offer, nearby }: OfferCardProps) => {
  const dispatch = useAppDispatch();

  const onMouseEnter = useCallback(() => {
    dispatch(setHighlightedOffer(offer));
  }, [dispatch, offer]);

  const onMouseLeave = useCallback(() => {
    dispatch(setHighlightedOffer(null));
  }, [dispatch]);

  return (
    <article
      className={nearby ? 'near-places__card place-card' : 'cities__card place-card'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={getOfferRoute(offer)}>
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={getOfferRoute(offer)}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
};
