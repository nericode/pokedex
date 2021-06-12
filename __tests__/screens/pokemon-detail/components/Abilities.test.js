import React from 'react';

import {render} from '@testing-library/react-native';
import Abilities from '../../../../src/screens/pokemon-detail/components/Abilities';

describe('Abilities component', () => {
  it('should the abilities render correctly', () => {
    const items = [
      {
        ability: {name: 'stench'},
        url: 'https://pokeapi.co/api/v2/ability/1/',
      },
      {
        ability: {name: 'drizzle'},
        url: 'https://pokeapi.co/api/v2/ability/2/',
      },
      {
        ability: {name: 'speed-boost'},
        url: 'https://pokeapi.co/api/v2/ability/3/',
      },
      {
        ability: {name: 'battle-armor'},
        url: 'https://pokeapi.co/api/v2/ability/4/',
      },
    ];

    const {getByText} = render(<Abilities abilities={items} />);

    expect(getByText(/Abilities/)).toBeTruthy();
    expect(getByText('battle-armor')).toBeTruthy();
  });

  it('render a list of abilities', () => {
    const items = [
      {
        ability: {name: 'stench'},
        url: 'https://pokeapi.co/api/v2/ability/1/',
      },
      {
        ability: {name: 'drizzle'},
        url: 'https://pokeapi.co/api/v2/ability/2/',
      },
      {
        ability: {name: 'speed-boost'},
        url: 'https://pokeapi.co/api/v2/ability/3/',
      },
      {
        ability: {name: 'stench'},
        url: 'https://pokeapi.co/api/v2/ability/1/',
      },
      {
        ability: {name: 'drizzle'},
        url: 'https://pokeapi.co/api/v2/ability/2/',
      },
      {
        ability: {name: 'speed-boost'},
        url: 'https://pokeapi.co/api/v2/ability/3/',
      },
      {
        ability: {name: 'stench'},
        url: 'https://pokeapi.co/api/v2/ability/1/',
      },
      {
        ability: {name: 'drizzle'},
        url: 'https://pokeapi.co/api/v2/ability/2/',
      },
      {
        ability: {name: 'speed-boost'},
        url: 'https://pokeapi.co/api/v2/ability/3/',
      },
    ];

    const {getByTestId} = render(<Abilities abilities={items} />);
    expect(getByTestId('Abilities.Card-8')).toBeTruthy();
  });
});
