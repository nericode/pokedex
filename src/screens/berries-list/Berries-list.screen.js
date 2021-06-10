import React, {useEffect, useState} from 'react';
import {View, FlatList, StatusBar, SafeAreaView} from 'react-native';

// Services
import PokemonService from '../../api/PokemonService';

// Styles
import {globalStyles} from '../../styles/styles';

// Components
import Loader from '../../shared/components/Loader';
import BerriesItem from './components/Berries-item';
import HeaderPokemon from '../../shared/components/HeaderPokemon';
import EmptyScreen from '../../shared/components/EmptyScreen';

var currentOffset = 0;

function Header() {
  return <HeaderPokemon style={{alignSelf: 'center', marginVertical: 10}} />;
}

function Empty() {
  return <EmptyScreen title="There isn't berries" />;
}

function BerriesListScreen() {
  const [loading, setLoading] = useState(true);
  const [berries, setBerries] = useState([]);

  useEffect(() => {
    doGetAllBerries(0);

    return () => {
      currentOffset = 0;
    };
  }, []);

  const doGetAllBerries = async offset => {
    currentOffset = currentOffset + offset;
    const response = await PokemonService.getAllBerries({
      offset: currentOffset,
    });

    if (response.next) {
      const buildBerries = response.results.map(async berry => {
        const currentBerry = await PokemonService.getBerryByURL(berry.url);
        const itemBerry = await PokemonService.getBerryItemByURL(
          currentBerry.item.url,
        );

        return {
          id: itemBerry.id,
          name: itemBerry.name,
          image: itemBerry.sprites.default,
        };
      });

      const allBerries = await Promise.all(buildBerries);
      setBerries(oldBerries => oldBerries.concat(allBerries));
    } else {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={globalStyles.container}>
        <StatusBar backgroundColor={'#0b1b56'} />
        <FlatList
          data={berries}
          numColumns={3}
          onEndReached={() => doGetAllBerries(30)}
          onEndReachedThreshold={0.5}
          columnWrapperStyle={{paddingLeft: 15, paddingRight: 15}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          renderItem={BerriesItem}
          ListFooterComponent={loading ? Loader : null}
          ListHeaderComponent={Header}
          ListEmptyComponent={Empty}
          maxToRenderPerBatch={8 * 3}
          windowSize={10}
        />
      </View>
    </SafeAreaView>
  );
}

export default BerriesListScreen;
