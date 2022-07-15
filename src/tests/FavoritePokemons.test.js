import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import { FavoritePokemons } from '../pages';
import data from '../data';

describe('3º - Favorite Pokemons Component', () => {
  it('shows the message "No favorite pokemon found", if no pokemon has been added',
    () => {
      renderWithRouter(<FavoritePokemons />);
      const paragraph = screen.getByText(/No favorite pokemon found/i);
      expect(paragraph).toBeInTheDocument();
    });

  it('contains all the favorite pokemons cards', () => {
    renderWithRouter(<FavoritePokemons pokemons={ [data[0], data[1]] } />);
    const listOfPokemons = screen.getAllByTestId('pokemon-name');
    expect(listOfPokemons).toHaveLength(2);
  });
});
