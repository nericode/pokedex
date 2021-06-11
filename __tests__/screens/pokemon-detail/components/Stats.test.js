import React from 'react';

import {render} from '@testing-library/react-native';
import Stats from '../../../../src/screens/pokemon-detail/components/Stats';

describe('Stats component', () => {
  it('should stats render correctly', () => {
    const stats = [
      {
        stat: {name: 'hp'},
        base_stat: 25,
      },
      {
        stat: {name: 'rm'},
        base_stat: 50,
      },
      {
        stat: {name: 'hu'},
        base_stat: 100,
      },
    ];

    const {getByText} = render(<Stats stats={stats} />);
    expect(getByText('• hu')).toBeTruthy();
  });
});
