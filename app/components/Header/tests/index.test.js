import React from 'react';
import { render } from '@testing-library/react';

import { Header } from '..';

describe('<Header />', () => {
  const spy = jest.fn();

  it('Should render correctly', () => {
    const { container } = render(<Header t={spy} />);

    expect(container).toMatchSnapshot();
  });
});
