import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { searchReducer } from '../store/slices/searchSlice';
import { cardsReducer } from './slices/cardsSlice';
import { formReducer } from './slices/formSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    cards: cardsReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
