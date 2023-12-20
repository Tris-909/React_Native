import React, {useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {BlogContext} from '../../../../App';
import {FlatList, Text} from 'native-base';
import {IconButton, DeleteIcon} from 'native-base';
import {RouteProp} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

type Nav = {
  navigate: (value: string, argu: any) => void;
};

const Section12Self = ({
  route,
}: {
  route: RouteProp<{params: {onCreateBlog: any}}, 'params'>;
}) => {
  const blogs = useContext(BlogContext);
  const navigation = useNavigation<Nav>();

  const removeBlogById = (id: string) => {
    const newBlogs = blogs.filter(item => item.id !== id);
    route.params.onCreateBlog(newBlogs);
  };

  return (
    <View>
      <FlatList
        data={blogs}
        keyExtractor={item => item.id}
        renderItem={event => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DetailBlogScreen', {
                item: event.item,
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
              <IconButton
                icon={<DeleteIcon />}
                borderRadius="full"
                _icon={{color: 'black'}}
                onPress={() => {
                  removeBlogById(event.item.id);
                }}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Section12Self;
