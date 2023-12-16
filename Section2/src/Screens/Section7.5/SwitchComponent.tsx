import React, {useState} from 'react';
import {
  Switch,
  Text,
  View,
  Button,
  ActivityIndicator,
  Modal,
  StyleSheet,
} from 'react-native';

const SwitchShowCase = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <View style={styles.parent}>
        <Switch
          value={isEnabled}
          onValueChange={value => setIsEnabled(value)}
          trackColor={{false: 'black', true: 'white'}}
          thumbColor={isEnabled ? 'black' : 'white'}
        />
        <Text> The current value is {isEnabled ? 'true' : 'false'} </Text>
      </View>
      {isEnabled && (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="black" />
          <Text> Is Loading, Please Wait... </Text>
        </View>
      )}
      {isEnabled && (
        <View>
          <Button title="Open Modal" onPress={() => setIsOpen(true)} />
          <View style={styles.centerView}>
            <Modal
              visible={isOpen}
              onRequestClose={() => setIsOpen(false)}
              onDismiss={() => console.log('Modal dismissed')}
              transparent={true}
              animationType="fade">
              <View style={styles.centerView}>
                <View style={styles.modalContainer}>
                  <Text>This is a modal</Text>
                  <Button title="Hide Modal" onPress={() => setIsOpen(false)} />
                </View>
              </View>
            </Modal>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: 100,
    height: 100,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginBottom: 20,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 200,
    height: 200,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },
});

export default SwitchShowCase;
