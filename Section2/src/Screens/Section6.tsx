import React from 'react';
import {View, Button} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

const Section6 = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  return (
    <View>
      <Button
        title="Color App"
        onPress={() => navigation.navigate('Section6-ColorApp')}
      />
    </View>
  );
};

export default Section6;
