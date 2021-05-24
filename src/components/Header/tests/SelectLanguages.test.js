import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';

import SelectLanguages from '../SelectLanguages';

describe('<SelectLanguages />', () => {
  const spy = jest.fn();

  it('Should render correctly', () => {
    const { container } = render(<SelectLanguages t={spy} />);

    expect(container).toMatchSnapshot();
  });

  it('When called onChange() must save in state local the value of event onChange', () => {
    const { container } = render(<SelectLanguages t={spy} />);

    const selectLenguage = screen.getByRole('combobox');

    fireEvent.change(selectLenguage, { target: { value: 'es' }, preventDefault: jest.fn() });

    expect(container).toMatchSnapshot();
  });
});
