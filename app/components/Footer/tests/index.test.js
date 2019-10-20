import React from 'react';

import { render } from '@testing-library/react';

import Footer from '..';

describe('<Footer />', () => {
  const spy = jest.fn();

  it('Should render correctly', () => {
    const { container } = render(<Footer t={spy} />);

    expect(container).toMatchSnapshot();
  });
});
