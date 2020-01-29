import React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'utils/configure-store';

import { IndexPage } from '../pages/index';

describe('<HomePage />', () => {
  let store;
  const spy = jest.fn();

  beforeAll(() => {
    store = configureStore({});
  });

  it('should render and match the snapshot', () => {
    let props;

    act(() => {
      props = IndexPage.getInitialProps();
    });

    const { container } = render(
      <Provider store={store}>
        <IndexPage t={spy} {...props} />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
