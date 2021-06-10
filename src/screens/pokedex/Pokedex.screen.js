import React, {useEffect, useState} from 'react';
import {View, FlatList, StatusBar, SafeAreaView} from 'react-native';

// Services
import PokemonService from '../../api/PokemonService';

// Styles
import {globalStyles} from '../../styles/styles';

// Components
import Loader from '../../shared/components/Loader';
import PokemonItem from '../../shared/components/Pokemon-item';
import PokemonListHeader from './components/Pokemon-list-header';
import EmptyScreen from '../../shared/components/EmptyScreen';

var currentOffset = 0;

function Empty() {
  return <EmptyScreen title="There isn't Pokemons" />;
}

function Item({item}) {
  return <PokemonItem item={item} />;
}

function PokedexScreen() {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    doGetAllPokemons(0, 30);

    return () => {
      currentOffset = 0;
    };
  }, []);

  const doGetAllPokemons = async (offset, limit) => {
    currentOffset = currentOffset + offset;
    const response = await PokemonService.getAllPokemons({
      offset: currentOffset,
      limit,
    });

    if (response.next) {
      const buildPokemons = response.results.map(async pokemon => {
        const currentPokemon = await PokemonService.getPokemon(pokemon.name);

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
      setPokemons(oldPokemons => oldPokemons.concat(allPokes));
    } else {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={globalStyles.container}>
        <StatusBar backgroundColor={'#0b1b56'} />
        <FlatList
          data={pokemons}
          numColumns={2}
          initialNumToRender={30}
          onEndReachedThreshold={0.5}
          columnWrapperStyle={{paddingLeft: 15, paddingRight: 15}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={Item}
          ListHeaderComponent={PokemonListHeader}
          ListFooterComponent={loading ? Loader : null}
          ListEmptyComponent={Empty}
          maxToRenderPerBatch={30}
          windowSize={31}
          legacyImplementation={false}
          onEndReached={() => doGetAllPokemons(30, 30)}
        />
      </View>
    </SafeAreaView>
  );
}

export default PokedexScreen;
