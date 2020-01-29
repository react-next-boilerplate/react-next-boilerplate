import produce from 'immer';

import { getShowcases } from './actions';

export const initialState = {
  loading: false,
  fetched: false,
  error: null,
  showcases: [],
};

const showcasesReducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case getShowcases.REQUEST:
        draft.loading = true;

        break;

      case getShowcases.SUCCESS:
        draft.loading = false;
        draft.fetched = true;
        draft.showcases = payload.data;

        break;

      case getShowcases.FAILURE:
        draft.loading = false;
        draft.fetched = false;
        draft.error = payload;

        break;
    }
  });

export default showcasesReducer;
