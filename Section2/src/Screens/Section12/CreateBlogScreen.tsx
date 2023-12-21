import React, {useState, useContext} from 'react';
import {
  FormControl,
  Input,
  TextArea,
  Button,
  Box,
  WarningOutlineIcon,
} from 'native-base';
import {BlogContext} from './ContextProvider';
import {useNavigation, useRoute} from '@react-navigation/native';
import {BlogType} from './types';
import {DismissKeyboard} from './UtilComponent';

const CreateBlogScreen = () => {
  const route = useRoute<{key: string; name: string; params: {id: string}}>();
  const blogId = route.params?.id;
  const isEdit = typeof blogId !== 'undefined';
  const {filterBlogById, addBlog, editOneBlogInList} = useContext(BlogContext);
  const currentEditBlog = filterBlogById!(blogId);

  const [title, setTitle] = useState(isEdit ? currentEditBlog.title : '');
  const [content, setContent] = useState(isEdit ? currentEditBlog.content : '');
  const [firstLoad, setFirstLoad] = useState(true);
  const navigation = useNavigation();
  const showErrorTitleMessage = !firstLoad && title.length === 0;
  const showErrorContentMessage = !firstLoad && content.length === 0;

  const createOrEditNewBlog = () => {
    const blog: BlogType = {
      id: blogId ? blogId : Date.now().toString(),
      title: title,
      content: content,
    };

    if (isEdit) {
      editOneBlogInList(blog, blogId);
    } else {
      addBlog(blog);
    }

    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    navigation.navigate('Section12' as never);
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
