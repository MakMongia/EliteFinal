import React from 'react';
import { render } from '@testing-library/react';
import Weather from './Weather';

test('renders weather forecast section', () => {
  const { getByText } = render(<Weather />);
  const weatherForecastHeading = getByText(/Weather Forecast/i);
  expect(weatherForecastHeading).toBeInTheDocument();
});
