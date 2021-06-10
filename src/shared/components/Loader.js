import React, {memo} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

function Loader() {
  return (
    <View style={{alignItems: 'center'}}>
      <LottieView
        source={require('../../assets/lottie/pikachu.json')}
        autoPlay
        loop
        style={{height: 100, width: 50}}
        testID="Loader.Lottie"
      />
    </View>
  );
}

export default memo(Loader);
