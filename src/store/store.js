// store.js
import { configureStore } from '@reduxjs/toolkit';
import medicalReducer from './medicalSlice';

export const store = configureStore({
  reducer: {
    medicalStore: medicalReducer,
  },
});
