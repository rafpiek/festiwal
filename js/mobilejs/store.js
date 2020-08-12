import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {UserReducer} from 'view_modules/user/User.state';

const reducers = combineReducers({
  user: UserReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: [],
});
