import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {

  let arr = [[1], [2, 3], [4], ["GFG"]];
  
  //Using Array Flat() Method

  // let merge = arr.flat()
  // console.log('Merge Array', merge)

  // Using Spread Operator

  let flatten = [].concat(...arr);
  console.log('Merge Array', flatten)

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Array is{merge} </Text> */}
      <Text style={styles.text}>Array is{flatten} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default App;
