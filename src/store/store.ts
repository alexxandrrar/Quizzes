import quizzReducer from './quizzSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({ quizzReducer });

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
