import React from 'react';

import {render} from '@testing-library/react-native';
import BerriesItem from '../../../../src/screens/berries-list/components/Berries-item';

describe('Berries-item component', () => {
  it('should the berry item render correctly', () => {
    const item = {
      name: 'Berry item',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cheri-berry.png',
    };

    const {getByText, getByTestId} = render(<BerriesItem item={item} />);
    expect(getByText('Berry item')).toBeTruthy();
    expect(getByTestId('BerriesItem.Image')).toBeDefined();
  });
});
