import React from 'react';
import { render, screen } from '@testing-library/react';
import Schedule from './Schedule';

describe('Schedule component', () => {
  it('renders weekly schedule with DataTable when data is available', () => {
    render(<Schedule />);

    // Check if weekly schedule and DataTable are rendered
    expect(screen.getByText('Weekly Schedule')).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();

    // Check if table headers are rendered
    expect(screen.getByText('Day')).toBeInTheDocument();
    expect(screen.getByText('Time')).toBeInTheDocument();
    expect(screen.getByText('Event')).toBeInTheDocument();

    // Check if data rows are rendered
    expect(screen.getAllByText('Monday')[0]).toBeInTheDocument(); // First Monday
    expect(screen.getAllByText('08:00 AM - 10:00 AM')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Junior Training')[0]).toBeInTheDocument();
  });
});
