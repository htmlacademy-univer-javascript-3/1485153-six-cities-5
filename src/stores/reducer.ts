import { createReducer } from '@reduxjs/toolkit';
import { saveOffersAction, selectCityAction } from './actions';
import type { SixCitiesState } from '../types/state';

const initialState: SixCitiesState = {
  selectedCity: 'Paris',
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(selectCityAction, (state, action) => {
    state.selectedCity = action.payload;
  });
  builder.addCase(saveOffersAction, (state, action) => {
    state.offers = action.payload;
  });
});
