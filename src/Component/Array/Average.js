import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  let arr = [10, 22, 16, 24];

  // let sum = arr.reduce((acc,curr) => acc+curr,0);
  // let average = sum/arr.length

  // console.log('hahahhaha', average)

  const calculateAverage = (arr) => {
    let sum = 0;
    arr.forEach((element) => {
      sum = sum + element;
    });
    return sum / arr.length;
  }


  return (
    <View style={styles.container}>

      <Text style={styles.text}>{calculateAverage(arr)}</Text>
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
