import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

function Stats({stats}) {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          margin: 10,
          fontWeight: 'bold',
        }}>
        Stats
      </Text>
      <ScrollView contentContainerStyle={{marginLeft: 10}}>
        {stats.map((stat, index) => {
          return (
            <View key={index}>
              <Text style={{fontSize: 14}}>• {stat.stat.name}</Text>
              <View style={styles.progressBar}>
                <View
                  testID={'Stats.View.BarInner-' + stat.stat.name}
                  style={styles.barInner(stat.base_stat)}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Stats;

const styles = StyleSheet.create({
  progressBar: {
    height: 7,
    width: deviceWidth - 100,
    backgroundColor: '#E3EBF3',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 4,
    marginLeft: 10,
  },
  barInner: percent => ({
    backgroundColor: '#45D17B',
    height: 7,
    width: (percent / 100) * (deviceWidth - 100),
  }),
});
