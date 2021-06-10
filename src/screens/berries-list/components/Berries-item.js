import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card} from '../../../shared/components/Card';
import FastImage from 'react-native-fast-image';

function BerriesItem({item}) {
  return (
    <Card style={[styles.card]}>
      <FastImage
        style={{height: 45, width: 45}}
        source={{
          uri: item.image,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
        testID="PokemonItem.FastImage"
      />
      <Text numberOfLines={1} style={styles.title}>
        {item.name}
      </Text>
    </Card>
  );
}

export default BerriesItem;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 3,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 5,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    marginTop: 'auto',
    marginBottom: 'auto',
    color: 'gray',
  },
  icon: {
    height: 45,
    width: 45,
    position: 'absolute',
    right: 0,
    opacity: 0.4,
    top: 5,
  },
});
