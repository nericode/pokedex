const images = {
  pokemonLogo: {
    name: 'pokemon_logo',
    icon: require('../../assets/responsive/pokemon_logo.png'),
  },
  pokeballLoading: {
    name: 'pokeball_loading',
    icon: require('../../assets/responsive/pokeball_loading.png'),
  },
};

const getIcon = name => {
  return images[name]['icon'];
};

export {getIcon};
