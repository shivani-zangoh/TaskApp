import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  // Define the array
  const arr = [10, 324, 45, 90, 9808];

  // Function to find the largest element in the array
  const largest = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  };

  // Get the largest element
  const largestElement = largest(arr);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Largest in given array is {largestElement}</Text>
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


// let arr = [10, 324, 45, 90, 9808];
// function largest(arr) { 
//      // let i;
//      // Initialize maximum element 
//       let max = arr[0]; 
 
//       // Traverse array elements  
//       // from second and compare 
//       // every element with current max  
//       for (let i = 1; i < arr.length; i++) {
//           if (arr[i] > max) 
//               max = arr[i]; 
//       } 
       
//       return max; 
//   } 
// console.log  ("Largest in given array is " + largest(arr));
