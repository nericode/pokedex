import React from 'react';

import {render, waitFor} from '@testing-library/react-native';
import EvolutionChain from '../../../../src/screens/pokemon-detail/components/Evolution-chain';
import PokemonService from '../../../../src/api/PokemonService';

jest.mock('../../../../src/api/PokemonService');

describe('Evolution-chain component', () => {
  it('evolution chain of raticate', async () => {
    const chain = {
      evolution_details: [],
      evolves_to: [
        {
          evolution_details: [],
          evolves_to: [],
          is_baby: false,
          species: {
            name: 'raticate',
            url: 'https://pokeapi.co/api/v2/pokemon-species/20/',
          },
        },
      ],
      is_baby: false,
      species: {
        name: 'rattata',
        url: 'https://pokeapi.co/api/v2/pokemon-species/19/',
      },
    };

    PokemonService.getPokemon
      .mockResolvedValueOnce(
        Promise.resolve({
          id: 19,
          name: 'raticate',
          sprites: {
            other: {
              'official-artwork': {
                front_default:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png',
              },
            },
          },
        }),
      )
      .mockResolvedValueOnce(
        Promise.resolve({
          id: 20,
          name: 'rattata',
          sprites: {
            other: {
              'official-artwork': {
                front_default:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png',
              },
            },
          },
        }),
      );

    const {queryAllByTestId} = render(
      <EvolutionChain chain={chain} pokemon={{name: 'rattata'}} />,
    );

    const evolution = await waitFor(() =>
      queryAllByTestId(/EvolutionChain.View-/),
    );
    expect(evolution).toHaveLength(2);
  });
});
