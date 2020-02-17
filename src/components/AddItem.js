import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useInputState} from '../hooks/useInputState';

const AddItem = ({addItem}) => {
  const [item, setItem, resetItem] = useInputState('');
  const submitHandler = () => {
    addItem(item);
    resetItem();
  };
  return (
    <View>
      <TextInput
        placeholder="Add Item"
        style={styles.input}
        value={item}
        onChangeText={text => setItem(text)}
      />
      <TouchableOpacity style={styles.btn} onPress={submitHandler}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} style={styles.btnIcon} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    padding: 15,
    backgroundColor: '#c2bad8',
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
