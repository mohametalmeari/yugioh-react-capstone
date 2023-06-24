import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cards/cardsSlice';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export default store;
