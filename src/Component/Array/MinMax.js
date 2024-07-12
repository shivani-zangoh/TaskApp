import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  let arr = [50, 60, 20, 10, 40];
  // let minValue = Math.min(...arr); //Using Math.min() and Math.max() Methods 
  // let maxValue = Math.max(...arr);

  // let minValue = arr.reduce((acc,curr)=>Math.min(acc,curr)); //using Array.reduce() method
  // let maxValue = arr.reduce((acc,curr)=>Math.max(acc,curr));

  let minValue =  Math.min(...arr);//Using spread operator method
  let maxValue = Math.max(...arr);
  
  console.log('hahahhaha', +minValue, maxValue)

  return (
    <View style={styles.container}>

      <Text style={styles.text}>{minValue},'sdfghj'{maxValue}</Text>
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
