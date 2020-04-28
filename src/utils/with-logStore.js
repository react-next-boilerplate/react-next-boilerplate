/* eslint-disable no-console */
import { take, select } from 'redux-saga/effects';

const STYLE_LOGS = 'background: yellow; font-weight: bold; color: #40a9ff8c;';

function logs(action, state) {
  console.group(action.type);
  console.log('%cBefore State', STYLE_LOGS, state);
  console.info('%cDispatching', STYLE_LOGS, action);
  console.log('%cNext State', STYLE_LOGS, state);
  console.groupEnd(action.type);
}

export function* safe(effect) {
  try {
    return { result: yield effect, error: null };
  } catch (error) {
    return { result: null, error };
  }
}

export function* watchAndLog() {
  while (true) {
    const action = yield take('*');
    const state = yield select();
    if (action.type !== '@@router/LOCATION_CHANGE') logs(action, state);
  }
}
