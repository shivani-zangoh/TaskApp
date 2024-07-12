import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {
  const [shuffledArray, setShuffledArray] = useState([]);
  const originalArray = [1, 2, 3, 4, 5, 6, 7];

  // Function to shuffle the array content 
  const shuffleArray = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  // Function to handle button press and show the shuffled result 
  const handleShuffle = () => {
    const arrCopy = [...originalArray];
    const shuffled = shuffleArray(arrCopy);
    setShuffledArray(shuffled);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Original Array: {JSON.stringify(originalArray)}</Text>
      <Button title='Click for some Magic' onPress={handleShuffle} />
      {shuffledArray.length > 0 && (
        <Text style={styles.text}>After Shuffling: {JSON.stringify(shuffledArray)}</Text>
      )}
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
    marginBottom: 20,
  },
});

export default App;


