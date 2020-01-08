import showcasesReducer from '../reducer';
import { getShowcases } from '../actions';

describe('showcasesReducer', () => {
  let state;

  const showcases = {
    loading: false,
    fetched: false,
    error: null,
    showcases: [],
  };

  beforeEach(() => {
    state = {
      ...showcases,
    };
  });

  it('should return the initial state', () => {
    expect(showcasesReducer(undefined, {})).toEqual(state);
  });

  describe('getShowcases actions', () => {
    it('should handle the action getShowcases.REQUEST correctly', () => {
      const expectResult = {
        ...state,
        loading: true,
      };

      expect(showcasesReducer(state, getShowcases.request())).toEqual(expectResult);
    });

    it('should return the action getShowcases.SUCCESS correctly', () => {
      const expectResult = {
        ...state,
        fetched: true,
        showcases: [],
      };

      expect(showcasesReducer(state, getShowcases.success({ data: [] }))).toEqual(expectResult);
    });

    it('should return the action getShowcases.FAILURE', () => {
      const expectResult = {
        ...state,
        error: 'error',
      };

      expect(showcasesReducer(state, getShowcases.failure('error'))).toEqual(expectResult);
    });
  });
});
