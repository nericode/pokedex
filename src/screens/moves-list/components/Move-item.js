import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import Colors from '../../../styles/Colors';
import {Card} from '../../../shared/components/Card';
import {getIcon} from '../../../utils/ui/Images';
import * as RootNavigation from '../../../navigators/Navigate';

function MoveItem({item}) {
  return (
    <Card
      onPress={() =>
        RootNavigation.navigate('PokemonMoves', {
          url: item.url,
        })
      }
      style={[styles.card, {backgroundColor: Colors.primary}]}>
      <Image style={styles.icon} source={getIcon('pokeballGrayIcon')} />
      <Text numberOfLines={1} style={styles.title}>
        {String(item.name).toUpperCase()}
      </Text>
    </Card>
  );
}

export default MoveItem;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 3,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    marginTop: 'auto',
    marginBottom: 'auto',
    color: 'white',
  },
  icon: {
    height: 45,
    width: 45,
    position: 'absolute',
    right: 0,
    opacity: 0.4,
    top: 10,
  },
});
