import { configureStore } from '@reduxjs/toolkit';
import typesReducer from './types/typesSlice';
import detailsReducer from './details/detailsSlice';

const store = configureStore({
  reducer: {
    types: typesReducer,
    details: detailsReducer,
  },
});

export default store;
