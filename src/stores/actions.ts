import { createAction } from '@reduxjs/toolkit';
import type { City, Offer } from '../types/offer';

export const selectCityAction = createAction('selectCity', (city: City) => ({
  payload: city,
}));

export const saveOffersAction = createAction('saveOffers', (offers: Offer[]) => ({
  payload: offers,
}));
