//sum of elements in a given array 
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  // Define the array
  const arr = [12, 3, 4, 15];

  // function to return sum of elements  
  const sum = (arr) => {
    let sum = 0; // initialize sum  
    for (let i = 0; i < arr.length; i++) {
      //sum + = arr[i]; 
      sum = sum + arr[i]
    }
    return sum;
  };

  // Get the largest element
  const totalElement = sum(arr);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Largest in given array is {totalElement}</Text>
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

// // function to return sum of elements  
//     // in an array of size n  
//     let arr = [12, 3, 4, 15];
//     function sum(arr) {  
//         let sum = 0; // initialize sum  
  
//         // Iterate through all elements  
//         // and add them to sum  
//         for (let i = 0; i < arr.length; i++)  
//             //sum + = arr[i];  
//             sum = sum +arr[i];  
  
//         return sum;  
//     }  
//     console.log("Sum of given array is " + sum(arr));