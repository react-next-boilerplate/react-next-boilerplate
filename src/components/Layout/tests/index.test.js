import React from 'react';

import { render } from '@testing-library/react';

import Layout from '..';

describe('<Layout />', () => {
  const children = <div>some text</div>;

  it('Should render correctly', () => {
    const { container } = render(<Layout>{children}</Layout>);

    expect(container).toMatchSnapshot();
  });
});
