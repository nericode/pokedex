import React from 'react';

import {render} from '@testing-library/react-native';
import EmptyScreen from '../../src/shared/components/EmptyScreen';

describe('EmptyScreen component', () => {
  it('should the empty screen render correctly', () => {
    const {getByText} = render(<EmptyScreen title="There isn't Pokemons" />);
    expect(getByText("There isn't Pokemons")).toBeTruthy();
  });
});
