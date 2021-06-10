import React, {useEffect, useState} from 'react';
import {View, FlatList, StatusBar, SafeAreaView, Text} from 'react-native';

// Services
import PokemonService from '../../api/PokemonService';

// Styles
import {globalStyles} from '../../styles/styles';

// Components
import Loader from '../../shared/components/Loader';
import PokemonItem from '../../shared/components/Pokemon-item';
import HeaderPokemon from '../../shared/components/HeaderPokemon';
import EmptyScreen from '../../shared/components/EmptyScreen';

var currentOffset = 0;

function Header() {
  return <HeaderPokemon style={{alignSelf: 'center', marginVertical: 10}} />;
}

function Empty() {
  return <EmptyScreen title="There isn't Pokemons" />;
}

function Item({item}) {
  return <PokemonItem item={item} />;
}

function PokemonMovesScreen(props) {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    doGetAllPokemons(0);

    return () => {
      currentOffset = 0;
    };
  }, []);

  const doGetAllPokemons = async offset => {
    const {url} = props.route.params;
    currentOffset = currentOffset + offset;
    const response = await PokemonService.getAllPokemonByURL(url);

    const buildPokemons = response.learned_by_pokemon.map(async pokemon => {
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
    setLoading(false);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={globalStyles.container}>
        <StatusBar backgroundColor={'#0b1b56'} />
        {loading ? (
          <View style={{justifyContent: 'center', flex: 1}}>
            <Loader />
            <Text
              style={{
                color: 'gray',
                fontSize: 18,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Loading pokemons...
            </Text>
          </View>
        ) : (
          <FlatList
            data={pokemons}
            numColumns={2}
            columnWrapperStyle={{paddingLeft: 15, paddingRight: 15}}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            renderItem={Item}
            ListEmptyComponent={Loader}
            maxToRenderPerBatch={30}
            ListHeaderComponent={Header}
            ListEmptyComponent={Empty}
            windowSize={61}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

export default PokemonMovesScreen;
