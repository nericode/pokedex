import React from 'react';

import {render} from '@testing-library/react-native';
import PokemonItem from '../../src/shared/components/Pokemon-item';

describe('Pokemon-item component', () => {
  it('should the pokemon-item render correctly', () => {
    const item = {
      id: 1,
      name: 'bulbasaur',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    };

    const {getByText, getByTestId} = render(<PokemonItem item={item} />);
    expect(getByText('bulbasaur')).toBeTruthy();
    expect(getByTestId('PokemonItem.FastImage')).toBeTruthy();
  });

  it('should see placeholder when image is null', () => {
    const item = {
      id: 1,
      name: 'bulbasaur',
      image: null,
    };

    const {getByTestId} = render(<PokemonItem item={item} />);
    expect(getByTestId('PokemonItem.Image')).toBeTruthy();
  });

  it('should see placeholder when image is undefined', () => {
    const item = {
      id: 1,
      name: 'bulbasaur',
      image: undefined,
    };

    const {getByTestId} = render(<PokemonItem item={item} />);
    expect(getByTestId('PokemonItem.Image')).toBeTruthy();
  });
});
