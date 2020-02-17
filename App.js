import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import uuid from 'uuid/v4';
import Header from './src/components/Header';
import ListItem from './src/components/ListItem';
import AddItem from './src/components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuid(),
      text: 'Milk',
    },
    {
      id: uuid(),
      text: 'Bread',
    },
    {
      id: uuid(),
      text: 'Eggs',
    },
    {
      id: uuid(),
      text: 'Juice',
    },
  ]);

  const handleDelete = id => {
    const otherItems = items.filter(item => item.id !== id);
    setItems(otherItems);
  };
  const handleAdd = text => {
    setItems([...items, {id: uuid(), text}]);
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={handleAdd} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={handleDelete} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
