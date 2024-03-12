
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListView from './src/screen/ListView';

// const { height } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.center}>
      <ListView />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
});

export default App;