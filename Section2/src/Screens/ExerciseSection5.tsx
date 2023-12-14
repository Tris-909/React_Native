import React, {useState} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

const ReUsableComponent = ({
  data,
}: {
  data: {
    imageUri: string;
    score: number;
    title: string;
  };
}) => {
  return (
    <View>
      <Image
        source={{uri: data.imageUri}}
        style={{width: 300, height: 300}}
        resizeMode="contain"
      />
      <Text>{data.title}</Text>
      <Text>Image Score - {data.score}</Text>
    </View>
  );
};

const ExcerciseSection5 = () => {
  const [data] = useState([
    {
      imageUri:
        'https://mymodernmet.com/wp/wp-content/uploads/2020/12/forest-sounds-tree-fm-1.jpg',
      title: 'Forest1',
      score: 9,
    },
    {
      imageUri:
        'https://www.bkforest.com/portals/bankforest/images/home_banner.jpg',
      title: 'Forest2',
      score: 7,
    },
    {
      imageUri: 'https://cdn8.openculture.com/2020/12/23002208/treefm.png',
      title: 'Forest3',
      score: 4,
    },
  ]);

  return (
    <ScrollView>
      {data.map(data => (
        <ReUsableComponent data={data} key={data.title} />
      ))}
    </ScrollView>
  );
};

export default ExcerciseSection5;
