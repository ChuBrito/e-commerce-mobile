import {createSlice} from '@reduxjs/toolkit';
import {APP_REDUCER} from '../constants';

const INITIAL_APP = {
  isLoggedIn: true,
  version: '1.0.0',
};

export const appSlice = createSlice({
  name: APP_REDUCER,
  initialState: INITIAL_APP,
  reducers: {
    setUserLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setAppVersion: (state, action) => {
      state.version = action.payload;
    },
  },
});

export const {setUserLoggedIn, setAppVersion} = appSlice.actions;
