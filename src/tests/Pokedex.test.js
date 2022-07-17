import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import pokemons from '../data';
import App from '../App';

describe('5º - Pokedex Component', () => {
  it('contains an h2 heading with the text "Encountered pokémons"', () => {
    renderWithRouter(<App />);
    const heading = screen.getByRole('heading', { name: /Encountered pokémons/i });
    expect(heading).toBeInTheDocument();
  });

  it('shows the next pokemon of the list when the button "Próximo pokémon" is clicked',
    () => {
      renderWithRouter(<App />);

      const button = screen.getByRole('button', { name: /Próximo pokémon/i });
      expect(button).toBeInTheDocument();

      const pokemon1 = screen.getByText(pokemons[0].name);
      expect(pokemon1).toBeInTheDocument();

      userEvent.click(button);
      const pokemon2 = screen.getByText(pokemons[1].name);
      expect(pokemon2).toBeInTheDocument();

      userEvent.click(button);
      const pokemon3 = screen.getByText(pokemons[2].name);
      expect(pokemon3).toBeInTheDocument();

      userEvent.click(button);
      const pokemon4 = screen.getByText(pokemons[3].name);
      expect(pokemon4).toBeInTheDocument();

      userEvent.click(button);
      const pokemon5 = screen.getByText(pokemons[4].name);
      expect(pokemon5).toBeInTheDocument();

      userEvent.click(button);
      const pokemon6 = screen.getByText(pokemons[5].name);
      expect(pokemon6).toBeInTheDocument();

      userEvent.click(button);
      const pokemon7 = screen.getByText(pokemons[6].name);
      expect(pokemon7).toBeInTheDocument();

      userEvent.click(button);
      const pokemon8 = screen.getByText(pokemons[7].name);
      expect(pokemon8).toBeInTheDocument();

      userEvent.click(button);
      const pokemon9 = screen.getByText(pokemons[8].name);
      expect(pokemon9).toBeInTheDocument();

      userEvent.click(button);
      const pokemon10 = screen.getByText(pokemons[0].name);
      expect(pokemon10).toBeInTheDocument();

      const allPokemons = screen.getAllByTestId('pokemon-name');
      expect(allPokemons).toHaveLength(1);
    });

  it('contains the filter buttons', () => {
    renderWithRouter(<App />);

    const allButtons = screen.getAllByRole('button');
    expect(allButtons[1]).toBeInTheDocument();

    const typeButtons = screen.getAllByTestId('pokemon-type-button');
    const buttonsQuantity = 7;
    expect(typeButtons).toHaveLength(buttonsQuantity);

    const eletricButtonFilter = screen.getAllByRole('button', { name: /Electric/i });
    expect(eletricButtonFilter[0]).toBeInTheDocument();
    expect(eletricButtonFilter).toHaveLength(1);

    const fireButtonFilter = screen.getAllByRole('button', { name: /fire/i });
    expect(fireButtonFilter[0]).toBeInTheDocument();
    expect(fireButtonFilter).toHaveLength(1);

    const bugButtonFilter = screen.getAllByRole('button', { name: /bug/i });
    expect(bugButtonFilter[0]).toBeInTheDocument();
    expect(bugButtonFilter).toHaveLength(1);

    const poisonButtonFilter = screen.getAllByRole('button', { name: /poison/i });
    expect(poisonButtonFilter[0]).toBeInTheDocument();
    expect(poisonButtonFilter).toHaveLength(1);

    const psychicButtonFilter = screen.getAllByRole('button', { name: /psychic/i });
    expect(psychicButtonFilter[0]).toBeInTheDocument();
    expect(psychicButtonFilter).toHaveLength(1);

    const normalButtonFilter = screen.getAllByRole('button', { name: /normal/i });
    expect(normalButtonFilter[0]).toBeInTheDocument();
    expect(normalButtonFilter).toHaveLength(1);

    const dragonButtonFilter = screen.getAllByRole('button', { name: /dragon/i });
    expect(dragonButtonFilter[0]).toBeInTheDocument();
    expect(dragonButtonFilter).toHaveLength(1);

    userEvent.click(allButtons[0]);
    pokemons.filter((pokemon) => pokemon.type === '');
  });
});
