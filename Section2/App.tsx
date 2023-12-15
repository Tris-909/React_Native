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
  ExcerciseSection5,
  Section6,
  ColorApp,
  ColorChangingApp,
  TextInputApp,
} from './src/Screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Section6">
        <Stack.Screen name="Home" component={ComponentScreen} />
        <Stack.Screen name="Section2" component={ExcerciseSection2} />
        <Stack.Screen name="Section3" component={ExcerciseSection3} />
        <Stack.Screen name="Section5" component={ExcerciseSection5} />
        <Stack.Screen name="Section6" component={Section6} />
        <Stack.Screen name="Section6-ColorApp" component={ColorApp} />
        <Stack.Screen
          name="Section6-ColorChangingApp"
          component={ColorChangingApp}
        />
        <Stack.Screen name="Section6-TextInputApp" component={TextInputApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
