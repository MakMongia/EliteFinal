// DataTable.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import DataTable from './DataTable';

describe('DataTable component', () => {
  const data = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Doe', age: 40 },
  ];

  it('renders table with correct data', () => {
    render(<DataTable data={data} />);
    
    // Check if table headers are rendered correctly
    expect(screen.getByText('id')).toBeInTheDocument();
    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('age')).toBeInTheDocument();
    
    // Check if table rows are rendered correctly
    data.forEach(item => {
      expect(screen.getByText(item.id.toString())).toBeInTheDocument();
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.age.toString())).toBeInTheDocument();
    });
  });
});
