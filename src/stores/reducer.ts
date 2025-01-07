import { createReducer } from '@reduxjs/toolkit';
import { saveOffersAction, selectCityAction } from './actions';
import type { SixCitiesState } from '../types/state';
import { PARIS } from '../mocks/cities';

const initialState: SixCitiesState = {
  selectedCity: PARIS, // TODO: null
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCityAction, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(saveOffersAction, (state, action) => {
      state.offers = action.payload;
    });
});
