import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { store } from '../stores';

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
