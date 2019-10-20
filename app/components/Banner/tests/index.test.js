import React from 'react';

import { render } from '@testing-library/react';

import { Banner } from '..';

describe('<Banner />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Banner t={jest.fn()} />);

    expect(container).toMatchSnapshot();
  });
});
