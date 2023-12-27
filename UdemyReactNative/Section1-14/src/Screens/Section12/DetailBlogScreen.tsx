import React, {useEffect, useContext} from 'react';
import {Box, Text} from 'native-base';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {EditIconButtonHeader} from './IconButtons';
import {BlogContext} from './ContextProvider';

export type RootStackParamList = {
  CreateBlogScreen: {id: string};
};

const DetailBlogScreen = () => {
  const route = useRoute<{key: string; name: string; params: {id: string}}>();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const blogId = route.params?.id;
  const {filterBlogById} = useContext(BlogContext);
  const blog = filterBlogById!(blogId);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <EditIconButtonHeader
          onPress={() =>
            navigation.navigate('CreateBlogScreen', {
              id: blogId,
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
