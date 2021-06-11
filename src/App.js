import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigators/Root.navigator';
import {navigationRef} from './navigators/Navigate';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
