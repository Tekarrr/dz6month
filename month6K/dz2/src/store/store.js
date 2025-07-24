// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
