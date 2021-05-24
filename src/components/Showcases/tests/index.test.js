import React from 'react';
import { render } from '@testing-library/react';

import { Showcases } from '..';

describe('<Showcases />', () => {
  const spy = jest.fn();
  const showcases = [
    { link: 'https://auth0.com/', title: 'Auth0', src: 'https://nextjs.org/static/images/showcases/auth0.jpg' },
    {
      title: 'LEGO for Kids',
      src: 'https://nextjs.org/static/images/showcases/lego.jpg',
      link: 'https://www.lego.com/en-us/kids',
    },
    {
      title: 'Netflix Jobs',
      src: 'https://nextjs.org/static/images/showcases/showcases-02.jpg',
      link: 'https://jobs.netflix.com',
    },
    {
      src: 'https://nextjs.org/static/images/showcases/starbucksreserve.jpg',
      link: 'https://www.starbucksreserve.com/en-us',
      title: 'Starbucks Reserve',
    },
    { link: 'https://m.twitch.tv', title: 'Twitch', src: 'https://nextjs.org/static/images/showcases/twitch.jpg' },
    {
      title: 'Uber Marketplace',
      src: 'https://nextjs.org/static/images/showcases/underbelly.jpg',
      link: 'https://marketplace.uber.com/',
    },
  ];

  const data = {
    loading: false,
    showcases,
  };

  it('Should render correctly', () => {
    const { container } = render(<Showcases data={data} t={spy} onGetShowcases={spy} />);

    expect(container).toMatchSnapshot();
  });

  it('When props.loading is true must render component <Spiner />', () => {
    const customDta = {
      ...data,
      data: [],
      loading: true,
    };

    const { container } = render(<Showcases data={customDta} t={spy} onGetShowcases={spy} />);

    expect(container).toMatchSnapshot();
  });

  it('Should render cases', () => {
    const customDta = {
      ...data,
      data: [],
      fetched: true,
    };

    const { getByText } = render(<Showcases data={customDta} t={spy} onGetShowcases={spy} />);

    expect(getByText('Auth0')).toBeInTheDocument();
    expect(getByText('LEGO for Kids')).toBeInTheDocument();
    expect(getByText('Netflix Jobs')).toBeInTheDocument();
    expect(getByText('Starbucks Reserve')).toBeInTheDocument();
    expect(getByText('Uber Marketplace')).toBeInTheDocument();
  });
});
