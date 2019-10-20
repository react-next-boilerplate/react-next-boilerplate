import React from 'react';

import { render } from '@testing-library/react';

import { Features } from '..';

describe('<Features />', () => {
  const t = jest.fn();

  it('Should render correctly', () => {
    const { container } = render(<Features t={t} />);

    expect(container).toMatchSnapshot();
  });
});
