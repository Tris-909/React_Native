import React from 'react';
import RestaurantHomeScreen from './RestaurantHomeScreen';
import {NavigationProp} from '@react-navigation/native';

const Section8 = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  return <RestaurantHomeScreen navigation={navigation} />;
};

export default Section8;
