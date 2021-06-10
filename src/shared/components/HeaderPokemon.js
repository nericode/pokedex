import React from 'react';

import {Image} from 'react-native';
import {getIcon} from '../../utils/ui/Images';

function HeaderPokemon(props) {
  return <Image {...props} source={getIcon('pokemonLogo')} />;
}

export default HeaderPokemon;
