import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import { NotFound } from '../pages';

describe('1º - App Component', () => {
  it('contains an h2 heading with the text "Page requested not found"', () => {
    renderWithRouter(<NotFound />);
    const heading = screen.getByRole('heading', { name: /Page requested not found/i });
    expect(heading).toBeInTheDocument();
  });
  it('contains the correct image', () => {
    renderWithRouter(<NotFound />);
    const URL = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const image = screen.getAllByRole('img')[1];
    expect(image.src).toBe(URL);
  });
});
