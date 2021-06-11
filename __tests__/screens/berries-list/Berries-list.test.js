import React from 'react';

import {render, waitFor} from '@testing-library/react-native';
import PokemonService from '../../../src/api/PokemonService';
import BerriesListScreen from '../../../src/screens/berries-list/Berries-list.screen';

jest.mock('../../../src/api/PokemonService');

describe('Berries-list component', () => {
  it('renders a list of berry item', async () => {
    PokemonService.getAllBerries.mockResolvedValue({
      next: true,
      results: [
        {
          name: 'pulpa',
          url: '',
        },
      ],
    });

    PokemonService.getBerryByURL.mockResolvedValue({
      item: {
        url: '',
      },
    });

    PokemonService.getBerryItemByURL.mockResolvedValue(
      Promise.resolve({
        id: 1,
        name: 'pulpa',
        sprites: {
          default: null,
        },
      }),
    );

    const {queryAllByTestId} = render(<BerriesListScreen />);

    const barryItem = await waitFor(() =>
      queryAllByTestId('BerriesItem.Card-pulpa'),
    );

    expect(barryItem).toHaveLength(1);
  });

  it('render a list empty', async () => {
    PokemonService.getAllBerries.mockResolvedValue([]);
    PokemonService.getBerryByURL.mockResolvedValue([]);
    PokemonService.getBerryItemByURL.mockResolvedValue([]);

    const {getByText} = render(<BerriesListScreen />);
    const text = await waitFor(() => getByText("There isn't berries"));
    expect(text).toBeTruthy();
  });
});
