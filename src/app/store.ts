import { configureStore, Store } from '@reduxjs/toolkit';
import cakeReducer from './features/cake/cakeSlice';
import iceCreamReducer from './features/icecream/icecreamSlice';

const store: Store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  }
});

export default store;
