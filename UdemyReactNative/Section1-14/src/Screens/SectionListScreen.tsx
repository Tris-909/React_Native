import React from 'react';
import {ScrollView, Button} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

export interface ComponentScreenProps {
  navigation: NavigationProp<any, any>;
}

const SectionListScreen = ({navigation}: ComponentScreenProps) => {
  return (
    <ScrollView>
      <Button
        title="Section 1 --> Set up development environment"
        disabled={true}
      />
      <Button
        title="Section 2 --> Working with Content"
        onPress={() => navigation.navigate('Section2')}
      />
      <Button
        title="Section 3 --> Wokring with List Items"
        onPress={() => navigation.navigate('Section3')}
      />
      <Button
        title="Section 4 --> Navigating between screens"
        disabled={true}
      />
      <Button
        title="Section 5 --> Reusable components"
        onPress={() => navigation.navigate('Section5')}
      />
      <Button
        title="Section 6 --> State Management"
        onPress={() => navigation.navigate('Section6')}
      />
      <Button
        title="Section 7 --> SCreen Layout"
        onPress={() => navigation.navigate('Section7')}
      />
      <Button
        title="Section 7.5 --> Extra Core Components"
        onPress={() => navigation.navigate('Section7_5')}
      />
      <Button
        title="Section 8, 9, 10, 11 --> Restaurant Search App"
        onPress={() => navigation.navigate('Section8')}
      />
      <Button
        title="Section 12 ( Self-Studying ) --> CRUD App"
        onPress={() => navigation.navigate('Section12')}
      />
      <Button
        title="Section 13 --> Using API to CRUD data for Section12"
        disabled={true}
      />
      <Button
        title="Section 14 --> Building An Express App for Section15"
        disabled={true}
      />
    </ScrollView>
  );
};

export default SectionListScreen;
