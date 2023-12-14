import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

export interface ComponentScreenProps {
  navigation: NavigationProp<any, any>;
}

const ComponentScreen = ({navigation}: ComponentScreenProps) => {
  return (
    <View>
      <Text style={styles.textStyle}>Section Screens</Text>
      <Button
        title="Section2"
        onPress={() => navigation.navigate('Section2')}
      />
      <Button
        title="Section3"
        onPress={() => navigation.navigate('Section3')}
      />
      <Button
        title="Section5"
        onPress={() => navigation.navigate('Section5')}
      />
      <Button
        title="Section6"
        onPress={() => navigation.navigate('Section6')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'crimson',
    fontSize: 30,
  },
});

export default ComponentScreen;
