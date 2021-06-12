import React from 'react';

import {render} from '@testing-library/react-native';
import Sprites from '../../../../src/screens/pokemon-detail/components/Sprites';

describe('Sprites component', () => {
  it('should sprites render correctly', () => {
    const sprites = {
      default_image_1:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cheri-berry.png',
      default_image_2:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cheri-berry.png',
      default_image_3: Object,
      default_image_4: null,
      default_image_5: 'pikachu',
    };

    const {getByText, getByTestId, queryByTestId} = render(
      <Sprites sprites={sprites} />,
    );

    expect(getByText(/Sprites/)).toBeTruthy();
    expect(getByTestId('Sprites.Image-1')).toBeTruthy();
    expect(queryByTestId('Sprites.Image-2')).toBeNull();
  });
});
