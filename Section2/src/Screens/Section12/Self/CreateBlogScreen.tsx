import React, {useState, useContext} from 'react';
import {
  FormControl,
  Input,
  TextArea,
  Button,
  Box,
  WarningOutlineIcon,
} from 'native-base';
import {BlogContext} from '../../../../App';
import {RouteProp} from '@react-navigation/native';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export interface BlogType {
  id: string;
  title: string;
  content: string;
}

const DismissKeyboard = ({children}: {children: any}) => (
  <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss()}
    accessible={false}>
    {children}
  </TouchableWithoutFeedback>
);

const CreateBlogScreen = ({
  route,
}: {
  route: RouteProp<{params: {onCreateBlog: any; blog: BlogType}}, 'params'>;
}) => {
  const {onCreateBlog} = route.params;
  const isEdit = route.params?.blog?.title.length > 0;
  const [title, setTitle] = useState(isEdit ? route.params?.blog?.title : '');
  const [content, setContent] = useState(
    isEdit ? route.params?.blog?.content : '',
  );
  const [firstLoad, setFirstLoad] = useState(true);
  const blogs = useContext(BlogContext);
  const navigation = useNavigation();
  const showErrorTitleMessage = !firstLoad && title.length === 0;
  const showErrorContentMessage = !firstLoad && content.length === 0;

  const createOrEditNewBlog = () => {
    const currentEditBlogId = route.params?.blog?.id;
    const blog: BlogType = {
      id: currentEditBlogId ? currentEditBlogId : Date.now().toString(),
      title: title,
      content: content,
    };

    if (isEdit) {
      const editIndex = blogs.findIndex(blog => blog.id === currentEditBlogId);
      blogs[editIndex] = blog;
      onCreateBlog(blogs);
    } else {
      const newBlogsArray: BlogType[] = [...blogs, blog];
      onCreateBlog(newBlogsArray);
    }

    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    navigation.navigate('Section12Self' as never);
  };

  return (
    <Box margin="15">
      <DismissKeyboard>
        <FormControl isInvalid={showErrorTitleMessage} w="100%">
          <FormControl.Label>Title:</FormControl.Label>
          <Input
            value={title}
            onChangeText={new_value => {
              setFirstLoad(false);
              setTitle(new_value);
            }}
          />

          {showErrorTitleMessage && (
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Title is required
            </FormControl.ErrorMessage>
          )}
        </FormControl>
      </DismissKeyboard>

      <DismissKeyboard>
        <FormControl isInvalid={showErrorContentMessage} w="100%">
          <FormControl.Label>Content:</FormControl.Label>
          <TextArea
            autoCompleteType
            value={content}
            onChangeText={new_value => {
              setFirstLoad(false);
              setContent(new_value);
            }}
          />

          {showErrorContentMessage && (
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Content is required
            </FormControl.ErrorMessage>
          )}
        </FormControl>
      </DismissKeyboard>

      <Box alignItems="center" marginTop="15">
        <Button
          onPress={() => createOrEditNewBlog()}
          variant={'outline'}
          _text={{
            color: 'black',
          }}
          disabled={showErrorTitleMessage || showErrorContentMessage}>
          {isEdit ? 'Edit' : 'Save'}
        </Button>
      </Box>
    </Box>
  );
};

export default CreateBlogScreen;
