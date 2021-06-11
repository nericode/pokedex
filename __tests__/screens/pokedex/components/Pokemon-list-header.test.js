import React from 'react';

import {render} from '@testing-library/react-native';
import PokemonListHeader from '../../../../src/screens/pokedex/components/Pokemon-list-header';

describe('Pokemon-list-header component', () => {
  it('should the search render correctly', () => {
    const {queryAllByLabelText} = render(<PokemonListHeader />);
    expect(queryAllByLabelText('Buscar pokemon')).toBeTruthy();
  });

  it('should the cards render correctly', () => {
    const {getByText} = render(<PokemonListHeader />);
    expect(getByText('Moves')).toBeTruthy();
    expect(getByText('Berries')).toBeTruthy();
  });
});
