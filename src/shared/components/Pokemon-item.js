import React, {memo} from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import Colors from '../../styles/Colors';
import {Card} from './Card';
import {getIcon} from '../../utils/ui/Images';
import * as RootNavigation from '../../navigators/Navigate';

function PokemonItem({item}) {
  return (
    <Card
      testID={'PokemonItem.Card-' + item.name}
      onPress={() =>
        RootNavigation.navigate('PokemonDetail', {
          id: item.id,
        })
      }
      style={[styles.card, {backgroundColor: '#ffffff'}]}>
      {item.image ? (
        <Image
          resizeMode="contain"
          style={{width: 110, flex: 5, alignSelf: 'center'}}
          source={{uri: item.image}}
          testID="PokemonItem.FastImage"
        />
      ) : (
        <Image
          resizeMode="contain"
          style={{width: 45, height: 45, flex: 5, alignSelf: 'center'}}
          source={getIcon('pokeballLoading')}
          testID="PokemonItem.Image"
        />
      )}
      <Text numberOfLines={1} style={styles.title}>
        {String(item.name)}
      </Text>
    </Card>
  );
}

export default memo(PokemonItem);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 3,
    height: 135,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
});
