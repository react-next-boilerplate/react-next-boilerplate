import { takeLatest, put, call, fork, take, select } from 'redux-saga/effects';

import request from 'utils/request';

import { getShowcases } from './actions';

export function* watchAndLog() {
  while (true) {
    const styleConsole = 'background: yellow; font-weight: bold; color: #40a9ff8c;';
    const action = yield take('*');
    const state = yield select();
    if (action.type !== '@@router/LOCATION_CHANGE') {
      console.group(action.type);
      console.log('%cBefore State', styleConsole, state);
      console.info('%cDispatching', styleConsole, action);
      console.log('%cNext State', styleConsole, state);
      console.groupEnd(action.type);
    }
  }
}

export function* getShowcasesRequest() {
  const BASE_URL = 'https://us-central1-react-next-boilerplate-cda8b.cloudfunctions.net/getShowcasesData';

  try {
    yield put(getShowcases.request());

    const showcasesdata = yield call(request, BASE_URL);

    yield put(getShowcases.success(showcasesdata));
  } catch (err) {
    yield put(getShowcases.failure(err));
  } finally {
    yield put(getShowcases.fulfill());
  }
}

export default function* dataShowcases() {
  if (process.env.NODE_ENV === 'development') yield fork(watchAndLog);
  yield takeLatest(getShowcases.TRIGGER, getShowcasesRequest);
}
