import { getShowcases } from './actions';

export const initialState = {
  loading: false,
  fetched: false,
  error: null,
  showcases: [],
};

function showcasesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case getShowcases.REQUEST:
      return { ...state, loading: true };

    case getShowcases.SUCCESS:
      return { ...state, loading: false, fetched: true, showcases: payload.data };

    case getShowcases.FAILURE:
      return { ...state, loading: false, fetched: false, error: payload };

    default:
      return state;
  }
}

export default showcasesReducer;
