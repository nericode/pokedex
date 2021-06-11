import React from 'react';

import {render} from '@testing-library/react-native';
import MoveItem from '../../../../src/screens/moves-list/components/Move-item';

describe('Move-item component', () => {
  it('should the move item render correctly', () => {
    const item = {
      name: 'pound',
      url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cheri-berry.png',
    };

    const {getByText, getByTestId} = render(<MoveItem item={item} />);
    expect(getByText('POUND')).toBeTruthy();
    expect(getByTestId('MoveItem.Image')).toBeDefined();
  });
});
