import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

describe('6º - Pokemon Component', () => {
  it('renders a card with the info about a determinated pokemon', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    const favoriteCheckBox = screen.getByLabelText(/pokémon favoritado?/i);
    userEvent.click(favoriteCheckBox);
    const homeButton = screen.getByRole('link', { name: /home/i });
    userEvent.click(homeButton);
    const pokemonImages = screen.getAllByRole('img');
    const pokemonName = screen.getByTestId('pokemon-name');
    const pokemonType = screen.getByTestId('pokemon-type');
    const pokemonWeight = screen.getByTestId('pokemon-weight');
    expect(pokemonImages[0].src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pokemonImages[0].alt).toBe('Pikachu sprite');
    expect(pokemonName).toHaveTextContent('Pikachu');
    expect(pokemonType).toHaveTextContent('Electric');
    expect(pokemonWeight).toHaveTextContent('6.0 kg');
    expect(pokemonImages[1].src).toBe('http://localhost/star-icon.svg');
    expect(pokemonImages[1].alt).toBe('Pikachu is marked as favorite');
  });
});
