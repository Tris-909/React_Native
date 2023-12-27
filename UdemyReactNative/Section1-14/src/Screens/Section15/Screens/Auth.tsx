import React, {useState, useEffect, useContext} from 'react';
import {
  Box,
  Heading,
  FormControl,
  Input,
  Button,
  Link,
  WarningOutlineIcon,
} from 'native-base';
import axios from 'axios';
import {TrackAppContext} from '../Context/Context';
import {endpoint, errorCodes} from '../Utils';
import {useNavigation} from '@react-navigation/native';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {getToken, saveUserIntoStore, saveToken} = useContext(TrackAppContext);
  const navigation = useNavigation();

  useEffect(() => {
    const retrieveToken = async () => {
      const token = await getToken();
      if (token) {
        navigation.navigate('Section15_HomeScreen' as never);
      }
    };

    retrieveToken();
  }, []);

  const authenticateUser = async () => {
    try {
      const user = await axios.post(
        `${endpoint}/${isSignUp ? 'signup' : 'login'}`,
        {
          email: email,
          password: password,
        },
      );

      const {message, code, response} = user.data;

      if (errorCodes.includes(code)) {
        setError(message);
        return '';
      }

      if (isSignUp) {
        saveUserIntoStore(response);
        const {data} = await axios.post(`${endpoint}/login`, {
          email: email,
          password: password,
        });
        const {response: loginRes} = data;
        saveToken(loginRes.token);
      } else {
        saveUserIntoStore(response.user);
        saveToken(response.token);
      }

      resetForm();
      navigation.navigate('Section15_HomeScreen' as never);
    } catch (error: any) {
      console.log(JSON.stringify(error));
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <Box p="5">
      <Heading size="1xl" mb="5">
        Sign {isSignUp ? 'Up' : 'In'} for Tracker
      </Heading>

      <FormControl w="100%" isInvalid={error.length > 0}>
        <FormControl.Label>Email</FormControl.Label>
        <Input
          value={email}
          onChangeText={new_value => {
            setEmail(new_value);
          }}
        />

        <FormControl.Label>Password</FormControl.Label>
        <Input
          value={password}
          type="password"
          onChangeText={new_value => {
            setPassword(new_value);
          }}
        />

        {error && (
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {error}
          </FormControl.ErrorMessage>
        )}

        <Button onPress={() => authenticateUser()} mt="1">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Button>

        <Link
          mt="4"
          onPress={() => {
            resetForm();
            setIsSignUp(!isSignUp);
          }}>
          {isSignUp
            ? 'Already have an account ? Sign in instead.'
            : "Don't have an account ? Go back to sign up."}
        </Link>
      </FormControl>
    </Box>
  );
};

export default Auth;
