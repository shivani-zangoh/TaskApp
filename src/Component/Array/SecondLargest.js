import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  //Using Two Variables
  const arr = [12, 35, 35, 2, 10, 10, 34, 12];

  function secondLargest(arr) {
    let first = -Infinity, second = -Infinity;
    for (let num of arr) {
      if (num > first) {
        second = first;
        first = num;
      } else if (num > second && num < first) {
        second = num;
      }
    }
    return second;
  }

  console.log('second largest element is', secondLargest(arr))

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Second Largest Element : {secondLargest(arr)}</Text>
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
