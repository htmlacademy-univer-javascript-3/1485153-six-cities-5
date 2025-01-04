import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { store } from '../stores';
import type { SixCitiesState } from '../types/state';

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export const useAppSelector: TypedUseSelectorHook<SixCitiesState> = useSelector;
