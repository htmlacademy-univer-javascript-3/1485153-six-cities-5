import { createAction } from '@reduxjs/toolkit';
import type { City, Offer } from '../types/offer';
import type { OffersSortType } from '../types/state';

export const selectCityAction = createAction('selectCity', (city: City) => ({
  payload: {
    city,
  },
}));

export const saveOffersAction = createAction('saveOffers', (offers: Offer[]) => ({
  payload: {
    offers,
  },
}));

export const setOfferSortType = createAction('setOfferSortType', (sortType: OffersSortType) => ({
  payload: {
    sortType,
  }
}));

export const setHighlightedOffer = createAction('setHighlightedOffer', (offer: Offer | null) => ({
  payload: {
    offer,
  },
}));

export const setSelectedOffer = createAction('setSelectedOffer', (offer: Offer | null) => ({
  payload: {
    offer,
  },
}));
