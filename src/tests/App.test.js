import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('1º - Componente App', () => {
  it('Contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /Home/i });
    const aboutLink = screen.getByRole('link', { name: /About/i });
    const favoriteLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favoriteLink).toBeInTheDocument();
  });

  it('Redireciona para a pagina principal ao clicar no link Home', () => {
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /Home/i });
    userEvent.click(homeLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  it('Redireciona para a pagina de About ao clicar no link About', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /About/i });
    userEvent.click(aboutLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  });

  it('Redireciona para a pag. de Pokemons Favoritos ao clicar no link Favorite Pokemons',
    () => {
      const { history } = renderWithRouter(<App />);
      const favoriteLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
      userEvent.click(favoriteLink);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/favorites');
    });

  it('Redireciona para a pagina Not found ao entrar em uma URL desconhecida', () => {
    const { history } = renderWithRouter(<App />);
    history.push('xablau');
    const notFound = screen.getByRole('heading', { name: /not found/i });
    expect(notFound).toBeInTheDocument();
  });
});
