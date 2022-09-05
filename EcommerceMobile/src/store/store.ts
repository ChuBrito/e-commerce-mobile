import {configureStore} from '@reduxjs/toolkit';
import {reducerRoot} from './reducers/root.reducer';

export const store = configureStore({
  reducer: reducerRoot,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
