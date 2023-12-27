import React from 'react';
import {View, Button} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

const Section7_5 = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  return (
    <View>
      <Button
        title="Switch & ActivityIndicator & Modal Component"
        onPress={() => navigation.navigate('SwitchShowCase')}
      />
    </View>
  );
};

export default Section7_5;
