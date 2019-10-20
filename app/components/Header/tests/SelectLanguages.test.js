import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import SelectLanguages from '../SelectLanguages';

describe('<SelectLanguages />', () => {
  const spy = jest.fn();

  it('Should render correctly', () => {
    const { container } = render(<SelectLanguages t={spy} />);

    expect(container).toMatchSnapshot();
  });

  it('When called onChange() must save in state local the value of event onChange', () => {
    const { container } = render(<SelectLanguages t={spy} />);

    fireEvent.change(container.querySelector('select'), { target: { value: 'es' } });

    expect(container).toMatchSnapshot();
  });
});
