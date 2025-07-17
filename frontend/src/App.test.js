import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Insight Flow App Navigation', () => {
  test('renders sidebar navigation and switches pages', () => {
    render(<App />);
    // Check that the sidebar and all page links are present
    expect(screen.getByText('Insight Flow')).toBeInTheDocument();
    expect(screen.getByText('Data Upload & Exploration')).toBeInTheDocument();
    expect(screen.getByText('Visualization Dashboard')).toBeInTheDocument();
    expect(screen.getByText('ML Model Builder')).toBeInTheDocument();
    expect(screen.getByText('Explainability Tools')).toBeInTheDocument();
    expect(screen.getByText('Collaboration & Annotation')).toBeInTheDocument();

    // Default page
    expect(screen.getByText('Data Upload & Exploration (Coming Soon)')).toBeInTheDocument();

    // Click Visualization Dashboard
    fireEvent.click(screen.getByText('Visualization Dashboard'));
    expect(screen.getByText('Visualization Dashboard (Coming Soon)')).toBeInTheDocument();

    // Click ML Model Builder
    fireEvent.click(screen.getByText('ML Model Builder'));
    expect(screen.getByText('ML Model Builder (Coming Soon)')).toBeInTheDocument();
  });
});
