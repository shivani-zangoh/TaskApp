import React, { useReducer } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const initialState = { count: 0 }
// The reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: state.count = 0 }
    default:
      return { count: state.count }
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <View>
      <Text style={{ marginTop: 350, margin: 10, justifyContent: 'center', textAlign: 'center' }}>Count: {state.count}</Text>
      <Button onPress={() => dispatch({ type: 'increment' })} title='Increment' color="#841584"/>
      <Button onPress={() => dispatch({ type: 'decrement' })} title='Decrement' />
      <Button title='Reset' color="#841584" onPress={() => dispatch({ type: 'reset' })} />
    </View>
  );
};

export default Counter;