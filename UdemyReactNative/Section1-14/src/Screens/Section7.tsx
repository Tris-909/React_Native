import React from 'react';
import {View, StyleSheet} from 'react-native';

const Section7 = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.child1}></View>
      <View style={styles.child2}></View>
      <View style={styles.child3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120,
  },
  child1: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
  },
  child2: {
    width: 60,
    height: 60,
    backgroundColor: 'green',
    alignSelf: 'flex-end',
  },
  child3: {
    width: 60,
    height: 60,
    backgroundColor: 'purple',
  },
});

export default Section7;
