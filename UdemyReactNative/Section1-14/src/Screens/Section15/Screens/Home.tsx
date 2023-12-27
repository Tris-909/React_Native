import React, {useState, useEffect, useContext} from 'react';
import {TrackAppContext} from '../Context/Context';
import {Heading, Box, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, PermissionsAndroid} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const Section15_HomeScreen = () => {
  const [currentUserLocation, setCurrentUserLocation] = useState(null);
  const {getToken, signOut} = useContext(TrackAppContext);
  const navigation = useNavigation();

  useEffect(() => {
    const retrieveToken = async () => {
      const token = await getToken();
      if (!token) {
        navigation.navigate('Auth' as never);
      }
    };

    retrieveToken();
  }, []);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location',
          message: 'Do you agree to enable location for this app ?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      console.log('grant', granted);

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <Box p="5">
      <ScrollView>
        <Heading size="1xl" mb="5">
          Welcome to Home Screen
        </Heading>
        <MapView
          style={{
            minHeight: 400,
            minWidth: '100%', // OPTIONAL
          }}
          initialRegion={{
            latitude: 10.803184676002202,
            longitude: 106.68575703632708,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />

        <Button
          onPress={() => {
            signOut();
            navigation.navigate('Auth' as never);
          }}>
          Sign Out
        </Button>
      </ScrollView>
    </Box>
  );
};

export default Section15_HomeScreen;
