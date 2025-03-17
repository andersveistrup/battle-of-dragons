import { configureStore, combineReducers } from '@reduxjs/toolkit';
import dragonSlice from './dragonSlice';
import { dragonsApi } from '../api/dragonsApi';

const rootReducer = combineReducers({
  // slices
  dragonSlice,

  // api
  [dragonsApi.reducerPath]: dragonsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dragonsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
