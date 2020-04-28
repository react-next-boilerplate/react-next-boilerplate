import { takeLatest, put, call, fork } from 'redux-saga/effects';
import { watchAndLog, safe } from 'utils/with-logStore';
import request from 'utils/request';

import { getShowcases } from './actions';

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
  yield takeLatest(getShowcases.TRIGGER, getShowcasesRequest);
  if (process.env.NODE_ENV === 'development') yield safe(fork(watchAndLog));
}
