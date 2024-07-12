import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  //Using forEach method
  let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];

  // function falsyValue(arr) {
  //      // newly created array
  //   let newArray = [];
  //   arr.forEach((k) => {
  //     // check for the truthy value
  //     if (k) {
  //       newArray.push(k);
  //     }
  //   });
  //   //return the newArray;
  //   return newArray;
  // }

  // function falsyValue(arr) {
  // return arr.filter((k) => {
  //     if (k) {
  //     return k; 
  //     }
  //   });
  // }

  
  function falsyValue(arr) {
  return arr.filter((val) => val);
  }

  console.log('Remove false value >>', falsyValue(arr))

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Array is ,{falsyValue(arr)} </Text>
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
