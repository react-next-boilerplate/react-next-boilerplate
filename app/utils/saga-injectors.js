import invariant from 'invariant';
import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';
import isFunction from 'lodash/isFunction';
import conformsTo from 'lodash/conformsTo';

import checkStore from './check-store';
import { DAEMON, ONCE_TILL_UNMOUNT, RESTART_ON_REMOUNT } from './constants';

const allowedModes = [RESTART_ON_REMOUNT, DAEMON, ONCE_TILL_UNMOUNT];

const checkKey = key =>
  invariant(
    isString(key) && !isEmpty(key),
    '(app/utils...) inject-saga: Expected `key` to be a non empty string'
  );

// eslint-disable-next-line flowtype/require-parameter-type
const checkDescriptor = descriptor => {
  const shape = {
    saga: isFunction,
    mode: mode => isString(mode) && allowedModes.includes(mode),
  };
  invariant(
    conformsTo(descriptor, shape),
    '(app/utils...) inject-saga: Expected a valid saga descriptor'
  );
};

// eslint-disable-next-line flowtype/require-parameter-type
export function injectSagaFactory(store, isValid) {
  // eslint-disable-next-line flowtype/require-parameter-type
  return function injectSaga(key, descriptor = {}, args) {
    if (!isValid) checkStore(store);

    const newDescriptor = {
      ...descriptor,
      mode: descriptor.mode || RESTART_ON_REMOUNT,
    };
    const { saga, mode } = newDescriptor;

    checkKey(key);
    checkDescriptor(newDescriptor);

    let hasSaga = Reflect.has(store.injectedSagas, key);

    if (process.env.NODE_ENV !== 'production') {
      const oldDescriptor = store.injectedSagas[key];
      // enable hot reloading of daemon and once-till-unmount sagas
      if (hasSaga && oldDescriptor.saga !== saga) {
        oldDescriptor.task.cancel();
        hasSaga = false;
      }
    }

    if (
      !hasSaga ||
      (hasSaga && mode !== DAEMON && mode !== ONCE_TILL_UNMOUNT)
    ) {
      /* eslint-disable no-param-reassign */
      store.injectedSagas[key] = {
        ...newDescriptor,
        task: store.runSaga(saga, args),
      };
      /* eslint-enable no-param-reassign */
    }
  };
}

// eslint-disable-next-line flowtype/require-parameter-type
export function ejectSagaFactory(store, isValid) {
  // eslint-disable-next-line flowtype/require-parameter-type
  return function ejectSaga(key) {
    if (!isValid) checkStore(store);

    checkKey(key);

    if (Reflect.has(store.injectedSagas, key)) {
      const descriptor = store.injectedSagas[key];
      if (descriptor.mode && descriptor.mode !== DAEMON) {
        descriptor.task.cancel();
        if (process.env.NODE_ENV === 'production') {
          // eslint-disable-line no-param-reassign
          store.injectedSagas[key] = 'done';
        }
      }
    }
  };
}

// eslint-disable-next-line flowtype/require-parameter-type
export default function getInjectors(store) {
  checkStore(store);

  return {
    injectSaga: injectSagaFactory(store, true),
    ejectSaga: ejectSagaFactory(store, true),
  };
}
