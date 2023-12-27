/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import {ContextProvider} from './src/Screens/Section12/ContextProvider';
import {TrackAppProvider} from './src/Screens/Section15/Context/Context';
import {IconButtonHeader} from './src/Screens/Section12/IconButtons';
import {
  SectionListScreen,
  ExcerciseSection2,
  ExcerciseSection3,
  ExcerciseSection5,
  Section6,
  ColorApp,
  ColorChangingApp,
  TextInputApp,
  Section7,
  Section7_5,
  SwitchShowCase,
  Section8,
  FoodDetailScreen,
  Section12,
  CreateBlogScreen,
  DetailBlogScreen,
  Auth,
  Section15_HomeScreen,
} from './src/Screens';

const Stack = createNativeStackNavigator();

const App = (): React.JSX.Element => {
  return (
    <ContextProvider>
      <TrackAppProvider>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Section15_HomeScreen">
              <Stack.Screen
                name="Learning React Native"
                component={SectionListScreen}
              />
              <Stack.Screen name="Section2" component={ExcerciseSection2} />
              <Stack.Screen name="Section3" component={ExcerciseSection3} />
              <Stack.Screen name="Section5" component={ExcerciseSection5} />
              <Stack.Screen name="Section6" component={Section6} />
              <Stack.Screen name="Section6-ColorApp" component={ColorApp} />
              <Stack.Screen
                name="Section6-ColorChangingApp"
                component={ColorChangingApp}
              />
              <Stack.Screen
                name="Section6-TextInputApp"
                component={TextInputApp}
              />
              <Stack.Screen name="Section7" component={Section7} />
              <Stack.Screen name="Section7_5" component={Section7_5} />
              <Stack.Screen name="SwitchShowCase" component={SwitchShowCase} />
              <Stack.Screen name="Section8" component={Section8} />
              <Stack.Screen
                name="FoodDetailScreen"
                component={FoodDetailScreen}
              />
              <Stack.Screen
                name="Section12"
                component={Section12}
                options={{
                  headerTitle: 'Blog List',
                  headerRight: () => <IconButtonHeader />,
                }}
              />
              <Stack.Screen
                name="CreateBlogScreen"
                component={CreateBlogScreen}
              />
              <Stack.Screen
                name="DetailBlogScreen"
                component={DetailBlogScreen}
              />
              <Stack.Screen name="Auth" component={Auth} />
              <Stack.Screen
                name="Section15_HomeScreen"
                component={Section15_HomeScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </TrackAppProvider>
    </ContextProvider>
  );
};

export default App;
