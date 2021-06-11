import React from 'react';
import {ImageBackground, Text, Image} from 'react-native';

function Header({pokemon}) {
  return (
    <ImageBackground
      blurRadius={10}
      style={{
        height: 250,
        width: '100%',
        alignSelf: 'center',
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
      }}
      source={{
        uri: pokemon['sprites']['other']['official-artwork']['front_default'],
      }}>
      <Image
        resizeMode="center"
        style={{
          height: 180,
          width: 180,
          alignSelf: 'center',
        }}
        source={{
          uri: pokemon['sprites']['other']['official-artwork']['front_default'],
        }}
      />
      <Text
        style={{
          fontSize: 26,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        <Text style={{fontSize: 45}}>
          {String(pokemon.name).charAt(0).toLocaleUpperCase()}
        </Text>
        {String(pokemon.name).substr(1, pokemon.name.length)}
      </Text>
    </ImageBackground>
  );
}

export default Header;
