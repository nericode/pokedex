import React from 'react';
import {ScrollView, Text, Image} from 'react-native';
import {Card} from '../../../shared/components/Card';
import {getIcon} from '../../../utils/ui/Images';

function Abilities({abilities}) {
  return (
    <>
      <Text
        style={{
          fontSize: 18,
          margin: 10,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Abilities
      </Text>
      <ScrollView
        horizontal
        testID="Abilities.ScrollView"
        contentContainerStyle={{marginLeft: 10, paddingRight: 20}}>
        {abilities.map((abi, index) => {
          return (
            <Card
              testID={'Abilities.Card-' + index}
              disabled={true}
              style={{margin: 5, padding: 20}}
              key={index}>
              <Text>{abi.ability.name}</Text>
              <Image
                style={{
                  position: 'absolute',
                  opacity: 0.1,
                  right: 0,
                }}
                source={getIcon('pokeballGrayIcon')}
              />
            </Card>
          );
        })}
      </ScrollView>
    </>
  );
}

export default Abilities;
