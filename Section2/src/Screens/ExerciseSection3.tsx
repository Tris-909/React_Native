import React, {useState} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';

const ExcerciseSection3 = () => {
  const [items, _] = useState([
    {
      name: 'friend1',
      age: 20,
    },
    {
      name: 'friend2',
      age: 21,
    },
    {
      name: 'friend3',
      age: 22,
    },
    {
      name: 'friend4',
      age: 23,
    },
    {
      name: 'friend5',
      age: 24,
    },
    {
      name: 'friend6',
      age: 25,
    },
  ]);

  const listItem = ({item}: {item: {name: string; age: number}}) => {
    return (
      <Text>
        {item.name}-{item.age}
      </Text>
    );
  };

  return (
    <View>
      <ScrollView nestedScrollEnabled={true}>
        <FlatList
          data={items}
          renderItem={listItem}
          scrollEnabled={false}
          keyExtractor={item => item.name}
        />
      </ScrollView>
    </View>
  );
};

export default ExcerciseSection3;
