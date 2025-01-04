import { createAction } from '@reduxjs/toolkit';
import type { CityName, Offer } from '../types/offer';

export const selectCityAction = createAction('SELECT_CITY', (city: CityName) => ({
  payload: city,
}));

export const saveOffersAction = createAction('SAVE_OFFERS', (offers: Offer[]) => ({
  payload: offers,
}));
