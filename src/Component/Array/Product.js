import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  //Using forEach method
  const arr = [1, 2, 3, 4, 5];

//   function Product(arr) {
//     let result = 1;
//     arr.forEach(num => {
//       result = result * num;
//     });
//     return result;
//   }

// //Using the in-built methods:
//   function Product(arr) {
//     let result = 1;
//     arr.map(num => {
//       result = result * num;
//     });
//     return result;
//   }

  //Using the Math Object:
  function Product(arr) {
    arr.reduce((acc, curr) => 
   result = acc * curr,1);
    return result;
  }

  console.log('product of array is >>', Product(arr))

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product of Array is  : {Product(arr)}</Text>
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
