import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import PokemonService from '../../api/PokemonService';
import {Card} from '../../shared/components/Card';

import EmptyScreen from '../../shared/components/EmptyScreen';
import Abilities from './components/Abilities';
import EvolutionChain from './components/Evolution-chain';
import Header from './components/Header';
import Sprites from './components/Sprites';
import Stats from './components/Stats';

function PokemonDetail(props) {
  const [pokemon, setPokemon] = useState([]);
  const [errorNetwork, setErrorNetwork] = useState(false);

  useEffect(() => {
    doGetPokemon();
  }, []);

  const doGetPokemon = async () => {
    const {id} = props.route.params;
    try {
      var poke = await PokemonService.getPokemon(id);
      var species = await PokemonService.getPokemonSpeciesByURL(
        poke.species.url,
      );
      var evolutions = await PokemonService.getEvolutionByURL(
        species.evolution_chain.url,
      );

      var pokemon = {
        info: poke,
        evolution: evolutions,
      };

      setPokemon(pokemon);
    } catch (error) {
      setErrorNetwork(true);
    }
  };

  if (errorNetwork) {
    return <EmptyScreen title="Pokemon not found" />;
  }

  return pokemon.length === 0 ? (
    <EmptyScreen title="Loading pokemon..." />
  ) : (
    <SafeAreaView testID="PokemonDetail.SafeAreaView">
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <Header pokemon={pokemon.info} />
        <Card
          disabled={true}
          style={{
            backgroundColor: 'white',
            borderTopEndRadius: 15,
            borderTopStartRadius: 15,
            marginTop: -25,
          }}>
          <Abilities abilities={pokemon.info.abilities} />
          <Stats stats={pokemon.info.stats} />
          <Sprites sprites={pokemon.info.sprites} />
          <EvolutionChain
            pokemon={pokemon.info}
            chain={pokemon.evolution.chain}
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PokemonDetail;
