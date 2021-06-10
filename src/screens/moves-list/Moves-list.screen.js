import React, {useEffect, useState} from 'react';
import {View, FlatList, StatusBar, SafeAreaView} from 'react-native';

// Services
import PokemonService from '../../api/PokemonService';

// Styles
import {globalStyles} from '../../styles/styles';

// Components
import Loader from '../../shared/components/Loader';
import MoveItem from './components/Move-item';
import HeaderPokemon from '../../shared/components/HeaderPokemon';

var currentOffset = 0;

function Header() {
  return <HeaderPokemon style={{alignSelf: 'center', marginVertical: 10}} />;
}

function MovesListScreen() {
  const [loading, setLoading] = useState(true);
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    doGetMoves(0);

    return () => {
      currentOffset = 0;
    };
  }, []);

  const doGetMoves = async offset => {
    currentOffset = currentOffset + offset;
    const response = await PokemonService.getAllMoves({
      offset: currentOffset,
    });

    if (response.next) {
      setMoves(oldMoves => oldMoves.concat(response.results));
    } else {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={globalStyles.container}>
        <StatusBar backgroundColor={'#0b1b56'} />
        <FlatList
          data={moves}
          numColumns={2}
          onEndReached={() => doGetMoves(30)}
          onEndReachedThreshold={0.5}
          columnWrapperStyle={{paddingLeft: 15, paddingRight: 15}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          renderItem={MoveItem}
          ListFooterComponent={loading ? Loader : null}
          ListHeaderComponent={Header}
          maxToRenderPerBatch={11 * 2}
          windowSize={61}
        />
      </View>
    </SafeAreaView>
  );
}

export default MovesListScreen;
