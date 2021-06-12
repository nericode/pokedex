import React from 'react';

import {render, waitFor} from '@testing-library/react-native';

import PokemonService from '../../../src/api/PokemonService';
import MovesListScreen from '../../../src/screens/moves-list/Moves-list.screen';

jest.mock('../../../src/api/PokemonService');

describe('Moves-list component', () => {
  it('render pikachu loading', () => {
    const {getByTestId} = render(<MovesListScreen />);
    expect(getByTestId('Loader.Lottie')).toBeTruthy();
  });

  it('render a list of moves', async () => {
    PokemonService.getAllMoves.mockResolvedValue({
      next: true,
      results: [
        {
          name: 'pound',
        },
        {
          name: 'karate-chop',
        },
        {
          name: 'double-slap',
        },
        {
          name: 'comet-punch',
        },
      ],
    });

    const {queryAllByTestId} = render(<MovesListScreen />);

    const allTestIds = await waitFor(() => queryAllByTestId(/MoveItem.Card-/));
    expect(allTestIds).toHaveLength(4);
  });
});
