import React from 'react';
import {View, Image, Text} from 'react-native';
import {getIcon} from '../../utils/ui/Images';

function EmptyScreen({title}) {
  return (
    <View
      style={{
        marginVertical: 25,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={getIcon('pokeballLoading')} />
      <Text
        style={{
          color: 'gray',
          fontSize: 16,
          fontWeight: 'bold',
          marginVertical: 15,
        }}>
        {title}
      </Text>
    </View>
  );
}

export default EmptyScreen;
