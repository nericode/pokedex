import React from 'react';

import {render} from '@testing-library/react-native';
import Header from '../../../../src/screens/pokemon-detail/components/Header';

describe('Header component', () => {
  it('should title have the first capital letter', () => {
    const pokemon = {
      name: 'charmmander',
      sprites: {
        other: {
          'official-artwork': {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cheri-berry.png',
          },
        },
      },
    };

    const {getByText} = render(<Header pokemon={pokemon} />);
    expect(getByText('C')).toBeTruthy();
    expect(getByText('harmmander')).toBeTruthy();
  });
});
