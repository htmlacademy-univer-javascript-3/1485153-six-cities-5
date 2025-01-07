import { createReducer } from '@reduxjs/toolkit';
import {
  saveOffersAction,
  selectCityAction,
  setHighlightedOffer,
  setOfferSortType,
  setSelectedOffer,
} from './actions';
import type { SixCitiesState } from '../types/state';
import { PARIS } from '../mocks/cities';

const initialState: SixCitiesState = {
  selectedCity: PARIS, // TODO: null
  offers: [],
  offersSortType: 'popularity',
  highlightedOffer: null,
  selectedOffer: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCityAction, (state, action) => {
      state.selectedCity = action.payload.city;
    })
    .addCase(saveOffersAction, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(setOfferSortType, (state, action) => {
      state.offersSortType = action.payload.sortType;
    })
    .addCase(setHighlightedOffer, (state, action) => {
      state.highlightedOffer = action.payload.offer;
    })
    .addCase(setSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload.offer;
    });
});
