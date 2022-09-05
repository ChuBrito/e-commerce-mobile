import {combineReducers} from '@reduxjs/toolkit';
import {appSlice} from './app.reducer';

export const reducerRoot = combineReducers({
  app: appSlice.reducer,
});
