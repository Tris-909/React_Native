import React, {useState, createContext} from 'react';
import {UserInterface} from '../Types';

export const TrackAppContext = createContext<{
  user: UserInterface;
  token: String;
  saveUserIntoStore: (user: UserInterface) => void;
  signOut: () => void;
  saveToken: (token: String) => void;
}>({
  user: {
    id: '',
    email: '',
  },
  token: '',
  saveUserIntoStore: () => {},
  signOut: () => {},
  saveToken: () => {},
});

export const TrackAppProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<UserInterface>({
    id: '',
    email: '',
  });
  const [token, setToken] = useState<String>('');

  const saveUserIntoStore = (user: UserInterface) => {
    setUser(user);
  };

  const saveToken = (token: String) => {
    setToken(token);
  };

  const signOut = () => {
    setUser({email: '', id: ''});
    setToken('');
  };

  return (
    <TrackAppContext.Provider
      value={{
        user: user,
        token: token,
        saveUserIntoStore: (user: UserInterface) => saveUserIntoStore(user),
        signOut: () => signOut(),
        saveToken: (token: String) => saveToken(token),
      }}>
      {children}
    </TrackAppContext.Provider>
  );
};
