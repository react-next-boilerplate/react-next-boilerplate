import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { getShowcases } from '../actions';
import configureStore from 'utils/configure-store';

import { Home, mapDispatchToProps } from '..';

describe('<Home />', () => {
  let store;
  const spy = jest.fn();
  const state = {
    loading: false,
    fetched: false,
    error: null,
    showcases: [],
  };

  beforeAll(() => {
    store = configureStore({});
  });

  it('should render and match the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Home getShowcases={spy} showcasesData={state} />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.getShowcases).toBeDefined();
    });

    it('should dispatch getShowcases when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.getShowcases();
      expect(dispatch).toHaveBeenCalledWith(getShowcases());
    });
  });
});
