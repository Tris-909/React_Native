import {useNavigation} from '@react-navigation/native';
import {IconButton, AddIcon, DeleteIcon, SunIcon} from 'native-base';

export const IconButtonHeader = () => {
  const navigation = useNavigation();

  return (
    <IconButton
      icon={<AddIcon />}
      borderRadius="full"
      _icon={{color: 'black'}}
      onPress={() => navigation.navigate('CreateBlogScreen' as never)}
    />
  );
};

export const DeleteIconButton = ({
  removeBlogById,
}: {
  removeBlogById: () => void;
}) => {
  return (
    <IconButton
      icon={<DeleteIcon />}
      borderRadius="full"
      _icon={{color: 'black'}}
      onPress={() => {
        removeBlogById();
      }}
    />
  );
};

export const EditIconButtonHeader = ({onPress}: {onPress: () => void}) => {
  return (
    <IconButton
      icon={<SunIcon />}
      borderRadius="full"
      _icon={{color: 'black'}}
      onPress={() => onPress()}
    />
  );
};
