import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './src/components/Header';

const App = () => (
  <View style={styles.container}>
    <Header />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
