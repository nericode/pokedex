import React from 'react';

import {render, waitFor} from '@testing-library/react-native';
import PokedexScreen from '../../../src/screens/pokedex/Pokedex.screen';
import PokemonService from '../../../src/api/PokemonService';

jest.mock('../../../src/api/PokemonService');

describe('Pokedex component', () => {
  it('renders a list of pokemon item', async () => {
    PokemonService.getAllPokemons.mockResolvedValue({
      next: true,
      results: [
        {
          name: 'bulbasaur',
          url: '',
        },
      ],
    });

    PokemonService.getPokemon.mockResolvedValue(
      Promise.resolve({
        id: 1,
        name: 'bulbasaur',
        sprites: {
          other: {
            'official-artwork': {
              front_default: null,
            },
          },
        },
      }),
    );

    const {queryAllByTestId} = render(<PokedexScreen />);

    const allTestIds = await waitFor(() =>
      queryAllByTestId('PokemonItem.Card-bulbasaur'),
    );

    expect(allTestIds).toHaveLength(1);
  });

  it('render a list empty', async () => {
    PokemonService.getAllPokemons.mockResolvedValue({
      next: false,
      results: [],
    });

    PokemonService.getPokemon.mockResolvedValue(Promise.resolve([]));

    const {getByText} = render(<PokedexScreen />);

    const text = await waitFor(() => getByText("There isn't Pokemons"));
    expect(text).toBeTruthy();
  });
});
