import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import PokedexScreen from '../screens/pokedex/Pokedex.screen';
import MovesListScreen from '../screens/moves-list/Moves-list.screen';
import PokemonMovesScreen from '../screens/moves-list/Pokemon-moves.screen';
import {headerDefault} from '../styles/styles';
import BerriesListScreen from '../screens/berries-list/Berries-list.screen';
import PokemonDetail from '../screens/pokemon-detail/Pokemon-detail.screen';

const {Navigator, Screen} = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{headerShown: false}}
      />
      <Screen
        name="Moves"
        component={MovesListScreen}
        options={{
          headerTitle: 'All categories',
          ...headerDefault,
        }}
      />
      <Screen
        name="PokemonMoves"
        component={PokemonMovesScreen}
        options={{
          headerTitle: 'All Pokemons',
          ...headerDefault,
        }}
      />
      <Screen
        name="Berries"
        component={BerriesListScreen}
        options={{
          headerTitle: 'All Berries',
          ...headerDefault,
        }}
      />
      <Screen
        name="PokemonDetail"
        component={PokemonDetail}
        options={{
          headerTitle: 'Pokemon Detail',
          ...headerDefault,
        }}
      />
    </Navigator>
  );
};

export default RootNavigator;
