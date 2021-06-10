import React from 'react';

import {StyleSheet, TouchableOpacity, Platform} from 'react-native';

export const Card = props => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={!props.activeOpacity ? 0.6 : props.activeOpacity}
      onPress={() => {
        if (props.onPress) {
          props.onPress();
        }
      }}
      style={[styles.card, props.style]}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowColor:
      Platform.OS === 'android'
        ? 'rgba(43, 47, 48, 0.8)'
        : 'rgba(43, 47, 48, 0.1)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
  },
});
