import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('1º - App Component', () => {
  it('shows the detailed information about the selected pokemon', () => {
    renderWithRouter(<App />);
    const detailInfoButton = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailInfoButton);

    const nameDetails = screen.getByRole('heading', { name: /pikachu details/i });
    expect(nameDetails).toBeInTheDocument();
    expect(detailInfoButton).not.toBeInTheDocument();

    const summary = screen.getByRole('heading', { name: /summary/i });
    expect(summary).toBeInTheDocument();

    const summaryText = screen.getByText(/This intelligent Pokémon roasts hard berrie./i);
    expect(summaryText).toBeInTheDocument();
  });

  it('contains a section with the maps of the localizations of the selected pokemon',
    () => {
      renderWithRouter(<App />);
      const detailInfoButton = screen.getByRole('link', { name: /more details/i });
      userEvent.click(detailInfoButton);

      const locationsName = screen
        .getByRole('heading', { name: /game locations of pikachu/i });
      expect(locationsName).toBeInTheDocument();

      const maps = screen.getAllByAltText(/pikachu location/i);
      expect(maps).toHaveLength(2);
      expect(maps[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');

      const favoritePokemon = screen.getByLabelText(/pokémon favoritado?/i);
      expect(favoritePokemon).toBeInTheDocument();
    });
});
