import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {

  let a = [1, 2, 3, 5];
  let b = [1, 2, 3, 5];

  const compareArray=(a, b) =>{  //using join() method
    return a.join() == b.join();
  }
  console.log('working', compareArray(a, b))

  //using forloop

//   function compareArray() {
//     //if length is not equal 
//     if (a.length != b.length) {
//       return "False";
//     }
//     else {
//       // compare each element in array 
//       for (let i = 0; i < a.length; i++) {
//        if(a[i] != b[i]) {
//         return "False";
//        }
//        return "True";
//       }
//     }
//   }
 
 const arr = compareArray()

  return (
    <View style={styles.container}>

      {/* <Text style={styles.text}>{compareArray(a, b)}</Text> */}
         <Text style={styles.text}>{arr}</Text>
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
