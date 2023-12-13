/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ComponentScreen,
  ExcerciseSection2,
  ExcerciseSection3,
} from './src/Screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ComponentScreen} />
        <Stack.Screen name="Section2" component={ExcerciseSection2} />
        <Stack.Screen name="Section3" component={ExcerciseSection3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
