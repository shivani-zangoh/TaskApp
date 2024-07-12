//Count of each element in an array

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {
  const array = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
  //using forEach method
  const countElement = (array) => {
    const count = {};
    array.forEach(element => {
      if (count[element]) {
        count[element]++;
      } else {
        count[element] = 1;
      }
    });
    return count;
  }

  const temp = countElement(array);
  const renderCounts = () => {
    return Object.keys(temp).map((key) => ( //{key}: used for attribute name
      <Text key={key} style={styles.text}>{key}: {temp[key]}</Text> //temp[key] : used for each occurance of array : like apple :1
    ));
  };

  console.log(temp);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Original Array:</Text> */}
      {/* <Text></Text> */}
      {renderCounts()}
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
    marginBottom: 5,
  },
});

export default App;
