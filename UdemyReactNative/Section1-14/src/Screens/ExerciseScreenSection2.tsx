import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ExcerciseSection2 = () => {
  return (
    <View>
      <Text style={styles.textStyleOne}>
        Getting Started with React Native!
      </Text>
      <Text style={styles.textStyleTwo}>My name is Tri</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleOne: {
    fontSize: 45,
  },
  textStyleTwo: {
    fontSize: 20,
  },
});

export default ExcerciseSection2;
