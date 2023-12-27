import React, {useState, createContext} from 'react';
import {UserInterface} from '../Types';
import EncryptedStorage from 'react-native-encrypted-storage';

export const TrackAppContext = createContext<{
  user: UserInterface;
  saveUserIntoStore: (user: UserInterface) => void;
  signOut: () => void;
  saveToken: (token: String) => void;
  getToken: () => any;
}>({
  user: {
    id: '',
    email: '',
  },
  saveUserIntoStore: () => {},
  signOut: () => {},
  saveToken: () => {},
  getToken: () => {},
});

export const TrackAppProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<UserInterface>({
    id: '',
    email: '',
  });

  const saveUserIntoStore = (user: UserInterface) => {
    setUser(user);
  };

  const saveToken = async (token: String) => {
    try {
      await EncryptedStorage.setItem(
        'session',
        JSON.stringify({
          token,
        }),
      );

      // Congrats! You've just stored your first value!
    } catch (error) {
      console.log('user session', error);
    }
  };

  const getToken = async () => {
    try {
      const session = await EncryptedStorage.getItem('session');

      if (session !== null) {
        return session;
      }
      return null;
    } catch (error) {
      console.log('getToken error', error);
    }
  };

  const signOut = async () => {
    setUser({email: '', id: ''});
    await EncryptedStorage.removeItem('session');
  };

  return (
    <TrackAppContext.Provider
      value={{
        user: user,
        saveUserIntoStore: (user: UserInterface) => saveUserIntoStore(user),
        signOut: () => signOut(),
        saveToken: (token: String) => saveToken(token),
        getToken: () => getToken(),
      }}>
      {children}
    </TrackAppContext.Provider>
  );
};
