import React, {memo} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Card} from '../../../shared/components/Card';
import HeaderPokemon from '../../../shared/components/HeaderPokemon';
import Colors from '../../../styles/Colors';
import * as RootNavigation from '../../../navigators/Navigate';

function PokemonListHeader() {
  return (
    <>
      <HeaderPokemon style={{alignSelf: 'center', marginVertical: 15}} />
      <TouchableOpacity activeOpacity={0.9} style={styles.container}>
        <Text style={styles.text}>Buscar pokemon</Text>
        <View style={styles.circle}>
          <View style={styles.circleMiddle} />
        </View>
      </TouchableOpacity>
      <Text
        style={{
          color: 'black',
          fontSize: 16,
          fontWeight: 'bold',
          marginLeft: 5,
          marginVertical: 10,
        }}>
        Categories
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        <Card
          onPress={() => RootNavigation.navigate('Moves')}
          style={[styles.card, {backgroundColor: Colors.primary}]}>
          <Text style={styles.titleCard}>Moves</Text>
        </Card>
        <Card
          onPress={() => RootNavigation.navigate('Berries')}
          style={[styles.card, {backgroundColor: Colors.primaryLight}]}>
          <Text style={styles.titleCard}>Berries</Text>
        </Card>
      </View>
      <Text
        style={{
          color: 'black',
          fontSize: 16,
          fontWeight: 'bold',
          marginLeft: 5,
          marginVertical: 10,
        }}>
        All Pokemons
      </Text>
    </>
  );
}

export default memo(PokemonListHeader);

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: '#0b1b56',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
    marginTop: 'auto',
    marginBottom: 'auto',
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  circle: {
    borderWidth: 1,
    borderColor: 'white',
    height: 30,
    width: 30,
    borderRadius: 30,
    backgroundColor: '#3eb3d9',
    marginRight: 10,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  circleMiddle: {
    height: 8,
    width: 8,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  card: {
    height: 55,
    width: '45%',
    marginVertical: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  titleCard: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
