import { configureStore } from '@reduxjs/toolkit';
import routesReducer from './states//routes/routesSlice';

const store = configureStore({
  reducer: {
    routes: routesReducer,
  }
});

export default store;