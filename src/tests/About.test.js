import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../helpers/renderWithRouter';

describe('2º - About Component', () => {
  it('contains the information about the pokedex', () => {

  });

  it('contains an h2 heading with the text "About Pokédex"', () => {
    renderWithRouter(<About />);
    const heading = screen.getByRole('heading', { name: /About Pokédex/i });
    expect(heading).toBeInTheDocument();
  });

  it('contains 2 paragraphs with the text "About Pokédex"', () => {
    renderWithRouter(<About />);
    const paragraph1 = screen.getByText(/This application simulates/i);
    const paragraph2 = screen.getByText(/One can filter/i);
    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });

  it('contains the correct pokedex image', () => {
    renderWithRouter(<About />);
    const URL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const image = screen.getByRole('img');
    expect(image.src).toBe(URL);
  });
});
