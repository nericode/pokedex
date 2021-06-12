import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigators/Root.navigator';
import {navigationRef} from './navigators/Navigate';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
