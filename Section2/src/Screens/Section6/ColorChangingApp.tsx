import React, {useState} from 'react';
import {ScrollView, View, Button, Text} from 'react-native';

const ColorModule = ({
  value,
  title,
  buttonTitle1,
  buttonTitle2,
  buttonHandler1,
  buttonHandler2,
}: {
  value: number;
  title: string;
  buttonTitle1: string;
  buttonTitle2: string;
  buttonHandler1: () => void;
  buttonHandler2: () => void;
}) => {
  return (
    <View>
      <Text>
        {title} - {value}{' '}
      </Text>
      <Button title={buttonTitle1} onPress={buttonHandler1} />
      <Button title={buttonTitle2} onPress={buttonHandler2} />
    </View>
  );
};

const ColorChangingApp = () => {
  const [red, setRed] = useState(Math.floor(Math.random() * 51) * 5);
  const [green, setGreen] = useState(Math.floor(Math.random() * 51) * 5);
  const [blue, setBlue] = useState(Math.floor(Math.random() * 51) * 5);

  const adjustColor = (color: string, type: string) => {
    const changedValue = type === 'inc' ? 5 : -5;
    const valid = canIncreaseOrDecrease(color, type);
    if (valid) {
      switch (color) {
        case 'red':
          setRed(red + changedValue);
          break;
        case 'blue':
          setBlue(blue + changedValue);
          break;
        case 'green':
          setGreen(green + changedValue);
          break;
        default:
          break;
      }
    }
  };

  const canIncreaseOrDecrease = (color: string, type: string) => {
    const isIncrease = type === 'inc';
    if (color === 'red') {
      return isIncrease ? red < 255 : red > 0;
    } else if (color === 'green') {
      return isIncrease ? green < 255 : green > 0;
    } else {
      return isIncrease ? blue < 255 : blue > 0;
    }
  };

  return (
    <ScrollView>
      <View>
        <ColorModule
          value={red}
          title="Red"
          buttonTitle1={'More red'}
          buttonTitle2="Less Red"
          buttonHandler1={() => adjustColor('red', 'inc')}
          buttonHandler2={() => adjustColor('red', 'dec')}
        />
        <ColorModule
          value={green}
          title="Green"
          buttonTitle1={'More Green'}
          buttonTitle2="Less Green"
          buttonHandler1={() => adjustColor('green', 'inc')}
          buttonHandler2={() => adjustColor('green', 'dec')}
        />
        <ColorModule
          value={blue}
          title="Blue"
          buttonTitle1={'More Blue'}
          buttonTitle2="Less Blue"
          buttonHandler1={() => adjustColor('blue', 'inc')}
          buttonHandler2={() => adjustColor('blue', 'dec')}
        />
        <View
          style={{
            width: 200,
            height: 200,
            backgroundColor: `rgb(${red},${green},${blue})`,
            flex: 1,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 30,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ColorChangingApp;
