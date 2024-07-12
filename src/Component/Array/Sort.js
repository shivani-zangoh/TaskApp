import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Sort = () => {
  //  Create an Array
  // const [fruits, setFruits] = useState(["Banana", "Orange", "Apple", "Mango"]);

  //acending order (alphabetcal)
  //  Sort the Array
  // const sortedFruits = [...fruits].sort();
  // // const sortedFruits = [...fruits].sort().reverse(); //decending order (alphabetcal)

 //acending order numeric value
  // const points = [40, 100, 1, 5, 25, 10];
  // const sortedPoints = [...points].sort((a, b) => a - b);
  // console.log(sortedPoints.join(', '))

  // points.sort(function (a, b) {
  //   return (a - b);
  // })
  // console.log(points)

  // decending order numeric value
  // const points = [40, 100, 1, 5, 25, 10];
  // points.sort(function (a, b) {
  //   return b - a
  // })
  // console.log(points);

  // find the lowest value
  // const points = [40, 100, 1, 5, 25, 10];

  // points.sort(function (a, b) {
  //   return a - b
  // })

  // console.log('The lowest value is', points[0]);

  // find the highest value(1)
  // const points = [40, 100, 1, 5, 25, 10];

  // points.sort(function (a, b) {
  //   return b - a
  // })

  // console.log('The highest value is', points[0]);

   // const sortedPoints = [...points].sort((a, b) => b - a);
  // console.log(sortedPoints.join(', '))

  //find the highest value(2)
  const points = [40, 100, 1, 5, 25, 10];

  points.sort(function (a, b) {
    return a-b
  })
  const temp = points[points.length - 1]

  console.log('The highest value is', temp)


  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Sorted Array: {sortedFruits.join(', ')}</Text> */}
      {/* <Text style={styles.text}>Ascending Order: {sortedPoints.join(', ')}</Text> */}
      <Text style={styles.text}>Ascending Order {temp}</Text>
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

export default Sort;