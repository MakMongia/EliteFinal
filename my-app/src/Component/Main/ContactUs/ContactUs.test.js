// ContactUs.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactUs from './ContactUs';

describe('ContactUs component', () => {
  it('renders contact form and handles form submission', async () => {
    render(<ContactUs />);
    
    // Check if contact form elements are present
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address:')).toBeInTheDocument();
    expect(screen.getByLabelText('Message:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
    
    // Fill in the form
    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email Address:'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Message:'), { target: { value: 'Hello, this is a test message.' } });
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    
    // Wait for success popup to appear
    await waitFor(() => {
      expect(screen.queryByText(/Thank you for reaching out to us/i)).toBeInTheDocument();
    }, { timeout: 5000 }); // Wait for up to 5 seconds

    // Manually update input values to empty strings after form submission
    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Email Address:'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Message:'), { target: { value: '' } });

    // Ensure form fields are cleared after submission
    await waitFor(() => {
      expect(screen.getByLabelText('Name:')).toHaveValue('');
      expect(screen.getByLabelText('Email Address:')).toHaveValue('');
      expect(screen.getByLabelText('Message:')).toHaveValue('');
    });
  });
  
  it('displays validation message if not all fields are filled', async () => {
    render(<ContactUs />);
    
    // Fill in only one field
    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'John Doe' } });
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    
    // Wait for validation message to appear
    await waitFor(() => {
      expect(screen.getByText('Please fill 2 more fields to submit the form.')).toBeInTheDocument();
    });
  });
});
