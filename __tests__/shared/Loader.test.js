import React from 'react';

import {render} from '@testing-library/react-native';
import Loader from '../../src/shared/components/Loader';

describe('Loader component', () => {
  it('should the loader render correctly', () => {
    const {getByTestId} = render(<Loader />);
    expect(getByTestId('Loader.Lottie')).toBeTruthy();
  });
});
