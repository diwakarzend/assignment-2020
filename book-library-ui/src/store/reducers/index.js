import { combineReducers } from 'redux'
import { routerReducer } from "react-router-redux";
import bookReducer from './bookReducer';

export const rootReducers = combineReducers({
  routing: routerReducer,
  bookReducer
  });
