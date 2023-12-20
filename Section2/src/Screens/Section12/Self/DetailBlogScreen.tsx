import React, {useEffect} from 'react';
import {Box, Text, ThreeDotsIcon, IconButton} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  CreateBlogScreen: {blog: any} | undefined;
};

const DetailBlogScreen = (props: any) => {
  const {route} = props;
  const blog = route.params.item;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={<ThreeDotsIcon />}
          borderRadius="full"
          _icon={{color: 'black'}}
          onPress={() =>
            navigation.navigate('CreateBlogScreen', {
              blog: blog,
            })
          }
        />
      ),
    });
  }, [navigation]);

  return (
    <Box
      padding="4"
      marginTop={5}
      borderRadius={5}
      borderColor={'black'}
      borderWidth={'1'}>
      <Text fontSize="4xl" underline>
        {blog.title}
      </Text>
      <Text marginTop="10">{blog.content}</Text>
    </Box>
  );
};

export default DetailBlogScreen;
