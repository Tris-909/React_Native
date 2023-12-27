import React, {useEffect, useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {BlogContext} from './ContextProvider';
import {FlatList, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {DeleteIconButton} from './IconButtons';

type Nav = {
  navigate: (value: string, argu: any) => void;
};

const Section12 = () => {
  const {blogs, setBlogs, loadExistingBlogs, deleteOneBlog} =
    useContext(BlogContext);
  const navigation = useNavigation<Nav>();

  useEffect(() => {
    loadExistingBlogs();
  }, []);

  return (
    <View>
      <FlatList
        data={blogs}
        extraData={blogs}
        keyExtractor={item => item.id}
        renderItem={event => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DetailBlogScreen', {
                id: event.item.id,
              })
            }>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                borderWidth: 1,
                borderColor: 'black',
                padding: 15,
                margin: 10,
              }}>
              <Text>{event.item.title}</Text>
              <DeleteIconButton
                removeBlogById={() => deleteOneBlog(event.item.id)}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Section12;
