import * as React from 'react';

import {StyleSheet, Image} from 'react-native';
import Colors from './Colors';

export const headerDefault = {
  headerStyle: {
    backgroundColor: Colors.dark,
    shadowColor: Colors.dark,
  },
  headerBackTitleStyle: {
    color: 'white',
  },
  headerTitleAlign: 'center',
  headerTintColor: 'white',
  headerBackImage: () => (
    <Image
      resizeMode="contain"
      style={{height: 20, width: 45}}
      source={require('../assets/icons/back_icon.png')}
    />
  ),
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
