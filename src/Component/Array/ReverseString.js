import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {

  // let string = "Hello";
  let string = "Akash";

  //Using split(), reverse() and join() Methods
  // let temp = string.split('').reverse().join('');
  // console.log('Reverse String', temp)

  //Using Spread Operator
  let temp = [...string].reverse().join('');
  console.log('Reverse String', temp)

  return (
    <View style={styles.container}>

      <Text style={styles.text}>String is : {temp} </Text>
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
