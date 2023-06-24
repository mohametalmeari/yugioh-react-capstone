import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './features/exapmle/exampleSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export default store;
