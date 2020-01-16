import { createRoutine } from 'redux-saga-routines';

import { GET_SHOWCASES } from './constants';

export const getShowcases = createRoutine(GET_SHOWCASES);
