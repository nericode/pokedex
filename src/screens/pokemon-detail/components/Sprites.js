import React from 'react';
import {ScrollView, Text, Image} from 'react-native';
import {isValidURL} from '../../../utils/helpers/Validators';

function Sprites({sprites}) {
  var images = [];
  for (var key in sprites) {
    if (typeof sprites[key] === 'string' && isValidURL(sprites[key]))
      images.push(sprites[key]);
  }

  return (
    <>
      <Text
        style={{
          fontSize: 18,
          margin: 10,
          fontWeight: 'bold',
          color: 'black',
        }}>
        🦠 Sprites
      </Text>
      <ScrollView horizontal contentContainerStyle={{marginLeft: 10}}>
        {images.map((image, index) => {
          return (
            <Image
              resizeMode="stretch"
              style={{
                height: 85,
                width: 85,
              }}
              key={index}
              source={{uri: image}}
              testID={'Sprites.Image-' + index}
            />
          );
        })}
      </ScrollView>
    </>
  );
}

export default Sprites;
