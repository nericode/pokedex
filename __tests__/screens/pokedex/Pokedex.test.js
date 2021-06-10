import React from 'react';

import {act, render} from '@testing-library/react-native';
import PokedexScreen from '../../../src/screens/pokedex/Pokedex.screen';
import {create} from 'react-test-renderer';

describe('Pokedex component', () => {
  it('should display fetched data', async () => {
    // var pokedex;
    // act(() => {
    //   pokedex = create(<PokedexScreen />);
    // });
    // const {getByText} = pokedex;
    // expect(getByText('bulbasaur')).toBe('bulbasaur');
  });
});
