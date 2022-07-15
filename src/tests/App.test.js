import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('1º - App Component', () => {
  it('contains a fixed set of navigation links', () => {
    renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /Home/i });
    const aboutLink = screen.getByRole('link', { name: /About/i });
    const favoriteLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favoriteLink).toBeInTheDocument();
  });

  it('redirect to the Home page after click on the Home page link', () => {
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /Home/i });
    userEvent.click(homeLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  it('redirect to the About page after click on the About page link', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /About/i });
    userEvent.click(aboutLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  });

  it('redirect to the fav. pokemons page after click on the favorite pokemons page link',
    () => {
      const { history } = renderWithRouter(<App />);
      const favoriteLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
      userEvent.click(favoriteLink);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/favorites');
    });

  it('redirect to the "not found" page when entering an unknown URL', () => {
    const { history } = renderWithRouter(<App />);
    history.push('xablau');
    const notFound = screen.getByRole('heading', { name: /not found/i });
    expect(notFound).toBeInTheDocument();
  });
});
