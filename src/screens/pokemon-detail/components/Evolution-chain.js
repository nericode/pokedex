import React, {useEffect, useState} from 'react';
import {ScrollView, Text, Image, View} from 'react-native';
import PokemonService from '../../../api/PokemonService';

function EvolutionChain({chain, pokemon}) {
  var pokesNames = [];
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getEvolvedPokemons();
  }, []);

  const getEvolvedPokemons = async () => {
    // Add first pokemon
    pokesNames.push(chain.species.name);
    // Check if exists more evolutions
    getEvolvedPokemon(chain);
    var pokemonChain = createPokemonChainCorrect(pokesNames);
    // Get all pokemons of API
    const buildPokemons = pokemonChain.map(async pokeName => {
      const currentPokemon = await PokemonService.getPokemon(pokeName);
      return {
        id: currentPokemon['id'],
        name: currentPokemon['name'],
        image:
          currentPokemon['sprites']['other']['official-artwork'][
            'front_default'
          ],
      };
    });

    const allPokes = await Promise.all(buildPokemons);
    setPokemons(allPokes);
  };

  const getEvolvedPokemon = chain => {
    if (chain.evolves_to) {
      if (chain.evolves_to.length > 0) {
        pokesNames.push(chain.evolves_to[0].species.name);
        getEvolvedPokemon(chain.evolves_to[0]);
      }
    }
  };

  const createPokemonChainCorrect = pokesNames => {
    var startCollectingPokemon = false;
    var evolutionChain = [];
    for (let index = 0; index < pokesNames.length; index++) {
      const name = pokesNames[index];
      if (pokemon.name === name) {
        startCollectingPokemon = true;
      }

      if (startCollectingPokemon) {
        evolutionChain.push(name);
      }
    }

    return evolutionChain;
  };

  return (
    <>
      <Text
        style={{
          fontSize: 18,
          margin: 10,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Evolution Chain
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{marginLeft: 10, marginBottom: 10}}>
        {pokemons.map((pokemon, index) => {
          return (
            <View key={index} style={{flexDirection: 'row'}}>
              <Image
                resizeMode="stretch"
                style={{
                  height: 85,
                  width: 85,
                }}
                key={index}
                source={{uri: pokemon.image}}
              />
              {pokemons.length - 1 === index ? null : (
                <Text
                  style={{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    fontWeight: 'bold',
                    color: 'gray',
                    fontSize: 18,
                  }}>
                  ⎯⎯
                </Text>
              )}
            </View>
          );
        })}
      </ScrollView>
    </>
  );
}

export default EvolutionChain;
