import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const TextInputApp = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        value={text}
        onChangeText={newvalue => {
          if (newvalue.length <= 5) {
            setIsError(true);
          } else {
            setIsError(false);
          }
          setText(newvalue);
        }}
        placeholder="Your name is"
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      />
      {isError && (
        <Text style={{color: 'red'}}>Password must be longer than 5</Text>
      )}
    </View>
  );
};

export default TextInputApp;
