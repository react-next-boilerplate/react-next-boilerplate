import { combineReducers } from 'redux';

import globalReducer from '../reducer';

export default function createReducer(asyncReducers) {
  return combineReducers({
    global: globalReducer,
    ...asyncReducers,
  });
}
