import React from 'react';

import {render, waitFor} from '@testing-library/react-native';
import PokemonService from '../../../src/api/PokemonService';
import PokemonDetail from '../../../src/screens/pokemon-detail/Pokemon-detail.screen';

jest.mock('../../../src/api/PokemonService');
jest.mock(
  '../../../src/screens/pokemon-detail/components/Abilities',
  () => () => null,
);
jest.mock(
  '../../../src/screens/pokemon-detail/components/Header',
  () => () => null,
);
jest.mock(
  '../../../src/screens/pokemon-detail/components/Stats',
  () => () => null,
);

describe('Pokemon-detail component', () => {
  it('should see loading data', async () => {
    PokemonService.getPokemon.mockResolvedValue([]);
    PokemonService.getPokemonSpeciesByURL.mockResolvedValue([]);
    PokemonService.getEvolutionByURL.mockResolvedValue([]);

    const {getByText} = render(
      <PokemonDetail route={{route: {params: {id: 1}}}} />,
    );

    expect(getByText('Loading pokemon...')).toBeTruthy();
  });

  it('render pokemon detail correctly', async () => {
    PokemonService.getPokemon.mockResolvedValue({
      id: 1,
      name: 'bulbasaur',
      species: {url: ''},
    });

    PokemonService.getPokemonSpeciesByURL.mockResolvedValue({
      evolution_chain: {url: ''},
    });

    PokemonService.getEvolutionByURL.mockResolvedValue({
      chain: {
        species: {
          name: 'ivysaur',
        },
      },
    });

    const {queryByTestId} = render(<PokemonDetail route={{params: {id: 1}}} />);

    const container = await waitFor(() =>
      queryByTestId('PokemonDetail.SafeAreaView'),
    );
    expect(container).toBeTruthy();
  });
});
