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
      <Button
        title="Color Changing App"
        onPress={() => navigation.navigate('Section6-ColorChangingApp')}
      />
      <Button
        title="TextInput Control App"
        onPress={() => navigation.navigate('Section6-TextInputApp')}
      />
    </View>
  );
};

export default Section6;
