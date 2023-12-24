import React, {useContext} from 'react';
import {TrackAppContext} from '../Context/Context';
import {Heading, Box, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const Section15_HomeScreen = () => {
  const {user, token, signOut} = useContext(TrackAppContext);
  const navigation = useNavigation();

  return (
    <Box>
      <Heading size="1xl" mb="5">
        Welcome to Home Screen
      </Heading>

      <Button
        onPress={() => {
          signOut();
          navigation.navigate('Auth' as never);
        }}>
        Sign Out
      </Button>
    </Box>
  );
};

export default Section15_HomeScreen;
