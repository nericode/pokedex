import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './Navigate';

// Screens
import PokedexScreen from '../screens/pokedex/Pokedex.screen';
import MovesListScreen from '../screens/moves-list/Moves-list.screen';
import PokemonMovesScreen from '../screens/moves-list/Pokemon-moves.screen';
import {headerDefault} from '../styles/styles';
import BerriesListScreen from '../screens/berries-list/Berries-list.screen';
import PokemonDetail from '../screens/pokemon-detail/Pokemon-detail.screen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Pokedex">
        <Stack.Screen
          name="Pokedex"
          component={PokedexScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Moves"
          component={MovesListScreen}
          options={{
            headerTitle: 'All categories',
            ...headerDefault,
          }}
        />
        <Stack.Screen
          name="PokemonMoves"
          component={PokemonMovesScreen}
          options={{
            headerTitle: 'All Pokemons',
            ...headerDefault,
          }}
        />
        <Stack.Screen
          name="Berries"
          component={BerriesListScreen}
          options={{
            headerTitle: 'All Berries',
            ...headerDefault,
          }}
        />
        <Stack.Screen
          name="PokemonDetail"
          component={PokemonDetail}
          options={{
            headerTitle: 'Pokemon Detail',
            ...headerDefault,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
