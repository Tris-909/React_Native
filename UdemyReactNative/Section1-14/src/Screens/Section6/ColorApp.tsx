import React, {useState} from 'react';
import {ScrollView, View, Pressable, Text} from 'react-native';

const ColorApp = () => {
  const [colors, setColors] = useState([
    {
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256),
    },
  ]);

  const createNewColorBlock = () => {
    const newColor = {
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256),
    };

    const newColorsArray = [...colors, newColor];
    setColors(newColorsArray);
  };

  return (
    <ScrollView>
      {colors.map((color, i) => (
        <View style={{flexDirection: 'row'}} key={i}>
          {i === colors.length - 1 ? (
            <Pressable
              onPress={() => createNewColorBlock()}
              style={{backgroundColor: 'red', width: 100}}>
              <View
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: `rgb(${color.red},${color.green},${color.blue})`,
                }}
              />
            </Pressable>
          ) : (
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: `rgb(${color.red},${color.green},${color.blue})`,
              }}
            />
          )}

          <Text>
            rgb({color.red}, {color.green}, {color.blue})
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ColorApp;
