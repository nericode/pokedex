import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import PokemonService from '../../api/PokemonService';

import EmptyScreen from '../../shared/components/EmptyScreen';
import Abilities from './components/Abilities';
import EvolutionChain from './components/Evolution-chain';
import Header from './components/Header';
import Sprites from './components/Sprites';
import Stats from './components/Stats';

function PokemonDetail(props) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    doGetPokemon();
  }, []);

  const doGetPokemon = async () => {
    const {id} = props.route.params;
    var poke = await PokemonService.getPokemon(id);
    var species = await PokemonService.getPokemonSpeciesByURL(poke.species.url);
    var evolutions = await PokemonService.getEvolutionByURL(
      species.evolution_chain.url,
    );

    var pokemon = {
      info: poke,
      evolution: evolutions,
    };

    setPokemon(pokemon);
  };

  return pokemon.length === 0 ? (
    <EmptyScreen title="Loading pokemon..." />
  ) : (
    <SafeAreaView testID="PokemonDetail.SafeAreaView">
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <Header pokemon={pokemon.info} />
        <Abilities abilities={pokemon.info.abilities} />
        <Stats stats={pokemon.info.stats} />
        <Sprites sprites={pokemon.info.sprites} />
        <EvolutionChain
          pokemon={pokemon.info}
          chain={pokemon.evolution.chain}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default PokemonDetail;
