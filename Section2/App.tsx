/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, createContext} from 'react';
import {
  ComponentScreen,
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
  Section12Self,
  CreateBlogScreen,
  DetailBlogScreen,
} from './src/Screens';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IconButton, AddIcon, NativeBaseProvider} from 'native-base';
import {BlogType} from './src/Screens/Section12/Self/CreateBlogScreen';

const Stack = createNativeStackNavigator();

const IconButtonHeader = () => {
  const navigation = useNavigation();

  return (
    <IconButton
      icon={<AddIcon />}
      borderRadius="full"
      _icon={{color: 'black'}}
      onPress={() => navigation.navigate('CreateBlogScreen' as never)}
    />
  );
};

export const BlogContext = createContext<BlogType[]>([]);

const App = (): React.JSX.Element => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <BlogContext.Provider value={blogs}>
          <Stack.Navigator initialRouteName="BlogList">
            <Stack.Screen
              name="Learning React Native"
              component={ComponentScreen}
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
              name="Section12Self"
              component={Section12Self}
              options={{
                headerTitle: 'Blog List 1.0',
                headerRight: () => <IconButtonHeader />,
              }}
              initialParams={{
                onCreateBlog: setBlogs,
              }}
            />
            <Stack.Screen
              name="CreateBlogScreen"
              component={CreateBlogScreen}
              initialParams={{
                onCreateBlog: setBlogs,
              }}
            />
            <Stack.Screen
              name="DetailBlogScreen"
              component={DetailBlogScreen}
            />
          </Stack.Navigator>
        </BlogContext.Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
